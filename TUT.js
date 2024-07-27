import { TodoList } from "./components/TodoList.js"
import { fetchJSON } from "./Function/api.js" 
import { createElement } from "./Function/Dom.js"

try{ 
    const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const list = new TodoList(todos)
    list.appendTo(document.querySelector('#todolist'))
} catch(e) {
    const alertElement =  createElement('div',{
        class: 'alert alert-danger m-2',
        role:'alert'
    })
    alertElement.innerText = 'Impossible de charge les éléments'
    document.body.prepend(alertElement)
    
}