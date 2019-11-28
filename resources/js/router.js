import Vue from 'vue'
import VueRouter from 'vue-router'
import ExampleComponent from './components/ExampleComponent'
import ContactIndex from './components/view/ContactIndex'
import ContactCreate from './components/view/ContactCreate'
import ContactShow from './components/view/ContactShow'
import ContactEdit from './components/view/ContactEdit'
import BirthdayIndex from './components/view/BirthdayIndex'
import Logout from './components/actions/Logout'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {   path: '/', component: ExampleComponent, 
            meta: { title: 'Welcome' } 
        },{ 
            path: '/contacts', component: ContactIndex,
            meta: { title: 'Contacts' }  
        }, { 
            path: '/contacts/create', component: ContactCreate,
            meta: { title: 'Add New Contact' }  
        }, { 
            path: '/contacts/:id', component: ContactShow,
            meta: { title: 'Details for Contact' }  
        }, { 
            path: '/contacts/:id/edit', component: ContactEdit,
            meta: { title: 'Edit Contact' }  
        }, { 
            path: '/birthdays', component: BirthdayIndex,
            meta: { title: 'This Month\'s Brithdays' }  
        }, { 
            path: '/logout', component: Logout
        },
    ],
    mode: 'history'
})
