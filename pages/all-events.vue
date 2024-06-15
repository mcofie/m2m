<template>
  <div>
    <section class="justify-between w-5/6 mx-auto 2xl:p-10 pt-5">
      <div class="flex flex-row justify-between">
        <p class="2xl:text-2xl text-lg text-black">Events</p>

        <div class="flex flex-row space-x-4 hidden">
          <VueDatePicker v-model="date"></VueDatePicker>
          <select class="border border-gray-200 rounded-md">
            <option>Age group</option>
            <option v-for="i in ageGroups">{{ i }}</option>
          </select>
        </div>
      </div>
      <div
          v-if="!eventsResponse.pending && eventsResponse.status === 'success'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 my-5 justify-center items-content-center">
        <NuxtLink
            :to="`/events/${event.id}`"
            class="bg-white border border-gray-200 rounded-lg" v-for="event in eventsResponse.data.events">
          <div>
            <object width="100%" height="250px" style="object-fit: cover;"
                    :data="`${event.img_filename}`"
                    class="rounded-t-lg">
            </object>

            <span
                class="border hidden border-gray-200 w-1/6 text-gray-400 text-sm rounded-full px-2 py-1">
                                    {{ event.age_group }}
                                </span>

            <div class="p-5 flex flex-col space-y-1">
              <p class="text-xl text-black line-clamp-2 font-medium">{{ event.name }}</p>
              <p class="text-gray-700 text-sm">{{ event.location }}</p>
              <p class="text-gray-700 text-sm">{{ m(event.date_time).format('Do MMMM YYYY') }} @
                {{ m(event.date_time).format('h:mm a') }}</p>
              <p class="text-xl 2xl:text-2xl xl:text-2xl font-medium text-black pt-4">
                GHS {{ event.ticket_cost_male }}
              </p>
              <small class="pb-2 pt-0 mt-0">Comes with a complimentary drink</small>
              <button
                  class="bg-red-500 text-white px-5 py-3 mx-auto w-full  rounded-full mt-3 shadow-md text-md">
                <h4 class="text-md"> Buy now</h4>
              </button>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div v-else>
        <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 my-5 justify-center items-content-center">
          <USkeleton class="h-[350px]" v-for="i in 6"/>
        </div>
      </div>

    </section>
  </div>
</template>

<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
definePageMeta({
  layout: 'main'
})
import m from 'moment';

// const d = new Date();
// const date = ref(d);

const ageGroups = [
  "20-28",
  "25-30",
  "30-35",
  "31-37",
  "35-40",
]

useHead({
  title: 'Events | Minutes 2 Match',
  description: ''
})

const eventsResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const fetchEvents = async () => {
  //Fetch all Products
  eventsResponse.value = await useFetch('/api/events', {
    baseURL: 'https://api.minutes2match.com'
  })

}


fetchEvents();


</script>

<style scoped>

</style>
