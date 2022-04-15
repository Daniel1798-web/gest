<template>




<div class="padre">
   
        <headersito class="hederPhone"/>

    <div class="pi">

       
        <!--<div class="imagenes"  >
             
    <a class="a" :href="ruta"><h2 class="nombreImagenes">Crear Nuevo Stock</h2><img class="imagen" src="@/assets/icons/cajitas.png"></a>
            
       <a class="a"><h2 class="nombreImagenes"> Revisar stocks</h2> <img class="imagen"  src="@/assets/icons/cajitas.png"></a>
                            

        <a class="a"><h2 class="nombreImagenes">Información</h2><img class="imagen" src="@/assets/icons/ask.png" ></a>

        </div>-->

            <nav class="pa">
                <img class="paImage" src="@/assets/icons/casa.png">
                <ul class="horizontal">
                    <li ><a :href="ruta" >CREAR STOCK</a></li>
                
                <li>
                    <a href="#"   v-on:click="mostrar2">STOCKS GUARDADOS</a>
                </li>
                    <li class="SecInformacion" >
                    <a href="#" v-on:click="mostrar" >INFORMACIÓN</a>
                        <ul class="menuVertical">
                        </ul>   
                    </li>
                </ul>
            </nav>



            <div class="padre2">
                <div class="hijo2">

                          <div class="logo"  v-show="!informationSection && !mostrarStock" > 
                        <div class="logoconten"> 
                            <img class="logoImg" >
                        </div> 
                    </div>

                        <!--stock`s guardados-->
                        <div v-show="mostrarStock" class="stockPadre">
                        <div class="stockGuardado" >    
                            <li class="stockCajitas" v-for="st in sto" :key="st">
                            <a href="#" class="stockA">{{st.titulo}} {{st.fecha}} <a>Descargar</a> </a></li>  
                                   
                        </div>
                            <div class="stockDivBotones">   
                            <img class="imgBoton"  v-on:click="botonStockGuardado" v-show="anterioR" src="@/assets/icons/anterior.png">  
                            <img class="imgBoton" v-on:click="botonStockGuardado" src="@/assets/icons/proximo.png">
                            </div>
                        </div>

                    <div class="SecInfo" v-show="informationSection">
                            <div class="contenido1"> 
                                <div class="textIn">
                                <p class="contenido3">{{informacion}}</p>
                                </div>
                            </div>

                        <div class="inforCompany">
                            <div class="inforNumber">
                        <img class="inforImg" src="@/assets/icons/microsoft.png">
                        <h2 class="in1">OSITO ACADEMY</h2>
                            </div>
                         </div>

                        <div class="infor">
                                <div class="inforNumber">
                            <img class="inforImg" src="@/assets/icons/telefono.png">
                            <h2 class="in">352-000-0000</h2>
                            </div>
                        </div>
                    </div>


              
                </div>
            </div>
            <div class="footer">
                   <div class="footerData">
                       <!--  <div class="footerData2">
                        <p>Empresa: MaxLevel</p>
                        <p>email: maxlevel@gmail.com</p>
                        <p class="onlyPhone">Empresas Amigas</p>

                    </div>-->   

        <div class="empresasAmigas">
        <img src="@/assets/icons/microsoft.png" >
        <img src="@/assets/icons/deporte.png">
        <img src="@/assets/icons/cola.png">
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
                anterioR:false,
                mostrarStock:false,
                ruta:"/stock",  
                sto:[{titulo:"stock", fecha:"20/05/22"},{titulo:"stock", fecha:"20/05/22"}, {titulo:"stock", fecha:"24/08/22"},{titulo:"stock", fecha:"20/05/22"},{titulo:"stock", fecha:"20/05/22"},{titulo:"stock", fecha:"20/05/22"},{titulo:"stock", fecha:"20/05/22"},  {titulo:"stock", fecha:"20/05/22"},{titulo:"stock", fecha:"20/05/22"}],    
                informacion:`Contactenos ante cualquier inconveniente`,
                informationSection:false,
            }
        },
        methods:{

                mostrar(){
                    this.informationSection = !this.informationSection
                    this.mostrarStock = false
                },

                mostrar2(){
                this.informationSection = false
                 this.mostrarStock  = !this.mostrarStock
                

                },
                botonStockGuardado(){
                    this.anterioR = !this.anterioR
                }
               

        },
        
        watch:{
           
        }

        
     
    }

</script>


<style lang="scss">

@import  '@/assets/css/stylesHome.scss';
@import '@/assets/phone/homePhone.scss'

</style>