import styles from './features.module.css';

/* eslint-disable-next-line */
export interface FeaturesProps {}

export function Features(props: FeaturesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Features!</h1>
    </div>
  );
}

export default Features;
