import { useState } from 'react';
import { Practice1 } from './practice/Practice1';
import axios from 'axios';

export default function App() {
  /**
   * axiosで取ってきたデータをステートに保持して一覧表示する
   * stateの初期値は空配列
   */
  const [todos, setTodos] = useState<any>([]);
  const onClickFetchTodo = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((result) => {
        console.log(result.data);
        setTodos(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <Practice1 />
      <button onClick={onClickFetchTodo}>TODOデータ一覧取得</button>
      {todos.map((todo) => {
        <span>{todo.title}</span>;
      })}
    </div>
  );
}
