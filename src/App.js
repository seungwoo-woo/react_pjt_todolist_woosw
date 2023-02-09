import { useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { Reset } from "styled-reset";
import { v4 as uuidv4 } from "uuid";

import MainPage from "./components/pages/MainPage";
import PersonalPage from './components/pages/PersonalPage';
import PlannedPage from './components/pages/PlannedPage';
import TodayPage from './components/pages/TodayPage';
import WorkPage from './components/pages/WorkPage';


const GlobalStyle = createGlobalStyle`
  /* 글로벌(공통) 스타일 */
  body {
    background: #F4F0E5;
  }
`;


function App() {

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: '수업 교안 작성하기',
    //   checked: true,
    //   division: 'today',
    // },
    // {
    //   id: 2,
    //   text: '시험 채점하기',
    //   checked: true,
    //   division: 'today',
    // },
    // {
    //   id: 3,
    //   text: '단계별 실습 예제 만들기',
    //   checked: false,
    //   division: 'planned',
    // },
    // {
    //   id: 4,
    //   text: '리액트 재미있네.',
    //   checked: false,
    //   division: 'work',
    // }
  ]);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);


  // 로컬 스토리지에 저장하기
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleInsert = useCallback((text, division) => {
    const newTodo = {
      // id: nextId.current,
      id: uuidv4(),
      text,
      checked: false, 
      division, 
    };
    
    setTodos(todos.concat(newTodo));   //  새로운 배열 반환함

  }, [todos]);



  const handleRemove = useCallback((id) => {

    setTodos(todos.filter((todo) => todo.id !== id));

  }, [todos]);


  const handleToggle = useCallback((id) => {
    setTodos( 
      todos.map((todo) => {
        return todo.id === id ? {...todo, checked: !todo.checked } : todo
      })
    );

  }, [todos]);



  return (
    <>
      <Reset />
      <GlobalStyle />
      
      <BrowserRouter>      
        <Routes>
          <Route path='/' element={<MainPage todos = {todos} />} />
          <Route path='/Today' element={<TodayPage todos = {todos} onRemove = {handleRemove} onToggle={handleToggle} onInsert = {handleInsert}/>} />
          <Route path='/Planned' element={<PlannedPage todos = {todos} onRemove = {handleRemove} onToggle={handleToggle} onInsert = {handleInsert}/>} />
          <Route path='/Personal' element={<PersonalPage todos = {todos} onRemove = {handleRemove} onToggle={handleToggle} onInsert = {handleInsert}/>} />
          <Route path='/Work' element={<WorkPage todos = {todos} onRemove = {handleRemove} onToggle={handleToggle} onInsert = {handleInsert}/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
