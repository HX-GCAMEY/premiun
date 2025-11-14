"use client";

import {Slide} from "react-awesome-reveal";

function AboutPage() {
  return (
    <div className="flex flex-col flex-wrap">
      <div className="container flex mx-auto items-start mt-10 justify-around min-h-screen border-t-3 border-gray-500 ">
        <Slide
          direction="up"
          cascade={true}
          triggerOnce
          className="flex-shrink"
        >
          <div className="flex flex-col sm:flex-row lg:space-x-20">
            <div className="smdm: container">
              <h2 className="text-4xl font-extrabold dark:text-white mt-11 lg:ml-6">
                Nuestra historia
              </h2>
              <div className=" mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10">
                <p className="text-gray-500 dark:text-gray-400 ">
                  Somos una empresa con raíces familiares, dedicada desde hace
                  generaciones al comercio de consumo masivo, que ha
                  evolucionado a lo largo del tiempo.
                  <br />
                  <br /> Fundada en 2006 gracias al espíritu emprendedor de
                  nuestro presidente Pablo Brasca, hemos pasado de ser una
                  pequeña empresa local a convertirnos en un referente en la
                  distribución de alimentos en toda la región.
                </p>
                <p className="mb-5 text-gray-500 dark:text-gray-400">
                  A lo largo de los años, hemos mantenido nuestros valores
                  fundamentales de honestidad, integridad y servicio, lo que nos
                  ha permitido ganarnos la confianza y lealtad de nuestros
                  clientes. Hoy, reafirmamos nuestro compromiso con la
                  excelencia en cada acción que emprendemos.
                </p>
              </div>
              <figure className="max-w-screen-md mx-auto text-center">
                <svg
                  className="w-8 h-8 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                <blockquote>
                  <p className="mb-5 text-xl italic font-medium text-gray-900 dark:text-white">
                    Esta es nuestra historia y estamos emocionados de
                    compartirla mientras continuamos avanzando con la misma
                    pasión que nos impulsó desde el comienzo
                  </p>
                </blockquote>
                <figcaption className="flex items-start justify-center mt-6 md:space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                      Pablo Brasca
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      Fundador Premium Representaciones y Logística
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
            <img
              className="sm:max-w-screen-sm md:max-w-sm object-cover rounded-lg sm:mt-3 shadow-lg h-auto"
              src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1762821383/premiun/misc/WhatsApp_Image_2025-11-10_at_17.32.05_a2774e75_zwxfa1.jpg"
              alt="Pablo Brasca"
            />
          </div>
        </Slide>
      </div>

      <div
        className="container flex mx-auto items-start justify-around md:w-5/6   flex-wrap "
        dir="rtl"
      >
        <Slide
          direction="left"
          cascade={true}
          triggerOnce
          className="flex-shrink"
        >
          <div className="sm:container flex flex-col md:flex-row lg:space-x-4 ">
            <div className=" md:ml-4 items-center px-3 md:px-0 " dir="ltr">
              <h2 className="text-4xl font-extrabold dark:text-white mt-11 mb-3 lg:ml-6 md:mb-8 ">
                Quienes somos
              </h2>
              <div className=" text-left">
                <div className=" mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 ">
                  <p className=" text-gray-500 dark:text-gray-400">
                    En Premiun nos apasiona conectar productos de calidad con
                    las personas. Somos un centro integral de distribución con
                    base en la ciudad de Córdoba, desde donde llegamos a toda la
                    provincia a través de una amplia red de distribuidores y
                    aliados comerciales.
                  </p>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Nuestra misión es liderar el abastecimiento de alimentos,
                    construyendo relaciones duraderas y asegurando una presencia
                    constante en un mercado dinámico y competitivo.
                  </p>
                </div>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Nuestra fortaleza radica en las personas: un equipo capacitado
                  para ofrecer atención personalizada, adaptada a las
                  necesidades y expectativas de cada cliente, basándonos siempre
                  en la confianza, el compromiso y la eficacia del servicio que
                  brindamos.
                  <br />
                  <br />
                  Estamos plenamente comprometidos con la calidad en cada uno de
                  nuestros procesos, sin dejar de lado la calidez humana que nos
                  caracteriza. Valoramos profundamente nuestras relaciones con
                  el personal, los proveedores y los clientes, asegurando que
                  cada uno se sienta parte de nuestra empresa.
                </p>
              </div>
            </div>
            <img
              className="sm:max-w-screen-sm md:max-w-sm md:min-w-sm object-cover rounded-lg shadow-lg h-auto lg:mr-6"
              src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714053089/premiun/misc/close-up-businessman-writing-summary_oy05tn.jpg"
              alt="Pablo Brasca"
            />
          </div>
        </Slide>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20 mt-10">
        <div className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            ¿Querés trabajar con nosotros?
          </h3>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Contactanos para diseñar un plan comercial a la medida de tu marca.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-lg shadow"
            >
              Contactanos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
