export const playJoinSound = () => {
  const audio = new Audio('/sounds/join.mp3');
  audio.play().catch(err => console.log('Audio play failed:', err));
};

export const playCreateSound = () => {
  const audio = new Audio('/sounds/create.mp3');
  audio.play().catch(err => console.log('Audio play failed:', err));
}; 