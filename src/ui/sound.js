let audio;

// TODO(ui): sounds for golden + bomb, a mute button — see src/ui/README.md
const tones = { slice: 660, miss: 180 };

export function play(name) {
  const tone = tones[name];
  if (!tone) return;
  audio ??= new AudioContext();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.frequency.value = tone;
  gain.gain.setValueAtTime(0.15, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + 0.15);
  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + 0.15);
}
