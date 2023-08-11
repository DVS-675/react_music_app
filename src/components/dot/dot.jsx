import styles from './dot.module.css';

function Dot({ isPlaying }) {
  console.log(isPlaying)
  return (
    <div className={styles.wrapper}>
      <div className={styles.dot} data-playing={isPlaying} />
    </div>
  );
}

export default Dot;
