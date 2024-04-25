import CardComponent from "components/card/Card.component";
import Slide from "react-awesome-reveal";

const Data = [
  {
    title: "Representacion",
    text: "Gestion de la venta y cobranza de productos, a traves del canal mayorista, cadenas y supermercados, asi como distribuidores zonales",
    icon: "/currency-exchange.svg",
    width: 80,
    height: 80,
  },
  {
    title: "Logistica",
    text: "Nos aseguramos del flujo de distribucion eficiente de productos incluyendo traslado y almacenamiento en camaras de frio en nuestras instalaciones",
    icon: "/transportation.svg",
    width: 80,
    height: 80,
  },
  {
    title: "Gestion minorista",
    text: "Disponemos de un equipo de preventa orianetado a la gestion eficaz del punto de venta, asegurando la correcta distribucion y rotacion de productos",
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
          title="Representacion"
          text="Gestion de la venta y cobranza de productos, a traves del canal mayorista, cadenas y supermercados, asi como distribuidores zonales"
          icon="/currency-exchange.svg"
          width={80}
          height={80}
        />
        <CardComponent
          title="Logistica"
          text="Nos aseguramos del flujo de distribucion eficiente de productos incluyendo traslado y almacenamiento en camaras de frio en nuestras instalaciones"
          icon="/transportation.svg"
          width={80}
          height={80}
        />
        <CardComponent
          title="Gestion minorista"
          text="Disponemos de un equipo de preventa orianetado a la gestion eficaz del punto de venta, asegurando la correcta distribucion y rotacion de productos"
          icon="/store.svg"
          width={80}
          height={80}
        />
      </Slide>
    </div>
  );
}

export default CardList;
