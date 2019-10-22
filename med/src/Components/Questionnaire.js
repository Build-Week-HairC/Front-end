import React from "react";
import { withFormik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
    root: {
        width: 300
    },
    margin: {
        height: theme.spacing(3)
    }
}))

const marks = [
    {
        value: 5,
        label: '5%',
    },
    {
        value: 10,
        label: '10%',
    },
    {
        value: 15,
        label: '15%',
    },
    {
        value: 20,
        label: '20%',
    },
    {
        value: 25,
        label: '25%',
    },
    {
        value: 30,
        label: '30%',
    },
];

function valuetext(value) {
    return `${value}%`;
}
function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}

const QuestionForm = () => {

    const classes = useStyles();

    return (
        <div className="welcome">
            <h1>Welcome to Med Cabinet</h1>
            <h2>Please Choose Your Options</h2>
            <div className="dropdowns">
                <h3>Choose Desired Effects</h3>
                <Field component="select" className="effects-select" name="effects">
                    <option>Select</option>
                    <option value="Creative">Creative</option>
                    <option value="Energizing">Energizing</option>
                    <option value="Euphoric">Euphoric</option>
                    <option value="Relaxing">Uplifting</option>
                    <option value="Uplifting">Uplifting</option>
                </Field>
                <h3>Choose Desired Flavors</h3>
                <Field component="select" className="flavors-select" name="flavors">
                    <option>Select</option>
                    <option value="Citrus">Citrus</option>
                    <option value="Lemon">Lemon</option>
                    <option value="Spicy">Spicy</option>
                    <option value="Sweet">Sweet</option>
                </Field>
                <h3>May Relieve</h3>
                <Field component="select" className="flavors-select" name="flavors">
                    <option>Select</option>
                    <option value="Bipolar Disorder">Bipolar Disorder</option>
                    <option value="Chronic Pain">Chronic Pain</option>
                    <option value="Depression">Depression</option>
                    <option value="Headaches">Headaches</option>
                    <option value="Insomnia">Insomnia</option>
                    <option value="Migraines">Migraines</option>
                    <option value="PTSD">PTSD</option>
                    <option value="Stress">Stress</option>
                </Field>
                <h3>Aromas</h3>
                <Field component="select" className="flavors-select" name="flavors">
                    <option>Select</option>
                    <option value="Earthy">Earthy</option>
                    <option value="Herbal">Herbal</option>
                    <option value="Kush">Kush</option>
                </Field>
                <div className={classes.root}>
                <h3>THC Content</h3>
                <Slider
                defaultValue={5}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={5}
                marks
                min={5}
                max={30}
                />
                </div>
            </div>
        </div>
    )



}

const FormikQuestionForm = withFormik({
    mapPropsToValues({}) {
        
    }
})(QuestionForm);

export default FormikQuestionForm;