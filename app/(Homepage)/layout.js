import "./../../styles/globals.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js"></script>
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
