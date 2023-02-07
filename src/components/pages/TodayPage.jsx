import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import todayImage from "../../images/Today.png";
import styled from "styled-components";
import TaskItem from './TaskItem';
import Modal from './Modal';


const PageWrapper = styled.div`
  width: 480px;
  height: 800px;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 35px;
  overflow: hidden;
  border: 10px solid #363534;
  position: relative;

  background-color: white;

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
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: 5rem;
    margin-bottom: 1rem;
    // border: 1px solid orange;
  }

  .title-box-right {
    margin-left: 20px;
    margin-bottom: 10px;
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

  .title-date {
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-weight: 600;
    color: gray;

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


function TodayPage(props) {

  const date = new Date();
  const dateString = date.toLocaleString('ko-kr').slice(0, 10);

  const { todos, onRemove, onToggle, onInsert } = props;

  const noOfTodayTask = (todos.filter((todo) => {
    return todo.division === 'today';
  })).length;

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWrapper>
      <div className='toMainButton' onClick={() => {navigate(`/`);}}> ↶ </div>
      <div className="title-box">
        <img src={todayImage} width='70' alt="Today Page Image" />
        <div className="title-box-right">
          <p className="title-tasks">{noOfTodayTask} tasks...</p>
          <p className="title">Today</p>          
        </div>
          <p className="title-date">{`(${dateString})`}</p>       
      </div>

      {/* <div className='taskAddButton' onClick={(e) => {onInsert(e.target.value);}}> + </div> */}
      <div className='taskAddButton' onClick={() =>{setOpenModal(true)}}> + </div>

      {todos.map((todo) => {
        if (todo.division === 'today') {
          return <TaskItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} onInsert={onInsert} />
        }        
      })}

      {openModal && <Modal closeModal={setOpenModal} onInsert={onInsert} />} 

    </PageWrapper>
  );
}

export default TodayPage; 