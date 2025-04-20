import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
    name: yup.string().required('El contenido es obligatorio'),
    title: yup.string().required('El contenido es obligatorio'),
    email: yup.string().email("Formato no válido").required("Este campo es obligatorio"),
    phone: yup.string().required("Este campo es obligatorio"),
    content: yup.string().required('El contenido es obligatorio')
})
