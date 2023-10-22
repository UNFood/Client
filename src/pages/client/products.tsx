import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Products from "@/components/Client/Products";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../api/product";
import Loading from "@/components/Loading";

function Productss() {
  const router = useRouter();
  const [priceOrder, setPriceOrder] = useState<number>(-1);
  const [categories, setCategories] = useState<string>("-1");
  const [priceRange, setPriceRange] = useState<string>("-1");

  useEffect(() => {
    setPriceOrder(Number(router.query.priceOrder) || -1);
    setCategories(router.query.categories as string || "-1");
    setPriceRange(router.query.priceRange as string|| "-1");

  }, [router.query.priceOrder, router.query.categories, router.query.priceRange]);

  const {
    status,
    error,
    data: products,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(priceOrder.toString(), categories, priceRange.toString()),
    
  });

  if (status === "loading") return <Loading></Loading>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (products === null || products === undefined) return <h1>Error</h1>;

  console.log(products);
  return (
    <>
      <Header></Header>
      <Products products={products.data}></Products>
    </>
  );
}

export default Productss;
