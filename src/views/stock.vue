<template>
<div class="dady">
 <header  class="cabecera" >
    <button>Back</button>
    <input type="text" class="texto"  placeholder="Añadir Producto" v-model="value"/>
    <input type="text"  class="texto2" placeholder="Añadir fecha" v-model="value2"/>
      
    <button  class="añadirL" v-on:click="añadir()">Añadir a Lista 1</button>
    <button  class="añadirC" v-on:click="añadir2()">Añadir a Lista 2</button>
    <button  class="borrar" v-on:click="eliminar()" >Borrar</button>

    <div class="botonesPhone">
    <button  class="añadirL2" v-on:click="añadir()">Añadir a Lista 1</button>
    <button  class="añadirC2" v-on:click="añadir2()">Añadir a Lista 2</button>
    <button  class="borrar2" v-on:click="eliminar()" >Borrar</button>
    </div>
    
</header>



    <div  class="huno">
    <h1 class="lactis1">Lista 1</h1>
    <h1 class="lactis2">Lista 2</h1>
    </div>
  

 <div class="dad">
    
<div class="tableroListaUno">
    <ul v-if="mostrar">
<li  v-for="(l, index) in lista" v-bind:key="index">
    <strong>{{l.titulo}}-{{l.fecha}}-{{index}}</strong>
    <input type="checkbox" v-model="l.eliminar">
</li>

</ul>
<div v-else>No hay Datos</div>
</div>



<div class="tableroListaDos">
        <ul v-if="mostrar2">
<li  v-for="(f, index) in lista2" v-bind:key="index">
    <strong>{{f.titulo}}-{{f.fecha}}-{{index}}</strong>
          <input type="checkbox"  v-model="f.eliminar">


</li>
</ul>
<div v-else>
  No hay Datos
  </div>
</div>

 </div>

<p>wy</p>
</div>


</template>

<script>
export default{
     name: 'stock',
 

  data(){
      return{
        mostrar:false,
        mostrar2:false,
        check:false,
        contador:0,
        value:"",
        value2:0,
        lista:[],
        lista2:[],
       
  }
  
  },
      methods:{

        prueba:function(){
            alert("funciona")
        },


      añadir:function(){
        this.lista.push({ titulo:this.value, fecha:this.value2,  id:(new Date()).getTime(), eliminar:false}),
        console.log(this.lista)
        this.mostrar=true
        this.value = ""
        this.value2 = 0
        this.contador++
      },

      añadir2:function(){
        this.lista2.push({titulo:this.value, fecha:this.value2, id:(new Date()).getTime(), eliminar:false }),
        console.log(this.lista2)
        this.mostrar2=true
        this.contador++
        this.value = ""
        this.value2 = 0
        console.log(this.contador)
      },

      eliminar:function() 
      {
        this.lista = this.lista.filter((elemento) => elemento.eliminar === false)
        console.log("eliminado")
        this.lista2 = this.lista2.filter((elemento2) => elemento2.eliminar === false)
    
      }
    },

     
}
</script>

<style  lang="scss" >
  @import '@/assets/estilosStock.scss';
  @import '@/assets/phone/stockPhone.scss';




</style>