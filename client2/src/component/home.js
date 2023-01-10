import '../css/home.css';

import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const Navigate = useNavigate()

  const [users, Setusers] = useState([]);


  const handleLogout = () => {

    localStorage.clear();
    Navigate("/");
  };



  const gottonext = () => {
    Navigate("./course.js")
  }



  const getUsers = async () => {
    const response = await fetch('http://localhost:8000/data', {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("token"),
        "auth": localStorage.getItem("email")
      },
    });
    Setusers(await response.json());

  }
  useEffect(() => {

    getUsers();

  }, []);



  return (
    <>
      <header className="header" >

        <button className='logout' onClick={handleLogout}>
          Logout
        </button>
      </header>
      
      <div className="container">
  <div className="card">
    <div className="card-header">
      <img src="https://repository-images.githubusercontent.com/486226419/99587ec7-b54b-4ccc-9d8e-eae9cbbc6f9e" alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">Course</span>
      <h4>
        Html
      </h4>
      <p onClick={()=>{
     Navigate("/htmlcourse")
      }}>
        Click Here To Enroll This Course
      </p>
     
    </div>
  </div>
  
  <div className="card">
    <div className="card-header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/544px-CSS3_logo_and_wordmark.svg.png?20160530175649" alt="city" />
    </div>
    <div className="card-body">
      <span className="tag tag-pink">Course</span>
      <h4>
       Css
      </h4>
      <p onClick={()=>{
        Navigate("/csscourse")
      }}>
         Click Here To Enroll This Course
      </p>
    </div>
  </div>
  <div className="container">
  <div className="card">
    <div className="card-header">
      <img src="https://st2.depositphotos.com/1004274/8297/v/600/depositphotos_82971018-stock-illustration-check-list-icon-business-concept.jpg" alt="rover" />
    </div>
    <div className="card-body">
      <span className="tag tag-teal">Assignment</span>
      <h4>
        DSA/HTML/CSS
      </h4>
      <p onClick={()=>{
     Navigate("/assignment")
      }}>
        Click Here
      </p>
     
    </div>
  </div>
</div>
</div>
    </>
  )
}

