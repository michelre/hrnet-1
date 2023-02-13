import { Link } from 'react-router-dom';
import EmployeesTable from '../components/EmployeesTable';
import { useSelector } from 'react-redux';

const EmployeeList = () => {
  return (
    <>
    <h1>Current Employees</h1>
      <EmployeesTable />
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  )
}


export default EmployeeList

