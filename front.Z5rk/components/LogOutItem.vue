<template>
    <li class="nav-item">
        <a class="nav-link" @click="$emit('clicked')">
            <div class="item-content-link">
                <div class="icon bg-snow text-dark">
                    <i class="ri-logout-box-r-line"></i>
                </div>
                <h3 class="link-title">Sign Out</h3>
            </div>
            <div class="other-cc">
                <span class="badge-text size-18">😟</span>
                <div class="icon-arrow">
                    <i class="ri-arrow-drop-right-line"></i>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
export default {
  name: 'LogOutItem',
}
</script>
