document.querySelectorAll('[data-video]').forEach((shell) => {
  const video = shell.querySelector('video');
  if (!video) return;
  video.addEventListener('loadeddata', () => shell.classList.add('has-video'));
  video.addEventListener('error', () => shell.classList.remove('has-video'));
  const source = video.querySelector('source');
  if (source) source.addEventListener('error', () => shell.classList.remove('has-video'));

  // Gallery videos play on hover/focus, keeping the page lightweight.
  if (!shell.classList.contains('hero-video')) {
    shell.addEventListener('mouseenter', () => video.play().catch(() => {}));
    shell.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
  }
});
