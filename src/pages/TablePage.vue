<script setup lang="ts">
import FootballLayout from "../components/layouts/FootballLayout.vue";
import TablePlayer from "../components/Football/TablePlayer.vue";
import TablePosition from "../components/Football/TablePosition.vue";
import TeamTable from "../components/Football/TeamTable.vue";
import ButtonPrint from "../components/ui/ButtonPrint.vue";
import InfoGame from "../components/Football/InfoGame.vue";
</script>

<template>
  <FootballLayout>
    <InfoGame />
    <TeamTable />
    <TablePlayer />
    <TablePosition />
    <ButtonPrint />
  </FootballLayout>
</template>

<style scoped></style>
