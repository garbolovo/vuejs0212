<template>
  <div>
    <h1>Edit Page</h1>
    <p>User - {{ id }}</p>
    <div v-if="user" id="components">
      <Edit class="editcomp" :muser="user" />
    </div>
  </div>
</template>

<script>
import Edit from '@/components/EditUser.vue'
import axios from 'axios'
export default {
  name: 'EditPage',
  components: { Edit },
  data: function() {
    return {
      user: null
    }
  },

  computed: {
    id: function() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.getUser()
  },

  methods: {
    getUser() {
      axios
        .get(`http://localhost:3004/users/${this.id}`)
        .then(response => {
          this.user = response.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style scoped>
#components {
  display: flex;
  justify-content: space-around;
}
</style>
