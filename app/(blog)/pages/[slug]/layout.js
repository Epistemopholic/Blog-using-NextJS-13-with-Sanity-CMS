import React from "react";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Footer from "../../../../components/Footer";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";
import "./../../../styles/globals.css";

async function layout({ children, params: { slug } }) {
  const query = groq`*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );

  return (
    <html lang="en">
      <head>
        <title>{page.title}</title>
      </head>
      <body>
        <Header />
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

export default layout;
