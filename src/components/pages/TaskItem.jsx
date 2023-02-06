import React from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from "react-icons/md";
import styled, { css } from "styled-components";


const ListItemWrapper = styled.div`
  font-size: 1.3rem;
  font-weight: 400;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  /* border: 1px solid orange; */

  /* &:nth-child(even) {
    background: #f6f9fa;
  } */

  /* 엘리먼트 사이사이에 테두리 넣기 */
  /* & + & {
    border-top: 1px solid #dee2e6;
  } */
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    /* 아이콘 스타일링 */
    font-size: 1.7rem;

    /* 체크되었을 때 보여줄 스타일 */
    color: ${props => props.checked && '#22b8cf'};
  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;    // 차지할 수 있는 영역 모두 차지

  /* 체크되었을 때 보여줄 스타일 */
  /* 조건부 스타일링 시 여러 개의 css를 설정할 때는 아래 형식으로 사용  */
  ${props => props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;


function TaskItem(props) {

  const { todo, onRemove, onToggle, onInsert } = props;
  const {id, text, checked } = todo;

  return (
    <ListItemWrapper>
      <Checkbox checked={checked} onClick={() => {onToggle(id);}}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text checked={checked}>{ text }</Text>
      <Remove onClick={() => {onRemove(id);}} >
        <MdRemoveCircleOutline />
      </Remove>
    </ListItemWrapper>
  );
}

export default TaskItem;