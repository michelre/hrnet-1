import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import mockedData from '../data/mockedEmployeesData';


const EmployeesTable = () => {

    // const data = useSelector((state) => state.employeesReducer.employees);

    const data = mockedData;

    const columns = useMemo(
        () => [
            {
                accessorKey: 'firstName',
                header: 'First Name',
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'department',
                header: 'Department',
            },
            {
                accessorKey: 'birthDate',
                header: 'Date of Birth',
            },
            {
                accessorKey: 'street',
                header: 'Street',
            },
            {
                accessorKey: 'city',
                header: 'City',
            },
            {
                accessorKey: 'state',
                header: 'State',
            },
            {
                accessorKey: 'zipCode',
                header: 'Zip Code',
            },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
};



export default EmployeesTable

