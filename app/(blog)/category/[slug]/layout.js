import "./../../../../styles/globals.css";
import Header from "../../../../components/Header";
import Sidebar from "../../../../components/Sidebar";
import Footer from "../../../../components/Footer";
import Pagination from "../../../../components/Pagination";
import { client } from "../../../../lib/sanity";
import { groq } from "next-sanity";

export default async function layout({ children, params: { slug } }) {
  const query = groq`*[_type == "post" &&  "${slug}" in categories[]->title]{
    ...,
    author->{name},
    categories[]->{title},
  }`;
  const data = await client.fetch(
    query,
    { slug },
    { next: { revalidate: 60 } }
  );
  const category = slug.split("/").pop();
  return (
    <html lang="en">
      <head>
        <title>{category} - TechBlog</title>
      </head>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
        <Header />
        <div className="grid md:grid-cols-12 gap-5 m-2 p-4 md:px-10">
          <div className="md:col-span-9">{children}</div>
          <aside className="md:col-span-3 md:pt-0 max-sm:mt-4 ">
            <Sidebar />
          </aside>
        </div>
        <div className="flex justify-center my-8">
          <Pagination />
        </div>
        <Footer />
      </body>
    </html>
  );
}
