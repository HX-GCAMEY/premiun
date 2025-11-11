"use client";
import CardComponent from "components/card/Card.component";
import Slide from "react-awesome-reveal";

const Data = [
  {
    title: "Representación",
    text: "Gestión de la venta y cobranza de productos, a través del canal mayorista, cadenas y supermercados, así como distribuidores zonales",
    icon: "/currency-exchange.svg",
    width: 80,
    height: 80,
  },
  {
    title: "Logística",
    text: "Nos aseguramos del flujo de distribución eficiente de productos incluyendo traslado y almacenamiento en cámaras de frío en nuestras instalaciones",
    icon: "/transportation.svg",
    width: 80,
    height: 80,
  },
  {
    title: "Gestión minorista",
    text: "Disponemos de un equipo de preventa orientado a la gestión eficaz del punto de venta, asegurando la correcta distribución y rotación de productos",
    icon: "/store.svg",
    width: 60,
    height: 60,
  },
];

function CardList() {
  return (
    <div className="w-screen left-0 flex flex-wrap justify-between mt-10 py-7 px-10 bg-custom-purple lg:mt-24">
      <Slide cascade={true}>
        <CardComponent
          title="Representación comercial"
          text="Gestión de la venta y cobranza de productos, a través del canal mayorista, cadenas y supermercados, así como distribuidores zonales"
          icon="/currency-exchange.svg"
          width={80}
          height={80}
        />
        <CardComponent
          title="Logística"
          text="Nos aseguramos del flujo de distribución eficiente de productos incluyendo traslado y almacenamiento en cámaras de frío en nuestras instalaciones"
          icon="/transportation.svg"
          width={80}
          height={80}
        />
        <CardComponent
          title="Gestión minorista"
          text="Disponemos de un equipo de preventa orientado a la gestión eficaz del punto de venta, asegurando la correcta distribución y rotación de productos"
          icon="/store.svg"
          width={80}
          height={80}
        />
      </Slide>
    </div>
  );
}

export default CardList;
