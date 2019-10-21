import React from "react";
import { withFormik, Form, Field } from "formik";

const LoginPage = () => {


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
                    <div className="password-box">
                        <Field
                        type="text"
                        name="password"
                        placeholder="password" 
                        />        
                    </div>
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
    mapPropsToValues({ email, password, terms}) {
        return {
            email: email || "",
            password: password || "",
        };
    }
})(LoginPage);

export default FormikLoginForm;