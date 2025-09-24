const socket = io.connect('https://real-time-sentiment-analyzer.onrender.com');

function sendText() {
  const text = document.getElementById('textInput').value;
  socket.emit('analyze', { text });
}

socket.on('result', function(data) {
  document.getElementById('result').innerText = "Sentiment: " + data.sentiment;
});
