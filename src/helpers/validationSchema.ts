import { ValidationSchema } from "@/interfaces/contact/validation.interface";
import * as Yup from "yup";



export const Validation : Yup.ObjectSchema<ValidationSchema> = Yup.object().shape({
    name: Yup.string().required("Name is required").min(3, "To Short").max(50, "To Long"),
    email: Yup.string().email("Invalid email").required("Email is required").min(10, "To Short").max(60, "To Long"),
    subject: Yup.string().required("Subject is required").min(10, "To Short").max(100, "To Long"),
    messageBody: Yup.string().required("Message is required").min(50, "To Short").max(500, "To Long"),
});