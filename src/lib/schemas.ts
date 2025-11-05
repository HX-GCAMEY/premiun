import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  from_name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .max(50, "El nombre debe tener como maximo 50 caracteres")
    .required("El nombre es requerido"),
  reply_to: Yup.string()
    .email("El email no es valido")
    .required("El email es requerido"),
  message: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje debe tener como maximo 500 caracteres")
    .required("El mensaje es requerido"),
  subject: Yup.string()
    .min(10, "El asunto debe tener al menos 10 caracteres")
    .max(50, "El asunto debe tener como maximo 50 caracteres")
    .required("El asunto es requerido"),
  phone: Yup.number()
    .typeError("El telefono debe ser un numero")
    .min(100000000, "El telefono debe tener al menos 9 digitos")
    .max(9999999999, "El telefono debe tener como maximo 10 digitos")
    .required("El telefono es requerido"),
});
