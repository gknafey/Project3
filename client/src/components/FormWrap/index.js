import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import Logo from "../../images/final.png"
import "./style.css";

const MyTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
        <label className="quote-size" htmlFor={props.id || props.name}>{label}</label>
        <input className="form-control quote-text-width" {...field} {...props} />
        {meta.touched && meta.error ? (
            <small className="error">{meta.error}</small>
        ) : null}
        </div>
    );
};

const MyTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group">
        <label className="quote-size" htmlFor={props.id || props.name}>{label}</label>
        <textarea className="form-control quote-area-width" {...field} {...props} />
        {meta.touched && meta.error ? (
            <div className="error">{meta.error}</div>
        ) : null}
        </div>
    );
};


// const MyCheckbox = ({ children, ...props }) => {
//     const [field, meta] = useField({ ...props, type: "checkbox"});
//     return (
//         <>
//             <label className="checkbox">
//                 <input {...field} {...props} type="checkbox" />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };



function FormWrap() {
    return (
        <div className="content">
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
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
                lastName: Yup.string()
                    .max(20, "Must be 20 characters or less")
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
                <img className="logo-location2" src={Logo}></img>
                 <MyTextInput
                    label="First Name:"
                    name="firstName"
                    type="text"
                    placeholder="John"
                    />
                 <MyTextInput
                    label="Last Name:"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    />
                <MyTextInput 
                    label="Email Address:"
                    name="email"
                    type="email"
                    placeholder="johnsmith@gmail.com"
                    />

                <MyTextInput 
                    label="Phone Number:"
                    name="phoneNumber"
                    type="text"
                    placeholder="999-888-7777"
                />


                <MyTextArea 
                    label="Job Details"
                    name="jobDetails"
                    type="text"
                    placeholder="Job Details Here"
                />

                {/* <MyCheckbox name="acceptedTerms">
                    I accept the terms and conditions
                </MyCheckbox> */}

                <button className="btn btn-lg QuoteBtn " type="submit">Submit</button>
                    
                    </Form>
             </Formik>   
         </div>
    );
}

export default FormWrap;