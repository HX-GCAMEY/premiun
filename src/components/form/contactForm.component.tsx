"use client";

import {Formik, Field, Form, ErrorMessage} from "formik";
import {contactSchema} from "lib/schemas";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment} from "@fortawesome/free-solid-svg-icons";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

function ContactForm() {
  const notifySuccess = () =>
    toast.success("✅ Correo enviado!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyFailure = () =>
    toast.error("⚠️ Ups algo salio mal, intentalo de nuevo!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const sendEmail = (values: any) => {
    return emailjs
      .send(
        process.env.EMAIL_SERVICE as string,
        process.env.EMAIL_TEMPLATE as string,
        values,
        process.env.EMAIL_KEY as string
      )
      .then(
        (response) => {
          notifySuccess();
          setTimeout(() => {
            window.location.reload();
          }, 5000);
        },
        (error) => {
          notifyFailure();
        }
      );
  };

  return (
    <Formik
      initialValues={{
        from_name: "",
        reply_to: "",
        message: "",
        subject: "",
        to_name: "Premiun",
      }}
      validationSchema={contactSchema}
      onSubmit={(values, {setSubmitting}) => {
        sendEmail(values).then(() => setSubmitting(false));
      }}
    >
      {({isSubmitting}) => (
        <Form className="min-w-full mt-11 md:px-9">
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="md:flex  justify-between">
            <div className="md:w-1/2 md:px-11 px-2">
              <div>
                <label
                  htmlFor="from_name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Nombre
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </span>
                  <Field
                    type="text"
                    name="from_name"
                    className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bartolomiau"
                  />
                </div>
                <ErrorMessage
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                  name="from_name"
                  component="div"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="reply_to"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </span>

                  <Field
                    type="email"
                    name="reply_to"
                    className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="barto@correo.com"
                  />
                </div>
                <ErrorMessage
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                  name="reply_to"
                  component="div"
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Asunto
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <FontAwesomeIcon
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      icon={faComment}
                    />
                  </span>
                  <Field
                    type="text"
                    name="subject"
                    className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Bartolomiau"
                  />
                </div>
                <ErrorMessage
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                  name="subject"
                  component="div"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:px-11 px-2">
              <div className="mt-3 md:mt-0">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mensaje
                </label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Escribe aqui tu consulta"
                />
                <ErrorMessage
                  className="mt-2 text-sm text-red-600 dark:text-red-500"
                  name="message"
                  component="div"
                />
              </div>
              {isSubmitting && <span>Enviando...</span>}
              <button
                type="button"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
                disabled={isSubmitting}
              >
                Enviar
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
