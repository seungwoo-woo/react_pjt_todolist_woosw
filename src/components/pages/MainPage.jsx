import styled from "styled-components";
import titleUserM from "../../images/title-box-user-m.png";
import MainPageCard from "./MainPageCard";

const userName = 'Woo SeungWoo';

const MainPageWrapper = styled.div`
  width: 480px;
  height: 800px;
  margin: 0 auto;
  margin-top: 4rem;
  border-radius: 35px;
  overflow: hidden;
  border: 10px solid #363534;
  background: #F9EA85;

  .app-title-box {
    color: #333333;
    height: 5rem; 
    margin: 0 auto;
    width: 85%;   
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;
    // border: 1px solid orange;
  }

  .app-title-user {
    font-size: 1.9rem;
    font-weight: bolder;
    margin-bottom: 0.7rem;
  } 

  .app-title-tasks {
    font-size: 1.3rem;
    font-weight: 700;
    color: #F57953;
  } 
`;


function MainPage(props) {
  
  const {todos} = props;

  const noOfTodayTask = (todos.filter((todo) => {
    return todo.division === 'Today';
  })).length;

  const noOfPlannedTask = (todos.filter((todo) => {
    return todo.division === 'Planned';
  })).length;

  const noOfPersonalTask = (todos.filter((todo) => {
    return todo.division === 'Personal';
  })).length; 

  const noOfWorkTask = (todos.filter((todo) => {
    return todo.division === 'Work';
  })).length;


  return ( 
    <MainPageWrapper>
      <div className="app-title-box">
        <div className="app-title-box-left">
          <p className="app-title-user">{userName}</p>
          <p className="app-title-tasks">Today, you have {noOfTodayTask} tasks...</p>
        </div>
        <img src={titleUserM} width='70' alt="Main Page Image" />   
      </div>

      <MainPageCard CardTitle={'Today'}    noOfTask={noOfTodayTask} />
      <MainPageCard CardTitle={'Planned'}  noOfTask={noOfPlannedTask} /> 
      <MainPageCard CardTitle={'Personal'} noOfTask={noOfPersonalTask} /> 
      <MainPageCard CardTitle={'Work'}     noOfTask={noOfWorkTask} />       

    </MainPageWrapper>
  );
}
export default MainPage;


