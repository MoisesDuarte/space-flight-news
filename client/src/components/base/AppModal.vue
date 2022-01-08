<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
          <slot name="title"></slot>
        </p>
        <button class="button" aria-label="close" @click="onClose">X</button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  methods: {
    onClose() {
      this.$emit("onClose");
    },
  },
};
</script>
