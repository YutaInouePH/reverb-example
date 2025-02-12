<script lang="ts" setup>
const echo = useEcho()

const messages = ref<string[]>([])
const writeNewMessage = (e: object) => messages.value.push(JSON.stringify(e.message))

function stopAllListeners() {
  echo.leaveAllChannels()
}

function subscribeToPublicChannel() {
  const name = 'welcome'
  const event = '.WelcomeNotification'

  echo
    .channel(name)
    .listen(event, (e: object) => {
      writeNewMessage(e)
    })
    .error((e: object) => {
      console.error('Public channel error', e)
    })
}

onMounted(() => {
  subscribeToPublicChannel();
})
</script>

<template>
  <h1>Reverb conncetion test page</h1>
  <div>
    <p v-for="message in messages" :key="message">{{ message }}</p>
  </div>
</template>
