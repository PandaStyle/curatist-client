<template>
  <div class="list-item">

      <a class="title" href="{{item.link}}">{{item.title}}</a>

    <div class="summary">{{{item.summary}}}</div>
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
      item: Object
    }
  }
</script>

<style lang="sass">

 @import "../styles/listitem.scss";
</style>
