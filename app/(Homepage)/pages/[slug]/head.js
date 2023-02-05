import React from "react";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";
async function head({ params: { slug } }) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );

  return (
    <>
      <title>{page.title}</title>
    </>
  );
}

export default head;
