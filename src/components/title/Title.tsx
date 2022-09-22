import React, { FC, memo } from 'react';
import cn from 'classnames';

import styles from './Title.module.css';

interface ITitleProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {}

const Title: FC<ITitleProps> = ({ children, className, ...props }) => {
  return (
    <h3 className={cn(styles.title, className)} {...props}>
      {children}
    </h3>
  );
};

export default memo(Title);
