import * as React from 'react';
import cx from 'classnames';

import './title.css';

export interface TitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

export const Title = ({
    as='h1',
    level=1,
    className,
    children,
    ...rest
  }: React.PropsWithChildren<TitleProps>) => {
  const Component = as;
  return (
    <Component
      className={cx('wld-title', className, {
        [`wld-title--level${level}`]: level,
      })}
      {...rest}
    >
      {children}
    </Component>
  );
}