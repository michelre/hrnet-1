import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import mockedData from '../data/mockedEmployeesData';


const EmployeesTable = () => {

    const data = useSelector((state) => state.employeesReducer.employees);

    // const data = mockedData;

    const columns = useMemo(
        () => [
            {
                accessorKey: 'firstName',
                header: 'First Name',
                size: 50
            },
            {
                accessorKey: 'lastName',
                header: 'Last Name',
                size: 50
            },
            {
                accessorKey: 'department',
                header: 'Department',
                size: 50
            },
            {
                accessorKey: 'birthDate',
                header: 'Date of Birth',
                size: 50
            },
            {
                accessorKey: 'street',
                header: 'Street',
                size: 50
            },
            {
                accessorKey: 'city',
                header: 'City',
                size: 50
            },
            {
                accessorKey: 'state',
                header: 'State',
                size: 50
            },
            {
                accessorKey: 'zipCode',
                header: 'Zip Code',
                size: 50
            },
        ],
        [],
    );

    return <MaterialReactTable columns={columns} data={data} />;
};



export default EmployeesTable

