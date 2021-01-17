import React, { Fragment } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Sidebar from "./components/sidebar/Sidebar";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Nav />
      <div className="container" sytle={{ marginTop: "30px" }}>
        <div className="row">
          <Sidebar />
          <Container />
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
