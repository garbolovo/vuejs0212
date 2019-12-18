<template>
  <div>
    <p>{{ title }}</p>
    <p>{{ user.name }}</p>
    <button type="button">Click</button>
  </div>
</template>

<script>
export default {
  name: 'Editpage',
  data: function() {
    return {
      title: 'HELLO FORM EDIT COMP',
      user: {
        name: 'John Doe',
        age: 31,
        job: 'Teacher'
      }
    }
  }
}
</script>
