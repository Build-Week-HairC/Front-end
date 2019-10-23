import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { Link } from "@material-ui/core";

const FormWrapper = styled.div` 
.new-user-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #282c34;

    .email-box {
        padding: 10px;
    }

    .password-box {
        padding: 5px;
    }

    .login {
        padding: 5px 15px;
        margin: 5px;
    }

    .sign-up {
        padding: 5px 15px;
        margin: 5px;
    }

    .newhere {
        padding: 10px;
    }

    .create {
        padding: 10px;
    }
}

h1 {
    color: whitesmoke;
}

h2 {
    color: whitesmoke;
}

h3 {
    color: whitesmoke;
}
`;

const LoginPage = ({touched, errors}) => {

    return (
        <FormWrapper>
        <div className="login-page">
            <div className="new-user-form">
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
                <Link to="/MedCabinet">
                <button className="login">Login</button>
                </Link>
                <div className="newhere">
                <h3>New Around Here?</h3>
                </div>
                <div className="create">
                <button>Create Account</button>
                </div>
            </div>


        </div>
        </FormWrapper>


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
    }),
    // handleSubmit(values, { setStatus }) {
    //     axios.post('https://medcabinet.herokuapp.com/login', 
    //     `grant_type=password&username=${username_goes_here}&password=${password_goes_here}`, {
    //     headers: {
    //         Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
    //         'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    // })

    // }

})(LoginPage);

export default FormikLoginForm;