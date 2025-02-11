<template>
  <div class="chat">
    <div class="chat-messages" ref="messagesContainer">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.role]">
        <div class="message-content">{{ message.content }}</div>
      </div>
    </div>

    <div class="chat-input">
      <textarea
        v-model="userInput"
        @keydown.enter.prevent="sendMessage"
        placeholder="Type your message here..."
        rows="3"
      ></textarea>
      <button @click="sendMessage" :disabled="isProcessing">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import { CreateMLCEngine } from '@mlc-ai/web-llm'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

const llm = await CreateMLCEngine('Llama-3.2-1B-Instruct-q4f32_1-MLC')

export default {
  name: 'ChatView',

  data() {
    return {
      messages: [] as Message[],
      userInput: '',
      isProcessing: false,
    }
  },

  async created() {
    try {
      this.messages.push({
        role: 'system',
        content: 'Initializing WebLLM...',
      })

      this.messages.push({
        role: 'system',
        content: 'WebLLM initialized successfully!',
      })
    } catch (error) {
      console.error('Failed to initialize WebLLM:', error)
      this.messages.push({
        role: 'system',
        content: 'Failed to initialize WebLLM. Please try refreshing the page.',
      })
    }
  },

  methods: {
    async sendMessage() {
      if (!this.userInput.trim() || this.isProcessing || !llm) return

      // Add user message
      this.messages.push({
        role: 'user',
        content: this.userInput.trim(),
      })

      const userMessage = this.userInput
      this.userInput = ''
      this.isProcessing = true

      try {
        console.log(userMessage)
        const response = await llm.chat.completions.create({
          messages: [{ role: 'user', content: userMessage }],
        })
        console.log(response)
        this.messages.push({
          role: 'assistant',
          content: response.choices[0].message.content || 'No response from the model.',
        })
      } catch (error) {
        console.error('Error processing message:', error)
        this.messages.push({
          role: 'system',
          content: 'Sorry, there was an error processing your message.',
        })
      } finally {
        this.isProcessing = false
      }

      this.$nextTick(() => {
        const container = this.$refs.messagesContainer as HTMLDivElement
        container.scrollTop = container.scrollHeight
      })
    },
  },
}
</script>

<style scoped>
.chat {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #f9f9f9;
}

.message {
  margin: 10px 0;
  padding: 10px;
  border-radius: 8px;
  color: #000;
}

.message.user {
  background: #e3f2fd;
  margin-left: 20%;
}

.message.assistant {
  background: #f5f5f5;
  margin-right: 20%;
}

.message.system {
  background: #fff3e0;
  text-align: center;
  margin: 10px 10%;
}

.chat-input {
  display: flex;
  gap: 10px;
}

textarea {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  resize: none;
}

button {
  padding: 10px 20px;
  background: #1976d2;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
