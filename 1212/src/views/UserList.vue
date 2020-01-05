<template>
  <div>
    <p>Users List</p>
    <div id="users-data">
      <div></div>
      <Users />
      <div></div>
    </div>
  </div>
</template>

<script>
import Users from '@/components/Users.vue'
export default {
  components: { Users }
}
</script>
<style>
#users-data {
  display: flex;
  justify-content: space-between;
}
</style>
