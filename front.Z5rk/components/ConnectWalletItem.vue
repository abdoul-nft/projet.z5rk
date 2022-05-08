<template>
  <li class="nav-item" @click="$emit('clicked')">
    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#mdllOtherOpen">
        <div class="icon-app">
            <picture>
                <source :srcset="require(`../assets/images/icons/${icon}.webp`)" type="image/webp">
                <img :src="require(`../assets/images/icons/${icon}.webp`)" :alt="icon">
            </picture>
        </div>
        <h2 class="text-name">{{name}}</h2>
    </a>
  </li>
</template>

<script>
export default {
  name: 'ConnectWalletItem',
  props: {
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
}
</script>
