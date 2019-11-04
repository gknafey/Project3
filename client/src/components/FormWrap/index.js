import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import "./style.css";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
        <label htmlFor={props.id || props.name}>{label}</label>
        <input className="text-input" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </>
    );
};



const MyCheckbox = ({ children, ...props }) => {
    const [field, meta] = useField({ ...props, type: "checkbox"});
    return (
        <>
            <label className="checkbox">
                <input {...field} {...props} type="checkbox" />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};



function FormWrap() {
    return (
        <>
        <h1>Quote Request Form</h1>
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                acceptedTerms: false,
                jobType: ""
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .min(15, "Must be 15 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .min(20, "Must be 20 characters or less")
                    .required("Required"),
                email: Yup.string()
                    .email("Invalid email address`")
                    .required("Required"),
                acceptedTerms: Yup.boolean()
                    .required("Required")
                    .oneOf([true], "You must accept the terms and conditions."),
                jobType: Yup.string()
                    .oneOf(
                    ["designer", "development", "product", "other"],
                    "Invalid Job Type"
                    )   
                    .required("Required")
            })}
            onSubmit={(values, { setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);   
                }, 400);
            }}
         >
             <Form>
                 <MyTextInput
                    label="First Name"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    />
                 <MyTextInput
                    label="Last Name"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    />
                <MyTextInput 
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    />
                
                <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox>

                <button className="btn-info" type="submit">Submit</button>
                    
                    </Form>
             </Formik>   
         </>
    );
}

export default FormWrap;