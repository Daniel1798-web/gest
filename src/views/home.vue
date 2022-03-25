<template>

<headersito />

<div class="padre">

    <div class="pi">

        <div class="imagenes"  >
                Crear Nuevo Stock
            <a href="/stock"><img class="imagen" src="@/assets/frio.jpg"></a>
                Revisar stocks
             <img class="imagen2" src="@/assets/almacen.jpg">
        </div>
    </div>

        <div class="tecnicservice">

            <div class="contenboton">
                <button>AYUDA</button>
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
                
            }
        },
     
    }

</script>


<style lang="scss">

@import  '@/assets/css/stylesHome.scss';


</style>