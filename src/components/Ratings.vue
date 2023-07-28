<script setup>

import {defineProps} from "vue";

defineProps({
  rating: {
    type: Object,
    required: true
  }
});

</script>

<template>
  <div class="bg-red-100 rounded px-3 py-1 text-red-400">{{rating.Source}}: <span class="text-red-500">{{rating.Value}}</span></div>
</template>