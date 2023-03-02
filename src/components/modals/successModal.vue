<template>
    <div v-if="open == true" class="fixed min-w-full min-h-full top-0 bg-[#0006] flex flex-col justify-center font-clash">
        <div class="flex justify-center mx-3">




            <div class="bg-white md:w-[40%] w-full  flex flex-col gap-4 rounded-xl  ">

                <div class="flex justify-end pt-8 pr-8">
                    <svg @click="$emit('close')" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24"
                        fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_2620_10443" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0"
                            width="24" height="24">
                            <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_2620_10443)">
                            <path
                                d="M12 13.0538L6.92689 18.1269C6.78844 18.2654 6.6144 18.3362 6.40479 18.3394C6.19519 18.3426 6.01795 18.2718 5.87309 18.1269C5.7282 17.982 5.65576 17.8064 5.65576 17.6C5.65576 17.3936 5.7282 17.218 5.87309 17.0731L10.9462 12L5.87309 6.92689C5.73462 6.78844 5.66379 6.6144 5.66059 6.40479C5.65737 6.19519 5.7282 6.01795 5.87309 5.87309C6.01795 5.7282 6.19359 5.65576 6.39999 5.65576C6.60639 5.65576 6.78202 5.7282 6.92689 5.87309L12 10.9462L17.0731 5.87309C17.2115 5.73462 17.3856 5.66379 17.5952 5.66059C17.8048 5.65737 17.982 5.7282 18.1269 5.87309C18.2718 6.01795 18.3442 6.19359 18.3442 6.39999C18.3442 6.60639 18.2718 6.78202 18.1269 6.92689L13.0538 12L18.1269 17.0731C18.2654 17.2115 18.3362 17.3856 18.3394 17.5952C18.3426 17.8048 18.2718 17.982 18.1269 18.1269C17.982 18.2718 17.8064 18.3442 17.6 18.3442C17.3936 18.3442 17.218 18.2718 17.0731 18.1269L12 13.0538Z"
                                fill="black" />
                        </g>
                    </svg>
                </div>

                <div class="md:px-16 md:pb-16 px-8 pb-8">
                    <div class="flex justify-center mb-8">
                        <img class="w-[50%]" src="../../assets/images/confetti.png">
                    </div>

                    <h1 class="text-center md:text-[40px] text-[#38046B] font-bold text-[26px]">Yaay, you’re on the
                        Waitlist! </h1>
                    <p class="leading-8 text-center text-[#676068] md:text-[20px] text-[16px]">
                        Congratulations! We have added your email to our waitlist, this means you are one of the first
                        people in
                        the world who will get access to Krptverse once we launch.
                    </p>

                    <a href="https://t.me/krptrix" @click="$emit('close')"
                        class="flex justify-center mt-8">
                        <button
                            class="bg-[#B07CE3] flex rounded-full md:px-16  w-full justify-center md:w-fit md:py-4 py-4 text-white items-center gap-2">

                            <span class="md:text-[20px] text-[15px] font-medium">
                                Join our community
                            </span>
                            <arrow-plane></arrow-plane>
                        </button>
                    </a>


                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import arrowPlane from "@/components/icons/arrow-plane.vue"

defineProps(['open']);
defineEmits(['close']);

</script>