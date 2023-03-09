<script setup lang="ts">
const prop = defineProps<{
    url: string
}>()

var text = ref('')

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
            <input type="text" placeholder="RoomKey" :value="prop.url" @input="(ev) => text = (ev.target as HTMLInputElement).value" />
        </div>
        <div class="flex justify-center gap-9">
            <button @click="emit('create')" class="border-1">Create</button>
            <button @click="tryJoin" class="border-1">Join</button>
        </div>
    </div>
</template>