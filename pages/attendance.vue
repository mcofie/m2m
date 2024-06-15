<template>
    <div>
<!--        <section class="justify-between w-4/5 mx-auto p-20">-->
<!--            <div class="w-2/4 mx-auto  border border-gray-100 rounded-lg">-->

<!--                <div class="p-5 border-gray-200 border-dashed border-b-2 flex-row flex justify-center space-x-8">-->
<!--                    <input v-model="ticket.ticket_number" type="text" class="rounded-md border border-gray-300"-->
<!--                           placeholder="Enter ticket number"/>-->
<!--&lt;!&ndash;                    <button @click="submit()" class="bg-red-600 py-2 px-5 rounded-full text-white">&ndash;&gt;-->
<!--&lt;!&ndash;                        <h4>Check</h4>&ndash;&gt;-->
<!--&lt;!&ndash;                    </button>&ndash;&gt;-->

<!--                    <button @click="submit()" class="border-red-600 border rounded-md text-red-600 px-4 py-1 cursor-pointer">-->
<!--                        <p>Check</p>-->
<!--                    </button>-->
<!--                </div>-->

<!--                <div class="min-h-[400px] flex flex-col items-center justify-center">-->
<!--                    <p v-if="tick.length === 0">Nothing found</p>-->

<!--                    <div v-else class="flex flex-col w-full">-->

<!--                        <div class="p-5 border-gray-200 border-dashed border-b-2 flex-col flex">-->
<!--                            <span class="bg-red-100 p-1 rounded-lg text-red-600 w-fit">{{ event.age_group }}</span>-->
<!--                            <p class="text-3xl">{{ event.name }}</p>-->
<!--                            <small>{{ event.location }}</small>-->
<!--                            <small>{{ m(event.date_time).format('Do MMMM YYYY') }} @-->
<!--                                {{ m(event.date_time).format('h:mm a') }}</small>-->
<!--                        </div>-->


<!--                        <div class="p-5 flex flex-col items-center justify-center space-y-6">-->
<!--                            <div class="flex flex-col justify-center items-center">-->
<!--                                 <span-->
<!--                                     :class="[ tick.admission === 0 ? 'bg-yellow-200 text-yellow-600' : 'bg-green-200 text-green-600']"-->
<!--                                     class="text-center w-fit px-4 py-1 rounded-full">-->
<!--                                        <small class="text-md">{{-->
<!--                                                tick.admission === 0 ? 'Pending' : 'Active'-->
<!--                                            }}</small>-->
<!--                                </span>-->
<!--                                <p class="text-5xl">{{ tick.ticket_number }}</p>-->
<!--                                <small class="text-md text-gray-500 text-center">Ticket type: <span class="text-gray-700 font-bold"> {{ tick.gender }}</span></small>-->
<!--                            </div>-->

<!--                            <button class="bg-red-600 py-2 px-5 rounded-full text-white">-->
<!--                                <h4>Admit</h4>-->
<!--                            </button>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->


<!--            </div>-->
<!--            <p class="text-center my-5">-->

<!--            </p>-->
<!--        </section>-->

    </div>
</template>

<script lang="ts" setup>

const event = ref({});
const tick = ref('');
import m from 'moment';

// const ticket = useForm({
//     ticket_number: '',
// });

definePageMeta({
  layout: 'main'
})


function submit() {
    // ticket.post('/attendance', {
    //     onSuccess: (resp) => {
    //         event.value = resp.props.event
    //         tick.value = resp.props.ticket
    //
    //         console.log(event.value)
    //
    //     }
    // })
}

</script>

<style scoped>

</style>
