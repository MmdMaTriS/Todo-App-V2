import React, { useReducer, useEffect, useContext } from "react";
import AddTodoInput from "./components/AddTodoInput";
import Todo from "./components/Todo";
import GetFinishedTask from "./components/GetFinishedTask";

//Design-System Sources and Components
import { Menu } from "antd";
import { FolderOutlined } from "@ant-design/icons";
import { TodoContext } from "./context/TodoContext";
const { SubMenu } = Menu;

// const initialTodo = JSON.parse(localStorage.getItem("todo-data")) || [];
// function reducer(state, action) {
//   switch (action.type) {
//     case "add":
//       return [...state, action.payload];
//     case "remove":
//       return state.filter((s) => s.id !== action.payload);
//     case "changed":
//       return state.map((todo) => {
//         return todo.id === action.payload
//           ? { ...todo, isDone: !todo.isDone }
//           : todo;
//       });
//     case "todoStarted":
//       return state.map((todo) => {
//         return todo.id === action.payload
//           ? { ...todo, isStart: !todo.isStart }
//           : todo;
//       });
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, initialTodo);

  // useEffect(() => {
  //   localStorage.setItem("todo-data", JSON.stringify(state));
  // }, [state]);
  const { state, dispatch } = useContext(TodoContext);
  return (
    <>
      <Menu
        style={{ width: 256, position: "fixed", bottom: "0px", zIndex: "1" }}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          icon={<FolderOutlined />}
          title="Information's Of Tasks"
        >
          <Menu.ItemGroup key="g2" title="All Tasks">
            <Menu.Item key="2">
              <span>{state.length}</span>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g1" title="Finished Tasks">
            <Menu.Item key="1">
              <GetFinishedTask data={state} />
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <AddTodoInput />
                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      {state.map((todo) => (
                        <Todo key={todo.id} data={todo} />
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
