import { nanoid } from "nanoid";
import React, {useState} from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {

  const [filter, setFilter] = useState('All');
    // props.task를 useState hooks에 전달해야함, 초기상태
    const [tasks, setTasks] = useState(props.tasks);

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  };
  

  const FILTER_NAMES = Object.keys(FILTER_MAP);




  // props 는 부모에서 자식요소로만 전달되기 때문에 자식요소인 component에 있는 함수를 전달받아서 사용하기 위해선 콜백함수가 필요
  function addTask(name) {
    const newTask = {id: `todo-${nanoid()}`, name, completed:false};
    setTasks((currentArray) => [ ...currentArray, newTask]);
    // setTasks([...taskList, newTask]);
    // setTasks([newTask, ...taskList]);

    console.log(newTask);
  }


  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task (추가하는 할일의 data가 추가된 data와 같은 값을 가지고 있다면)
      if(id === task.id) {
        // use obj spread to make a new obj 뭐라는거야 새롭게 퍼진 오브젝트를 사용해라?
        // whose 'completted' prop has been inverted
        return {...task, completed: !task.completed}
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
            //

            return {...task, name: newName}
        }
        return task;
    })
    setTasks(editedTaskList);
}

  const taskList = tasks
  .filter(FILTER_MAP[filter])
  .map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key= {task.id}
      toggleTaskCompleted = {toggleTaskCompleted}
      deleteTask = {deleteTask}
      editTask = {editTask}
    />
  ));

  console.log(taskList);

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
     key={name} 
     name={name}
     isPressed = {name === filter}
     setFilter = {setFilter}
     />
  ));
  


  const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${taskNoun} remaining`;



  return (
    <div className="todoapp stack-large">
      <h1>🐱‍🏍Let's to do!🐱‍🏍</h1>
      <Form addTask={addTask} />
      <div className="filters btn-gruop stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
}

// App comnponent를 다른 module에서도 사용할수 있게함
export default App;
