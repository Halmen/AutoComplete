<template>
  <v-container fluid>
    <div v-if="change">
      <v-layout row wrap align-center justify-center>
        <v-flex v-for="word in data.slice(0, 10)" :key="word" xs1>
          <v-card auto-grow class="ma-1" v-on:click="onClick(word)">
            <p align-center>{{word}}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <div v-else>
      <v-layout row wrap align-center justify-center fill-height>
        <v-flex v-for="word in data" :key="word" xs1>
          <v-card class="ma-1" v-on:click="onClick(word)">
            <p>{{word}}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
    <v-btn medium @click="change = !change">More/Less</v-btn>
  </v-container>
</template>


<script>
export default {
  name: "AutoComplete",

  props: ["msg", "lword", "data"],
  data() {
    return {
      change: true
    };
  },

  methods: {
    onClick: function(value) {
      let oldMsg = this.msg;
      let lastIndex = oldMsg.lastIndexOf(" ");
      oldMsg = oldMsg.substring(0, lastIndex);
      //conver the suggestion to upper or smaller so that the original case is kept
      let newMsg = oldMsg + " " + value.toLowerCase();
      if (/^[A-Z]/.test(this.lword)) {
        newMsg = oldMsg + " " + value;
      }

      this.$parent.msg = newMsg;
      this.$parent.data = null;
    }
  }
};
</script>

<style scoped>
p {
  cursor: pointer;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1rem;
}
p::first-letter {
  font-weight: bold;
}
p:hover {
  background-color: rgb(110, 183, 219);
}
</style>