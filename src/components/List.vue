<script setup>
import { ref, watchEffect } from 'vue';
import useTodo from '../stores/app.js';
const store = useTodo();
const updateTodo = ref("");
const dialog = ref(false);
let currentIndex = null; 

const openDialog = (index) => {
  dialog.value = true;
  updateTodo.value = store.newTo[index].todo;
  currentIndex = index; 
}

const updateHandler = () => {
  dialog.value = false;
  console.log(currentIndex, updateTodo.value);
  if (currentIndex !== null) {
    store.editItem(currentIndex, updateTodo.value);
    currentIndex = null; // Reset the currentIndex after editing
  }
}
</script>

<template>
  <v-card max-width="700" class="mx-auto my-2"> 
    <v-list>
      <v-list-subheader>new Tasks</v-list-subheader>
      <v-list-item v-for="(item,index) in store.newTo" :key="index" :value="item">
        <template v-slot:prepend>
          <p>{{ index +1}}.  </p>
        </template>
        <v-list-item-title v-text="item.todo" :class="{strike:item.completed}" @click="store.completeCheck(index,item.completed)"></v-list-item-title>
        <template v-slot:append>
          <v-icon icon="mdi-pencil" class="mx-2" @click="openDialog(index)" />
          <v-icon icon="mdi-close-circle" @click="store.removeItem(index)" />
        </template>
      </v-list-item>
    </v-list>
  </v-card>

  <v-dialog v-model="dialog" max-width="600" @update:model-value="dialog = $event">
    <v-card title="Update todo">
      <v-card-text>
        <v-text-field label="Todo" class="text-center" v-model="updateTodo" required></v-text-field>
      </v-card-text>
      <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
      <v-btn color="primary" text="Save" variant="tonal" @click="updateHandler(index, updateTodo)"></v-btn>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.strike {
  text-decoration: line-through;
  color: green;
}
</style>
