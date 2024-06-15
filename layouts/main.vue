<template>
  <div>
    <div
        class="border-gray-100 border-b flex flex-col 2xl:flex-row md:flex-row drop-shadow-sm justify-between w-3/5 md:w-4/5 mx-auto items-center">
      <NuxtLink to="/" class="cursor-pointer">
        <img src="assets/imgs/m2m.svg" class="w-48 h-20">
      </NuxtLink>
      <div class="flex flex-row items-center">
        <nav class="flex flex-row space-x-5 nav lg:visible 2xl:visible xl:visible">
          <NuxtLink to="/all-events" class="text-lg" active-class="text-red-600 font-bold">Events</NuxtLink>
          <NuxtLink to="/become-a-host" class="text-lg" active-class="text-red-600 font-bold">Become A Host</NuxtLink>
          <NuxtLink to="/about" class="text-lg" active-class="text-red-600 font-bold">About</NuxtLink>
        </nav>
      </div>
    </div>
    <div class="flex flex-col justify-center items-center my-5 small-menu">
      <p @click="isOpen = true">Menu</p>
    </div>


    <div class="2xl:w-5/6 mx-auto">
      <slot/>

      <USlideover v-model="isOpen">
        <div class="p-4 align-middle self-content">
          <UButton
              color="gray"
              variant="ghost"
              size="sm"
              icon="i-heroicons-x-mark-20-solid"
              class="flex sm:hidden absolute end-5 top-5 z-10"
              square
              padded
              @click="isOpen = false"
          />

          <div class="flex flex-col items-center justify-center align-middle space-y-5 self-content my-20">
            <NuxtLink to="/all-events">
              <p class="text-3xl">Events</p>
            </NuxtLink>
            <NuxtLink to="/become-a-host">
              <p class="text-3xl">Become A Host</p>
            </NuxtLink>
            <NuxtLink to="/about">
              <p class="text-3xl">About</p>
            </NuxtLink>
          </div>

        </div>
      </USlideover>
    </div>

    <footer class="bg-white  w-full shadow-sm mt-8">
      <div class="bg-black w-full flex flex-row justify-center text-white py-5 border-b-4 border-red-600">
        <small class="text-gray-400">&copy; 2024. All Rights Reserved</small>
      </div>


      <div class="py-20 flex flex-col items-center">
        <NuxtLink>
          <img src="assets/imgs/m2m.svg" class="w-48">
        </NuxtLink>

        <div class="flex flex-row space-x-5 text-gray-600">
          <NuxtLink to="/all-events" class="text-md font-medium">Events</NuxtLink>
          <NuxtLink to="/become-a-host" class="text-md font-medium">Become A Host</NuxtLink>
          <NuxtLink to="/about" class="text-md font-medium">About</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>

const isOpen = ref(false)


</script>

<style scoped>
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .nav {
    display: none;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .nav {
    display: none;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .nav {
    display: block;
  }

  .small-menu {
    display: none;
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .nav {
    display: block;
  }

  .small-menu {
    display: none;
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .nav {
    display: block;
  }

  .small-menu {
    display: none;
  }
}
</style>
