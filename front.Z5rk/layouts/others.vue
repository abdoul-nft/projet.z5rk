<template>
<div>
  <div id="wrapper">
    <div id="content">
      <AppDefaultHeader :title="headerTitle[$nuxt.$route.name]"/>
      <div class="space-sticky"></div>
      <Nuxt />
    </div>
  </div>
</div>
</template>

<script>
export default {
 data() {
    return {
      headerTitle: {
        'my-wallet': 'My wallet',
        'activity-settings': 'Activity settings'
      }
    }
  },
}
</script>