import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import plannedImage from "../../images/Planned.png";
import styled from "styled-components";
import Modal from './Modal';
import TaskItem from './TaskItem';

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

  hr {
    width: 460px;
    height: 2px;
    border: 0;
    background: #FFD777;    
  }

`;


function PlannedPage(props) {  

  const { todos, onRemove, onToggle, onInsert } = props;

  const noOfPlannedTask = (todos.filter((todo) => {
    return todo.division === 'Planned';
  })).length;

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWrapper>
      <div className='toMainButton' onClick={() => {navigate(`/`);}}> ??? </div>
      <div className="title-box">
        <img src={plannedImage} width='70' alt="Planned Page Image" />
        <div className="title-box-right">
          <p className="title-tasks">{noOfPlannedTask} tasks...</p>
          <p className="title">Planned</p>          
        </div>           
      </div>

      <hr></hr>

      <div className='taskAddButton' onClick={() =>{
        {(noOfPlannedTask < 8) && setOpenModal(true)}}}> + </div>

      {todos.map((todo) => {
        if (todo.division === 'Planned' && todo.checked) {
          return <TaskItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        }        
      })}

      {todos.map((todo) => {
        if (todo.division === 'Planned' && !todo.checked) {
          return <TaskItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        }        
      })}

      {openModal && <Modal closeModal={setOpenModal} onInsert={onInsert} noOfTask={noOfPlannedTask} title='Planned'/>} 

    </PageWrapper>
  );
}

export default PlannedPage; 