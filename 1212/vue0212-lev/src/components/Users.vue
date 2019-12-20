<template>
  <div>
    <p>{{ title }} - from users component</p>
    <div id="users">
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>FirsName</th>
              <th>LastName</th>
              <th>Balance</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.phone">
              <td>{{ user.id }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.balance }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.phone }}</td>
              <td v-if="user.isActive">ACTIVE</td>
              <td v-else>OFFLINE</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Users',
  
  data: function() {
    return {
      title: 'USERS',
      users: []
    }
  },

  watch: {
    users: function() {
      console.log('Users changed...')
    }
  },

  created() {
    this.loadUsers()
  },

  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => {
          this.users = response.data
        })
        .catch(err => {
          console.error(err)
        })
    }
  }
}
</script>

<style>
table thead {
  border: 1px solid red;
}

table tr th,
table tr td {
  margin: 100px;
  padding: 5px 20px;
  width: auto;
  text-align: left;
}
</style>
