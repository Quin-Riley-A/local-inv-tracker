import React from "react";
import Header from "./Header";
import InvDisplayControl from "./InvDisplayControl";
import Footer from "./Footer";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <InvDisplayControl />
      <Footer />
    </React.Fragment>
  );
}