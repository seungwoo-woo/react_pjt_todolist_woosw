import React from 'react';
import { useNavigate } from "react-router-dom";
import personalImage from "../../images/Personal.png";
import styled from "styled-components";


const PageWrapper = styled.div`
  width: 480px;
  height: 800px;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 35px;
  overflow: hidden;
  border: 10px solid #363534;
  background: white;
  position: relative;

  .toMainButton {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0acf97;
    margin-top: 2rem;
    margin-left: 2rem;
    text-align: center;
    line-height: 45px;
    box-shadow: 10px 10px 10px #dbdbdb;
    color: white;
    font-size: 2.7rem;
    font-weight: bolder;
    cursor: pointer;
  }

  .title-box {
    color: #333333;
    height: 5rem; 
    margin: 0 auto;
    width: 85%;   
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 5rem;
    margin-bottom: 1rem;
    // border: 1px solid orange;
  }

  .title-box-right {
    margin-left: 20px;
  }

  .title {
    font-size: 2.0rem;
    font-weight: bolder;
  } 

  .title-tasks {
    font-size: 1.2rem;
    font-weight: 500;
    color: #F57953;
  } 



  .taskAddButton {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #F57953;
    margin-top: 2rem;
    margin-left: 2rem;
    text-align: center;
    line-height: 40px;
    box-shadow: 10px 10px 10px #dbdbdb;
    color: white;
    font-size: 2.7rem;
    font-weight: bolder;
    cursor: pointer;

    position: absolute;
    right: 1.5rem;
    bottom: 1.5rem;
  }

`;


function PersonalPage(props) {
  const todayTask = 4;
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className='toMainButton' onClick={() => {navigate(`/`);}}> ↶ </div>
      <div className="title-box">
        <img src={personalImage} width='70' alt="Personal Page Image" />
        <div className="title-box-right">
          <p className="title-tasks">{todayTask} tasks...</p>
          <p className="title">Personal</p>          
        </div>           
      </div>
      <div className='taskAddButton' onClick={() => {navigate(`/`);}}> + </div>

    </PageWrapper>
  );
}

export default PersonalPage; 