<template>
<div>
  <div id="wrapper">
      <div id="content">
          <div class="space-sticky"></div>
          <section class="margin-t-10 un-connect-wallet margin-b-30">
              <CoverImageWallet />
              <ul class="nav flex-column">
                  <ConnectWalletItem name="Metamask" icon="metamask" @clicked="login" />
              </ul>
          </section>
      </div>
  </div>
  <!-- <ConnectWalletModal/> -->
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'connect-wallet',
  head() {
    return {
      script: [
        {
          src: '/js/bootstrap.bundle.min.js'
        }
      ],
    }
  },
  mounted() {},

  methods: {
    async login() {
      let user = window.Moralis.User.current();
      if (!user) {
        user = await window.Moralis.authenticate({
          signingMessage: "Log in using Moralis",
        })
        .then( (user)  => {
          console.log(user)
          this.getUser(user.get("ethAddress"))
        })
        .catch( (error)  => {
            console.log(error);
        });
      }else {
        this.getUser(user.get("ethAddress"))
      }
    },

    async register(wallet_address) {
      try {
        await this.$axios.post('http://localhost:4000/v1/auth/register', {
          'wallet_address': wallet_address
        })
         this.$store.dispatch('updateUser', data.data.user)
        this.$router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    getUser(wallet_address) {
      this.$axios.get('http://localhost:4000/v1/auth/account/' + wallet_address)
      .then( (data)  => {
        if(data.data.user) {
          console.log('data.data.user => ', data.data.user)
           this.$store.dispatch('updateUser', data.data.user)
          this.$router.push('/')
        }else {
          this.register(user.get("ethAddress"))
        }
      })
      .catch( (error)  => {
        console.log(error);
      });
    }
  }
})
</script>
<style scoped src="@/assets/css/abdoul.css">
</style>