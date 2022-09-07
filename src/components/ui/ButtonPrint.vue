<script setup lang="ts">
const handlePrint = () => {
  window.print();
};
</script>

<template>
  <button
    @click="handlePrint"
    class="print:hidden bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-4 right-4"
  >
    Imprimir Tablero
    <i class="fas fa-print"></i>
  </button>
</template>

<style scoped></style>
