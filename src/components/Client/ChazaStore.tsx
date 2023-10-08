import React from "react";
import SidebarChazaStore from "./SidebarChazaStore";
import Products from "./Products";
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import Stars from "../Stars";


const categories = [
  "Comida rapida",
  "Bebidad",
  "Licores",
  "Cigarrillos",
  "Comida rapida",
]

function ChazaStore() {
  return (
    <div className={`${styles.home_chaza}`}>
      <SidebarChazaStore categories={categories}></SidebarChazaStore>
      <Products></Products>
    </div>
  );
}

export default ChazaStore;
