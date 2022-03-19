<template>
hola

        <div class="p">

            <img
            v-for="image in images" 
            :key="image.id"
            :src="image.url"
            alt="">

      
    </div>
</template>

<script>
import {ref} from 'vue'
    export default{
        
        name:"home",

        data(){
            return{               
                
            }
        },
        setup(){
            const images = ref([
                {
                    id:1 , url:require('@/assets/caracteristicas-de-los-almacenes-logisticos.jpg')
                },

                {
                    id:2 , url:require('@/assets/frio.jpg')
                }


            ])
            return {images}
        }
    }

</script>


<style lang="scss">

@import  '@/assets/estilosHome.scss';
img{
    width: 200px;
    
}

.p{
    background-color: beige;
}


</style>