import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { todoList } from "./list";

export default {
  start() {
    const mock = new MockAdapter(axios);

    mock.onGet("/todo/list").reply(() => {
      const mockTodo = todoList.map(todo => {
        return {
          id: todo.id,
          title: todo.title,
          count: todo.item.filter(data => {
            return !data.checked
          }).length,
          isLock: todo.isLock,
          isDelete: todo.isDelete
        }
      }).filter(todo => {
        return !todo.isDelete;
      })

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: mockTodo
          }])
        }, 200)
      })
    })
  }
}