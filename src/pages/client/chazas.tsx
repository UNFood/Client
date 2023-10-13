import React, {useEffect, useState} from "react";
import {useQuery} from "react-query";
import Loading from "@/components/Loading";
import ListaChaza from "@/components/Chaza/ListaChaza";
import { getChazas } from "../api/chaza";
function home() {

  const {
    status,
    error,
    data: chazas,
  } = useQuery({
    queryKey: ["getChazas"],
    queryFn: () => getChazas(),
  
  });

  

  if (status === "loading") return <Loading></Loading>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (chazas === null) return <h1>Error</h1>;
  if (chazas === undefined) return <h1>Error</h1>;
  return <ListaChaza chazas={chazas.data}></ListaChaza>;
}

export default home;
