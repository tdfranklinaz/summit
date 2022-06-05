<script setup>
import PanelHeader from '@/components/PanelHeader.vue'
</script>

<template>
  <PanelHeader />
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';
@import '@/../node_modules/milligram';

@import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:wght@300;400;700&display=swap');

h1, h2, h3, h4, h5, p, a {
  font-family: 'Inter';
  font-weight: 400;
}

// typography
h1 { color: #fff; }
a { color: #06BD60; }
p { color: #66707A; }

// buttons
.button {
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: normal;
}

.button-danger {
  background: #F74243;
  border-color: #F74243;
  color: #fff;

  &:hover {
    background: #F74243;
    border-color: #F74243;
    color: #fff;
  }
}

.button-secondary {
  background: #2D353D;
  border-color: #2D353D;
  color: #66707A;

  &:hover {
    background: #2D353D;
    border-color: #2D353D;
    color: #66707A;
  }
}
</style>