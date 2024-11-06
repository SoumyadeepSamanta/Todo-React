import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import FirstComponent from './components/learning-examples/FirstComponent.jsx'
import {FifthComponent} from './components/learning-examples/FirstComponent.jsx'
import SecondComponent from './components/learning-examples/SecondComponent.jsx'
import ThirdComponent from './components/learning-examples/ThirdComponent.jsx'
import LearningJavascript from './components/learning-examples/LearningJavascript.jsx'
import Counter from './components/Counter/Counter.jsx'
import TodoApp from './components/Todo/TodoApp.jsx'

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
    </div>
  );
}

function PlayingWithProps({property1, property2}) {

  console.log(property1)
  console.log(property2)

  return (
    <div>Props</div>
  )
}

export default App;
