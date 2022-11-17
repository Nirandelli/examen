<template>
    <b-form @submit="$emit('onSubmit')" @reset="onReset" v-if="show">
        
        <b-form-group label="Porte:" label-for="input-porte">
            <b-form-input
                id="input-porte"
                v-model="form.porte"
                placeholder="Porte"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Concepto:" label-for="input-concepto">
            <b-form-input
                id="input-concepto"
                v-model="form.concepto"
                placeholder="Concepto"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Entrega:" label-for="input-entrega">
            <b-form-input
                id="input-entrega"
                v-model="form.entrega"
                placeholder="Entrega"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Medida:" label-for="input-medida">
            <b-form-input
                id="input-medida"
                v-model="form.medida"
                placeholder="Medida"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="PU:" label-for="input-pu">
            <b-form-input
                id="input-pu"
                v-model="form.pu"
                placeholder="PU"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Cantidad:" label-for="input-cantidad">
            <b-form-input
                id="input-cantidad"
                v-model="form.cantidad"
                placeholder="Cantidad"
                required
            ></b-form-input>
        </b-form-group>

        <b-form-group label="Importe:" label-for="input-importe">
            <b-form-input
                id="input-importe"
                v-model="form.importe"
                placeholder="Importe"
                required
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Guardar</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Resultado">
        <pre class="m-0">{{ form }}</pre>
    </b-card>
</template>

<script>
    export default {
        methods: {
            onReset(event) {
                event.preventDefault()
                // Reset our form values
                this.form.porte = ''
                this.form.concepto = ''
                this.form.entrega = ''
                this.form.medida = ''
                this.form.pu = ''
                this.form.cantidad = ''
                this.form.importe = ''
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
                })
            }
        }
    }
</script>
