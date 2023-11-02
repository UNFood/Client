import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import ModalProductRegister from "./ModalProductRegister";
import { Chaza } from "@/types/chaza";
import ProductCard from "./ProductCard";

function ProductsChaza({ chazaData }: { chazaData: Chaza }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderProducts = chazaData.products.map((product, index) => {
    return <ProductCard product={product} key={index}></ProductCard>;
  });

  return (
    <>
      <ModalProductRegister
        show={show}
        handleClose={handleClose}
        chazaId={chazaData.owner}
      ></ModalProductRegister>
      <div className="w-100 h-100 text-center p-5">
        <section className="mb-5 ">
          <Button
            variant="primary"
            onClick={handleShow}
            className="rounded rounded-circle"
          >
            <AiFillPlusCircle size={60}></AiFillPlusCircle>
          </Button>
        </section>
        <section>{renderProducts}</section>
      </div>
    </>
  );
}

export default ProductsChaza;
