import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        listing: []
    },
    mutations: {},
    getters: {
        getListing(state) {

            return state.listing

        },
        getByID(state) {
            return keyword => state.listing.filter(item =>{
                return item.id == keyword
            });
        },

    },
    actions: {
        setListing(context, data) {
            context.state.listing = data;
        }
    }

})
