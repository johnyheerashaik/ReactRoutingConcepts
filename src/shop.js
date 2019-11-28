import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, []);
    
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        const data = await fetch("http://dummy.restapiexample.com/api/v1/employees");
        console.log(data); 
        const refinedData = await data.json();
        console.log(refinedData);
        setItems(refinedData); 
    }
  return (
    <div>
      <h1>Shopping Page</h1>

      {/* <table border="1">
          <tbody>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Salary</th>
                  <th>Age</th>
                  <th>Profile Pic</th>
              </tr>
              <tr>
                  {items.map(item => (
                    <React.Fragment>
                    <td>{item.id}</td>
                    <td>{item.employee_name}</td>
                    <td>{item.employee_salary}</td>
                    <td>{item.employee_age}</td>
                    <td>{item.profile_image}</td>
                    </React.Fragment>
                  ))}
              </tr>
          </tbody>
      </table> */}

      <ul>
          {items.map(item => (
              <React.Fragment>
                <Link to={`/shop/${item.employee_salary}`}><li key={item.employee_name}>{item.employee_name}</li></Link>
               <br></br>
               </React.Fragment>
          ))}
      </ul>
      
      {/* {items.map(item => (
        <h3>{item.employee_name}</h3>
      ))} */}
    </div>
  );
}

export default Shop;
