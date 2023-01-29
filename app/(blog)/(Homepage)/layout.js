import "./../../../styles/globals.css";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import Pagination from "../../../components/Pagination";
import "./../../../styles/globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>CODR</title>
      </head>
      <body>
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
