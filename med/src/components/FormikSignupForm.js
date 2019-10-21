import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import './FormikSignupForm.css';
import * as Yup from 'yup';


const UserSignup = ({ errors, touched }) => {

    return (
        <Form className="signupForm">
            <div>
                {touched.name && errors.name && <p>{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name" />
            </div>
            <div>
                {touched.email && errors.email && <p>{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                {touched.password && errors.password && <p>{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button>Submit</button>
        </Form>
    )
}
//Wire Up UserSignup With Formik
const FormikSignupForm = withFormik({
    mapPropsToValues({ email, password, name }) {
        return {
            email: email || "",
            password: password || "",
            name: name || ""
        };
    },

//Form Validation
validationSchema: Yup.object().shape({
    email: Yup.string()
        .email("Email is required"),
    password: Yup.string()
        .min(5, "Password must be 5 characters or longer")
        .required("Password is required"),
    name: Yup.string()
        .required("Please Enter Your Name")
}),
//Handle Submission Function
handleSubmit(values) {

    }
})(UserSignup);

export default FormikSignupForm;