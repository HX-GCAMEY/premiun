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
            distribución, ventas y logística, diseñamos soluciones a la medida.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          <Slide direction="up" cascade triggerOnce>
            <div className="h-full">
              <ServiceCard
                title="Representación Comercial"
                icon={<BriefcaseIcon className="w-6 h-8 text-blue-600" />}
              >
                Impulsamos el crecimiento de tu marca en el canal mayorista
                (cadenas, supermercados y distribuidoras zonales) mediante una
                gestión integral de ventas y cobranzas. Nos especializamos en
                potenciar la presencia de tus productos, fortaleciendo el
                vínculo con los clientes a través de estrategias adaptadas al
                mercado local: negociación efectiva, desarrollo comercial,
                planificación de marketing y equipos de reposición en punto de
                venta. <br />
                <br />
                Nuestro objetivo: aumentar tu rentabilidad y consolidar tu marca
                en toda la provincia.
              </ServiceCard>
            </div>

            <div className="h-full">
              <ServiceCard
                title="Gestión Minorista"
                icon={<ShoppingCartIcon className="w-6 h-8 text-blue-600" />}
              >
                Contamos con un equipo de preventa enfocado en maximizar el
                rendimiento del punto de venta. Realizamos relevamiento de
                precios, segmentación de comercios, comunicación de promociones
                y colocación de material POP, garantizando una cobertura amplia
                y sostenida. <br />
                <br /> Acompañamos cada acción con informes periódicos que
                aportan visibilidad y datos estratégicos para la toma de
                decisiones. <br />
                <br /> Nuestra misión: fidelizar clientes y hacer crecer tus
                ventas minoristas con información precisa y presencia constante.
              </ServiceCard>
            </div>

            <div className="h-full">
              <ServiceCard
                title="Logística y Distribución"
                icon={<TruckIcon className="w-6 h-8 text-blue-600" />}
              >
                Disponemos de una flota propia de camiones y un sistema
                logístico optimizado para asegurar que tus productos lleguen al
                cliente correcto, en tiempo y forma, con el menor costo
                operativo posible.
                <br />
                <br />
                Ofrecemos almacenamiento en nuestras instalaciones, incluyendo
                cámaras de frío, y utilizamos tecnología de monitoreo para el
                seguimiento de pedidos y trazabilidad de entregas. Así, te
                garantizamos eficiencia, seguridad y control en cada etapa de
                la distribución.
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
