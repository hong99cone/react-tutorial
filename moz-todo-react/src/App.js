import React from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";

function App(props) {
  // props 는 부모에서 자식요소로만 전달되기 때문에 자식요소인 component에 있는 함수를 전달받아서 사용하기 위해선 콜백함수가 필요
  function addTask(name) {
    alert(name);
  }

  const taskList = props.tasks?.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      // 배열로 map 함수를 이용해서 JSX 리스트를 구현하기 위해선 key prop을 자식컴포넌트마다 넣어줘야 error 안뜸
      key={task.id}
    />
  ));
  return (
    <div className="todoapp stack-large">
      <h1>🐱‍🏍Let's to do!🐱‍🏍</h1>
      <Form addTask={addTask} />
      <div className="filters btn-gruop stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">3 tasks remaning</h2>
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
