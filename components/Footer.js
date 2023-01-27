import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <footer className="p-4 bg-gray-200 shadow md:px-6 md:py-8 dark:bg-gray-900  w-full">
      <span className="block text-sm font-bold text-gray-800 text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline hover:decoration-violet-800">
          Codr.Live
        </Link>{" "}
        - All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
