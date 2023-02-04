import styled from "styled-components";
import titleUserM from "../../images/title-box-user-m.png";
import MainPageCard from "./MainPageCard";

const userName = 'Woo SeungWoo';
const todayTask = 5;


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
    font-size: 1.2rem;
    font-weight: 500;
    color: #F57953;
  } 
`;



function MainPage() {
  return ( 
    <MainPageWrapper>
      <div className="app-title-box">
        <div className="app-title-box-left">
          <p className="app-title-user">{userName}</p>
          <p className="app-title-tasks">Today you have {todayTask} tasks...</p>
        </div>
        <img src={titleUserM} width='70' alt="Main Page Image" />   
      </div>

      <MainPageCard CardImage={'today'} CardTitle={'Today'} noOfTask={6} /> 
      <MainPageCard CardImage={'planned'} CardTitle={'Panned'} noOfTask={9} /> 
      <MainPageCard CardImage={'personal'} CardTitle={'Personal'} noOfTask={3} /> 
      <MainPageCard CardImage={'work'} CardTitle={'Work'} noOfTask={2} />       

    </MainPageWrapper>
  );
}

export default MainPage;


