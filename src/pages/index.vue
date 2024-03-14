<template>
 <h2>home page</h2>
 <template class="btnContainer">
   <v-btn to="alltasks" class="btn-primary">alltasks</v-btn>
   <v-btn to="todo" class="btn-primary">todo</v-btn>
 </template>
<RouterView/>
</template>

<script setup>
  //
</script>

<style scoped>
.btnContainer{
  margin: 0 auto;
  width:50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
