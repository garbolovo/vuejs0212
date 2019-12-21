<template>
  <div>
    <p>{{ muser }}</p>
  </div>
</template>

<script>
export default {
  name: 'Edituser',
  props: {
    muser: Object,
    required: true,
  },
  data: function() {
    return {
      expression: 'Hello World !'
    }
  }
}
</script>
<style></style>
