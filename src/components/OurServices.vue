<template>
    <div class="wrapper">
        <b-container>
            <b-row>
                <b-col cols="12">
                    <h1 class="titles"> {{ TEXTS.title[lang] }} </h1>
                </b-col>
            </b-row>

            <b-row class="justify-content-evenly mt-3 mt-md-5 p-2">
                <b-col 
                    cols="12" 
                    md="6" 
                    lg="4"
                    v-for="(service, idx) in TEXTS.services"
                    :key="idx"
                    class="p-2"
                >
                    <div class="text-center shadow rounded mt-3 mt-md-0 py-3 px-2 bg-light h-100">
                        <img :src="require(`../assets/ourServices/${service.tag}.svg`)" :alt="service.img_alt[lang]" width="230px" height="230px">

                        <h2 class="secondary-titles">{{ service.title[lang] }}</h2>

                        <hr class="general-hr">

                        <p class="texts"> {{ service.desc[lang] }} </p>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import TEXTS from '../static/texts/service.json'
import StoreMixin from './StoreMixin'
export default {
    name: "OurServices",
    mixins: [StoreMixin],
    data: () => ({
        TEXTS: TEXTS
    }),
    computed: {
        lang: function () {
            return this.$store.state.lang
        }
    }
}
</script>