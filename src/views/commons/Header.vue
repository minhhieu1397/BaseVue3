<template>
  <header class='dashboard-toolbar' :class="{'dashboard-toolbar-menu': changeBackground}">
    <a href="#!" class="menu-toggle me-auto" @click="changeSideBar()">
      <i class="bi bi-list"></i>
    </a>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://phunugioi.com/wp-content/uploads/2020/10/hinh-anh-avatar-de-thuong-cute.jpg" alt="" width="30" height="30" class="rounded-circle">
          <span class="d-none d-sm-inline text-dark ms-3">Admin</span>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Profile</a></li>
          <li>
              <hr class="dropdown-divider">
          </li>
          <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
  </div>
  </header>
</template>

<script setup>
  import { defineProps, watch, toRefs, defineEmits, ref } from 'vue'

  const changeBackground = ref(false)
  const props = defineProps({
    isHideSideBar: Boolean,
  });

  const { isHideSideBar } = toRefs(props);

  const emit = defineEmits(['toggle-sidebar'])
  function changeSideBar() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      emit('toggle-sidebar', 'mobile-show');
    } else {
      emit('toggle-sidebar', 'dashboard-compact');
    }
  }
  watch(isHideSideBar, async (newQuestion, oldQuestion) => {
    if (newQuestion == true && window.matchMedia('(max-width: 900px)').matches) {
      changeBackground.value = true
    } else {
      changeBackground.value = false
    }
  })
</script>

<script>

export default {
  name: "HeaderComponent",
}
</script>

<style scoped>

</style>
