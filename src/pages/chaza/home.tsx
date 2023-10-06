import React from "react";
import HomeChaza from "@/components/Chaza/HomeChaza";
import SidebarChaza from "@/components/Chaza/SidebarChaza";
import styles from "@/styles/home.chaza.module.css";
import { useQuery } from "react-query";
import Loading from "@/components/Loading";

function home() {
  return (
    <div className={`${styles.home_chaza} h-100`}>
      <SidebarChaza isRegister={true}></SidebarChaza>
      <HomeChaza></HomeChaza>
    </div>
  );
}

export default home;
