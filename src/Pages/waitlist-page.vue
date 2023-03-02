<template>
    <!-- Header -->
    <header class="flex bg-[#F7EDFF] justify-evenly md:py-[64px] py-11 font-clash">
        <div class="lg:flex flex-col justify-end hidden"><img class="w-[20em]" src="../assets/images/asset1.png"></div>


        <div class="flex flex-col md:gap-[108px] gap-11">
            <div class="flex justify-center">
                <img class="md:w-64 w-48" src="../assets/images/Vector.png">
            </div>

            <div class="text-center flex flex-col md:gap-[84px] gap-16 md:mb-20  px-8 lg:px-0">
                <div class="flex flex-col gap-[24px]">
                    <h1 class=" font-bold md:text-5xl text-[26px] md:leading-[52.79px] leading-8 text-[#3D276B] ">
                        The ultimate platform for resources <br class="hidden lg:block"> in Web3, Crypto and Blockchain.
                    </h1>
                    <p class="md:leading-[32px] leading-6 md:text-xl text-[16px]  text-black font-normal">
                        Build a career in web3, crypto and blockchain. Make the most of opportunities in the <br
                            class="hidden lg:block"> web3 space
                        and stay
                        up
                        to date with the latest news and trends.
                    </p>
                </div>

                <a href="#subscribe" class="flex justify-center">
                    <button
                        class="bg-[#B07CE3] hover:bg-[#944ddb] flex rounded-full md:px-28 w-full md:w-fit justify-center md:py-6 py-4 text-white items-center gap-2">
                        <span class=" font-semibold text-lg">Join the waitlist</span>
                        <arrow-right-vue :fill="'white'"></arrow-right-vue>
                    </button>
                </a>
            </div>
        </div>
        <div class="lg:flex flex-col justify-end hidden"><img class="w-[20em]" src="../assets/images/asset2.png"></div>
    </header>

    <!-- Body -->
    <section class="bg-[#29173B] flex justify-center md:py-36 py-16 relative font-clash" id="subscribe">

        <form @submit.prevent="subscribe()" class="flex flex-col gap-[5em]">
            <label class=" md:text-[45px] text-3xl font-semibold text-center text-[#FBF6FF] leading-[1.2em]">Get notified
                when
                we
                launch! </label>

            <div class="flex flex-col gap-10 px-6 lg:w-[60em]">
                <div class="flex flex-col gap-4">
                    <label class="text-[#F7EDFF] text-[20px] ">Email Address</label>
                    <input @input="check()" v-model="form.email"
                        class="rounded-xl border border-[#A776D8] bg-transparent p-5 text-[#F7EDFF] placeholder:text-[#A776D8]"
                        placeholder="Enter Email Address">
                </div>

                <div class="flex flex-col w-full gap-4">
                    <label class="text-[#F7EDFF] text-[20px]">Full Name</label>
                    <input @input="check()" v-model="form.name"
                        class="w-full rounded-xl border border-[#A776D8] bg-transparent p-5 text-[#F7EDFF] placeholder:text-[#A776D8]"
                        placeholder="Enter Full Name">
                </div>

                <div class="flex flex-col w-full gap-4 relative">
                    <label class="text-[#F7EDFF] text-[20px]">How did you hear about Krptverse</label>



                    <button @click="toggle()" id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                        class="font-medium text-sm  text-center flex justify-between items-center  w-full rounded-xl border border-[#A776D8] bg-transparent p-5 text-[#F7EDFF]"
                        type="button">

                        <span v-if="form.address == ''" class="text-[#A776D8]">
                            Select your option
                        </span>
                        <span v-else>
                            {{ form.address }}
                        </span>



                        <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="dropdown" class="rounded-xl absolute md:top-[9em] top-[11em] z-10 hidden bg-white w-full ">
                        <ul class=" text-xl text-black  flex flex-col  py-4">

                            <li @click="select('instagram')"
                                class="hover:text-[#38046B] cursor-pointer hover:bg-gray-100 px-4 py-4">
                                Instagram
                            </li>
                            <li @click="select('twitter')"
                                class="hover:text-[#38046B] cursor-pointer hover:bg-gray-100  px-4 py-4">
                                Twitter
                            </li>
                            <li @click="select('linkedin')"
                                class="hover:text-[#38046B] cursor-pointer hover:bg-gray-100 px-4 py-4">
                                LinkedIn
                            </li>
                            <li @click="select('Other communities')"
                                class="hover:text-[#38046B] cursor-pointer hover:bg-gray-100 px-4 py-4">
                                Other communities
                            </li>
                            <li @click="select('We reach out to you')"
                                class="hover:text-[#38046B] cursor-pointer hover:bg-gray-100 px-4 py-4">
                                We reached out to you
                            </li>
                        </ul>
                    </div>





                </div>

            </div>

            <div class="flex flex-col gap-8">

                <div class="flex justify-center px-8">
                    <button :disabled="disabled" :id="disabled ? 'disabled' : 'enabled'"
                        class="flex rounded-full w-full px-16 py-6 text-[#D8A4ff] items-center gap-4 justify-center ">
                        <span class="text-[18px] font-medium ">Join the waitlist</span>
                        <arrow-right-vue :fill="disabled ? '#D8A4ff' : 'white'"></arrow-right-vue>
                    </button>

                </div>

                <div class="flex justify-center items-center text-[#E04646] gap-1" v-if="error">

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2620_10482" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2620_10482)">
                            <path
                                d="M12 13C12.2833 13 12.5208 12.9042 12.7125 12.7125C12.9042 12.5208 13 12.2833 13 12V7.975C13 7.69167 12.9042 7.45833 12.7125 7.275C12.5208 7.09167 12.2833 7 12 7C11.7167 7 11.4792 7.09583 11.2875 7.2875C11.0958 7.47917 11 7.71667 11 8V12.025C11 12.3083 11.0958 12.5417 11.2875 12.725C11.4792 12.9083 11.7167 13 12 13ZM12 17C12.2833 17 12.5208 16.9042 12.7125 16.7125C12.9042 16.5208 13 16.2833 13 16C13 15.7167 12.9042 15.4792 12.7125 15.2875C12.5208 15.0958 12.2833 15 12 15C11.7167 15 11.4792 15.0958 11.2875 15.2875C11.0958 15.4792 11 15.7167 11 16C11 16.2833 11.0958 16.5208 11.2875 16.7125C11.4792 16.9042 11.7167 17 12 17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2167 20 16.1042 19.2208 17.6625 17.6625C19.2208 16.1042 20 14.2167 20 12C20 9.78333 19.2208 7.89583 17.6625 6.3375C16.1042 4.77917 14.2167 4 12 4C9.78333 4 7.89583 4.77917 6.3375 6.3375C4.77917 7.89583 4 9.78333 4 12C4 14.2167 4.77917 16.1042 6.3375 17.6625C7.89583 19.2208 9.78333 20 12 20Z"
                                fill="#E04646" />
                        </g>
                    </svg>

                    <span class="text-[16px]">
                        {{ error }}
                    </span>
                </div>

            </div>




        </form>

        <div v-if="load" class=" bg-[#0006] absolute top-0 min-w-full min-h-full flex flex-col justify-center">
            <div class="flex justify-center ">
                <spinner-double :open="load"></spinner-double>
            </div>
        </div>
    </section>


    <!-- Footer -->
    <footer class="bg-[#170515] text-[#F7EDFF] flex justify-center py-[80px] text-center font-clash">

        <div class="flex flex-col gap-6">
            <div class="flex justify-center">
                <logoWhite></logoWhite>
            </div>
            <p class="text-[18px] mb-8">
                The ultimate platform for resources in Web3, Crypto and Blockchain
            </p>

            <div class="flex justify-center gap-11 mb-8">

                <a href="https://t.me/krptrix">
                    <arrow-plane></arrow-plane>
                </a>
                <a href="https://twitter.com/krptverse">
                    <twitter></twitter>
                </a>
                <a href="https://instagram.com/krptverse?r=nametag">
                    <instagram></instagram>
                </a>
                <a href="https://www.linkedin.com/company/krptverse">
                    <linkedin></linkedin>
                </a>

            </div>

            <div>
                Copyright © 2022, Krptverse | All rights reserved
            </div>
        </div>

    </footer>



    <success-modal :open="open" @close="open = false; form = { email: '', name: '', address: '' }">
    </success-modal>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue'

/** Import icons/logo */
import arrowRightVue from "@/components/icons/arrow-right.vue";
import arrowPlane from "@/components/icons/arrow-plane.vue";
import twitter from "@/components/icons/twitter.vue";
import instagram from "@/components/icons/instagram.vue";
import linkedin from "@/components/icons/linkedin.vue";
import logoWhite from "@/components/icons/logoWhite.vue"
import spinnerDouble from "@/components/icons/spinnerDouble.vue";

/** Modals */
import successModal from '../components/modals/successModal.vue';



const axios = inject('axios');
const form = ref({ email: '', name: '', address: '' })
const open = ref(false);
const disabled = ref(true);
const load = ref(false);
const error = ref('');

function check() {

    if (form.value.email !== '' && form.value.name !== '' && form.value.address !== '') {

        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (form.value.email.match(validRegex)) {
            disabled.value = false;
        } else {
            disabled.value = true;
        }

    } else {
        disabled.value = true;
    }

    error.value = '';
}

function toggle() {
    $('#dropdown').toggle();
}

function select(e) {
    form.value.address = e;
    check();
    toggle();
}

function subscribe() {

    load.value = true;


    axios.post('https://krptrix.netlify.app' + '/.netlify/functions/api',
        form.value,
        {
            header: {
                'accept': 'application/json'
            }
        })
        .then(() => {
            load.value = false;
            open.value = true;
        })
        .catch((e) => {

            if (e.response !== undefined) {

                if (JSON.parse(e.response.data.message.response.text).title.toLowerCase() == 'member exists') {
                    error.value = "Oops! Email address already in use.";
                } else {
                    error.value = 'Oops! ' + JSON.parse(e.response.data.message.response.text).detail;
                }

            } else {
                error.value = "Error occured";
            }

            load.value = false;
        })
}

</script>

<style>
#disabled {
    background-color: #EFDBFF;
}

#enabled {
    background-color: #B07CE3;
    cursor: pointer;
    color: white;

}

#enabled:hover {
    background-color: #914bd8;
    color: white;

}
</style>
