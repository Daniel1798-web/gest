<template>

<div class="f">

    <header class="fre">
        <h1 class="titulo">Sistema de gestión</h1>

 
</header>
      
    
</div>

</template>

<script>
export default{
    name:"baner",
   

    data(){
        return{
             tema:false,
            rutaGit:"https://github.com/Daniel1798-web",
            rutaLink:"https://www.linkedin.com/in/daniel-oto-diaz-45282a21b/",
        }
    },

    methods:{
        selected(){
          console.log("hi")
          this.tema = !this.tema
        }


    },

   
}
</script>




<style lang="scss" scoped>
@import url('@/assets/css/stylesHeader.scss');



</style>