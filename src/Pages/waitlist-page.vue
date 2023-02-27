<template>
    <!-- Header -->
    <header class="flex bg-[#F7EDFF] justify-evenly py-[64px]">
        <div class="flex flex-col justify-end"><img class="w-28" src="../assets/images/item1.png"></div>


        <div class="flex flex-col gap-[108px]">
            <div class="flex justify-center">
                <img class="w-64" src="../assets/images/Vector.png">
            </div>

            <div class="text-center flex flex-col gap-[84px]">
                <div class="flex flex-col gap-[24px]">
                    <h1 class=" font-bold text-5xl leading-[52.79px] text-[#3D276B]">
                        The ultimate platform for resources <br> in Web3, Crypto and Blockchain.
                    </h1>
                    <p class="leading-[32px] text-xl text-black">
                        Build a career in web3, crypto and blockchain. Make the most of opportunities in the <br> web3 space
                        and stay
                        up
                        to date with the latest news and trends.
                    </p>
                </div>

                <div class="flex justify-center">
                    <button class="bg-[#B07CE3] flex rounded-md px-16 py-4 text-white items-center gap-2">
                        <span>Join the waitlist</span>
                        <arrow-right-vue></arrow-right-vue>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-end"><img class="w-28" src="../assets/images/item2.png"></div>
    </header>

    <!-- Body -->
    <section class="bg-[#29173B] flex justify-center py-36">

        <form @submit.prevent="subscribe()" class="flex flex-col gap-8">
            <label class=" md:text-[45px] text-3xl font-bold text-center text-white leading-[1.2em]">Get notified when we
                launch! </label>

            <div class="flex flex-col gap-4 px-6">
                <div class="flex flex-col">
                    <label class="text-white ">Email Address</label>
                    <input v-model="form.email" class="rounded-md border border-[#A776D8] bg-transparent p-4 text-[#A776D8]"
                        placeholder="Enter Email Address">
                </div>

                <div class="flex flex-col w-full">
                    <label class="text-white">Full Name</label>
                    <input v-model="form.name"
                        class="w-full rounded-md border border-[#A776D8] bg-transparent p-4 text-[#A776D8]"
                        placeholder="Enter Full Name">
                </div>

            </div>

            <div class="flex justify-center">
                <button class="bg-[#B07CE3] flex rounded-md px-16 py-4 text-white items-center gap-2">
                    <span>Join the waitlist</span>
                    <arrow-right-vue></arrow-right-vue>
                </button>
            </div>

        </form>
    </section>


    <!-- Footer -->
    <footer class="bg-[#170515] text-white flex justify-center py-[80px] text-center">

        <div class="flex flex-col gap-11">
            <div class="flex justify-center">
                <logoWhite></logoWhite>
            </div>
            <p>
                The ultimate platform for resources in web3 design and development
            </p>

            <div class="flex justify-center gap-11">
                <facebook></facebook>
                <twitter></twitter>
                <instagram></instagram>
                <linkedin></linkedin>
            </div>

            <div>
                Copyright © 2022, Krptverse | All rights reserved.
            </div>
        </div>

    </footer>
</template>

<script setup>
import { inject, ref } from 'vue'

/** Import icons/logo */
import arrowRightVue from "@/components/icons/arrow-right.vue";
import twitter from "@/components/icons/twitter.vue";
import instagram from "@/components/icons/instagram.vue";
import linkedin from "@/components/icons/linkedin.vue";
import facebook from "@/components/icons/facebook.vue";
import logoWhite from "@/components/icons/logoWhite.vue"

const axios = inject('axios');
const form = ref({ email: '', name: '' })


function subscribe() {

    axios.post('https://krptrix.netlify.app' + '/.netlify/functions/api',
        form.value,
        {
            header: {
                'accept': 'application/json'
            }
        })
        .then((e) => {
            console.log(e)
        })
        .catch((e) => {
            console.log(e)

        })
}



</script>
