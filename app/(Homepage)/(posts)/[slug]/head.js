import React from "react";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";
async function head({ params: { slug } }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
        ...,
        author->{name},
        categories[]->{title},
      }`;
  const post = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );
  return (
    <>
      <title>{post.title}</title>
    </>
  );
}

export default head;
