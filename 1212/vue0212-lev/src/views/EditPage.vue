<template>
  <div>
    <h1>Edit Page</h1>
    <Edit :muser="user" />
  </div>
</template>

<script>
import Edit from '@/components/EditUser.vue'
export default {
  name: 'EditPage',
  components: { Edit },
  data: function() {
    return {
      user: {
        name: 'John Doe',
        job: 'Teacher',
        age: '31'
      }
    }
  }
}
</script>
