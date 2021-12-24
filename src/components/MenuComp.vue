<script setup lang="ts">
  import { useAppStore } from "../store/app";

  const appStore = useAppStore();

  appStore.asGetTotoList()
</script>

<template>
  <div class="menu">
    <ul class="menuList">
      <li v-for="(item, index) in appStore.todoList" :key="item.id">
        <i class="icon iconFont iconLock"></i>
        <span class="title">{{ item.title }}</span>
        <span class="numBox">{{ item.count }}</span>
      </li>
    </ul>
  </div>
</template>

<style>
.menu{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 270px;
  height: auto;
  overflow-y: auto;
  background-color: #315481;
  background-image: linear-gradient(#315481,#918e82);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
.menuList li{
  display: block;
  position: relative;
  padding: 0 20px;
  height: 48px;
  line-height: 48px;
  text-align: left;
  text-decoration: none;
  color: hsla(0,0%,100%,.4);
  box-shadow: 0 1px 0 0 hsl(0deg 0% 100% / 15%);
}
.list{
  color: hsla(0,0%,100%,.4);
}
.list:hover, .list.checked{
  color: #fff;
}
.menu a .title, .addBtn .title{
  margin-left: 15px;
}
.list .numBox{
  position: absolute;
  right: 20px;
  top: 14px;
}
.list.checked .numBox, .list:hover .numBox{
  background: #2cc5d2;
  color: #fff;
}
.addBtn{
  cursor: pointer;
  color: #5db9ff;
}
</style>