import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const LoginPage = ({touched, errors}) => {


    return (
        <section className="login-page">
            <div className="new-user-form">
                <h1>Med Cabinet</h1>
                <h2>Welcome to Med Cabinet</h2>
                <Form>
                    <div className="email-box">
                        <Field
                        type="text"
                        name="email"
                        placeholder="email"
                        />
                    </div>
                    {touched.email && errors.email && <p className="errors">{errors.email}</p>}
                    <div className="password-box">
                        <Field
                        type="text"
                        name="password"
                        placeholder="password" 
                        />        
                    </div>
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                </Form>
                <button>Login</button>
                <button>Sign up</button>
                <h3>New Around Here?</h3>
                <button>Create Account</button>
            </div>


        </section>



    )
}

const FormikLoginForm = withFormik({
    mapPropsToValues({ email, password }) {
        return {
            email: email || "",
            password: password || "",
        };
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().required("Email address is required!"),
        password: Yup.string()
            .required("Password is required")
            .min(8, "Password should be 8 characters minimum.")
            .matches(/(^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.{8,}))/, "Password must contain at least            one uppercase character and one special character")
    })
})(LoginPage);

export default FormikLoginForm;