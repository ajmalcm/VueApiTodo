<script setup>
import { ref } from 'vue';
import useTodo from "../stores/app.js";

const store=useTodo();
const newTodo=ref("");
const loading=ref(false);
const newData=ref({todo:"",completed:"",userId:""})
const rules=[
  value=>{
    if(value) return true
    else
    return "please enter a Task"
  }
]

const submitHandler=()=>{
  newData.value={todo:newTodo.value,completed:false,userId:store.todoList.length+1}
  setTimeout(()=>{
   let data=store.addNewTodo(newData.value)
    alert(newData.value.todo," added successfully")
    console.log(data)
    loading.value=!loading.value
    newTodo.value="";
  },1000)
  loading.value=!loading.value

}

</script>
<template>
  <v-sheet width="300px" class="mx-auto" >
    <v-form @submit.prevent="submitHandler" validate-on="submit lazy"> 

        <v-text-field label="Enter a task" type="text" v-model="newTodo" :rules="rules"/>
        <v-btn v-if="!loading" type="submit" block :disabled="!newTodo">submit</v-btn>
        <v-btn v-else block>
          <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular>
        </v-btn>
      
    </v-form>
  </v-sheet>
</template>
