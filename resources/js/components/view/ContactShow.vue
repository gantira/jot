<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="flex justify-between">
                <a href="#" class="text-blue-400" @click="$router.back()">
                    &lt; Back
                </a>
                <div class="relative">
                    <router-link :to="`/contacts/${contact.contact_id}/edit`" class="px-4 py-2 rounded text-sm text-green-500 border border-green-500 font-bold mr-2">Edit</router-link>
                    <a href="#" class="px-4 py-2 border border-red-500 rounded text-sm font-bold text-red-500" @click="modal = ! modal">Delete</a>

                    <div v-if="modal" class="absolute bg-blue-900 text-white rounded-lg z-20 p-8 w-64 right-0 mt-2 mr-6">
                        <p>Are you sure want to delete this record?</p>

                        <div class="flex items-center mt-6 justify-end">
                            <button @click="modal = ! modal" class="text-white pr-4">Cancel</button>
                            <button @click="destroy" class="px-4 py-2 bg-red-500 rounded text-sm font-bold text-white">Delete</button>
                        </div>
                    </div>
                       
                </div>
                    <div @click="modal = ! modal" v-if="modal" class="bg-black opacity-25 absolute right-0 left-0 top-0 bottom-0 z-10"></div>
            </div>

            <div class="flex items-center pt-6">
                <UserCircle :name="contact.name" />

                <p class="pl-5 text-xl">{{ contact.name }}</p>
            </div>

            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Contact</p>
            <p class="pt-2 text-blue-400">{{ contact.email }}</p>

            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Company</p>
            <p class="pt-2 text-blue-400">{{ contact.company }}</p>

            <p class="pt-6 text-gray-600 font-bold uppercase text-sm">Birthday</p>
            <p class="pt-2 text-blue-400">{{ contact.birthday }}</p>
        </div>
    </div>
</template>

<script>
    import UserCircle from '../UserCircle'

    export default {
        name: "ContactShow",

        data() {
            return {
                contact: null,
                modal: false,
                loading: true,
            }
        },

        components: {
            UserCircle,
        },

        mounted () {
            axios.get('/api/contacts/' + this.$route.params.id)
                .then(response => {
                    this.contact = response.data.data

                })
                .catch(error => {
                    if (error.response.status === 404) {
                        this.$router.push('/contacts')
                    }
                })
                .finally(() => {
                    this.loading = false
                })
        },

        methods: {
            destroy() {
                axios.delete('/api/contacts/' + this.$route.params.id)
                    .then(response => {
                        this.$route.push('/contacts')
                    })
                    .catch(error => {
                        alert('Internal error. Unable to delete contact.')
                    })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>