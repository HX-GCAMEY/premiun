"use client";
import CardComponent from "components/card/Card.component";
import Link from "next/link";
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
    <Link href="/services">
      <div className="w-screen left-0 flex flex-wrap justify-between mt-10 py-7 px-10 bg-custom-purple lg:mt-24">
        <Slide cascade={true}>
          <CardComponent
            title="REPRESENTACIÓN COMERCIAL"
            icon="/currency-exchange.svg"
            width={220}
            height={120}
          />
          <CardComponent
            title="LOGÍSTICA"
            icon="/transportation.svg"
            width={200}
            height={100}
          />
          <CardComponent
            title="GESTIÓN MINORISTA"
            icon="/store.svg"
            width={170}
            height={70}
          />
        </Slide>
      </div>
    </Link>
  );
}

export default CardList;
