import { createClient } from "next-sanity";
import { groq } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});

export const getData = async () => {
  const data = await client.fetch(
    groq`*[_type == "post" ]{
    ...,
    author->{name},
    categories[]->{title, _id},
  }| order(_createdAt desc)`,
    { next: { revalidate: 60 } }
  );
  return data;
};
