<template>
    <div class="padreLog">
      

        <div class="inputUser">

            <div class="cua">
                <div class="inputsTable">
                    <div class="tablas">
                    <input type="text" class="entradaTexto" v-model="name" placeholder="Name">
                    <div class="espacio"></div>
                    <input type="number" class="entradaTexto" v-model="ID" placeholder="ID">
                    <button v-on:click="format" class="bt-ch">comprobar</button>
                    <button class="bt-ch" v-on:click="ayuda">HELP</button>
                     <div class="p" v-if="name === 'user' && ID === 14">
                 <a  href="/home"><button class="bt-ch2"  v-on:click="entrar">ENTRAR</button> </a>
                    </div>
                    </div>
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
                    },

                    ayuda(){
                        alert("Clave general:"+" "+"user"+" "+"14")
                    }
                }
            
            
            }
</script>
<style lang="scss" scoped>
html{
    margin: 0%;
    padding:0%;
}

body{
     margin: 0%;
    padding:0%;
}
    @import "@/assets/css/logStyle.scss";
    @import "@/assets/phone/logPhone.scss" ;
</style>