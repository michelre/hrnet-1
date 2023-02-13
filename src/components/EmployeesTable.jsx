import MaterialReactTable from 'material-react-table';
import { useMemo } from 'react';

const data = [
  {
    firstName: 'John',
    lastName: 'Doe',
    startDate: "05/07/2015",
    department: 'Sales',
    birthDate: "12/12/1982",
    street: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'AL',
    zipCode: 25558
  },
];

const EmployeesTable = () => {
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

