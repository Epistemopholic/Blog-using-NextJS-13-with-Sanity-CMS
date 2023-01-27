import React from "react";
import Article from "../../../../components/Article";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";

async function page({ params: { slug } }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
      author->{name},
      categories[]->{title},
    }`;
  const post = await client.fetch(query, { slug });
  return <Article post={post} />;
}

export default page;
