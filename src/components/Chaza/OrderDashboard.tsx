import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillPlusCircle } from "react-icons/ai";
import ModalProductRegister from "./ModalProductRegister";
import { Chaza } from "@/types/chaza";
import styles from "@/styles/chaza.orderdashboard.module.css"
import Image from "next/image";
import Link from "next/link";
import { Card, Row, Col, Breadcrumb } from "react-bootstrap";


const orderlist = [
{clientname:"Pepito Juarez",
ordernumber:3,
paymentmethod:"Efectivo",
arrivaltime:24,
},
{clientname:"Pepito Juarez",
ordernumber:3,
paymentmethod:"Efectivo",
arrivaltime:24,
},
{clientname:"Pepito Juarez",
ordernumber:3,
paymentmethod:"Efectivo",
arrivaltime:24,
},
{clientname:"Pepito Juarez",
ordernumber:3,
paymentmethod:"Efectivo",
arrivaltime:24,
},
{clientname:"Pepito Juarez",
ordernumber:3,
paymentmethod:"Efectivo",
arrivaltime:24,
}
];
const currentOrder=[
 "Hamburguesa Carne Ranchera           $35.900",
"Papas casco Mediana                   $6000",
"Salsa Ketchup                         $0",
"Salsa Mostaza                         $0",
"Salsa Piña                            $0",
"Helado Oreo                           $8900",]



const renderorderList = orderlist.map((order, index) => {
  return (
    <Col className="height: 100vh"  key={index}>
      <Card
        className={`${styles.order_card} mt-3 w-90 ms-2 me-2`}
      >
        <Card.Body>
          <div className="flex items-center">
            <div className="flex flex-col ml-4">
              <h3 className="text-foreground/90">
                {order.clientname}
              </h3>
              <h3 className="text-foreground/90">
                {order.paymentmethod}
              </h3>
              <h4 className="text-medium text-foreground/80">
                Orden Numero: {order.ordernumber}
              </h4>
              <h5 className="text-medium text-foreground/80 color: #979797">
                El cliente va a llegar en {order.arrivaltime} Minutos
               </h5>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
});

const rendercurrentorder = currentOrder.map((item,index)=> {
  return (
    <div className={`${styles.itemorder}`}>
      <h3 key={index} className={`${styles.itemorder}  text-align: center`}>x1 {item}</h3>
    </div>
  );
});




function OrderDashboard() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div className = {`${styles.main}`}>
    <div className = {`${styles.small}`}>
      {renderorderList}
    </div>
    
    <div className ={`${styles.large}`} >
    <Card
        className={`${styles.currentorder_card}  mt-3  h-90 w-90 ms-2 me-2`}
      >
        <Card.Body>

        <div className= {`${styles.box}`} > 
        <h4> Pepito Juarez</h4>
        <h5> Contactar cliente</h5>
        
         </div>
         <hr className= "background: '#550A2D', color: '#550A2D' borderColor: '#550A2D' height: '4px'"/>

        {rendercurrentorder}
        <hr className= "background: '#550A2D', color: '#550A2D' borderColor: '#550A2D' height: '4px'"/>
      

        </Card.Body>
        <Card.Footer className="mt-4 mb-4 h-90 w-90 ms-4 me-3 ">
        
        <span className= {`${styles.span} text-align: center mt-4 mb-4 h-90 w-90 ms-4 me-3 `}>Total $52800</span>
        
        <div className="mt-4 mb-4 h-90 w-90 ms-4 me-3 ">
        <Button variant="light"  color="light" className= {`${styles.button} text-align: center ms-3 me-3 width:`}>
         Mas
    </Button>
  
    <Button color="primary" className= {`${styles.button2} text-align: center width: 90vw`}>
      Si el pedido esta listo desliza para entregar
    </Button>
    </div>

        </Card.Footer>
      </Card>
      
    </div>
  </div>
  


  );
}

export default OrderDashboard;