<template>
  <div class="app">
    <page-header></page-header>
    <router-view></router-view>
    <page-footer></page-footer>
  </div>
</template>

<script>
  import PageHeader from "@/components/common/PageHeader";
  import PageFooter from "@/components/common/PageFooter";

  export default {
    components: {
      PageHeader,
      PageFooter
    }
  }
</script>

<style>
/* App CSS */

body {
  margin: 0;
  padding: 0;
  font-family: "Open Sans", sans-serif;
}

.app h1 {
  text-align: center;
}


</style>
