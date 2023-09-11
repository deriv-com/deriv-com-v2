import styles from './hero.module.scss';

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Hero!</h1>
    </div>
  );
}

export default Hero;
