import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import states from "../data/states"
import { format } from "date-fns";
import { employeesAction } from "../redux/employeeList-slice";
import { useDispatch } from "react-redux";



const CreateEmployee = () => {

    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState(null);
    const [department, setDepartment] = useState(null);

    const dispatch = useDispatch();

    const newEmployee = {
        firstName,
        lastName,
        birthDate,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
    };

    const handleSave = (e) => {
        e.preventDefault();
        dispatch(employeesAction.addEmployee(newEmployee));
        //clear states
        setFirstName(null);
        setLastName(null)
        setBirthDate(null);
        setStartDate(null);
        setStreet(null);
        setCity(null);
        setState("");
        setZipCode(null);
        setDepartment(null);
    }

    return (
        <>
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <NavLink to="/employee-list" > View Current Employees</NavLink>
            <h2>Create Employee</h2>
            <form>
                <label htmlFor="first-name">First Name</label>
                <input type="text"
                    onChange={(e) => setFirstName(e.target.value)} />
                <label htmlFor="last-name">Last Name</label>
                <input type="text"
                    onChange={(e) => setLastName(e.target.value)} />

                <DatePicker
                    label="Date of Birth"
                    value={birthDate}
                    onChange={(newValue) => {
                        setBirthDate(format(newValue, "MM/dd/yyyy"));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />

                <DatePicker
                    label="Start Date"
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(format(newValue, "MM/dd/yyyy"));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />


                <h3>Address</h3>
                <label htmlFor="street">Street</label>
                <input type="text" 
                onChange={(e) => setStreet(e.target.value)}/>
                <label htmlFor="city">City</label>
                <input type="text" 
                onChange={(e) => setCity(e.target.value)}/>

                <InputLabel id="state-select-label">State</InputLabel>
                <Select
                    labelId="state-select-label"
                    id="state-select"
                    value={"AL"}
                    label="State"
                    onChange={(e) => {
                        setState(e.target.value);
                    }}
                >
                    {states.map((state) => {
                        return (
                            <MenuItem value={state.abbreviation} key={state.abbreviation}>{state.name}</MenuItem>
                        )
                    })}
                </Select>

                <label htmlFor="zip-code">Zip Code</label>
                <input type="number" 
                onChange={(e) => setZipCode(e.target.value)}/>

                <InputLabel id="department-select-label">Department</InputLabel>
                <Select
                    labelId="department-select-label"
                    id="department-select"
                    value={"Sales"}
                    label="Department"
                    onChange={(e) => {
                        setDepartment(e.target.value);
                    }}
                >
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Engineering">Human Resources</MenuItem>
                    <MenuItem value="Legal">Legal</MenuItem>
                </Select>

                <button onClick={handleSave}>Save</button>

            </form>

        </>
    )
}

export default CreateEmployee 