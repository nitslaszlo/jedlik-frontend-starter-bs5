<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg mb-4 border-bottom">
      <button
        class="navbar-toggler border-0 shadow-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/modal" class="nav-link" :class="{ active: $route.name == 'Modal' }"
              >Modal</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/contacts" class="nav-link" :class="{ active: $route.name == 'Contacts' }"
              >Contacts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link" :class="{ active: $route.name == 'About' }">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/" class="nav-link" :class="{ active: $route.name == 'Home' }">Home</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>

  <main class="container flex-shrink-0 mb-4">
    <router-view />
  </main>
</template>

<style scoped>
.navbar-nav .active {
  color: red;
}
</style>
