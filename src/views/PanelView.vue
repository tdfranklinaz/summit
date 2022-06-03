<script setup>
  import PanelHeader from '@/components/PanelHeader.vue';
  import PanelSection from '@/components/PanelSection.vue';
  import PanelSettings from '@/components/PanelSettings.vue';
</script>

<template>
  <main>
    <PanelHeader />

    <div class="container">
      <h1>Summit Panel</h1>
    </div>

  </main>
</template>

<style lang="scss">
  @import '~milligram/dist/milligram.css';

  h1 { color: #1e90ee; }
</style>