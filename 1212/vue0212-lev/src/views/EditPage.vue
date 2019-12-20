<template>
  <div>
    {{ title }}
    <edit-user />
  </div>
</template>

<script>
import EditUser from '@/components/EditUser.vue'
export default {
  name: 'EditPage',
  componets: { 'edit-user' : EditUser},

  data: function() {
    return {
      title: 'EDIT PAGE'
    }
  }
}
</script>
