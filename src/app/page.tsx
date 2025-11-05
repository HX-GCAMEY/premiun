"use client";

import CardList from "components/cardList/CardList.component";
import {Fade, Slide} from "react-awesome-reveal";
import CarouselSection from "components/carouselSection/CarouselSection.component";

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center lg:mt-10  ">
      <div className="flex flex-col md:flex-row max-auto justify-between  md:min-h-screen md:px-10 lg:py-20 lg:px-32 border-t-3 border-gray-500 ">
        <div className="flex flex-col lg:w-3/5 lg:mr-6 items-center justify-center ">
          <h1 className="text-center mb-10 mt-3 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Representaciones
            <br />y logistica
          </h1>
          <p className="text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Somos lideres en distribucion de productos masivos, desde la ciudad
            de Cordoba a toda la provincia.
            <br />
            Te invitamos a conocernos y ser parte de
            <span className="font-bold text-custom-purple"> PREMIUN</span>
          </p>
        </div>
        <div className="flex justify-center lg:w-3/5">
          <div className="grid grid-cols-1 gap-4 min-h-screen md:grid-cols-2">
            <div className="grid gap-4 md:row-start-2 md:row-span-2">
              <Slide direction="up" cascade={true} triggerOnce>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714053089/premiun/misc/close-up-businessman-writing-summary_oy05tn.jpg"
                  alt=""
                />
              </Slide>
            </div>
            <div className="hidden md:grid gap-4 md:row-end-3 md:row-span-2">
              <Slide direction="down" cascade={true} triggerOnce>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://res.cloudinary.com/dtfz9e5yp/image/upload/v1714052691/premiun/misc/pexels-robertkso-18468424_lmagm2.jpg"
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
