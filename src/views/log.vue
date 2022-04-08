<template>
    <div class="padreLog">
        <h1 class="help">General User: user 14</h1>
        

        <div class="inputUser">

            <div class="cua">
                <div class="inputsTable">
                    <div class="tablas">
                    <input type="text" class="entradaTexto" v-model="name" placeholder="Name">
                    <div class="espacio"></div>
                    <input type="number" class="entradaTexto" v-model="ID" placeholder="ID">
                    <button v-on:click="format" class="bt-ch">comprobar</button>
                    </div>
            </div> 

             <div class="p" v-if="name === 'user' && ID === 14">
                 <a  href="/home"><button class="bt-ch2"  v-on:click="entrar">ENTRAR</button> </a>
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
                        t: "Universal User"+" "+"name:user"+" "+" "+ "ID:14",
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