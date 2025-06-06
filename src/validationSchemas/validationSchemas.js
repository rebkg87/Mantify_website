import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email("Formato no válido").required("El email es obligatorio"),
    phone: yup.string().required("El teléfono es obligatorio"),
    company: yup.string().required("El nombre de la empresa es obligatorio"),
    content: yup.string().required('El mensaje es obligatorio')
})
