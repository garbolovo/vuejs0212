<template>
  <div id="edituser">
    <div style="margin-bottom: 20px">
      <p>USER DATA EDIT</p>
    </div>
    <div v-for="value in muser" :key="value">
      <input class="input" type="text" :value="value" />
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
  
}
</script>


<style scoped>
#edituser {
  width: 400px;
  background: #8faac4;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;
}

.input {
  width: 350px;
  margin: 10px 0;
  padding: 5px;
  border-radius: 3px;
}
</style>
