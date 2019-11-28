<template>
    <ContactList endpoint="/api/birthdays" />
</template>

<script>
import ContactList from '../ContactList'

    export default {
        name: "ContactIndex",

        components: {
            ContactList
        },

    }
</script>
