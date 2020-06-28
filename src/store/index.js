import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
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
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    categoriesLength: state => {
      return state.categories.length
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
