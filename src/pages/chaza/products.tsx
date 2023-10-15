<<<<<<< HEAD
// pages/chaza/productos.tsx
import React, { useEffect } from "react";
import Header from "@/components/HeaderChaza";
import Products from "@/components/Chaza/Products";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../api/product";
import Loading from "@/components/Loading";

function products() {
  const router = useRouter();
  const [filter, setFilter] = React.useState<string | null>(null);
  useEffect(() => {
    const filterValue = router.query.filterBy;
    if (typeof filterValue === "string") {
      console.log(filterValue);
      setFilter(filterValue);
    }
  }, [router.query.filterBy]);

  // const {
  //status,
  //error,
  //data: products,
  //} = useQuery({
  //queryKey: ["getProducts"],
  //queryFn: () => getProducts(),
  //enabled: !filter,
  //});

  //if (status === "loading") return <Loading></Loading>;
  //if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  //if (products === null) return <h1>Error</h1>;

  return (
    <>
      <Header></Header>
      <Products showOverlay={false} setShowOverlay={function (value: React.SetStateAction<boolean>): void {
              throw new Error("Function not implemented.");
          } }></Products>
    </>
  );
}

export default products;
=======
import React, { useEffect, useState } from "react";
import SidebarChaza from "@/components/Chaza/SidebarChaza";
import ProductsChaza from "@/components/Chaza/ProductsChaza";
import styles from "@/styles/products.chaza.module.css";
import { useQuery } from "react-query";
import { getToken } from "../api/token";
import { getChaza } from "../api/chaza";
import Loading from "@/components/Loading";

function products() {
  const [id, setId] = useState<string>("");

  const token = getToken()?.id;
  useEffect(() => {
    if (token) {
      setId(token);
    }
  }, [token]);

  const {
    status,
    error,
    data: chaza,
    isLoadingError,
  } = useQuery({
    queryKey: ["getChaza"],
    queryFn: () => (id !== "" ? getChaza(id) : null),
    enabled: id !== "",
  });
  if (status === "loading") return <Loading></Loading>;
  if (status === "error") return <div>{JSON.stringify(error)}</div>;
  if (chaza === null) return <div>Error</div>;
  if (chaza?.data === undefined) return <div>Error</div>;

  return (
    <div className={styles.home_chaza}>
      <SidebarChaza></SidebarChaza>
      <ProductsChaza chazaData={chaza.data}></ProductsChaza>
    </div>
  );
}

export default products;
>>>>>>> origin/develop
