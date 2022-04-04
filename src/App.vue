<template>
<router-view></router-view>

</template>

<script>


export default {
  name: 'App',
  
  data(){
    return{
      hi:"hi"
    }
  }
}
</script>

<style >

  html{
    background-color: rgba(255, 255, 255, 0.952);
  }

  body{
   
     background-color: rgb(255, 255, 255);
    padding: 0%;
    margin: 0%; 
    display: grid;
    gap: 1rem;
    grid-auto-rows: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 50rem), 1fr));
    position: relative;
   
    overflow-x:hidden;
    display:inline-flex;
  }

</style>


