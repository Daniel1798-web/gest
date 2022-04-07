<template>
    <div class="padreLog">
        <div class="inputUser">
            <div class="cua">
                    <h1 class="help">{{t}}</h1>
                <div class="inputsTable">
                    <input type="text" class="entradaTexto" v-model="name" placeholder="Name">
                    <div class="espacio"></div>
                    <input type="number" class="entradaTexto" v-model="ID" placeholder="ID">
                    <button v-on:click="format">comprobar</button>

            </div> 
        </div>

    </div>
    <p>{{formatName}}</p>
<div v-if="name === 'user' && ID === 14">
     <a  href="/home"><button  v-on:click="entrar">ENTRAR</button> </a>
</div>

        <div class="cartaLog" >
            <div class="cartaHijo">

                <div class="datosHijo">
                    <p class="dhp">name:<input class="datosTexto" v-model="name"  readonly="readonly" disabled></p>
                     <p class="dhp">ID:<input class="datosTexto" v-model="ID"  readonly="readonly" disabled></p>
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
                        formatName:"",
                        ID:"",
                        r:false,
                        t: "si eres nuevo usa"+" "+"name:user"+" "+" "+ "ID:14",
                        c:"user",
                        d:14,
                    }
                },

                computed:{
                    entrar(){
                      
                        return this.r = true
                    }
                },
                watch:{
                    name(newVal, oldVal){
                        console.log(newVal, oldVal)
                    }
                },

                methods:{
                    format(){
                       this.name =   this.name.toLowerCase()
                    }
                }
            
            
            }
</script>
<style lang="scss">
    @import "@/assets/css/logStyle.scss";

</style>