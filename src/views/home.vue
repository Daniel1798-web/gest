<template>


<headersito class="heder"/>

<div class="padre">

    <div class="pi">
       
        <div class="imagenes"  >
             
    <a class="a" :href="ruta"><h2 class="nombreImagenes">Crear Nuevo Stock</h2><img class="imagen" src="@/assets/icons/cajitas.png"></a>
            
       <a class="a"><h2 class="nombreImagenes"> Revisar stocks</h2> <img class="imagen"  src="@/assets/icons/cajitas.png"></a>
                            

        <a class="a"><h2 class="nombreImagenes">Información</h2><img class="imagen" src="@/assets/icons/ask.png" ></a>

        </div>
    </div>
       

</div>
</template>

<script> 
import headersito from '@/components/header.vue'
    export default{
        name:"home",

     components:{
                headersito
            },
           

        data(){
            return{   
                ruta:"/stock",            
                
            }
        },
     
    }

</script>


<style lang="scss">

@import  '@/assets/css/stylesHome.scss';
@import '@/assets/phone/homePhone.scss'

</style>