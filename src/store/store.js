import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
import * as user from '@/store/modules/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: 'Title 1', organizer: 'Jimmy Smith' },
      { id: 2, title: 'Title 2', organizer: 'Franky Franks' },
      { id: 3, title: 'Title 3', organizer: 'Jackie Childs' },
      { id: 4, title: 'Title 4', organizer: 'Sparrow Hawkey' }
    ],
    eventsTotal: 4,
    event: {}
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    SET_EVENTS(state, events) {
      state.events = events
    },
    SET_TOTAL_EVENTS(state, numberOfEvents) {
      state.eventsTotal = numberOfEvents
    },
    SET_EVENT(state, event) {
      state.event = event
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event)
      })
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data)
          commit('SET_TOTAL_EVENTS', response.headers['x-total-count'])
        })
        .catch(error => {
          console.log(`There was an error: ${error}`)
        })
    },
    fetchEvent({ commit, getters }, id) {
      let event = getters.getEventById(id)

      if (event) {
        commit('SET_EVENT', event)
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data)
          })
          .catch(error => {
            console.log(`There was an error: ${error}`)
          })
      }
    }
  },
  getters: {
    categoriesLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
