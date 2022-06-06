<script setup>
  import PanelInfo from '@/components/PanelInfo.vue';
</script>

<script>
  export default {
    data() {
      return {
        panelInfoKey: 0,
      };
    },

    methods: {
      updateSysInfo() {
        this.panelInfoKey += 1;
      }
    }
  }
</script>

<template>
  <main>
    <div class="container">

      <div class="row row-panel">
        <PanelInfo :key="panelInfoKey" />
      </div>

      <div class="row row-panel">
        <div class="column">
          <button @click="updateSysInfo" class="button button-secondary button-refresh">Refresh</button>
        </div>
      </div>

    </div>
  </main>
</template>

<style lang="scss">
  .row-panel {
    padding-top: 25px;
  }
</style>