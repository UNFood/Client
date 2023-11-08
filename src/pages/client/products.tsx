import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Products from "@/components/Client/Products";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../api/product";
import Loading from "@/components/Loading";

function Productss() {
  const router = useRouter();
  const [priceOrder, setPriceOrder] = useState<string>("0");
  const [categories, setCategories] = useState<string>("0,");
  const [priceRange, setPriceRange] = useState<string>("0,1000000");

  useEffect(() => {
    setPriceOrder(router.query.priceOrder as string || "0");
    setCategories(router.query.categories as string || "0,");
    setPriceRange(router.query.priceRange as string|| "0,1000000");

  }, [router.query.priceOrder, router.query.categories, router.query.priceRange]);

  const {
    status,
    error,
    data: products,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(categories, priceOrder, priceRange),
    
  });
  if (status === "loading") return <Loading></Loading>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (products === null || products === undefined) return <h1>Error</h1>;


  return (
    <>
      <Header></Header>
      <Products products={products.data}></Products>
    </>
  );
}

export default Productss;
