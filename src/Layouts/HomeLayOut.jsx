// import React from 'react';
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/latestnews";
import Navbar from "../components/Navbar";

const HomeLayOut = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-2">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-2">
            <Navbar></Navbar>
        </nav>
      </header>
      <main>
        <section className="left_nav"></section>
        <section className="main">
          <Outlet></Outlet>
        </section>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayOut;
