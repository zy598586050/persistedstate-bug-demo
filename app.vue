<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/store/useAppStore'

console.log(useAppStore().locale)
</script>
