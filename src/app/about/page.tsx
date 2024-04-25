"use client";

import {Slide} from "react-awesome-reveal";

function AboutPage() {
  return (
    <div className="flex flex-col justify-center flex-wrap">
      <div className="flex mx-auto items-center mt-7 justify-around w-5/6 min-h-screen flex-shrink">
        <Slide direction="up" cascade={true} triggerOnce>
          <div className="flex flex-col sm:flex-row lg:space-x-4 ">
            <div>
              <h2 className="text-4xl font-extrabold dark:text-white mt-11 lg:ml-6">
                Nuestra historia
              </h2>
              <div className=" mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 mt-10">
                <p className="text-gray-500 dark:text-gray-400 ">
                  Somos una empresa proveniente de una familia dedicada al
                  comercio supermercadista por mas de tres decadas que ha
                  crecido y evolucionado a lo largo del tiempo. A partir de 2006
                  gracias al espíritu emprendedor de nuestro presidente y
                  fundador Pablo Brasca, asi como a su pasión por ofrecer
                  alimentos de calidad, hemos pasado de ser una pequeña empresa
                  local a convertirnos en un referente en la distribución de
                  alimentos en toda la región.
                </p>
                <p className=" text-gray-500 dark:text-gray-400">
                  A lo largo de los años, hemos mantenido nuestros valores
                  fundamentales de honestidad, integridad y servicio, lo que nos
                  ha permitido ganarnos la confianza y lealtad de nuestros
                  clientes. Hoy en día, seguimos comprometidos con la excelencia
                  en todo lo que hacemos.
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
                  <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                    Esta es nuestra historia, y estamos emocionados de
                    compartirla mientras continuamos creciendo con las
                    generaciones venideras.
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                      Pablo Brasca
                    </cite>
                    <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                      Fundador Premiun Representaciones y Logistica
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
            <img
              className=" max-w-sm object-cover rounded-lg shadow-lg h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
              src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714061596/premiun/misc/WhatsApp_Image_2024-04-25_at_13.11.18_a3ee0270_dvraq3.jpg"
              alt="Pablo Brasca"
            />
          </div>
        </Slide>
      </div>

      <div
        className="flex mx-auto items-center mt-11 justify-around w-5/6 min-h-0 flex-shrink"
        dir="rtl"
      >
        <Slide direction="up" cascade={true} triggerOnce>
          <div className="flex flex-col sm:flex-row lg:space-x-4 ">
            <div className="md:ml-4 items-center" dir="ltr">
              <h2 className="text-4xl font-extrabold dark:text-white mt-11 lg:ml-6 md:mb-8 ">
                Quienes Somos
              </h2>
              <div className=" text-left">
                <p className="mb-5 text-gray-500 dark:text-gray-400">
                  Premiun es un centro integral de distribución ubicado en la
                  capital de Córdoba, con capacidad para cubrir toda la
                  provincia a través de una red de distribuidores.
                </p>
                <div className=" mb-5 grid grid-cols-1 gap-6 sm:grid-cols-2 ">
                  <p className=" text-gray-500 dark:text-gray-400">
                    Nuestra misión es ser líderes en la distribución de
                    productos dentro de la provincia de Córdoba y formar
                    alianzas estratégicas con nuestros clientes, asegurando
                    presencia en un mercado dinámico y competitivo.
                  </p>
                  <p className=" text-gray-500 dark:text-gray-400">
                    Nuestra mayor fortaleza es prestar atención personalizada
                    adaptada a cada cliente según sus necesidades y
                    expectativas, trabajando de manera agil y eficaz.
                  </p>
                </div>
                <p className="mb-3 text-gray-500 dark:text-gray-400">
                  Estamos plenamente comprometidos con la calidad en nuestros
                  procesos y con el servicio brindado, sin dejar de lado la
                  calidez humana hacia nuestro personal y en cada relación
                  comercial con proveedores, distribuidores y clientes,
                  asegurando que cada uno de ellos se sienta parte de nuestra
                  empresa.
                </p>
              </div>
            </div>
            <img
              className=" max-w-sm md:min-w-sm object-cover rounded-lg shadow-lg h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 lg:mr-6"
              src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714053089/premiun/misc/close-up-businessman-writing-summary_oy05tn.jpg"
              alt="Pablo Brasca"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default AboutPage;
