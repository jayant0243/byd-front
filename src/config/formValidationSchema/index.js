import * as Yup from "yup";

export const pageValidation = Yup.object().shape({
    title: Yup.string().min(2).required("Title is required"),
    sku: Yup.string().min(2).required("SKU is required"),
    meta_title: Yup.string().optional(),
    meta_keywords: Yup.string().optional(),
    meta_description: Yup.string().optional(),
    head_tracking_code: Yup.string().optional(),
    body_tracking_code: Yup.string().optional(),
    body: Yup.string().optional(),
    status: Yup.string().required()
})

export const menuPageValidation = Yup.object().shape({
    title: Yup.string().min(2).required("Title is required"),
    sku: Yup.string().min(2).required("SKU is required"),
    body: Yup.string().optional(),
    status: Yup.string().required()
})

export const sectionPageValidation = Yup.object().shape({
    title: Yup.string().min(2).required("Title is required"),
    css: Yup.string().optional(),
    body: Yup.string().optional(),
    status: Yup.string().required()
})
// export const 