<script setup lang="ts">
import { KeepAlive } from 'vue'
import FormPlayer from '../components/Football/FormPlayer.vue';
import FootballLayout from '../components/layouts/FootballLayout.vue';

</script>

<template>
    <KeepAlive>
        <FootballLayout>
            <div class="p-2">
                <FormPlayer />
            </div>
        </FootballLayout>
    </KeepAlive>
</template>

<style scoped>
</style>