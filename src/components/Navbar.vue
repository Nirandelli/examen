<template>
    <b-navbar toggleable="sm" fixed type="light" variant="light">
        <b-navbar-brand href="#">GRIT</b-navbar-brand>
        <div class="navIcons">
        <b-navbar-toggle>
            <template #default="{ expanded }" right>
            <BootstrapIcon v-if="expanded" flip-h />
            <BootstrapIcon v-else icon="bag" flip-h />
            <h4 v-text="0"></h4>
            <h4></h4>
            </template>
        </b-navbar-toggle>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </div>

        <b-collapse id="nav-collapse" is-nav right>
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#">HOME</b-nav-item>

            <b-nav-item href="#">OUR PRODUCTS</b-nav-item>
            <b-nav-item href="#">ABOUT</b-nav-item>
            <b-nav-item href="#">CONTACT</b-nav-item>
            <b-nav-item href="#">BLOG</b-nav-item>

            <b-nav-item href="#" class="nav-item-responsive">STYLEGUIDE</b-nav-item>
            <b-nav-item href="#" class="nav-item-responsive">LICENSE</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
import { defineComponent } from "vue";
import BootstrapIcon from "@dvuckovic/vue3-bootstrap-icons";

export default defineComponent({
    components: {
        BootstrapIcon,
    },
    data() {
    return {
            visible: true,
        };
    },
});
</script>
