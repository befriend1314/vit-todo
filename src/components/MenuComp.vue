<script setup lang="ts">
  import { getTodoList } from '../network/api';

  getTodoList().then(res => {
    console.log('111111111111111', res.data)
  })
</script>

<template>
  <div>menu</div>
</template>