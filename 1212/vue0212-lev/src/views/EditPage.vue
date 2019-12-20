<template>
  <div>
    {{ title }}
    <edituser/>
  </div>
</template>

<script>
import EditUser from '@/components/EditUser.vue'
export default {
  name: 'EditPage',
  componets: { EditUser},

  data: function() {
    return {
      title: 'EDIT PAGE'
    }
  }
}
</script>
