<template>
    <div>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div v-if="contacts.length === 0">
                <p>No contacts yet. <router-link to="/contacts/create" class="text-blue-600 font-bold">Get Started</router-link></p>
            </div>

            <div v-for="contact in contacts" :key="contact.id">
                <router-link :to="`/contacts/${contact.data.contact_id}`" class="flex items-center border-b border-gray-400 p-4 hover:bg-gray-100">
                    <UserCircle :name="contact.data.name" />

                    <div class="pl-4">
                        <p class="text-blue-400 font-bold">{{ contact.data.name }}</p>
                        <p class="text-gray-600">{{ contact.data.company }}</p>
                    </div>
                </router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
import UserCircle from './UserCircle'

    export default {
        name: "ContactList",

        components: {
            UserCircle,
        },

        props: [
            'endpoint'
        ],

        data() {
            return {
                loading: true,
                contacts: null,
            }
        },

        mounted () {
            axios.get(this.endpoint)
                .then(response => {
                    this.contacts = response.data.data
                })
                .catch(error => {
                    alert('Unable to fetch contacts.')
                })
                .finally(() => {
                    this.loading = false
                })
        },
    }
</script>

<style lang="scss" scoped>

</style>