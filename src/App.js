import {
  Route,
  Routes,
} from 'react-router-dom';

import { Admin } from './components/Admin';
import { EmployeeDetails } from './components/EmployeeDetails';
import { EmployeeList } from './components/EmployeeList';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
// import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/employees' element={<EmployeeList />} ></Route>
      <Route path='/employee/:id' element={<EmployeeDetails />} ></Route>
      <Route path='/admin' element={<Admin />} ></Route>
      <Route path='/login' element={<Login/>} >{" "}</Route>
      <Route path='/logout' element={<Logout/>} >{" "}</Route>
      
      </Routes>

    </div>
  );
}

export default App;