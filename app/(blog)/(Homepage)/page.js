import React from "react";
import Content from "../../../components/Content";
import { getData } from "../../../lib/sanity";

async function page() {
  const data = await getData();
  return <Content data={data} />;
}

export default page;
