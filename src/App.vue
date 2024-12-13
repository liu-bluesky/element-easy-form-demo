<template>
    <dragForm :customoComponents="customoComponents"></dragForm>
</template>

<script>
import {custom} from './custom'
import {componentList} from "element-easy-form";
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      customoComponents:[
  componentList[0],
  ...custom
]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
