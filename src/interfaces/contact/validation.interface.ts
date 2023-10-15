export interface ValidationSchema{
    name: string;
    email: string;
    subject: string;
    messageBody: string
}

export default interface FormData {
    name: string,
    email: string,
    subject: string,
    messageBody: string,
}