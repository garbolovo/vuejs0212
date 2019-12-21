<template>
  <div>
    <div style="margin-bottom: 20px">USER DATA EDIT</div>
    <div v-for="value in muser" :key="value">
      <input type="text" :value="value" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edituser',
  props: {
    muser: {
      type: Object,
      required: true,
      default: function() {
        return {
          name: 'Name',
          job: 'Job',
          age: 'Age'
        }
      }
    }
  },
  data: function() {
    return {
      expression: 'Hello World !'
    }
  }
}
</script>
<style></style>
