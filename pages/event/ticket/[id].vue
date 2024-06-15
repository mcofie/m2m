<template>
  <div>
    <section v-if="!ticketResponse.pending && ticketResponse.status === 'success'"
             class="justify-between w-full mx-auto 2xl:w-3/5 lg:w-3/5 2xl:p-20">
      <div class="w-4/5 lg:w-2/3 2xl:w-2/3 mx-auto mt-16 border border-gray-100 rounded-lg">

        <div class="p-5 border-gray-200 border-dashed border-b-2 flex-col flex">
          <span class="bg-red-100 p-1 text-sm rounded-lg text-red-600 w-fit">{{
              ticketResponse.data.event.age_group
            }}</span>
          <p class="text-2xl my-2">{{ ticketResponse.data.event.name }}</p>
          <small>{{ ticketResponse.data.event.location }}</small>
          <small>{{ m(ticketResponse.data.event.date_time).format('Do MMMM YYYY') }} @
            {{ m(ticketResponse.data.event.date_time).format('h:mm a') }}</small>
        </div>

        <div class="p-5 flex flex-row justify-between items-center" v-for="ticket in ticketResponse.data.tickets">
          <div class="flex flex-col">
            <small class="text-s">Ticket number</small>
            <p class="text-xl">{{ ticket.ticket_number }}</p>
            <small class="text-md text-gray-300">{{ ticket.gender }}</small>
          </div>

          <button class="border-red-600 border rounded-md text-red-600 flex flex-row px-4 py-1 cursor-pointer">
            <p>Share</p>
          </button>
        </div>
        <div class="bg-gray-100 w-full p-5 rounded-b-lg">
          <small>Total Cost:</small>
          <p class="text-2xl font-bold">GHS {{ ticketResponse.data.payment.amount }}</p>
        </div>
      </div>
      <p class="text-center my-5 hidden">
        <a class="text-blue-500" target="_blank"
           :href="`https://www.google.com/maps/dir/${ticketResponse.data.event.loc_coordinates}`">
          {{ ticketResponse.data.event.location }}
        </a>
      </p>
    </section>
  </div>
</template>

<script lang="ts" setup>

definePageMeta({
  layout: 'main'
})
const route = useRoute();

import m from 'moment';

const ticketResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const fetchTicket = async () => {
  //Fetch all Products
  // /api/events/ticket/01HZ92BBRMRWMAH3SPZD23Y1PS
  ticketResponse.value = await useFetch(`/api/events/ticket/01HZ92BBRMRWMAH3SPZD23Y1PS`, {
    baseURL: 'https://api.minutes2match.com'
  })

}

fetchTicket()


</script>

<style scoped>

</style>
