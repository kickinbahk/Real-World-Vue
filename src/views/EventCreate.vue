<template>
  <div>
    <h1>Create and Event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>
    <p>There are {{ categoryLength }} categories of events</p>
    <ul>
      <li v-for="category in categories" :key="category">
        {{ category }}
      </li>
    </ul>

    <p>{{ getEventById(2) }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    categoryLength() {
      return this.$store.getters.categoriesLength
    },
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style lang="scss" scoped></style>
