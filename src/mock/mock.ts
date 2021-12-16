import axios from "axios";
import MockAdapter from "axios-mock-adapter";

export default {
  start() {
    const mock = new MockAdapter(axios);

    mock.onGet("/todo/list").reply(() => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            todos: ['1', '2']
          }])
        }, 200)
      })
    })
  }
}