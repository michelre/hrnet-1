import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers';

function App() {
  return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route index element={<CreateEmployee />} />
              <Route exact path="/employee-list" element={<EmployeeList />} />
            </Routes>
          </BrowserRouter>
        </div>
      </LocalizationProvider>
  );
}

export default App;
