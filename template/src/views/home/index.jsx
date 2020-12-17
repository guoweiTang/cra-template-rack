import React from 'react';
import { useSelector } from 'react-redux';
import logo from './img/logo.svg';
import './index.scss';
import { selectUser } from '../../store/userSlice';

function App() {
  const user = useSelector(selectUser);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          用户信息：
          <br />
          姓名：{user.name}
          <br />
          年龄：{user.age}
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
