import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import states from "../data/states"
import { format } from "date-fns";
import { employeesAction } from "../redux/employeeList-slice";
import { useDispatch } from "react-redux";
import Modal from "react-modal-rml";


const CreateEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthDate, setBirthDate] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState(null);
    const [zipCode, setZipCode] = useState("");
    const [department, setDepartment] = useState(null);
    const [showModal, setShowModal] = useState(false);

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
        setFirstName("");
        setLastName("")
        setBirthDate(null);
        setStartDate(null);
        setStreet("");
        setCity("");
        setState(null);
        setZipCode("");
        setDepartment(null);
        setShowModal(true)
    }

    return (
        <>
            <div className="create-header">
                <h1>HRnet</h1>
                <Button variant="text">
                    <NavLink to="/employee-list" > View Current Employees</NavLink></Button>
                <h2>Create Employee</h2>
            </div>
            <form className="create-form">

                <TextField
                    className="form-field"
                    onChange={(e) => setFirstName(e.target.value)} label="First Name"
                    variant="outlined"
                    value={firstName}
                    size="small" />

                <TextField
                    className="form-field"
                    onChange={(e) => setLastName(e.target.value)} label="Last Name"
                    variant="outlined"
                    value={lastName}
                    size="small" />

                <DatePicker
                    className="form-field"
                    label="Date of Birth"
                    value={birthDate}
                    onChange={(newValue) => {
                        setBirthDate(format(newValue, "MM/dd/yyyy"));
                    }}
                    renderInput={(params) => <TextField size="small" {...params} />}
                />

                <DatePicker
                    className="form-field"
                    label="Start Date"
                    value={startDate}
                    onChange={(newValue) => {
                        setStartDate(format(newValue, "MM/dd/yyyy"));
                    }}
                    renderInput={(params) => <TextField size="small" {...params} />}
                />

                <fieldset className="form-address-box">
                    <h3>Address</h3>

                    <TextField
                        className="form-field"
                        onChange={(e) => setStreet(e.target.value)}
                        label="Street"
                        variant="outlined"
                        value={street}
                        size="small" />

                    <TextField
                        className="form-field"
                        onChange={(e) => setCity(e.target.value)}
                        label="City"
                        variant="outlined"
                        value={city}
                        size="small" />

                    <InputLabel id="state-select-label">State</InputLabel>
                    <Select
                        className="form-field"
                        labelId="state-select-label"
                        id="state-select"
                        value={"AL"}
                        // label="State"
                        size="small"
                        onChange={(e) => {
                            setState(e.target.value);
                        }}
                    >
                        {states.map((state) => {
                            return (
                                <MenuItem value={state.abbreviation}
                                    key={state.abbreviation}>
                                    {state.name}</MenuItem>
                            )
                        })}
                    </Select>

                    <TextField
                        className="form-field"
                        onChange={(e) => setZipCode(e.target.value)}
                        label="Zip Code"
                        variant="outlined"
                        value={zipCode}
                        type="number"
                        size="small" />
                </fieldset>

                <InputLabel id="department-select-label" className="form-label">Department</InputLabel>
                <Select
                    className="form-field"
                    labelId="department-select-label"
                    id="department-select"
                    value={"Sales"}
                    // label="Department"
                    onChange={(e) => {
                        setDepartment(e.target.value);
                    }}
                    size="small"
                >
                    <MenuItem value="Sales">Sales</MenuItem>
                    <MenuItem value="Marketing">Marketing</MenuItem>
                    <MenuItem value="Engineering">Human Resources</MenuItem>
                    <MenuItem value="Legal">Legal</MenuItem>
                </Select>
                <Button variant="contained" className="save-button" onClick={handleSave}>Save</Button>

            </form>
            {showModal ?
                <Modal
                    closeModalFunction={() => setShowModal(false)}
                    modalText={"Employee added"}
                /> : ''
            }

        </>
    )
}

export default CreateEmployee
