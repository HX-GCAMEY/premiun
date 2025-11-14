"use client";

import {Fade, Slide} from "react-awesome-reveal";
import {
  BriefcaseIcon,
  ShoppingCartIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";
import ServiceCard from "components/serviceCard/ServiceCard";

function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Servicios
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Acompañamos a las marcas en todo el proceso comercial: de la
            estrategia a la ejecución en punto de venta. Con experiencia en
            distribución, ventas y logística,
            <p className="underline font-bold">
              diseñamos soluciones a la medida
            </p>
            .
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <Slide direction="up" cascade triggerOnce>
            <div className="h-full">
              <ServiceCard
                title="REPRESENTACIÓN COMERCIAL"
                icon={<BriefcaseIcon className="w-6 h-8 text-blue-600" />}
              >
                <p className="text-base">
                  Impulsamos el <strong> crecimiento de tu marca </strong>
                  en el canal <strong> mayorista </strong> (cadenas,
                  supermercados y distribuidoras zonales) mediante una gestión
                  integral de
                  <strong> ventas </strong> y <strong> cobranzas</strong>.<br />
                  <br /> Nos especializamos en potenciar la presencia de tus
                  productos, fortaleciendo el vínculo con los clientes a través
                  de
                  <strong> estrategias adaptadas </strong>
                  al mercado local: negociación efectiva, desarrollo comercial,
                  planificación de marketing y equipos de reposición en punto de
                  venta. <br />
                  <br />
                  Nuestro objetivo: aumentar tu <strong> rentabilidad </strong>y
                  <strong> consolidar tu marca </strong>
                  en toda la provincia.
                </p>
              </ServiceCard>
            </div>

            <div className="h-full">
              <ServiceCard
                title="LOGÍSTICA Y DISTRIBUCIÓN"
                icon={<TruckIcon className="w-6 h-8 text-blue-600" />}
              >
                <p className="text-base">
                  Disponemos de una <strong> flota propia de camiones </strong>y
                  un sistema logístico optimizado para asegurar que tus
                  productos lleguen al cliente correcto, en tiempo y forma, con
                  el
                  <strong> menor costo operativo posible</strong>.
                  <br />
                  <br />
                  Ofrecemos almacenamiento en nuestras instalaciones, incluyendo
                  cámaras de frío, y utilizamos
                  <strong> tecnología de monitoreo </strong> para el seguimiento
                  de pedidos y trazabilidad de entregas. Así, te garantizamos
                  <strong> eficiencia</strong>, <strong> seguridad </strong> y
                  <strong> control </strong> en cada etapa de la distribución.
                </p>
              </ServiceCard>
            </div>
            <div className="h-full">
              <ServiceCard
                title="GESTIÓN MINORISTA"
                icon={<ShoppingCartIcon className="w-6 h-8 text-blue-600" />}
              >
                <p className="text-base">
                  Contamos con un <strong> equipo de preventa </strong> enfocado
                  en
                  <strong> maximizar el rendimiento </strong>del punto de venta.
                  Realizamos relevamiento de precios, segmentación de comercios,
                  comunicación de promociones y colocación de material POP,
                  garantizando una
                  <strong> cobertura amplia </strong>y
                  <strong> sostenida</strong>. <br />
                  <br /> Acompañamos cada acción con
                  <strong> informes periódicos </strong> que aportan visibilidad
                  y datos estratégicos para
                  <strong> la toma de decisiones</strong>. <br />
                  <br /> Nuestra misión: fidelizar clientes y hacer
                  <strong> crecer tus ventas </strong> minoristas con
                  información precisa y presencia constante.
                </p>
              </ServiceCard>
            </div>
          </Slide>
        </div>

        <Fade direction="up" cascade triggerOnce delay={1700} duration={700}>
          <div className="mt-10 max-w-2xl mx-auto text-center">
            <p className="text-gray-700 dark:text-gray-300">
              ¿Querés que hablemos de tu proyecto? Podemos diseñar un plan a
              medida para ampliar tu presencia y mejorar tus ventas.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow"
              >
                Contactanos
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default ServicesPage;
