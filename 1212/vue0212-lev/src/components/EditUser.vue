<template>
  <div>
    <div style="margin-bottom: 20px">USER DATA EDIT</div>
    <div v-for="value in muser" v-bind:key=value>
      <input type="text" v-bind:value="value">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Edituser',
  props: {
    muser: {
      type: Object,
      required: true
    }

  },
  data: function() {
    return {
      expression: 'Hello World !',

    }
  }
}
</script>
<style></style>
