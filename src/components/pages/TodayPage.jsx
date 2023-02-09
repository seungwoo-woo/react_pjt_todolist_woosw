import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import userImage from "../../images/title-box-user-m.png";
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

  .userImageC {
    position: absolute;
    right: 45px;
    top: 50px;
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
    margin-bottom: 0.5rem;
    padding-bottom: 1.0rem;
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
    font-size: 1.1rem;
    font-weight: 200;
    color: #0ACF97;

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


function TodayPage(props) {

  const date = new Date();
  const dateString = date.toLocaleString('ko-kr').slice(0, 10);
  const day = date.getDay(); 
  let dayString = '';

  if(day===0) dayString = '일';
  if(day===1) dayString = '월';
  if(day===2) dayString = '화';
  if(day===3) dayString = '수';
  if(day===4) dayString = '목';
  if(day===5) dayString = '금';
  if(day===6) dayString = '토';

  const { todos, onRemove, onToggle, onInsert } = props;

  const noOfTodayTask = (todos.filter((todo) => {
    return todo.division === 'Today';
  })).length;

  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  return (
    <PageWrapper>
      <div className='toMainButton' onClick={() => {navigate(`/`);}}> ↶ </div>
      <div className='userImageC'>
        <img src={userImage} width='105' alt="Today Page Image" />
      </div>
      
      <div className="title-box">
        <img src={todayImage} width='70' alt="Today Page Image" />
        <div className="title-box-right">
          <p className="title-tasks">{noOfTodayTask} tasks...</p>
          <p className="title">Today</p>          
        </div>
          <p className="title-date">{`- ${dateString} (${dayString})`}</p>       
      </div>

      <hr></hr>

      {todos.map((todo) => {
        if (todo.division === 'Today' && todo.checked) {
          return <TaskItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        }        
      })}

      {todos.map((todo) => {
        if (todo.division === 'Today' && !todo.checked) {
          return <TaskItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        }        
      })}

      <div className='taskAddButton' onClick={() =>{
        {(noOfTodayTask < 8) && setOpenModal(true)}}}> + </div>

      {openModal && <Modal closeModal={setOpenModal} onInsert={onInsert} noOfTask={noOfTodayTask} title='Today'/>} 

    </PageWrapper>
  );
}

export default TodayPage; 