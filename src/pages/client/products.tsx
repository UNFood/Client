import React, { useEffect } from "react";
import Header from "@/components/Header";
import Products from "@/components/Client/Products";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getProducts } from "../api/product";
import Loading from "@/components/Loading";

function Productss() {
  const router = useRouter();
  const [filter, setFilter] = React.useState<string | null>(null);
  useEffect(() => {
    const filterValue = router.query.filterBy;
    if (typeof filterValue === "string") {
      console.log(filterValue);
      setFilter(filterValue);
    }
  }, [router.query.filterBy]);

  const {
    status,
    error,
    data: products,
  } = useQuery({
    queryKey: ["getProducts"],
    queryFn: () => getProducts(),
    enabled: !filter,
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
