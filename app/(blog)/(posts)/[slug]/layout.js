import React from "react";
import "./../../../../styles/globals.css";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Footer from "../../../../components/Footer";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";

export default async function Layout({ children, params: { slug } }) {
  const query = groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
      author->{name},
      categories[]->{title},
    }`;
  const post = await client.fetch(query, { slug });
  return (
    <html lang="en">
      <head>
        <title>{post.title}</title>
      </head>
      <body>
        <Header />
        <div className="mt-4 mx-2 md:px-10">
          <Breadcrumbs post={post} />
        </div>
        <div className="grid md:grid-cols-12 gap-5 m-2 p-4 md:px-10">
          <div className="md:col-span-9">{children}</div>
          <aside className="md:col-span-3 md:pt-0 max-sm:mt-4 ">
            <Sidebar />
          </aside>
        </div>
        <Footer />
      </body>
    </html>
  );
}
