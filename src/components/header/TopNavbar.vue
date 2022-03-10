<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light" :class="{'bg-light': scrolled, 'bg-transparent': !scrolled}">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../../assets/images/logo.svg" class="navbar-logo" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <span class="navbar-toggler-text">Menu</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Services</a> -->
            <router-link to="/services" class="nav-link">Services</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Who we are</a> -->
            <router-link to="/who-we-are" class="nav-link">Who we are</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Our Vision</a> -->
            <router-link to="/our-vision" class="nav-link">Our Vision</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">About</a> -->
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">Contacts</a> -->
            <router-link to="/contacts" class="nav-link">Contacts</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/404" class="nav-link">404</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    data() {
      return {
        scrolled: false,
      }
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
     handleScroll() {
       this.scrolled = window.scrollY >= 60 ? true : false
     } 
    }
  }
</script>
<style lang="scss">
  .bg-transparent {
    padding-top: 43px;
  }
</style>
