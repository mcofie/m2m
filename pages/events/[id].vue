<template>
  <div class="bg-white">
    <div class="min-h-screen w-full mx-auto">
      <div v-if="!eventsResponse.pending && eventsResponse.status === 'success'"
           class="flex flex-col justify-between 2xl:w-4/5 xl:w-4/5 lg:w-5/6 md:w-4/5 my-10 mx-auto  2xl:p-2 p-5">
        <div class="w-full flex flex-col lg:flex-row 2xl:flex-row 2xl:space-x-5 xl:space-x-5 lg:space-x-5">
          <div class="w-full lg:w-2/3">
            <object width="100%" style="object-fit: cover;"
                    :data="`${eventsResponse.data.event.img_filename}`"
                    class="rounded-lg 2xl:h-[550px] xl:h-[550px] lg:h-[350px]">
            </object>
            <p class="2xl:text-3xl xl:text-3xl lg:text-3xl text-2xl font-medium my-2">{{
                eventsResponse.data.event.name
              }}</p>
            <div>
              <p class="2xl:text-lg text-black text-sm">
                {{ m(eventsResponse.data.event.date_time).format('Do MMMM YYYY') }} @
                {{ m(eventsResponse.data.event.date_time).format('h:mm a') }}</p>
              <p class="2xl:text-lg text-sm">{{ eventsResponse.data.event.location }}</p>
            </div>
          </div>

          <div class="w-full lg:w-1/3 2xl:py-0 xl:py-0 lg:py-0 py-2">
            <div class="bg-white border border-gray-200 rounded-md p-5 flex flex-col space-y-2">
              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col">
                  <p class="font-medium">Male Tickets</p>
                  <small>{{ eventsResponse.data.event.ticket_count_male }} available</small>
                </div>
                <p>GHS {{ eventsResponse.data.event.ticket_cost_male }}</p>
                <select class="border border-gray-200 rounded-md p-2" v-model="order.male_ticket.quantity">
                  <option value=0 selected>None</option>
                  <option v-for="i in parseInt(eventsResponse.data.event.ticket_count_male)" :value="i">{{
                      i
                    }}
                  </option>
                </select>
              </div>

              <div class="flex flex-row justify-between items-center">
                <div class="flex flex-col">
                  <p class="font-medium">Female Tickets</p>
                  <small>{{ eventsResponse.data.event.ticket_count_female }} available</small>
                </div>
                <p>GHS {{ eventsResponse.data.event.ticket_cost_female }}</p>
                <select class="border border-gray-200 rounded-md p-2" v-model="order.female_ticket.quantity">
                  <option value=0 selected>None</option>
                  <option v-for="i in parseInt(eventsResponse.data.event.ticket_count_female)" :value="i">{{
                      i
                    }}
                  </option>
                </select>
              </div>
            </div>

            <div class="flex flex-col w-full justify-end border-dashed border 2xl:my-2 px-5 py-4 rounded-md my-5"
                 v-if="getTotalPrice() !== 0">
              <small v-if="order.male_ticket.quantity !== 0">{{ order.male_ticket.quantity }}X Male
                tickets</small>
              <small v-if="order.female_ticket.quantity !== 0">{{ order.female_ticket.quantity }}X Female
                tickets</small>
              <p class="text-4xl font-bold">GHS {{ getTotalPrice() }}</p>
            </div>

            <div
                class="flex flex-col space-y-1 w-full justify-end border border-gray-200 my-5 px-5 py-4 rounded-md">
              <p class="text-sm font-medium">Name</p>
              <input v-model="order.name" type="text" class="border border-gray-100 rounded-md p-2">

              <p class="text-sm font-medium">Phone number</p>
              <input v-model="order.phone" type="text" class="border border-gray-100 rounded-md p-2">

              <p class="text-sm font-medium">Email address</p>
              <input v-model="order.email" type="text" class="border border-gray-100 rounded-md p-2">
            </div>

            <button @click="submit()"
                    class="bg-red-500 text-white px-5 py-3 w-full rounded-full my-1 mx-auto  shadow-md text-2xl">
              <h2 class="text-xl">Book Now</h2>
            </button>
          </div>

        </div>
        <div class="w-full mt-5 flex 2xl:flex-row md:flex-col flex-col lg:flex-row lg:space-x-2">
          <div class="2xl:w-2/3 w-full md:w-full lg:w-2/3">
            <div class="flex flex-row space-x-1 mt-2">
              <button @click="onTabClick(Tabs.About)"
                      :class="[ tabs === Tabs.About ? 'border-red-400 border-b-2 text-gray-900' : '']"
                      class="bg-gray-100 px-4 py-2 font-medium text-gray-400 rounded-t-md">About
              </button>
              <button
                  :class="[ tabs === Tabs.Itinerary ? 'border-red-400 border-b-2 text-gray-900' : '']"
                  @click="onTabClick(Tabs.Itinerary)" class="bg-gray-100 px-4 py-2 font-medium text-gray-400">
                Itinerary
              </button>
              <button
                  :class="[ tabs === Tabs.Venue ? 'border-red-400 border-b-2 text-gray-900' : '']"
                  @click="onTabClick(Tabs.Venue)" class="bg-gray-100 px-4 py-2 font-medium text-gray-400">
                Venue
              </button>
            </div>
            <div v-if="tabs === Tabs.About">
              <p class="text-md text-gray-600 my-2">{{ eventsResponse.data.event.description }}</p>
            </div>
            <div v-if="tabs === Tabs.Itinerary">
              <p class="text-md text-gray-600 my-2" v-html="eventsResponse.data.event.itenary"></p>
            </div>
            <div v-if="tabs === Tabs.Venue">
              <p class="text-md text-gray-600 my-2">{{ eventsResponse.data.event.description }}</p>
            </div>
          </div>
          <div v-if="eventsResponse.data.host !== null"
               class="flex md:w-full w-full lg:w-1/3 flex-col h-fit border border-gray-200 my-5 px-5 py-4 rounded-md 2xl:w-1/3">
            <p class="text-sm font-medium mb-4">Meet Your Host</p>
            <div class="flex flex-row items-center space-x-2">
              <div class="w-14 h-14 bg-gray-50">
                <img :src="eventsResponse.data.host.profile_img_url" class="w-12 h-12 rounded-full">
              </div>
              <p>{{ eventsResponse.data.host.name }}</p>
            </div>
            <p class="text-sm">
              {{ eventsResponse.data.host.bio }}
            </p>
          </div>
        </div>
      </div>
      <div v-else>
        <div
            class="flex flex-col justify-between 2xl:w-4/5 xl:w-4/5 lg:w-5/6 md:w-4/5 my-10 mx-auto space-y-5  2xl:p-2 p-5">
          <USkeleton class="h-[350px]" v-for="i in 6"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import m from 'moment';

definePageMeta({
  layout: 'main'
})

const route = useRoute();

const tickets = ref({
  male: 0,
  female: 0
})
const eventsResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

const buyTicketResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

enum Tabs {
  About = "About",
  Itinerary = "Itinerary",
  Venue = "Venue"
}


const tabs = ref(Tabs.About)

const fetchEvents = async () => {
  //Fetch all Products
  eventsResponse.value = await useFetch(`/api/events/${route.params.id}`, {
    baseURL: 'https://api.minutes2match.com'
  })

  tickets.value.male_ticket = eventsResponse.value.data.event.ticket_cost_male
  tickets.value.female_ticket = eventsResponse.value.data.event.ticket_cost_female

  // useHead({
  //   title: ` ${eventsResponse.value.data.event.name} | Minutes 2 Match`,
  //   description: ''
  // })

}


fetchEvents();

export interface IBuyTicket {
  email: string;
  name: string;
  event_id: number;
  phone: string;
  female_ticket: FemaleTicket;
  male_ticket: MaleTicket;
}

export interface MaleTicket {
  quantity: number;
}

export interface FemaleTicket {
  quantity: number;
}

const order = ref({
  event_id: '',
  name: '',
  email: '',
  phone: '',
  male_ticket: {
    quantity: 0
  },
  female_ticket: {
    quantity: 0
  },
});

const buyTicket = async () => {


  const request = {} as IBuyTicket
  request.email = order.value.email
  request.name = order.value.name
  request.phone = order.value.phone

  const m = {} as MaleTicket
  const f = {} as FemaleTicket

  m.quantity = parseInt(order.value.male_ticket.quantity)
  f.quantity = parseInt(order.value.female_ticket.quantity)


  request.male_ticket = m
  request.female_ticket = f

  request.event_id = route.params.id

  //Fetch all Products
  buyTicketResponse.value = await useFetch(`/api/events/buy-ticket`, {
    baseURL: 'https://api.minutes2match.com',
    method: 'POST',
    body: request
  })

  await navigateTo(`${buyTicketResponse.value.data.payment_url}`, {
    external: true
  })

}


function submit() {
  buyTicket()
}

const getTotalPrice = () => {
  return (order.value.male_ticket.quantity * parseInt(tickets.value.male_ticket) + order.value.female_ticket.quantity * parseInt(tickets.value.female_ticket))
}

const onTabClick = (tab: Tabs) => {
  tabs.value = tab
}


</script>

<style scoped>

</style>
