import React from "react";
import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";
export const CustomBlock = {
  types: {
    image: ({ value }) => (
      <div className="relative w-full h-96 m-10 mx-auto">
        <Image
          className="object-contain"
          fill
          src={urlFor(value).url()}
          alt="Codr"
        />
      </div>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 p-5 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li style={{ listStyleType: "disclosure-closed" }}>{children}</li>
    ),
  },
  block: {
    h1: ({ children }) => (
      <h1 className="text-4xl py-8 font-bold">{children}</h1>
    ),
    h2: ({ children }) => (
      <h1 className="text-3xl py-8 font-bold">{children}</h1>
    ),
    h3: ({ children }) => (
      <h1 className="text-2xl py-8 font-bold">{children}</h1>
    ),
    h4: ({ children }) => (
      <h1 className="text-xl py-8 font-bold">{children}</h1>
    ),
    h5: ({ children }) => (
      <h1 className="text-lg py-8 font-bold">{children}</h1>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-violet-800 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    em: ({ children }) => <em className="font-semibold">{children}</em>,

    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          className="text-violet-600 dark:text-violet-500 hover:underline"
          href={value?.href}
          target={target}
          rel={target === "_blank" && "noindex nofollow"}
        >
          {children}
        </Link>
      );
    },
  },
};
