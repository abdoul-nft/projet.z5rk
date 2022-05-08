<template>
    <div class="modal sidebarMenu -left fade" id="mdllSidebar-connected" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header d-block pb-1">

                    <!-- un-user-profile -->
                    <div class="un-user-profile">
                        <div class="image_user">
                            <picture>
                                <source srcset="~/assets/images/avatar/11.webp" type="image/webp">
                                <img src="~/assets/images/avatar/11.jpg" alt="image">
                            </picture>
                        </div>
                        <div class="text-user">
                            <h3>{{ $store.state.user.username }}</h3>
                            <p>{{ $store.state.user.wallet_address.slice(0, 15) + '...' }}</p>
                        </div>
                    </div>

                    <button type="button" class="btn btnClose" data-bs-dismiss="modal" aria-label="Close">
                        <i class="ri-close-fill"></i>
                    </button>

                    <!-- cover-balance -->
                    <div class="cover-balance">
                        <div class="un-balance">
                            <div class="content-balance">
                                <div class="head-balance">
                                    <h4>My Balance</h4>
                                    <a class="btn link-addBalance" data-bs-toggle="modal" data-bs-dismiss="modal"
                                        data-bs-target="#mdllAddETH">
                                        <i class="ri-add-fill"></i>
                                    </a>
                                </div>
                                <p class="no-balance">{{ $store.state.balance }} ETH</p>
                            </div>
                        </div>
                        <button type="button" class="btn btn-sm-size bg-white text-dark rounded-pill"
                            data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#mdllUploadItem">
                            Create
                        </button>
                    </div>


                </div>
                <div class="modal-body">
                    <ul class="nav flex-column -active-links">
                        <li class="nav-item">
                            <a class="nav-link" @click="$nuxt.$router.push('/')">
                                <div class="icon_current">
                                    <i class="ri-compass-line"></i>
                                </div>
                                <div class="icon_active">
                                    <i class="ri-compass-fill"></i>
                                </div>
                                <span class="title_link">Discover</span>
                            </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" @click="$nuxt.$router.push('/search')">
                                <div class="icon_current">
                                    <i class="ri-home-5-line"></i>
                                </div>
                                <div class="icon_active">
                                    <i class="ri-home-5-fill"></i>
                                </div>
                                <span class="title_link">New</span>

                                <span class="xs-badge">8</span>
                            </a>
                        </li>

                        <label class="title__label">other</label>

                        <li class="nav-item">
                            <a @click="$nuxt.$router.push('/')" class="nav-link">
                                <div class="icon_current">
                                    <i class="ri-logout-box-r-line"></i>
                                </div>
                                <div class="icon_active">
                                    <i class="ri-logout-box-r-fill"></i>
                                </div>
                                <span class="title_link">Sign Out</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="modal-footer">
                    <div class="em_darkMode_menu">
                        <label class="text" for="switchDark">
                            <h3>Dark Mode</h3>
                            <p>Browsing in night mode</p>
                        </label>
                        <label class="switch_toggle toggle_lg theme-switch" for="switchDark">
                            <input type="checkbox" class="switchDarkMode theme-switch" id="switchDark"
                                aria-describedby="switchDark">
                            <span class="handle"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MenuSideBar',
}
</script>
