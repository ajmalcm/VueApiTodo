// Utilities
import { defineStore } from 'pinia'
import { ref,computed } from 'vue'
import axios from 'axios';
export const useTodo = defineStore('todo', ()=>{
  const todoList=ref([]);
  const newTo=ref([]);

  //getAlltodoList
  const getAllTodos=async()=>{
   const {data}=await axios.get('https://dummyjson.com/todos')
   todoList.value=data.todos;
  }


  //adding new todo (request will return the newly AAded todo but is not reflecting in server couse its how that api works)
  const addNewTodo=async(newData)=>{
    const {data}=await axios.post('https://dummyjson.com/todos/add',newData,{
      headers: { 'Content-Type': 'application/json' },
    })
    newTo.value=[...newTo.value,data];
    return data;
  }

  //updating the newTodo (to completed is true or false but its not reflecting in server couse its how that api works)
  const updateNewTodo=async(id,completed)=>{
    const {data}=await axios.put(`https://dummyjson.com/todos/${id}`,{completed:!completed},{
      headers: { 'Content-Type': 'application/json' },
    })
    console.log(data);
  }

  //to strike out the tasks which is completed
  const completeCheck=(index,completed)=>{
    newTo.value[index].completed=!completed;
  }

  //to remove the tasks which is done
  const removeItem=(index)=>{
    newTo.value.splice(index,1);
  }

  //editing the content of the todo(task)
  const editItem=(index,newContent)=>{
    console.log(index,newContent)
    console.log(newTo.value[index])
    newTo.value[index].todo=newContent
  }

  return {todoList,getAllTodos,addNewTodo,newTo,completeCheck,updateNewTodo,removeItem,editItem}

})

export default useTodo;
