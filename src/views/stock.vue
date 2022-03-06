<template>
 <header class="cabecera" >
    <button>Back</button>
    <input type="text"  class="texto" placeholder="Añadir Producto" v-model="value"/>
    <input type="text"  class="texto" placeholder="Añadir fecha" v-model="value2"/>
    <button  class="añadirL" v-on:click="añadir()">Añadir a Lacteos</button>
    <button  class="añadirC" v-on:click="añadir2()">Añadir a Critico</button>
    <button  class="borrar" v-on:click="eliminar()" >Borrar</button>
</header>
</template>

<script>
export default{
    name:"stock",

    data(){
        return{
            lis:"hi"
        }
    },
}
</script>
