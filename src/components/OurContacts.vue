<template>
    <div class="wrapper">
        <b-container>
            <b-row>
                <b-col>
                    <h1 class="titles"> {{ CONTACT_TEXTS.title[lang] }} </h1>
                </b-col>
            </b-row>

            <b-row class="mt-3 mt-lg-5 p-3">
                <b-col cols="12" md="12" lg="6" class="p-0 pe-lg-4 mb-4 mb-lg-0">
                    <h2 class="texts contact-texts"> {{ CONTACT_TEXTS.secondary[lang] }} </h2>
                    <p class="mt-5 texts d-flex align-items-center contacts-items"> 
                        <img class="me-2" :src="require('../assets/phone.png')" width="32"/>
                        {{ default_phone_number }} 
                    </p>
                    <p class="texts d-flex align-items-center contacts-items"> 
                        <img class="me-2" :src="require('../assets/mail.png')" width="32"/>
                        {{ default_email }} 
                    </p>
                </b-col>

                <b-col cols="12" md="8" lg="6" class="mx-auto rounded">
                    <b-row class="shadow-lg contact-form px-2 py-3">
                        <b-col cols="12">
                            <label for="name"> {{ CONTACT_TEXTS.name[lang] }}: </label>
                            <b-input id="name" placeholder="Seu nome" class="contact-inputs"></b-input>
                        </b-col>

                        <b-col cols="12" class="mt-3">
                            <label for="email"> {{ CONTACT_TEXTS.email[lang] }}: </label>
                            <b-input id="email" placeholder="seu@email.com" class="contact-inputs"></b-input>
                        </b-col>

                        <b-col cols="12" class="mt-3">
                            <label for="phone"> {{ CONTACT_TEXTS.phone[lang] }}: </label>
                            <b-input id="phone" placeholder="(xx) xxxx-xxxx" class="contact-inputs"></b-input>
                        </b-col>

                        <b-col cols="12" class="mt-3">
                            <label for="market"> {{ CONTACT_TEXTS.market[lang] }}: </label>
                            <b-input id="market" placeholder="Seu segmento de mercado" class="contact-inputs"></b-input>
                        </b-col>

                        <b-col cols="12" class="mt-3">
                            <label for="message"> {{ CONTACT_TEXTS.message[lang] }}: </label>
                            <b-textarea id="message" placeholder="Sua mensagem" rows="8" class="contact-inputs"></b-textarea>
                        </b-col>

                        <b-col class="mt-4">
                            <b-button class="btn-secondary"> {{ CONTACT_TEXTS.send_button[lang] }} </b-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import Texts from './TextsMixins.vue'
export default {
    name: 'OurContacts',
    mixins: [Texts]
}
</script>

<style scoped lang="scss">
@import '../static/sass.scss';

.wrapper {
    min-height: 40vh;
}

.contact-inputs {
    color: white;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0px;
    transition: .3s;
}

.contact-inputs:focus {
    background-color: rgb(14, 14, 14);
    color: white;
    outline: 0px;
}

.contact-form {
    background-color: black;
}

.contact-texts {
    font-size: 40px;

    @include lg {
        font-size: 32px;
    }

    @include md {
        font-size: 26px;
    }
}

.contacts-items {
    font-size: 20px !important;

    @include md {
        font-size: 16px !important;
    }
}
</style>