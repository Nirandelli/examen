<template>
    <b-modal
        id="modal-form"
        ref="modal"
        title="Formulario"
        hide-footer
    >
        <b-form @submit.stop.prevent="handleSubmit">
            
            <b-form-group label="Parte:" label-for="input-porte">
                <b-form-input
                    id="input-porte"
                    v-model="form.Parte"
                    placeholder="Porte"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Concepto:" label-for="input-concepto">
                <b-form-input
                    id="input-concepto"
                    v-model="form.Concepto"
                    placeholder="Concepto"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Entrega:" label-for="input-entrega">
                <b-form-input
                    id="input-entrega"
                    v-model="form.Entrega"
                    placeholder="Entrega"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Medida:" label-for="input-medida">
                <b-form-input
                    id="input-medida"
                    v-model="form.Medida"
                    placeholder="Medida"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="PU:" label-for="input-pu">
                <b-form-input
                    id="input-pu"
                    v-model="form['P.U']"
                    placeholder="PU"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Cantidad:" label-for="input-cantidad">
                <b-form-input
                    id="input-cantidad"
                    v-model="form.Cantidad"
                    placeholder="Cantidad"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group label="Importe:" label-for="input-importe">
                <b-form-input
                    id="input-importe"
                    v-model="form.Importe"
                    placeholder="Importe"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button class="mt-2" @click="handleSubmit">Guardar</b-button>
        </b-form>
    </b-modal>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    Parte: '',
                    Concepto: '',
                    Entrega: '',
                    Medida: '',
                    'P.U.': '', 
                    Cantidad: '', 
                    Importe: '',
                },
            }
        },
        methods: {
            hideModal() {
                this.form.Parte = ''
                this.form.Concepto = ''
                this.form.Entrega = ''
                this.form.Medida = ''
                this.form['P.U.'] = ''
                this.form.Cantidad = ''
                this.form.Importe = ''
                // @todo: Se corregira el cierre del modal u.u
               // this.$refs['modal'].hide()
            },

            handleSubmit() {
                this.$emit('on-submit', this.form)
                this.hideModal()
            }
        }
    }
</script>
