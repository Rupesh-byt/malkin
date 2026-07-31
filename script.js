const musicToggle = document.getElementById('musicToggle');
const loveSong = document.getElementById('loveSong');

musicToggle.addEventListener('click', () => {
  if (loveSong.paused) {
    loveSong.play().catch(() => {
      musicToggle.textContent = 'Tap play on the audio bar';
    });
    musicToggle.textContent = 'Song Playing';
  } else {
    loveSong.pause();
    musicToggle.textContent = 'Play Love Song';
  }
});

loveSong.addEventListener('play', () => {
  musicToggle.textContent = 'Song Playing';
});

loveSong.addEventListener('pause', () => {
  musicToggle.textContent = 'Play Love Song';
});
