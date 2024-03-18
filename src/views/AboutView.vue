<template>
  <div class="about">
    <div class="sidebar"></div>
    <div class="text">
      <img src="@/assets/image/head.jpg" alt="">
      <p>
        {{ $t('about.p1') }}
        <br>
        <br>
        {{ $t('about.p2') }}
        <br>
        <br>
        {{ $t('about.p3') }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/views/AboutView';
</style>
