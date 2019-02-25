<template>
  <div class="hello">
    <h1 v-show="language ==='en-GB'">Welcome Spelling bee!</h1>
    <h1 v-show="language ==='da-DK'">Velkommen Stavekonkurrence!</h1>
    <v-layout row wrap class="py-2">
      <h2 v-show="language ==='en-GB'">Choose language:</h2>
      <h2 v-show="language ==='da-DK'">Vælg sprog:</h2>
      <v-btn-toggle class="ml-3" v-model="language">
        <v-btn text value="en-GB">English</v-btn>
        <v-btn text value="da-DK">Dansk</v-btn>
      </v-btn-toggle>
    </v-layout>
    <v-textarea
      name="input-7-1"
      box
      ref="ta"
      label="Lazy typing"
      auto-grow
      v-on:keyup="onKeyDown"
      v-model="msg"
    ></v-textarea>
    <Suggestions
      class="pt-1"
      v-if="data && data.length > 0"
      v-bind:msg="result"
      v-bind:lword="lword"
      v-bind:data="data"
    />
    <h1
      v-show="error"
      class="red--text"
    >You discovered the Easter Egg, congrats ;), Now fix me !!!!!</h1>
  </div>
</template>

<script>
import SuggestListApi from "@/services/api/SuggestList";
import Suggestions from "@/components/Suggestions";

export default {
  name: "AutoComplete",
  data() {
    return {
      msg: "",
      language: "en-GB",
      data: null,
      lword: null,
      result: null,
      error: false
    };
  },
  components: {
    Suggestions
  },
  methods: {
    onKeyDown: function() {
      let textarea = this.$refs.ta.$el.querySelector("textarea");
      let cursorPosition = textarea.selectionStart;
      this.result = this.msg.slice(0, cursorPosition);
      let words = this.result.split(" ");
      this.lword = words[words.length - 1];

      if (this.result) {
        let send = `misc/getPredictions?locale=${this.language}&text=${
          this.result
        }`;

        SuggestListApi.getSuggestions(send)
          .then(response => {
            this.data = response;
            this.error = false;
          })
          .catch(error => {
            this.error = true;
            console.log(error);
          });
      } else {
        this.data = null;
      }
    }
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
