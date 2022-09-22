import React, { FC, memo, ReactElement } from 'react';
import cn from 'classnames';

import { TTabValues } from 'components/tab/types';

import styles from './Tab.module.css';

interface ITabProps {
  title: string;
  icon: ReactElement;
  active?: boolean;
  value: TTabValues;
  onClick: (value: TTabValues) => void;
}

const Tab: FC<ITabProps> = ({ icon, title, value, active, onClick }) => {
  const handleTabClick = () => {
    onClick(value);
  };

  return (
    <button
      type="button"
      className={cn(styles.tab, { [styles.active]: active })}
      onClick={handleTabClick}
    >
      <div className={styles.icon}>{icon}</div>
      <span className={styles.text}>{title}</span>
    </button>
  );
};

Tab.defaultProps = {
  active: false,
};

export default memo(Tab);
