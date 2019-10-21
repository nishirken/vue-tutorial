<template>
<div>
  <h2
    v-on:click="paint"
    v-bind:style="{ color: titleColor }"
  >
    {{ title }}
  </h2>
  <button v-on:click="reverse">Reverse title</button>
</div>
</template>
<script>
const randomColor = () => `#${(Math.random()*0xFFFFFF<<0).toString(16)}`;

export default {
  data: () => ({
    title: "Hello Vue",
    titleColor: randomColor()
  }),
  methods: {
    reverse() {
      this.title = this.title.split('').reverse().join('');
    },
    paint() {
      this.titleColor = randomColor();
    }
  }
};
</script>
