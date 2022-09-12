<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar">
    <div class="logo-details">
      <div class="logo_name">
        <Icon name="logo"></Icon>
      </div>
    </div>
    <ul class="nav-list">
      <div class="item" v-bind:class="getRouteName === '/' ? 'active' : null">
        <Icon name="home"></Icon>
        <div>
          <li>
            <router-link to="/" exact
              >Home<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="getRouteName === '/interessenten' ? 'active' : null"
      >
        <Icon name="interessenten"></Icon>
        <div>
          <li>
            <router-link to="/interessenten"
              >Interessenten<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="getRouteName === '/bewerbungen' ? 'active' : null"
      >
        <Icon name="bewerbungen"></Icon>
        <div>
          <li>
            <router-link to="/bewerbungen"
              >Bewerbungen<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="objectPaths.includes(getRouteName) ? 'active' : null"
      >
        <Icon name="objecte"></Icon>
        <div>
          <h6>OBJEKTE</h6>
          <li>
            <router-link to="/wohnungen"
              >Wohnungen<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/parkplatze"
              >Parkplatze<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/nebenraume"
              >Nebenraume<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/gewerbe">
              Gewerbe<i class="fa-solid fa-circle-chevron-right"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/gebaude"
              >Gebaude<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="getRouteName === '/mieter' ? 'active' : null"
      >
        <Icon name="mieter"></Icon>
        <div>
          <li>
            <router-link to="/mieter"
              >Mieter<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="getRouteName === '/analytics' ? 'active' : null"
      >
        <Icon name="analytics"></Icon>
        <div>
          <li>
            <router-link to="/analytics"
              >Analytics <i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>

      <div
        class="item"
        v-bind:class="getRouteName === '/reporting' ? 'active' : null"
      >
        <Icon name="reporting"></Icon>
        <div>
          <li>
            <router-link to="/reporting"
              >Reporting<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
      <div
        class="item"
        v-bind:class="budgetPaths.includes(getRouteName) ? 'active' : null"
      >
        <Icon name="budget"></Icon>
        <div>
          <h6>BUDGET</h6>
          <li>
            <router-link to="/kostenplanung"
              >Kostenplanung<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
          <li>
            <router-link to="/honorarabrechnung"
              >Honorarabrechnung<i class="fa-solid fa-circle-chevron-right"></i
            ></router-link>
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/UI/icon.vue";

export default {
  data() {
    return {
      objectPaths: ["/wohnungen", "/parkplatze", "/nebenraume", "/gebaude"],
      budgetPaths: ["/kostenplanung", "/honorarabrechnung"],
    };
  },
  computed: {
    getRouteName() {
      return this.$route.path;
    },
  },
  components: { Icon },
};
</script>

<style>
.sidebar {
  width: 64px;
  position: fixed;
  height: 100%;
  background-image: url("../../assets/image_4.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 99;
}
.sidebar .logo-details {
  margin: 14px 0 72px 0;
}
.sidebar .logo_name {
  width: 36px;
  height: 36px;
  background: #36ccc4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.sidebar .nav-list .item {
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-bottom: 12px;
}
.sidebar .nav-list .item .icon svg {
  fill: rgba(255, 255, 255, 0.5);
}
.sidebar .nav-list .item .icon svg:hover {
  fill: rgba(255, 255, 255, 1);
}
.sidebar .nav-list .item h6 {
  font-size: 12px;
  margin: 16px 0 8px 20px;
}

.sidebar .nav-list .item div {
  min-width: 220px;
  position: absolute;
  top: 0;
  left: 40px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 1);
  display: none;
}
.sidebar .nav-list .item:hover div {
  display: block;
}
.sidebar .nav-list .item div li {
  margin: 8px 12px 8px 12px;
}
.sidebar .nav-list .item div a {
  color: #70828c;
  display: flex;
  padding: 7px 8px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.sidebar .nav-list .item div li a svg {
  display: none;
}
.sidebar .nav-list .item div li a:hover svg {
  display: block;
}
.sidebar .nav-list .item div li a:hover {
  background: #f2f5f7;
  color: rgb(112, 130, 140);
}
.sidebar .nav-list .item div li a.router-link-active {
  color: #21333f;
}
.sidebar .active {
  background: rgba(255, 255, 255, 0.1);
}
.sidebar .active span svg {
  fill: rgba(255, 255, 255, 1) !important;
}
</style>
