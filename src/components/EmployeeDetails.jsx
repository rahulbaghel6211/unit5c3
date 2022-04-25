import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';
import { useParams } from 'react-router-dom';

export const EmployeeDetails = () => {


    const { id } = useParams();

    const [Employee, setEmployee] = useState([]);



    useEffect(() => {

        axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
            
        setEmployee(data)
        
         })

    }, []);



    return (

        <div className="user_details">

            <img className="user_image" src={Employee.image} alt="" />

            <h4 className="user_name">{Employee.employee_name} </h4>

            <span className="user_salary">${Employee.salary}</span>

            <span className="tasks">
                <li className="task">{}</li>
            </span>

            Status: <b className="status"></b>

            Title: <b className="title"></b>

            {/* Show this button only if user is not already terminated (users status is working) */}
            <button className="fire">Fire Employee</button>

            {/* Show this button only if user is not already team lead or terminated */}
            <button className="promote">promote</button>
        </div>
    );
};