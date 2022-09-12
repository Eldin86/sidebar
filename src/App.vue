<template>
  <div id="app">
    <div class="content-wrapper">
      <SideBar />
      <PageContent />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/sidebar/SideBar";
import PageContent from "./components/page-content/PageContent.vue";
export default {
  name: "App",
  components: { SideBar, PageContent },
};
</script>

<style>
@import url("http://fonts.googleapis.com/css?family=Lato");

* {
  box-sizing: border-box;
  word-break: break-all;
  padding: 0;
  margin: 0;
  font-family: Lato;
  font-weight: bold;
  font-size: 14px;
}
a {
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.breadcrumbs {
  text-transform: uppercase;
}
.breadcrumbs .group-page {
  color: #70828c;
}
.breadcrumbs .current-page {
  color: #21333f;
}
</style>
