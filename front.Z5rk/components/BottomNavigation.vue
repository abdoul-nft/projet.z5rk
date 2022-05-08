<template>
    <footer class="un-bottom-navigation filter-blur">
        <div class="em_body_navigation border-0 -active-links">
            <div class="item_link">
                <nuxt-link to="/" class="btn btn_navLink" :class="{'active' : selected === 'index'  }" aria-label="btnNavigation">
                    <div class="icon_current">
                        <i class="ri-home-5-line"></i>
                    </div>
                    <div class="icon_active">
                        <i class="ri-home-5-fill"></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="item_link">
                <nuxt-link to="/search" class="btn btn_navLink" :class="{'active' : selected === 'search'  }" aria-label="btnNavigation">
                    <div class="icon_current">
                        <i class="ri-search-2-line"></i>
                    </div>
                    <div class="icon_active">
                        <i class="ri-search-2-fill"></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="item_link">
                <button type="button" name="uploadItem" aria-label="uploadItem"
                    class="btn btn_navLink without_active" data-bs-toggle="modal" data-bs-target="#mdllUploadItem">
                    <div class="btn btnCircle_default">
                        <i class="ri-add-line"></i>
                    </div>
                </button>
            </div>
            <div class="item_link">
                <nuxt-link to="/favoris" class="btn btn_navLink" :class="{'active' : selected === 'favoris'  }" aria-label="btnNavigation">
                    <div class="icon_current">
                        <i class="ri-heart-3-line"></i>
                    </div>
                    <div class="icon_active">
                        <i class="ri-heart-3-fill"></i>
                    </div>
                </nuxt-link>
            </div>
            <div class="item_link">
                <nuxt-link to="/settings" class="btn btn_navLink" :class="{'active' : selected === 'settings'  }" aria-label="btnNavigation">
                    <div class="icon_current">
                        <i class="ri-user-4-line"></i>
                    </div>
                    <div class="icon_active">
                        <i class="ri-user-4-fill"></i>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'BottomNavigation',
  props: {
    selected: {
      type: String,
      required: true
    }
  },
}
</script>