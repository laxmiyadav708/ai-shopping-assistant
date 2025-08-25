document.getElementById('send-btn').addEventListener('click', () => {
  const input = document.getElementById('user-input').value.trim();
  if (!input) return;

  const chatBox = document.getElementById('chat-box');

  const userMsg = document.createElement('div');
  userMsg.className = 'user-msg';
  userMsg.textContent = input;
  chatBox.appendChild(userMsg);

  // Optional: show loading message
  const loadingMsg = document.createElement('div');
  loadingMsg.className = 'bot-msg';
  loadingMsg.textContent = 'Typing...';
  chatBox.appendChild(loadingMsg);

  fetch('/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt: input })
  })
  .then(res => res.json())
  .then(data => {
    loadingMsg.remove();
    const botMsg = document.createElement('div');
    botMsg.className = 'bot-msg';
    botMsg.textContent = data.response;
    chatBox.appendChild(botMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
  })
  .catch(err => {
    loadingMsg.remove();
    const errorMsg = document.createElement('div');
    errorMsg.className = 'bot-msg';
    errorMsg.textContent = '⚠️ Something went wrong. Please try again.';
    chatBox.appendChild(errorMsg);
  });

  document.getElementById('user-input').value = '';
});
