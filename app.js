import { io } from 'https://cdn.socket.io/4.8.0/socket.io.esm.min.js'

const socket = io("https://chat-server-tmx9.onrender.com")

const form = document.getElementById('form')
const input = document.getElementById('input')
const messages = document.getElementById('messages')

socket.on('chat message', (msg) => {
  const item = `<li>${msg}</li>`
  messages.insertAdjacentHTML('beforeend', item)
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (input.value) {
    socket.emit('chat message', input.value)
    input.value = ''
  }
})