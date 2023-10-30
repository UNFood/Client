import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "@/components/Loading";
import ListaChaza from "@/components/Chaza/ListaChaza";
import { getChazas, getChazasByLocation } from "../api/chaza";
import Header from "@/components/Header";
import { Chaza } from '@/types/chaza';
import { Location } from '@/types/chaza';

function Home() {
  const {
    status,
    error,
    data: chazas,
  } = useQuery({
    queryKey: ["getChazas"],
    queryFn: () => getChazas(),
  });

  const [filteredChazas, setFilteredChazas] = useState<Chaza[] | null>(null);

  const [userLocation, setUserLocation] = useState<Location | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        type: 'Point',
        coordinates: [position.coords.longitude, position.coords.latitude],
      });
    });
  }, []);

  const filterByLocation = async () => {
    // Hardcoded latitude and longitude for demonstration
    const latitude = 40.7128;
    const longitude = -74.0060;
    const radius = 5;

    try {
      const filtered = await getChazasByLocation(latitude, longitude, radius);
      if (filtered && filtered.data) {
        setFilteredChazas(filtered.data);
      } else {
        alert("No Chazas found in the selected location.");
      }
    } catch (error) {
      console.error("An error occurred while filtering Chazas by location:", error);
    }
  };

  if (status === "loading") return <Loading></Loading>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;
  if (chazas === null || chazas === undefined) return <h1>Error</h1>;

  return (
    <>
      <Header></Header>
      <button 
        onClick={filterByLocation} 
        style={{ position: 'absolute', top: '100px', right: '50px', zIndex: 1000 }}
      >
        Filter by Location
      </button>
      <ListaChaza chazas={filteredChazas || chazas.data}></ListaChaza>
    </>
  );
  
}

export default Home;
