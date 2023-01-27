import React from "react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { CustomBlock } from "./CustomBlock";
function PageContent({ page }) {
  return (
    <article>
      <section>
        <div>
          <h2 className="font-bold text-4xl">{page.title}</h2>
        </div>
        <div className="py-5">
          <Image
            src={urlFor(page.featured_image).url()}
            className="object-contain rounded-md"
            width={600}
            height={600}
            alt={page.featured_image.attribution}
          />
        </div>
      </section>
      <section>
        <PortableText value={page.content} components={CustomBlock} />
      </section>
    </article>
  );
}

export default PageContent;
