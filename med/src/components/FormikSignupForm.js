import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';
import './FormikSignupForm.css';
import * as Yup from 'yup';

//User Form
const UserSignup = ({ errors, touched }) => {

    return (
        <Form className="signupForm">
            <div>
                {touched.name && errors.name && <p className="error">{errors.name}</p>}
                <Field type="text" name="name" placeholder="Name" />
            </div>
            <div>
                <div>
                {touched.age && errors.age && <p className="error">{errors.age}</p>}
                </div>
                <Field type="number" name="age" placeholder="Age" />
            </div>
            <div>
                {touched.email && errors.email && <p className="error">{errors.email}</p>}
                <Field type="email" name="email" placeholder="Email" />
            </div>
            <div>
                {touched.password && errors.password && <p className="error">{errors.password}</p>}
                <Field type="password" name="password" placeholder="Password" />
            </div>
            <button>Submit</button>
        </Form>
    )
}
//Wire Up UserSignup With Formik
const FormikSignupForm = withFormik({
    mapPropsToValues({ email, password, name, age }) {
        return {
            email: email || "",
            password: password || "",
            name: name || "",
            age: age || ""
        };
    },

//Form Validation
validationSchema: Yup.object().shape({
    email: Yup.string()
        .email("Email is required")
        .required("Please Enter Email Address"),
    password: Yup.string()
        .min(5, "Password must be 5 characters or longer")
        .required("Password is required"),
    name: Yup.string()
        .required("Please Enter Your Name"),
    age: Yup.number()
        .moreThan(18, "Must Be At Least 18 To Sign Up")
        .required("Must Enter Age"),
        
}),
//Handle Submission Function
handleSubmit(values) {

    }
})(UserSignup);

export default FormikSignupForm;