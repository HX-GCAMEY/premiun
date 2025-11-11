"use client";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:text-center flex-col md:flex-row sm:items-center sm:justify-center md:justify-between">
          <Image
            src={logo}
            width={90}
            height={90}
            alt="logo"
            className="block mx-auto md:mx-0 md:inline"
          />

          <ul className="flex flex-wrap items-center justify-between mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 lg:w-1/4">
            <li>
              <a
                href="#"
                className="hover:text-cyan-700 me-4 md:me-6"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/premiuncba/"
                className="hover:text-fuchsia-700 me-4 md:me-6"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="http://wa.me/+5493516781018"
                className="hover:text-lime-600 me-4 md:me-6"
                rel="noreferrer noopener"
                target="_blank"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </li>
          </ul>
          <a
            href="#"
            className="hover:underline"
            rel="noreferrer noopener"
            target="_blank"
          >
            Acerca de esta pagina
          </a>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a className="hover:underline">
            Premiun Representaciones y Logistica™
          </a>
          . Derechos Reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
