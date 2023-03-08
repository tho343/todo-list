import logo from './logo.svg';
import './App.css';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
function App() {
  return (
    <div className="App">
      
      <div className='todo-list-container'>
          <TodoList/>
      </div>
      
    </div>
  );
}

export default App;
