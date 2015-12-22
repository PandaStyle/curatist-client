<template>
  <div class="tile feed-item square">
    <a href="" class="frame before after">
      <a class="overlay" href="{{item.link}}" target="_blank" >
        <div class="lay"></div>
      </a>
      <div class="tile-image"><img   v-img="item.image" alt=""/></div>
      <header>
        <div class="title">{{item.title}}</div>
        <div class="summary">{{item.summary}}</div>
        <div class=meta>
          <span class="host">{{item.feed}}</span>
          <span class="diff">{{item.diff}} ago</span>
        </div>
      </header>
    </a>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'FeedItem',

    props: {
      item: Object,
      isInspiration: Boolean
    }
  }
</script>

<style lang="sass">

 @import "../styles/feeditem.scss";
</style>
