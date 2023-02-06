import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import Today from "../../images/today.png";
// import Planned from "../../images/planned.png";
// import Personal from "../../images/personal.png";
// import Work from "../../images/work.png";




const CardWrapper = styled.div`
  width: 390px;
  height: 110px;
  margin: 25px auto;  
  border-radius: 20px;
  border: 1px solid lightgray;
  background: #F4F0E5;
  box-shadow: 10px 10px 20px #dbdbdb;
  color: #333333;
  cursor: pointer;


  .card-box {
    height: 110px; 
    width: 100%;
    padding-left: 30px;   
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .card-box-right {
    margin-left: 30px;
  }

  .card-box-title {
    font-size: 1.8rem;
    font-weight: bolder;
    margin-bottom: 0.4rem;
  } 

  .card-box-tasks {
    font-size: 1.2rem;
    font-weight: bold;
    color: gray;
  } 

`;



function MainPageCard(props) {

  const navigate = useNavigate();

  const { CardTitle, noOfTask } = props;

  return (  
    <CardWrapper onClick={() => {navigate(`/${CardTitle}`);}}>                
      <div className="card-box">
      <img src={require(`../../images/${CardTitle}.png`)} alt="" /> 
        <div className="card-box-right">
          <p className="card-box-title">{CardTitle}</p>
          <p className="card-box-tasks">{noOfTask} Tasks</p>
        </div>           
      </div>

    </CardWrapper>
  );
}

export default MainPageCard;