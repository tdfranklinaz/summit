<script>
  export default {
    name: "Events",

    data() {
      return {
        myEvents: []
      };
    },

    mounted() {
      fetch('http://localhost:4000/events')
        .then(response => response.json())
        .then(data => (this.myEvents = data));
    }
  };
</script>

<template>
  <main>
    <div class="container">

      <div v-for="events in myEvents" :key="events.id" class="events-data">
        <p>{{ events.name }}<br/>{{ events.category }}<br/>{{ events.description }}</p>
      </div>

    </div>
  </main>
</template>

<style lang="scss">
</style>