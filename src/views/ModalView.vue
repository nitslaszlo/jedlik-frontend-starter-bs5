<script setup lang="ts">
import { ref } from "vue";
import ModalFrame from "../components/ModalFrame.vue";

const thisModal= ref();

function showModal(){
 thisModal.value.show();
}
</script>

<template>
  <button class="btn bg-info" @click="showModal">Show Modal</button>
  <ModalFrame title="Ez a modális ablak címe" ref="thisModal">
    <template #body>This should be in the body</template>
    <template #footer>
      <button class="btn btn-primary">Extra footer button</button>
    </template>
</ModalFrame>
</template>