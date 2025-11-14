"use client";

import CardList from "components/cardList/CardList.component";
import {Fade, Slide} from "react-awesome-reveal";
import CarouselSection from "components/carouselSection/CarouselSection.component";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center   ">
      <div className="flex flex-col md:flex-row max-auto justify-between  md:min-h-screen md:px-10 lg:py-10 lg:px-32 border-t-3 border-gray-500 ">
        <div className="flex flex-col lg:w-3/5 lg:mr-6 items-center justify-center ">
          <Slide direction="right" cascade={true} triggerOnce>
            <h1 className="text-center mb-10 mt-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Representaciones
              <br />y logística
            </h1>
          </Slide>
          <Slide direction="left" cascade={true} triggerOnce>
            <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Somos líderes en comercialización y distribución de productos
              masivos, desde la ciudad de Córdoba a toda la provincia.
              <br />
              Te invitamos a conocernos y ser parte de
              <span className="font-bold text-custom-purple"> PREMIUN</span>
            </p>
          </Slide>
        </div>
        <div className="flex justify-center lg:w-3/5">
          <div className="grid grid-cols-1 gap-4 min-h-screen md:grid-cols-2">
            <div className="grid gap-4 md:row-start-2 md:row-span-2">
              <Slide direction="up" cascade={true} triggerOnce>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1762821377/premiun/misc/IMG-20251110-WA0031_nockyt.jpg"
                  alt=""
                />
              </Slide>
            </div>
            <div className="hidden md:grid gap-4 md:row-end-3 md:row-span-2">
              <Slide direction="down" cascade={true} triggerOnce>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1762821535/premiun/misc/Screenshot_2025-11-11_003843_tam2ts.png"
                  alt=""
                />
              </Slide>
            </div>
          </div>
        </div>
      </div>
      <CardList />
      <CarouselSection />
    </div>
  );
}
