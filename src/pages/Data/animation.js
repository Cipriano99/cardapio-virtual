import anime from 'animejs';

export const Animation = () => {
  return anime({
    targets: 'section',
    opacity: 1,
    duration: 600,
  });
};
