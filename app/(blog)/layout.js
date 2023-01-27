import React from "react";
function layout({ children }) {
  return (
    <html>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.2/flowbite.min.js"></script>
        {children}
      </body>
    </html>
  );
}

export default layout;
