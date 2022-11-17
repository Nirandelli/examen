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
    <Tabla :campos="fields" :elementos="items" />
    <Footer />
    <Formulario @on-submit="onSubmit" />
  </main>
</template>

<script>
    export default {
      data() {
            return {
                count: 1,
                fields: ['No.', 'Parte', 'Concepto', 'Entrega', 'Medida', 'P.U.', 'Cantidad', 'Importe'],
                items: [
                    { 
                        'No.': 1, 
                        Parte: 'BAPM2X6GAMID', 
                        Concepto: 'BANDA DE AMARRE DE POLIESTER CON MATRACA DE 2" X6 M GANCHO CERRADO/ALAMBRE CAPACIDAD 3.5 MATRACA', 
                        Entrega: '1 días hab.', 
                        Medida: 'PZ', 
                        'P.U.': '$360.00',
                        Cantidad: '4',
                        Importe: '$1,440.00',
                    },
                    { 'P.U.': 'Subtotal(MXN)', Importe: '$1,440.00'},
                    { 'P.U.': 'Iva(16%)', Importe: '$230.40' },
                    { 'P.U.': 'Total(MXN)', Importe: '$1,670.40' },
                ]
            }
        },
        methods: {
          onSubmit(form) {
                this.count += 1
                let item = {...form}
                item['No.'] = this.count
                this.items.unshift(item)
          }
        }
    }
</script>


