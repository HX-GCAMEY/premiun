"use client";

import {useEffect} from "react";
import {useState} from "react";
import {brands} from "data/data.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {Fade} from "react-awesome-reveal";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BrandPage({params}: {params: any}) {
  const [brand, setBrand] = useState<any>(null);

  useEffect(() => {
    const brand = brands.find((brand) => brand.tag === params.slug);
    setBrand(brand);
  }, [params.name]);

  if (!brand) {
    return (
      <div className="flex flex-col justify-center mt-3 lg:mt-7">
        <div className="self-center" role="status">
          <svg
            aria-hidden="true"
            className="w-11 h-11 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

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
        <img className="max-h-400 w-full rounded-t-lg" src={logo} alt={name} />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
          <a className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            {location}
          </a>
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
              <img
                className=" w-auto md:w-80 md:h-80 object-cover rounded-lg"
                src={image}
                alt={index.toString()}
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

export default BrandPage;
