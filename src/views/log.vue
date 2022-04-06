<template>
    <div class="padreLog">
        <div class="inputUser">
            <div class="cua">
                <div class="inputsTable">
                    <input type="text" class="entradaTexto" v-model="name" placeholder="Name">
                    <div class="espacio"></div>
                    <input type="number" class="entradaTexto" v-model="ID" placeholder="ID">
            </div> 
        </div>
    </div>



        <div class="cartaLog" v-if="name === 'carlitos' && ID === 14">
            <div class="cartaHijo">
                <a  href="/home"><button  v-on:click="entrar">ENTRAR</button> </a>

                <div class="datosHijo">
                    <p>name:<input class="datosTexto" v-model="name"  readonly="readonly" disabled></p>
                     <p>ID:<input class="datosTexto" v-model="ID"  readonly="readonly" disabled></p>
                </div>
            </div>
        </div>

      


    </div>



</template>
<script>
    export default{
            name:"log",

                data(){
                    return{
                        name:"",
                        ID:"",
                        r:false,
                    }
                },

                computed:{
                    entrar(){
                      
                        return this.r = true
                    }
                }
            
            
            }
</script>
<style lang="scss">
    @import "@/assets/css/logStyle.scss";

</style>