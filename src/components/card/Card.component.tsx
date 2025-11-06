"use client";
import {Card} from "flowbite-react";
import Image from "next/image";

interface CardComponentProps {
  title: string;
  text: string;
  icon: string;
  width: number;
  height: number;
}

function CardComponent({title, text, icon, width, height}: CardComponentProps) {
  return (
    <Card href="#" className="max-w-sm m-5">
      <Image
        src={icon}
        alt="icon"
        width={width}
        height={height}
        className="self-center"
      />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
        {title}
      </h5>
      <p className="font-normal text-m text-gray-700 dark:text-gray-400 text-justify">
        {text}
      </p>
    </Card>
  );
}

export default CardComponent;
