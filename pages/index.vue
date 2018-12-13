<template>
  <section class="container">
    <Header />
    <div class="wrap">
      <div class="cat__list_bar">
        <nuxt-link to='/'>Latest</nuxt-link>
      </div>
      <div class="article__list">
          <nuxt-link :to="'/blog/'+post.id" v-for="post in posts" :key="post.id" class="single__article">
            <h3 class="mono_fonts">{{post.title.rendered}}</h3>
            <div class="excerpt" v-html="post.excerpt.rendered"></div>
          </nuxt-link>
      </div>
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
  async asyncData({error}) {
    try {
      const { data } = await axios.get('https://meownime.com/wp-json/wp/v2/posts')
      return { posts: data }
    } catch (e) {
      error({ statusCode: 400, message: 'Something went wrong' })
    }
  }
}
</script>

<style lang="scss">
.container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}

.article__list{
  width: 100%;
  list-style-type: none;
  padding: 50px 20px;
}

.cat__list_bar{
  display: inline-block;
  width: 100%;
  text-align: center;
  margin-top: 35px;

  a{
    background: #cfd7ff;
    border: 1px solid #4e57ef;
    box-shadow: 3px 4px 0px #4e57ef;
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding: 2px 8px;
    font-size: 1.25em;
    border-radius: 2px;
    text-decoration: none;
  }
}

.single__article{
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
  margin-bottom: 20px;
  padding: 20px;
  text-decoration: none;
  color: #000;
  display: inline-block;
  transition: all .3s ease-in;

  &:hover{
    background: #efe;
    box-shadow: 3px 3px 0px #a3e2a3;
  }

  h3{
    margin: 0px;
    font-size: 27px;
    line-height: 32px;
    color: #4a69ff;
  }

  .excerpt{
    margin-top: 20px;
    font-size: 16px;
    line-height: 1.4;
    letter-spacing: .6px;
    font-weight: 400;
  }
}
</style>

