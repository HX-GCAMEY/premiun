"use client";

import {Formik, Field, Form, ErrorMessage} from "formik";
import {contactSchema} from "lib/schemas";
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
        <Form>
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
          <div>
            <label htmlFor="from_name">Nombre</label>
            <Field type="text" name="from_name" />
            <ErrorMessage name="from_name" component="div" />
          </div>
          <div>
            <label htmlFor="reply_to">Email</label>
            <Field type="email" name="reply_to" />
            <ErrorMessage name="reply_to" component="div" />
          </div>
          <div>
            <label htmlFor="subject">Asunto</label>
            <Field type="text" name="subject" />
            <ErrorMessage name="subject" component="div" />
          </div>

          <div>
            <label htmlFor="message">Mensaje</label>
            <Field as="textarea" name="message" />
            <ErrorMessage name="message" component="div" />
          </div>
          {isSubmitting && <span>Enviando...</span>}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
