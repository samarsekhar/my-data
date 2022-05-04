import React, {useState} from "react";

const useForm = () => {
    // form values.
    const [values, setValues] = useState({})
    //Errors
    const [errors, setErrors] = useState({});

    // A method to Handle form inputs
    const handleChanger = (e) => {
        // To stop default events
        e.persist();

        let name = e.target.name;
        let val = e.target.value;

        //Validate(e,name,val);
        // Let's set these values in state
        setValues({
            ...values,    //spread operator to store old values
            [name]: val,
        })
    }
    return{
        values,
        errors,
        handleChanger,

}
};
export default useForm;