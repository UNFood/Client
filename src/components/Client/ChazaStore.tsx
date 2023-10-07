import React from "react";
import SidebarChazaStore from "./SidebarChazaStore";
import ProductsChaza from "./ProductsChaza"; 
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import Stars from "../Stars";

function ChazaStore() {
  return (
    <div className={`${styles.home_chaza}`}>
      <SidebarChazaStore></SidebarChazaStore>
      <ProductsChaza></ProductsChaza>
    </div>
  );
}

export default ChazaStore;
