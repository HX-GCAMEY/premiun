"use client";

import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BrandClient({brand}: {brand: any}) {
  const {name, logo, catalogUrl, gallery, description, location} = brand;

  const handleDownload = () => {
    if (!catalogUrl) {
      toast.error("⚠️ Ups el catalogo no esta disponible!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    fetch(catalogUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "catalogo.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);

        window.URL.revokeObjectURL(url);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="self-center max-w-lg mb-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3 lg:m-7">
        {logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            className="max-h-400 w-full rounded-t-lg"
            src={logo}
            alt={name}
          />
        ) : (
          <div className="h-40 w-full bg-gray-100 flex items-center justify-center rounded-t-lg">
            No logo
          </div>
        )}
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex items-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            {location}
          </div>

          <button
            onClick={handleDownload}
            className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Descarga el catalogo
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="container grid grid-cols-2 md:grid-cols-3 gap-4 md:px-1 lg:px-1.5 lg:w-11/12">
        {gallery?.map((image: string, index: number) => (
          <Fade cascade={true} key={index}>
            <div key={index}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className=" w-auto md:w-80 md:h-80 object-cover rounded-lg"
                src={image}
                alt={String(index)}
              />
            </div>
          </Fade>
        ))}
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
