<template>
<div class="dady">

 <header  class="cabecera" >

   <nav>
  <a href="/" class="linkRegreso"><button class="regreso"><img class="casita" src="@/assets/icons/casa.png"></button></a>
   </nav>

    <input type="text" class="texto"  placeholder="Añadir Producto" v-model="value"/>
    <input type="text"  class="texto2" placeholder="Añadir fecha" v-model="value2"/>
   

   
    <button  class="añadirL" v-on:click="añadir()">Añadir a Lista 1</button>
    <button  class="añadirC" v-on:click="añadir2()">Añadir a Lista 2</button>
    <button  class="borrar" v-on:click="eliminar()" >Borrar</button>
   

        <!--PhoneVersion -->
        
      <div class="textoPhoned">
        <input type="text" class="textoPhone"  placeholder="Añadir Producto" v-model="value"/>
        <br />
        <input type="text"  class="textoPhone2" placeholder="Añadir fecha" v-model="value2"/>
      </div>

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
    <ul v-if="mostrar" class="ulproduct">
<li class="product"  v-for="(l, index) in lista" v-bind:key="index">
  <p class="productText">{{l.titulo}}/{{l.fecha}}<input type="checkbox" class="check" v-model="l.eliminar"></p>
</li>

</ul>
<div v-else class="vacio">No hay Datos</div>
</div>



<div class="tableroListaDos">
  <ul v-if="mostrar2" class="ulproduct" >
    <li  class="product" v-for="(f, index) in lista2" v-bind:key="index">
    <p class="productText">{{f.titulo}} {{f.fecha}}<input type="checkbox" class="check"  v-model="f.eliminar"></p>
    
    </li>

</ul>
<div v-else class="vacio">
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
        value2:"",
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
        this.value2 = ""
        this.contador++
      },

      añadir2:function(){
        this.lista2.push({titulo:this.value, fecha:this.value2, id:(new Date()).getTime(), eliminar:false }),
        console.log(this.lista2)
        this.mostrar2=true
        this.contador++
        this.value = ""
        this.value2 = ""
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
  @import '@/assets/css/estilosStock.scss';
  @import '@/assets/phone/stockPhone.scss';




</style>