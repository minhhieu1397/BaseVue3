<template>
  <div class="main-sidebar" :class="{'main-sidebar--active' : isShowSidebar}">
    <div class="main-sidebar__wrapper">
      <div class="main-sidebar-menu">
        <a
          href="javascript:void(0)"
          v-for="(sidebarItem, index) in sidebarList "
          :key="'sidebar_' + index"
          class="main-sidebar-menu__item"
          :class="sidebarItemClass(sidebarItem)"
        >
          <span>{{ $sidebarItem.textKey }}</span>
        </a>
      </div>
    </div>
    <div class="main-sidebar__backdrop" @click="closeSidebar"></div>
  </div>
</template>

<script>
  export default {
    name: "SidebarView",
    props: ['isShowSidebar'],
    data() {
      return {
        sidebarList: [
          {
            name: "UserList",
            textKey: "Select1",
            icon: "/img/admin/ico_user.svg",
            componentActive: ["UserList"]
          },
          {
            name: "ManagementCourse",
            textKey: "Select2",
            icon: "/img/admin/ico_course.svg",
            componentActive: ["ManagementCourse"]
          },
          {
            name: "",
            textKey: "Select3",
            icon: "/img/admin/ico_survey.svg",
            componentActive: [],
          },
          {
            name: "ListQuestion",
            textKey: "Select4",
            icon: "/img/admin/ico_question.svg",
            componentActive: ["ListQuestion"],
            isChildItem: true
          },
          {
            name: "ListQuiz",
            textKey: "Select5",
            icon: "/img/admin/ico_test.svg",
            componentActive: ["ListQuiz"],
            isChildItem: true,
            isLastChild: true
          },
          {
            name: "MessageList",
            textKey: "Select6",
            icon: "/img/admin/ico_contact.svg",
            componentActive: ["MessageList", "MessageDetail"]
          },
        ],
      }
    },
    methods: {
      closeSidebar() {
        this.$emit('toggleSidebar', false);
      },
      sidebarItemClass(sidebarItem) {
        let classList = [];
        if (sidebarItem.isChildItem) {
          classList.push('main-sidebar-menu__item--child');
        }
        if (sidebarItem.componentActive.indexOf(this.$route.name) !== -1) {
          classList.push('main-sidebar-menu__item--active');
        }
        if (sidebarItem.isLastChild) {
          classList.push('border-bottom-white');
        }

        return classList;
      }
    }
  }
</script>

<style scoped>

</style>
