import React from "react";
import Header from "@/components/Header";
import Home from "@/components/Client/Home";
import { useEffect, useState } from "react";

function home() {
  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  );
}

export default home;
