<template>
  <div id="edituser">
    <div style="margin-bottom: 20px">
      <p>USER DATA EDIT</p>
      <div>
        <p>Name</p>
        <input v-model="muser.firstName" type="text" />
        <p>Last Name</p>
        <input v-model="muser.lastName" type="text" />
        <p>PHONE</p>
        <input v-model="muser.phone" type="text" />
        <p>Company</p>
        <input v-model="muser.company" type="text" />
      </div>
    </div>

    <button type="submit" @click="saveUser">Save User</button>

    <pre>{{ muser }}</pre>
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

  methods: {
    saveUser() {
      console.log('saveUser invoked !')
    }
  }
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
