import { useState } from 'react';
import styles from './launch-button.module.scss';
export interface LaunchButtonProps {
  onClick: () => void;
}

export function LaunchButton({
  onClick: launchButtonClick,
}: LaunchButtonProps) {
  const [isEnabled, setEnabled] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClick = (e: any) => {
    e.preventDefault();

    isEnabled && launchButtonClick();
    setEnabled(false);
  };

  return (
    <div
      className={`${styles.button} ${isEnabled ? '' : styles.disabled}`}
      onClick={onClick}
      data-testing="launch-button"
      aria-disabled={!isEnabled}
    >
      {isEnabled ? 'Launch' : 'Launching...'}
    </div>
  );
}

export default LaunchButton;
