import React from "react";
import ReactDOM from "react-dom/client";

// // React.createElement => Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

import { createRoot } from "react-dom/client";
import Header from "../Namaste-React/Episode - 05 - Let's get Hooked/Coding/Components/Header";
import Body from "../Namaste-React/Episode - 05 - Let's get Hooked/Coding/Components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
