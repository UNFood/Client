import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import ModalProductRegister from "./ModalProductRegister";
import { Chaza } from "@/types/chaza";

function ProductsChaza({ chazaData }: { chazaData: Chaza }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalProductRegister
        show={show}
        handleClose={handleClose}
        chazaId={chazaData.owner}
      ></ModalProductRegister>
      <div className="w-100 h-100">
        <section>
          <Button
            variant="primary"
            onClick={handleShow}
            className="rounded rounded-circle"
          >
            <AiFillPlusCircle size={60}></AiFillPlusCircle>
          </Button>
        </section>
        ProductsChaza
      </div>
    </>
  );
}

export default ProductsChaza;
