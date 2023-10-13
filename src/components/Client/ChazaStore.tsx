import React, { useState } from "react";
import SidebarChazaStore from "./SidebarChazaStore";
import Products from "./Products";
import Image from "next/image";
import styles from "@/styles/home.chaza.module.css";
import { FiEdit } from "react-icons/fi";
import { Button, Form } from "react-bootstrap";
import { BiMap, BiSolidCategory } from "react-icons/bi";
import { BsFillChatDotsFill } from "react-icons/bs";
import Stars from "../Stars";
import {Chaza} from "@/types/chaza";




interface chazaProps {
  chaza: Chaza;
}

function ChazaStore({ chaza }: chazaProps) {
  // State to manage overlay visibility
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className={`${styles.home_chaza}`}>
      <SidebarChazaStore chaza={chaza}></SidebarChazaStore>
      {/* Pass state to Products component */}
      <Products showOverlay={showOverlay} setShowOverlay={setShowOverlay}></Products>
    </div>
  );
}

export default ChazaStore;