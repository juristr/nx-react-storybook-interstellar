import styles from './launch-button.module.scss';

/* eslint-disable-next-line */
export interface LaunchButtonProps {
  enabled?: boolean;
  onClick: (e: unknown) => void;
}

export function LaunchButton(props: LaunchButtonProps) {
  return (
    <div className={styles.button} onClick={props.onClick}>
      Launch
    </div>
  );
}

export default LaunchButton;
