<template>
    <b-container class="bv-example-row">
        <perfect-scrollbar>
            <b-table striped hover :items="items" :fields="fields"></b-table>
        </perfect-scrollbar>
        
    </b-container>
</template>

<script>
    export default {
        data() {
        return {
            fields: ['No', 'Parte', 'Concepto', 'Entrega', 'Medida', 'P.U.', 'Cantidad', 'Importe'],
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
        }
    }
</script>