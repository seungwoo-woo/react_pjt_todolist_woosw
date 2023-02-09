import React, { useState } from 'react';
import styled from "styled-components";
import newTask from "../../images/newTask.png";
import Toggle from '../button/Toggle';

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  background: rgba(230, 230, 230, 0.6);
  position: absolute; 
  top: 0;
  left: 0;
  
  .modalBox {
    width: 420px;
    height: 290px;
    border: 2px solid lightgray;
    border-radius: 10px;
    background: #F9EA85;
    box-shadow: 10px 10px 20px #dbdbdb;
    color: #333333;
    position: absolute; 
    top: 250px;
    left: 28px;
  }

  .titleBox {
    margin-left: 30px;
    margin-top: 30px;
    margin-right: 35px;
    font-size: 1.5rem;
    font-weight: bolder;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  
  .clsBtn {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #F57953;
    box-shadow: 3px 3px 5px #dbdbdb;
    position: absolute;
    top: 5px;
    right: 5px;

    color: white;
    font-size: 17px;
    text-align: center;
    line-height: 21px;
    font-weight: bolder;

    cursor: pointer;
  }

  .footer {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;    
  }

  .Btn {
    width: 100px;
    height: 35px;
    border-radius: 10px;
    margin-top: 2rem;
    text-align: center;
    line-height: 30px;
    box-shadow: 5px 8px 10px #dbdbdb;
    color: white;
    font-size: 1.3rem;
    font-weight: 200;
    cursor: pointer;
  }

  .cancleBtn {
    background-color: #F57953;
  }

  .addBtn {
    background-color: #0acf97;
  }

  .inputBody {
    display: flex;
    margin: 25px 40px;        
  }
`;

const StyledInput = styled.input`
/* 기본 스타일 초기화 */
background: none;
outline: none;
border: none;
border-radius: 10px;
padding: 0.7rem;
line-height: 1.5;
font-size: 1rem;
color: #363534;
background-color: #f4f0e5;
flex: 1;           // 버튼을 제외한 영역을 모두 차지하기

&::placeholder {
  color: gray;
}
`;

function Modal({closeModal, onInsert, noOfTask, title}) {

  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onInsert(value, title);
    setValue(''); 
    closeModal(false); 
  };
  
  return (
    <ModalWrapper>
      <form className='modalBox' onKeyDown={(e)=> {
        if(e.key === 'Enter') {handleSubmit()}
      }}>
        <div className='clsBtn' onClick={() => closeModal(false)}>X</div>
        <div className="titleBox">
          <p>{`${title}`}'s New Task...</p>
          <img src={ newTask } width='60' alt="" />          
        </div>

        <div className='inputBody'>
          <StyledInput 
            type='text' 
            placeholder=" 할 일을 일력하세요."
            value = {value}
            onChange={handleChange}
          />
        </div>

        <div className='footer'>
          <div className='Btn cancleBtn' onClick={() => closeModal(false)}>cancle</div>
          <div className='Btn addBtn' onClick = {() => {
            if(value !== '' && noOfTask < 8){
              handleSubmit();
            }
          }} >add</div>
        </div>

        {/* <Toggle
          label="Toggle me"
          toggled={true}
        /> */}
        
      </form>
    </ModalWrapper> 
  );
  
}

export default Modal; 