<script setup>
import { onMounted} from "vue";
import { watchEffect } from "vue";
import useTodo from "../stores/app.js";
const store=useTodo();

onMounted(()=>{
    store.getAllTodos()
})

watchEffect(()=>{
    store.todoList
    store.getAllTodos()
})
</script>

<template>

     <v-card max-width="700" class="mx-auto"> 
        <v-list v-if="store.todoList">
            <v-list-subheader>All Tasks</v-list-subheader>
            <v-list-item v-for="(item,index) in store.todoList" :key="index" :value="item">
                <template v-slot:prepend>
                    <p>{{ item.id }}.  </p>
                </template>
                <v-list-item-title v-text="item.todo" :class="{strike:item.completed}" @click="store.updateNewTodo(item.id,item.completed)"></v-list-item-title>
                
            </v-list-item>
        </v-list>
   </v-card> 
</template>
<style scoped>
.strike{
    text-decoration: line-through;
}
</style>