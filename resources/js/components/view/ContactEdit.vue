<template>
    <div>
        <div class="flex justify-between">
            <a href="#" class="text-blue-400" @click="$router.back()">
                &lt; Back
            </a>
        </div>

        <form @submit.prevent="submitForm">
            <InputField name="name" label="Contact Name" 
            placeholder="Contact Name" @update:field="form.name = $event" :errors="errors" :data="form.name"/>
            <InputField name="email" label="Contact Email" 
            placeholder="Contact Email" @update:field="form.email = $event" :errors="errors" :data="form.email"/>
            <InputField name="company" label="Contact Company" 
            placeholder="Contact Company" @update:field="form.company = $event" :errors="errors" :data="form.company"/>
            <InputField name="birthday" label="Birthday" 
            placeholder="MM/DD/YYYY" @update:field="form.birthday = $event" :errors="errors" :data="form.birthday"/>

            <div class="flex justify-end">
                <button class="py-2 px-4 text-red-700 rounded mr-5 border hover:border-red-700" @click="$router.back()">Cancel</button>
                <button class="bg-blue-500 py-2 px-4 text-white rounded hover:bg-blue-400">Save</button>
            </div>
        </form>
    </div>
</template>

<script>
import InputField from '../InputField'

    export default {
        name: "ContactCreate",
        
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    company: '',
                    birthday: '',
                },

                errors: null,
            }
        },

        mounted () {
            axios.get('/api/contacts/' + this.$route.params.id)
                .then(response => {
                    this.form = response.data.data

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

        components: {
            InputField
        },

        methods: {
            submitForm() {
                axios.patch('/api/contacts/' + this.$route.params.id, this.form)
                    .then(response => {
                        this.$router.push(response.data.links.self)
                    })
                    .catch(errors => {
                        this.errors = errors.response.data.errors
                    })
            }
        },
        
    }
</script>