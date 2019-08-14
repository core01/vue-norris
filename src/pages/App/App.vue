<template>
  <div id="app">
    <img src="@/assets/chuk.gif" class="dance" alt="">
    <ButtonComponent title="Получить шутку" v-on:handleClick="getJoke"/>
    <ButtonComponent title="Авто-шутки" button-type="secondary" v-on:handleClick="getAutoJoke"/>
    <JokeBoxComponent :title="joke.value" :poster="joke.icon_url"/>
    <div v-if="error.length > 0" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import ButtonComponent from '@/components/Button';
  import JokeBoxComponent from '@/components/JokeBox';

  export default {
    name: 'App',
    data () {
      return {
        intervalId: 0,
      };
    },
    components: {
      ButtonComponent,
      JokeBoxComponent,
    },
    methods: {
      ...mapActions({
        getJoke: 'jokes/getJoke',
      }),
      getAutoJoke () {
        if (this.intervalId) {
          this.clearInterval();
        } else {
          this.intervalId = setInterval(this.getJoke, 10000);
        }
      },
      clearInterval () {
        clearInterval(this.intervalId);
        this.intervalId = 0;
      },
    },
    computed: {
      ...mapGetters({
        joke: 'jokes/joke',
        error: 'error/error',
      }),
    },
    destroyed () {
      this.clearInterval();
    },
  };
</script>

<style>
  #app {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  }

  .dance {
    width: 65px;
  }
</style>
