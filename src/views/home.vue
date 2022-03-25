<template>

<headersito />

<div class="padre">

    <div class="pi">

        <div class="imagenes"  >
                <h2>Crear Nuevo Stock</h2>
            <a href="stock"><img class="imagen" src="@/assets/icons/cajitas.png"></a>
               <h2> Revisar stocks</h2>
             <img class="imagen"  src="@/assets/icons/papeles.png">
               <h2>Información</h2>
                <img class="imagen" src="@/assets/icons/ask.png" >

        </div>
    </div>

        <div class="tecnicservice">
       

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
                
            }
        },
     
    }

</script>


<style lang="scss">

@import  '@/assets/css/stylesHome.scss';
@import '@/assets/phone/homePhone.scss'

</style>