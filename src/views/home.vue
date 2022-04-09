<template>


<headersito class="heder"/>

<div class="padre">

    <div class="pi">
       
        <!--<div class="imagenes"  >
             
    <a class="a" :href="ruta"><h2 class="nombreImagenes">Crear Nuevo Stock</h2><img class="imagen" src="@/assets/icons/cajitas.png"></a>
            
       <a class="a"><h2 class="nombreImagenes"> Revisar stocks</h2> <img class="imagen"  src="@/assets/icons/cajitas.png"></a>
                            

        <a class="a"><h2 class="nombreImagenes">Información</h2><img class="imagen" src="@/assets/icons/ask.png" ></a>

        </div>-->

            <nav class="pa">
                <ul class="horizontal">
                    <li ><a :href="ruta" >CREAR STOCK</a></li>
                    <li>
                    <a href="#" >STOCKS GUARDADOS</a>
                        <ul class="menuVertical" >
                            <li v-for="st in sto" :key="st"><a href="#">{{st.titulo}} {{st.fecha}}</a></li>
                        </ul>   
                    </li>
                    <li>
                    <a href="#" >INFORMACIÓN</a>
                        <ul class="menuVertical">
                        </ul>   
                    </li>
                </ul>
            </nav>


            <div class="padre2">
                <div class="hijo2">
                    <div class="contenido">
                        <div class="infor">
                            <img class="inforImg" src="@/assets/logo.png">
                            <h2 class="in">352-000-0000</h2>
                        </div>
                    </div>
                </div>
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
                sto:[{titulo:"stock", fecha:"20/05/22"}, {titulo:"stock", fecha:"24/08/22"}]  ,        
                informacion:`Esta pagina se realizo por Osito company /
                gracias por la visita`,
            }
        },

        
     
    }

</script>


<style lang="scss">

@import  '@/assets/css/stylesHome.scss';
@import '@/assets/phone/homePhone.scss'

</style>