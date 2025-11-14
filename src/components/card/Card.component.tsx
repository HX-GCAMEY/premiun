"use client";
import {Card} from "flowbite-react";
import Image from "next/image";

interface CardComponentProps {
  title: string;
  text?: string;
  icon: string;
  width: number;
  height: number;
}

function CardComponent({title, text, icon, width, height}: CardComponentProps) {
  return (
    <Card href="#" className="w-64 sm:w-72 md:w-80 m-5">
      <div className="h-80 flex flex-col items-center justify-between p-4">
        <div className="flex-shrink-0">
          <Image
            src={icon}
            alt="icon"
            width={width}
            height={height}
            className="mx-auto"
          />
        </div>

        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {title}
        </h5>

        {text ? (
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400 text-center overflow-auto max-h-24">
            {text}
          </p>
        ) : (
          <div className="h-6" />
        )}
      </div>
    </Card>
  );
}

export default CardComponent;
