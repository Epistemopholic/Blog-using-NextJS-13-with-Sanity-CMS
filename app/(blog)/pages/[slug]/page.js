import React from "react";
import PageContent from "../../../../components/PageContent";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";
async function page({ params: { slug } }) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });
  return <PageContent page={page} />;
}

export default page;
