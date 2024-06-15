<template>
  <div class="bg-white text-black/50">

    <div class="min-h-screen w-full mx-auto">

      <section
          class="flex justify-between items-center 2xl:w-4/5 xl:w-4/5 lg:w-5/6 md:w-4/5 2xl:my-20 mx-auto 2xl:p-2 p-5 2xl:flex-row lg:flex-row flex-col-reverse ">
        <div class="flex flex-col 2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
          <h1 class="2xl:text-8xl xl:text-8xl lg:text-7xl text-5xl text-black font-bold my-5 text-center text-black lg:text-start 2xl:text-start">
            Find a Match in
            Minutes</h1>
          <p class="2xl:text-start text-lg 2xl:text-xl lg:text-start text-center line-clamp-5 leading-relaxed text-gray-900">
            Minutes2Match is a unique and exciting speed dating event designed to bring together singles
            in
            Ghana for an evening of quick, fun, and engaging interactions.
          </p>
          <NuxtLink to="/all-events">
            <button
                class="bg-red-500 2xl:mx-0 lg:mx-0 text-white text-center lg:justify-center 2xl:justify-center md:mx-auto mx-auto justify-center px-5 py-2 2xl:w-1/2 w-2/3 2xl:mx-start flex flex-row rounded-full my-5 shadow-md text-lg">
              <h2 class="2xl:text-2xl xl:text-2xl lg:text-lg text-lg">View Events</h2>
            </button>
          </NuxtLink>
        </div>
        <div class="flex flex-col w-1/2 items-center justify-center text-center">
          <div
              class="bg-rose-500 2xl:w-[500px] 2xl:h-[500px]  border-gray-200 h-[285px] w-[285px] lg:w-[400px] lg:h-[400px] rounded-full "></div>
        </div>
      </section>


      <section class="flex flex-col text-center justify-center w-4/5 mx-auto 2xl:p-5 space-y-5 2xl:py-10 lg:my-10">
        <h3 v-for="i in reasons"
            class="text-center text-black p-3 2xl:text-8xl xl:text-8xl lg:text-5xl text-5xl">{{
            i.message
          }}</h3>
        <p class="text-2xl lg:text-3xl 2xl:text-5xl text-black w-full mx-auto">
          Minutes2Match is a <span class="alt-font text-red-500">unique</span> and exciting speed dating
          <span
              class="alt-font text-red-500">event</span> designed
          to bring
          together <span class="alt-font text-red-500">singles</span> in
          Ghana for an evening of quick, fun, and <span class="alt-font text-red-500">engaging</span>
          interactions.
        </p>
      </section>

      <section class="justify-between w-5/6 mx-auto 2xl:p-10 my-20">
        <div class="flex flex-row justify-between items-center">
          <p class="2xl:text-2xl text-lg  text-black">Events</p>
          <select class="border border-gray-200 rounded-md p-2">
            <option>Age group</option>
            <option v-for="i in ageGroups">{{ i }}</option>
          </select>
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

      <section class="flex flex-col text-center justify-center w-5/6 2xl:w-3/5 mx-auto">
        <h3 v-for="i in reasons"
            class="text-center text-black p-3 2xl:text-8xl xl:text-8xl lg:text-4xl text-5xl">FAQ</h3>
        <div class="flex flex-col space-y-4 mt-5">
          <div v-for="faq in faqs"
               class="w-full border border-gray-100 p-5 rounded-md flex flex-col text-start justify-start">
            <p class="text-xl 2xl:text-2xl text-gray-900 font-medium">{{ faq.title }}</p>
            <div class="mt-2">
              <p class="text-gray-500 text-md">{{ faq.message }}</p>
            </div>
          </div>
        </div>
      </section>


    </div>

  </div>
</template>

<script setup lang="ts">
import m from 'moment';

const eventsResponse = ref({
  data: {}, pending: false, error: {}, status: false
})

useHead({
  title: 'Home | Minutes 2 Match',
  description: ''
})

definePageMeta({
  layout: 'main'
})

const reasons = [
  {
    message: 'Swipe No More',
    size: 8
  },
]

const ageGroups = [
  "20-28",
  "25-30",
  "30-35",
  "31-37",
  "35-40",
]

const faqs = [
  {
    title: 'Is five minutes per date long enough?',
    message: 'Four minutes per date is the perfect amount of time enabling you to meet numerous other like-minded single\'s in one night. Speed Dating for 4 minutes each allows you to get to know someone briefly, everyone is there to meet other people - just like you. You have just enough time with each person to decide whether or not you would like to progress the conversation.'
  },
  {
    title: 'How many dates will I get at a Speed Dating event?',
    message: 'As per our Terms and Conditions, the minimum dates we guarantee are 6 of each gender, most events exceed this number. Our popular events have up to 16 or more dates!'
  },
  {
    title: 'Why do I need to book in advance?',
    message: 'We need to ensure that we have an even balance of men and women for a successful Speed Dating event. We also need to ensure that the event is not oversubscribed. You can pay with a credit/debit card or via PayPal.\n'
  },
  {
    title: 'How will I know if I get any matches?',
    message: 'After attending an event, and entering your ticks, within a 24 hour period you will be able to see how many people have entered their ticks, how many have ticked you and who has matched with you. Our matching engine ensures that you will also be sent an instant email and SMS text message whenever someone you have ticked visits the site and ticks you. If you don\'t see this email, please check your SPAM/JUNK folders, and log in to your account to check if you can enter your choices. You can of course visit the site to get the latest details. Chances are that you will be pleasantly surprised as to how many matches you will get.\n'
  }
]

const fetchEvents = async () => {
  //Fetch all Products
  eventsResponse.value = await useFetch('/api/events/index', {
    baseURL: 'https://api.minutes2match.com'
  })

}

onMounted(()=>{
  // fetchEvents();
});

fetchEvents();

</script>
