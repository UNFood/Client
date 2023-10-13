import React from "react";
import Header from "@/components/Header";
import ChazaStore from "@/components/Client/ChazaStore";
import Link from "next/link";
import {Product} from "@/types/product"



function chazaStore() {
  return (
    <>
        <h1>chazaList</h1>
        <Link href="/client/chazas/sexchaza de Juan">
            SexChaza
        </Link>

    </>
  );
}

export default chazaStore;