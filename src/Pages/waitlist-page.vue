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
                    <h1 class=" font-bold text-5xl leading-[52.79px]">
                        The ultimate platform for resources <br> in Web3, Crypto and Blockchain.
                    </h1>
                    <p class="leading-[32px] text-xl">
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

        <div class="flex flex-col gap-8">
            <label class="text-[45px] text-white">Get notified when we launch! </label>

            <div class="flex flex-col gap-4">
                <div class="flex flex-col">
                    <label class="text-white ">Email Address</label>
                    <input class="rounded-md border border-[#A776D8] bg-transparent p-4 text-[#A776D8]"
                        placeholder="Enter Email Address">
                </div>

                <div class="flex flex-col">
                    <label class="text-white">Full Name</label>
                    <input class="rounded-md border border-[#A776D8] bg-transparent p-4 text-[#A776D8]"
                        placeholder="Enter Full Name">
                </div>

            </div>

            <div class="flex justify-center">
                <button class="bg-[#B07CE3] flex rounded-md px-16 py-4 text-white items-center gap-2">
                    <span>Join the waitlist</span>
                    <arrow-right-vue></arrow-right-vue>
                </button>
            </div>

        </div>
    </section>

    <!-- Footer -->
    <footer>


    </footer>
</template>

<script setup>
import arrowRightVue from "@/components/icons/arrow-right.vue";
</script>
