import React from 'react';
import './Panel.css';
import {Link} from "react-router-dom";


function Panel(){

const adminLeftSide = () => {
    return(
        <div className="container-fluid">
            <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">

            <ul>
            <li className="nav-item">
             <Link to="/"className="nav-link active text-success" aria-current="page">Dashboard</Link>
             </li>
           
             <li className="nav-item">
            <Link to="/panel/order" className="nav-link active text-success" aria-current="page">Order</Link>
          </li>

         
             <li className="nav-item">
            <Link to="/panel/products" className="nav-link active text-success" aria-current="page">Products</Link>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>
    </nav> 

        </div>
        </div>
    )
}

// const adminRightSide = () => {
//     return(
//         <div className="container-fluid">
           
           

//         </div>
//     )
// }
  return (
    <div className="row">
        <div className="col-3">
        {adminLeftSide()}
        </div>
        {/* <div className="col-9">
        {adminRightSide()}
        </div> */}
    </div>

  )}

  export default Panel;
