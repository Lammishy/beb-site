export const ANIMATION_DURATION: number = 0.3;

export const fadeVariant: FADE_MOTION = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { ease: "linear", duration: ANIMATION_DURATION },
};

interface FADE_MOTION {
  initial: object;
  animate: object;
  exit?: object;
  transition?: object;
}