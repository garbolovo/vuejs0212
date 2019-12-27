<template>
  <div id="edituser">
    <div style="margin-bottom: 20px">
      <p>USER DATA EDIT</p>

      <div v-for="(value, name) in muser" :key="value">
        <p>{{ name }}</p>
        <input
          :value="value"
          class="input"
          type="text"
          autofocus
          @input="setNewValues(value, name, $event)"
        />
      </div>
    </div>

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
    setNewValues(value, name, event) {
      this.$set(this.muser, name, event.target.value)
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
