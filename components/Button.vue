<template>
  <nuxt-link v-bind:to="link" class="cta" v-bind:class="color" v-html="text" v-bind:title="text"></nuxt-link>
</template>

<style lang="scss">
.cta{
  color: #0a0a0a;
  -webkit-appearance: none;
  font-stretch: condensed;
  font-weight: 700;
  text-transform: uppercase;
  border: 2px solid #0a0a0a;
  text-align: center;
  border-radius: 3px;
  width: 118px;
  padding: 3px 0px;
  line-height: 18px;
  text-decoration: none;
  transition: all .2s ease-in-out;

  &.cream{
    background: #66e2d5;

    &:hover{
      background: #00f9df;
    }
  }
}
</style>

<script>
export default {
  props: ['text', 'link', 'color']
}
</script>
