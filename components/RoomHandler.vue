<script setup lang="ts">
import { url } from 'inspector';

const prop = defineProps<{
    url: string
}>()

const text = ref(prop.url)

const emit = defineEmits<{
  (e: 'create'): void
  (e: 'join', key: string): void
}>()

const tryJoin = () => {
    if (text.value.length < 10) {
        return
    }
    emit('join', text.value)
}  
</script>


<template>
    <div class="p-3 w-full">
        <div class="flex justify-center">
            <input type="text" v-model="text" placeholder="RoomKey" />
        </div>
        <div class="flex justify-center gap-9">
            <button @click="emit('create')" class="border-1">Create</button>
            <button @click="tryJoin" class="border-1">Join</button>
        </div>
    </div>
</template>