'use client'

// reactJs or NextJs
import { FC, useState } from "react";

// helpers
import { Validation } from "@/helpers/validationSchema";

// APIs
// import { submitClients, submitSendEmail } from "@/services/clients";


// Formik
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import FormData from "@/interfaces/contact/validation.interface";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValidationSchema } from "@/interfaces/contact/validation.interface";
import { submitSendEmail } from "@/services/client";

// validationSchema return true or false
const validationSchema: Yup.ObjectSchema<ValidationSchema> = Validation;


const Contact = () => {
  // Error and Success for Form Clients
  const [error, setError] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);

  const handleSubmit = async (formData: FormData) => {
    await submitSendEmail(formData)
      .then((result: any) => {
        if(result.status !== 400){
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          const myForm = document.getElementById("myForm") as HTMLFormElement;

          if (myForm) {
            // Check if the form element was found
            myForm.reset(); // Reset the form
          } else {
            console.error("Form element with ID 'myForm' not found.");
          }
        } else {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
  };

  return (
    <>
      <div >
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            messageBody: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

        >
          {({ errors, touched, isValid }) => {
            return (
              <Form
                id="myForm"
                className="contactform"
              >
                <div className="row">
                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="name"
                        placeholder="YOUR NAME"
                        required
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error-message error mt-2"
                      />
                    </div>
                  </div>


                  <div className="col-12 col-md-6">
                    <div className="form-group">
                      <Field
                        type="email"
                        name="email"
                        placeholder="YOUR EMAIL"
                        required
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error-message error mt-2"
                      />
                    </div>
                  </div>


                  <div className="col-12 col-md-12">
                    <div className="form-group">
                      <Field
                        type="text"
                        name="subject"
                        placeholder="YOUR SUBJECT"
                        required
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="error-message error mt-2"
                      />
                    </div>
                  </div>


                  <div className="col-12">
                    <div className="form-group">
                      <Field
                        as="textarea"
                        name="messageBody"
                        placeholder="YOUR MESSAGE"
                        required
                      />
                      <ErrorMessage
                        name="messageBody"
                        component="div"
                        className="error-message mt-2 error"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <button type="submit" className="button">
                      <span className="button-text">Send Message</span>
                      <span className="button-icon fa fa-send"></span>
                    </button>
                  </div>

                </div>
              </Form>
            )
          }}
        </Formik>
      </div>

    </>
  );
};

export default Contact;