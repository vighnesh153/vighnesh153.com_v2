/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { FC, HTMLProps } from 'react';

interface AProps extends Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'as'> {
  openInNewTab?: boolean;
}

const A: FC<AProps> = ({ openInNewTab, ...props }) => {
  if (openInNewTab) {
    return <a target="_blank" rel="noreferrer" {...props} />;
  }
  return <a {...props} />;
};

export default A;
