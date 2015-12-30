<template>
  <div class="list-item">

      <a class="title" href="{{item.link}}">{{item.title}}</a>

    <div class="summary">{{{item.summary}}}</div>
    <div class=meta>
      <span class="host">{{item.feed}}</span>
      <span class="diff">{{item.diff}} ago</span>
      <span class="share general icon-share" v-bind:class="{active: isShareActive}" @click="toggleShare"></span>
      <span class="share twitter icon-twitter-with-circle" v-show="isShareActive"></span>
      <span class="share facebook icon-facebook-with-circle" v-show="isShareActive"></span>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'ListItem',

    props: {
      item: Object
    },

    data () {
      return {
        isShareActive: false
      }
    },

    methods: {
      toggleShare () {
        this.isShareActive = !this.isShareActive;
      }
    }
  }
</script>

<style lang="sass">

 @import "../styles/listitem.scss";
</style>
