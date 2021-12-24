import { defineStore } from "pinia";
import { getTodoList } from "../network/api";

type List = {
  id: string,
  title: string,
  isDelete: boolean,
  isLock: boolean,
  count: number
}
export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    const todoList: List[] = [];
    return {
      counter: 0,
      todoList,
    }
  },
  actions: {
    asGetTotoList() {
      getTodoList().then(res => {
        console.log('123123123', res.data.todos)
        this.todoList = res.data.todos;
      }).catch(err => {
        console.log('err', err);
      })
    }
  }
})
