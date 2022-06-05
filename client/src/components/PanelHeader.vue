<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="container-header">
        <div class="panel-logo">
          <img src="@/assets/rocky.svg" alt="Rocky Linux Logo">
          <span class="logo">Summit</span>
        </div>

        <nav>
          <RouterLink to="/">Dashboard</RouterLink>
          <RouterLink to="/">Virtual Machines</RouterLink>
          <RouterLink to="/">Settings</RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
  header {
    background: #192024;
  }

  .container-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0px 5px 0px;

    h1 {
      margin: 0;
    }
  }

  .panel-logo {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      margin-right: 10px;
    }

    span.logo {
      font-size: 28px;
      color: #fff;
      font-weight: 400;
      font-family: 'Inter';
    }
  }

  nav > a {
    margin-left: 5px;
    padding: 15px;
    color: #fff;
    //border-bottom: solid 2px #06BD60;

    &:last-child {
      padding-right: 0px;
    }
  }
</style>