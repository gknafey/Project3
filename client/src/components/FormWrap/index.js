import React from "react";
import { Formik, Form, useField } from "formik";
import moment from 'moment';
import * as Yup from "yup";
import Logo from "../../images/final.png"
import "./style.css";
import API from "../../utils/API";


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



const MyPhoneInput = ({ label, ...props }) => {




    const [field, meta] = useField(props);
    return (
        <div className="form-group">
            <label className="quote-size" htmlFor={props.id || props.name}>{label}</label>
            <input id="textnumber" className="form-control quote-text-width" {...field} {...props} />
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

const FormWrap = () => {


    return (
        <div className="content quoteRequestSize">
            <>
                <h1 className="formTitleMobile">Quote Request Form</h1>
                <Formik
                    initialValues={{
                        firstName: "",
                        lastName: "",
                        email: "",
                        phoneNumber: "",
                        jobDetails: "",
                        createdOn: ""
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
                        phoneNumber: Yup.string()
                            .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
                        jobDetails: Yup.string()
                            .max(300, "Must be 20 characters or less")
                            .required("Required"),
                        createdOn: Yup.date().default(function () {
                            return new Date();
                        })
                    })}



                    onSubmit={(values, { setSubmitting }) => {
                        
                        setTimeout(() => {
                            values.createdOn = moment().format('MMMM Do YYYY, h:mm:ss a');
                            document.getElementsByClassName("submitted-form-response")[0].style.visibility = "visible";
                            // console.log(document.getElementsByClassName("submitted-form-response")[0].style);
                            API.saveClient({
                                firstName: values.firstName,
                                lastName: values.lastName,
                                email: values.email,
                                phoneNumber: values.phoneNumber,
                                jobDetails: values.jobDetails,
                                createdOn: values.createdOn,
                            })
                                .then(res => console.log(res))
                                .catch(err => console.log(err));
                                
                                values.firstName = "";
                                values.lastName = "";
                                values.email = "";
                                values.phoneNumber = "";
                                values.jobDetails = "";
                                values.createdOn = "";

                

                            
                            setSubmitting(false);
                        }, 400);
                        
                    }}
                >
                    <Form>
                        <img className="logo-location2" id="curved-logo" src={Logo} alt="Logo Here"></img>
                        

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

                        <MyPhoneInput
                            label="Phone Number:"
                            name="phoneNumber"
                            type="text"
                            placeholder="999-888-7777"
                        />


                        <MyTextArea
                            label="Job Details (Please Include Project Location / Address)"
                            name="jobDetails"
                            type="text"
                            placeholder="Job Details Here"
                        />
                        <p className="submitted-form-response">Your Form has been submitted! We will be in contact with you shortly.</p>
                        
                        <button className="btn btn-lg QuoteBtn" type="submit" >Submit</button>
                        
                        
                    </Form>
                </Formik>

            </>
            
        </div>
    );
};


export default FormWrap;