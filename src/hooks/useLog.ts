import { ref } from 'vue';

export const useLog = () => {
  const logMessages = ref<string[]>(['> You are playing in [REDACTED] the game']);

  const addMessageToLog = (message: string) => {
    if (logMessages.value.length >= 23) {
      logMessages.value.shift();
    }

    logMessages.value.push('>' + message);
  };

  return { logMessages, addMessageToLog };
};
