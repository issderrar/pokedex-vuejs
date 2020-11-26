import {createApp} from 'vue'
import App from './App.vue'
import {createStore} from "vuex";

import "tailwindcss/tailwind.css"
import BaseButton from "@/components/BaseButton";
import router from "@/router";

const store = createStore({
    state() {
        return {
            selection: [],
            openDropdown : false,
        }
    },
    mutations: {
        addToSelection(state, payload) {
            state.selection.push(payload.value)
        },
        removeFromSelection(state, payload) {
            state.selection.splice(payload, 1)
        },
        clearSelection(state) {
            state.selection = []
        },
        openDropdown(state) {
            state.openDropdown = true
        },
        closeDropdown(state) {
            state.openDropdown = false
        }
    },
    actions: {
        addToSelection(context, payload) {
            if (this.state.selection.length <= 5) {
                context.commit('addToSelection', payload)
            } else {
                alert("Taille maximum d'équipe atteinte");
            }
        },
        removeFromSelection(context, payload) {
            context.commit('removeFromSelection', payload.value)
        },
        clearSelection(context) {
            context.commit('clearSelection')
        },
        openDropdown(context) {
            context.commit('openDropdown')
        },
        closeDropdown(context) {
            context.commit('closeDropdown')
        }
    }
})


const app = createApp(App);

app.use(router)
app.use(store)

app.component('base-button', BaseButton)

app.mount('#app')
