import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';


const EmployeeList = () => {
  return (
    <div className='employee-list-container'>
      <h1>Current Employees</h1>
      <EmployeesTable />
      <nav>
        <Button variant="text">
          <Link to="/">Home</Link>
        </Button>
      </nav>
    </div>
  )
}


export default EmployeeList

