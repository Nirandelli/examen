<script setup>
import Button from '../components/Button.vue'
import Header from '../components/Header.vue'
import Tabla from '../components/Tabla.vue'
import Footer from '../components/Footer.vue'
import Formulario from '../components/Formulario.vue'
</script>

<template>
  <main>
    <Button />
    <Header />
    <Tabla />
    <Footer />
    <b-modal id="modal-1" size="lg" hide-footer  title="Formulario">
        <Formulario v-show="show" form="form" @onSubmit="onSubmit"/>
    </b-modal>
  </main>
</template>

<script>
    export default {
      data() {
            return {
                arrayFormulario:[],
                form: {
                    porte: '',
                    concepto: '',
                    entrega: '',
                    medida: '',
                    pu: '', 
                    cantidad: '', 
                    importe: '',
                },
                show: true
            }
        },
        methods: {
          showModal() {
                this.$refs['my-modal'].show()
          },
          hideModal() {
              this.$refs['my-modal'].hide()
          },
          toggleModal() {
              // We pass the ID of the button that we want to return focus to
              // when the modal has hidden
              this.$refs['my-modal'].toggle('#toggle-btn')
          },
          onSubmit(event) {
              event.preventDefault()
              alert(JSON.stringify(this.form))
          }
        }
    }
</script>


