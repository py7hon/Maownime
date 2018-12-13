<template>
  <section class="container">
    <Header />
    <div class="wrap">
      <article class="article">
        <h1 class="post__title mono_fonts">{{title.rendered}}</h1>
        <div class="post__content" v-html="content.rendered"></div>
        <nuxt-link :to="'/'">Back</nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
import Header from '~/components/Header.vue'
import axios from 'axios'

export default {
  components: {
    Header
  },
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({params, error}){
    try {
      const {data} = await axios.get(`https://meownime.com/wp-json/wp/v2/posts/${+params.id}`)
      return data
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.article{
  text-align: left;
  background: #ffffff;
  -webkit-transition: opacity .35s ease-in;
  transition: opacity .35s ease-in;
  border: 1px solid #d6d6d6;
  box-shadow: 3px 3px 0px #bababa;
  border-radius: 3px;
  width: 100%;
  margin: auto;
  position: relative;
  margin: 20px 0;
  padding: 20px;
  text-decoration: none;
  color: #000;
  display: inline-block;
  transition: all .3s ease-in;
}
.post__title{
  margin: 0px;
  font-size: 34px;
  line-height: 34px;
  color: #4a69ff;
}

.post__content{
  margin: 25px 0;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: .7px;
  font-weight: 400;

  p {
    margin: 15px 0;
  }
}
</style>

