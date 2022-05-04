import React, {useState, useEffect} from "react";
import TodoList from "./TodoList";

const TodoForm = () => {
    const initialValue = {
        name: "",
        email: "",
        number: "",
        project_name: "",
        task_description: "",
        start_date: "",
        end_date: "",
        status: ""
    }

    const [inputValues, setInputValues] = useState(initialValue);
    const [todos, setTodos] = useState([]);
    const [views, setViews] = useState(false);
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);

    const changeHandler = (e) => {
        setInputValues({...inputValues,[e.target.name]:e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setInputErrors(Validate(inputValues))
        setisSubmit(true);
    }

    useEffect(() => {
        if((Object.keys(inputErrors).length === 0 && isSubmit)) {
            const newTodos = [...todos,inputValues];
            setTodos(newTodos);
        }
    }, [inputErrors])

    const deleteHandler = (indexValue) => {
        const FilteredTodo = todos.filter((elem,index) => index !==indexValue);
        setTodos(FilteredTodo);
    }

    const editHandler = (editIndexValue) => {
        const FilteredTodo = todos.filter((elem,index) => index !== editIndexValue);
        setTodos(FilteredTodo);
        const editSelector = todos.find((elem,index) => index !== editIndexValue);
        setInputValues({
            name:editSelector.name,
            email:editSelector.email,
            number:editSelector.number,
            project_name:editSelector.project_name,
            task_description:editSelector.task_description,
            start_date:editSelector.start_date,
            end_date:editSelector.end_date,
            status:editSelector.status

        })
    }

    const Validate = (values) => {
        const error = {};
        const OnlyNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        const OnlyStrings = /^[a-zA-Z ]*$/;
        const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if(!values.name){
            error.name="Name input should not be empty!"
        }else if(!values.name.match(OnlyStrings)){
            error.name="Please enter only Alphabets"
        }

        if(!values.email){
            error.name="Email input should not be empty!"
        }else if(!values.email.match(isEmail)){
            error.email="Please provide a valid email"
        }

        if(!values.number){
            error.name="Number input should not be empty!"
        }else if(!values.number.match(OnlyNum)){
            error.number="Please enter numbers only"
        }else if(values.number.length<10){
            error.number="Mobile number should contain atleast 10 characters"
        }else if(values.number.length>10){
            error.number="Mobile number max 10 digit"
        }else if((values.number.charAt(0) === 1)){
            error.number="Should not start with 1,2,3"
        }else if((values.number.charAt(0) === 2)){
            error.number="Should not start with 1,2,3"
        }else if((values.number.charAt(0) === 3)){
            error.number="Should not start with 1,2,3"
        }

        if(!values.project_name){
            error.project_name="Project Name input should not be empty!"
        }else if((values.project_name.length<3)) {
            error.project_name="Project name should contain alteast 3"
        }else if((values.project_name.length>30)) {
            error.project_name="Project name should contain max 30 characters"
        }

        if(!values.task_description){
            error.task_description="Task Description input should't be empty!"
        }else if((values.task_description.length<3)){
            error.task_description="Project description should contain atleast 3"
        }else if((values.task_description.length>30)){
            error.task_description="Project description should contain max 30 characters"
        }

        if(!values.start_date){
            error.start_date="Please select start date!"
        }
        if(!values.end_date){
            error.end_date="Please select end date!"
        }
        if(!values.status){
            error.status="Please choose any status!"
        }


        return error;
    }
    return(
        <>
        <div className="container">
            <div className="row m-md-auto">
                <div className="col col-md-8 m-md-auto">
                    <div className="gutter-gap">
                        <h1 className="text-center mb-4 text-decoration-underline">Todo List</h1>
                        <form onSubmit={submitHandler}>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter Person Name (3-20 Characters Only)" name="name" className="form-control rounded-0 py-2 fs-5"
                                value={inputValues.name}
                                onChange={changeHandler} />
                                <p className="text-danger m-0">{inputErrors.name}</p>
                            </div>
                            <div className="mb-3 d-md-flex">
                                <div className="w-50 me-2">
                                    <input type="text" placeholder="Enter A Valid E-mail ID" name="email" className="form-control rounded-0 py-2 fs-5"
                                       value={inputValues.email}
                                       onChange={changeHandler} />
                                       <p className="text-danger m-0">{inputErrors.email}</p>
                                </div>
                                <div className="w-50 ms-1">
                                    <input type="number" placeholder="Enter A Valid Mobile Number" name="number" className="form-control rounded-0 py-2 fs-5"
                                    value={inputValues.number}
                                    onChange={changeHandler} />
                                    <p className="text-danger m-0">{inputErrors.number}</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter Project Name (4-20 Characters And Number Only)" name="project_name" className="form-control rounded-0 py-2 fs-5"
                                value={inputValues.project_name}
                                onChange={changeHandler} />
                                <p className="text-danger m-0">{inputErrors.project_name}</p>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Enter Task Description (3-30 Chars/Num/Spl Char also)" name="task_description" className="form-control rounded-0 py-2 fs-5"
                                value={inputValues.task_description}
                                onChange={changeHandler} />
                                <p className="text-danger m-0">{inputErrors.task_description}</p>
                            </div>
                            <div className="mb-3 d-md-flex">
                                <div className="w-50 me-1">
                                    <p>Start Date</p>
                                    <input type="date" name="start_date" className="form-control rounded-0 py-2"
                                    value={inputValues.start_date}
                                    onChange={changeHandler} />
                                    <p className="text-danger m-0">{inputErrors.start_date}</p>
                                </div> 
                                <div className="w-50 me-1">
                                    <p>End Date</p>
                                    <input type="date" name="end_date" className="form-control rounded-0 py-2"
                                    value={inputValues.end_date}
                                    onChange={changeHandler} />
                                    <p className="test-danger m-0">{inputErrors.end_date}</p>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="d-md-flex align-items-center radio-status">
                                    <p className="m-1">Task Status: </p>
                                    <input type="radio" name="status" className="form-check-input" value="Planned"
                                    onChange={changeHandler} /> Planned
                                    <input type="radio" name="status" className="form-check-input" value="In-Progress"
                                    onChange={changeHandler} /> In-Progress
                                    <input type="radio" name="status" className="form-check-input" value="Done"
                                    onChange={changeHandler} /> Done
                                </div>
                                <p className="text-danger m-0">{inputErrors.status}</p>
                            </div>
                            <div className="mb-3 d-md-flex align-items-center justify-content-between mt-3">
                                <input type="submit" value="SAVE" className="btn btn-primary rounded-0 px-4" />
                                <button type="button" className="btn btn-success rounded-0 px-4" onClick={() => setViews(true)}>VIEW</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col m-md-auto">
                    <div className="gutter-gap">
                        <TodoList todos={todos} deleteHandler={deleteHandler} views={views} editHandler={editHandler} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default TodoForm;