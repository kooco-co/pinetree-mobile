<template>
  <a class="logout" href="javascript:" @click="logout">{{label}}</a>
</template>

<script>

export default {
  name: 'logoutButton',
  data: () => {
    return {
    }
  },
  props:["label"],
  methods:{
    logout: function(){
        console.log('logout');
        //TODO logout
        return false;
    }

  }
}
</script>
<style lang="scss">

</style>


