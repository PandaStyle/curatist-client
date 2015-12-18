<template>
  <div class="list-item">
    <div class="title">
      <a href="{{item.link}}">{{item.title}}</a>
    </div>
    <div class="summary">{{item.summary}}</div>
    <div class=meta>
      <span class="host">{{item.feed}}</span>
      <span class="diff">{{item.diff}} ago</span>
    </div>
  </div>
</template>

<script type="text/babel">
  export default {
    name: 'ListItem',

    props: {
      item: Object,
      isInspiration: Boolean
    }
  }
</script>

<style lang="sass">

 @import "../styles/feeditem.scss";
</style>
