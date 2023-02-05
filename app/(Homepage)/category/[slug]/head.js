import React from "react";
function head({ params: { slug } }) {
  return (
    <>
      <title>{slug}</title>
    </>
  );
}

export default head;
