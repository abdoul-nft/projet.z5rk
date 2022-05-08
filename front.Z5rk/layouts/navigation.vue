<template>
<div>
  <div id="wrapper">
    <div id="content">
      <AppHeader :title="headerTitle[$nuxt.$route.name]"/>
      <div class="space-sticky"></div>
      <Nuxt />
    </div>
    <BottomNavigation :selected="$nuxt.$route.name"/>
  </div>
  <MenuSideBar/>
</div>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: {
        settings: 'Account',
        index: 'Z5rk.',
        search: 'Discover',
        favoris: 'Favoris',
      }
    }
  },
  head() {
    return {
      script: [
        {src: '/js/bootstrap.bundle.min.js'},
        {src: '/js/custom.js'}
      ],
    }
  },
  mounted() {
    this.getUserBalance()
    this.getUserTransactions()
    this.$store.dispatch('getNFTs')
  },
  methods: {
    getUserBalance() {
      this.$axios.get('http://localhost:4000/v1/get-balance/' + this.$store.state.user.wallet_address)
      .then( (response)  => {
          if(response) {
              this.$store.dispatch('updateBalance', parseInt(response.data.data.balance)/1000000000000000000)
          }
      })
      .catch( (error)  => {
          console.log(error);
      });
    },

    getUserTransactions() {
      this.$axios.get('http://localhost:4000/v1/get-transactions/' + this.$store.state.user.wallet_address)
      .then( (response)  => {
          if(response) {
            this.$store.dispatch('updateTransactions', response.data.data.result)
          }
      })
      .catch( (error)  => {
          console.log(error);
      });
    },

  }
}
</script>