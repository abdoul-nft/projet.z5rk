<template>
  <div>
    <section class="un-my-account">
      <!-- head -->
      <div class="head">
          <div class="my-personal-account">
              <div class="user">
                  <picture>
                      <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                      <img src="~/assets/images/avatar/11.jpg" alt="">
                  </picture>
                  <div class="txt-user">
                      <h1>{{ $store.state.user.username }}</h1>
                     <p>{{ $store.state.user.wallet_address.slice(0, 15) + '...' }}</p>
                  </div>
              </div>
              <button type="button" class="btn btn-copy-address">
                  <input type="checkbox">
                  <div class="icon-box">
                      <i class="ri-file-copy-2-line"></i>
                  </div>
              </button>
          </div>
      </div>
      <!-- body -->
      <div class="body">
          <div class="img-coin-eth">
              <picture>
                  <source srcset="~/assets/images/other/eth.webp" type="image/webp">
                  <img src="~/assets/images/other/eth.png" alt="">
              </picture>
          </div>
          <div class="my-balance-text">
              <h2>My Balance</h2>
              <p>{{ $store.state.balance }} ETH</p>

              <button type="button"
                  class="btn btn-md-size effect-click border-primary rounded-pill text-primary"
                  data-bs-toggle="modal" data-bs-target="#mdllAddETH">
                  Add Balance
              </button>
          </div>
      </div>
  </section>

  <section class="un-navMenu-default without-visit">
      <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link visited" @click="$nuxt.$router.push('/my-wallet')">
                <div class="item-content-link">
                    <div class="icon bg-green-1 color-green">
                        <i class="ri-wallet-line"></i>
                    </div>
                    <h3 class="link-title">My Wallet</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text">{{ $store.state.user.wallet_address.slice(0, 9) + '...' }}</span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="$nuxt.$router.push('/edit-profile')">
                <div class="item-content-link">
                    <div class="icon bg-orange-1 color-orange">
                        <i class="ri-user-3-line"></i>
                    </div>
                    <h3 class="link-title">Edit Profile</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"></span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" @click="$nuxt.$router.push('/activity-settings')">
                <div class="item-content-link">
                    <div class="icon bg-blue-1 color-blue">
                        <i class="ri-landscape-line"></i>
                    </div>
                    <h3 class="link-title">My Items</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"></span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>

        <div class="sub-title-pkg">
            <h2>Settings</h2>
        </div>

        <li class="nav-item">
            <div class="nav-link">
                <div class="item-content-link">
                    <div class="txt">
                        <h3 class="link-title">Dark Mode</h3>
                        <p class="size-11 color-text m-0">Browsing in night mode</p>
                    </div>
                </div>
                <div class="other-cc">

                    <label class="switch_toggle toggle_lg theme-switch" for="switchDark">
                        <input type="checkbox" class="switchDarkMode theme-switch" id="switchDark"
                            aria-describedby="switchDark" aria-label="switchDark">
                        <span class="handle"></span>
                    </label>

                </div>
            </div>
        </li>


        <li class="nav-item">
            <a class="nav-link" @click="$nuxt.$router.push('/activity-settings')">
                <div class="item-content-link">
                    <div class="icon bg-red-1 color-red">
                        <i class="ri-notification-line"></i>
                    </div>
                    <h3 class="link-title">Activity Settings</h3>
                </div>
                <div class="other-cc">
                    <span class="badge-text"></span>
                    <div class="icon-arrow">
                        <i class="ri-arrow-drop-right-line"></i>
                    </div>
                </div>
            </a>
        </li>

        <div class="sub-title-pkg">
            <h2>we'll miss you</h2>
        </div>

        <LogOutItem  @clicked="logOut" />

      </ul>
  </section>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    middleware: 'auth',
    name: 'settings',
    layout: 'navigation',
    mounted() {
        console.log(this.$store.state.user)
    },
    methods : {
        async  logOut() {
            await  window.Moralis.User.logOut();
            console.log("logged out");
            this.$store.dispatch('updateUser', null)
            this.$router.push('/connect-wallet')
        }
    }
 
})
</script>
