<template>
  <button
      :class="[buttonType,{
      btn: true,
      btn_block: block,
      btn_disabled: disabled,
    }]"
      :style="{ width }"
      :disabled="disabled"
      @click="handleClick"
  >
    <span class="btn__title" v-if="!!title">{{ title }}</span>
  </button>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      title: {
        type: String,
        default: '',
      },
      buttonType: {
        type: String,
        default: 'primary',
        validator: value =>
          [
            'primary',
            'secondary',
            'thirdly',
            'fourthly',
            'fifthly',
            'sixthly',
          ].indexOf(value) !== -1,
      },
      width: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      block: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick () {
        this.$emit('handleClick');
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn {
    cursor: pointer;
    width: 140px;
    height: 50px;
    border-radius: 4px;
    color: #fff;
    text-transform: uppercase;
  }

  .primary {
    background: #d23232;
  }

  .secondary {
    background: #4766d2;
  }

  .btn_block {
    display: block;
  }

  .btn_disabled {
    background: gray;
  }
</style>
