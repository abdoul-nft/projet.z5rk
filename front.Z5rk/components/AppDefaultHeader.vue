<template>
    <header class="default heade-sticky">
        <div class="un-title-page go-back">
            <a @click="$nuxt.$router.back()" class="icon">
                <i class="ri-arrow-drop-left-line"></i>
            </a>
            <h1>{{ title ? title : ''  }}</h1>
        </div>
    </header>
</template>

<script>
export default {
  name: 'AppDefaultHeader',
  props: {
    title: {
      type: String,
      required: false
    }
  },
}
</script>
