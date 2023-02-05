import React from "react";
import CategoryContent from "../../../../components/CategoryContent";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";
async function page({ params: { slug } }) {
  const query = groq`*[_type == "post" &&  "${slug}" in categories[]->title]{
    ...,
    author->{name},
    categories[]->{title},
  }| order(_createdAt desc)`;
  const data = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );
  return <CategoryContent data={data} />;
}

export default page;
