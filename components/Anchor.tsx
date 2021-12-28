/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { FC, HTMLProps } from 'react';

interface AnchorProps extends Omit<HTMLProps<HTMLAnchorElement>, 'ref' | 'as'> {
  openInNewTab?: boolean;
}

const Anchor: FC<AnchorProps> = ({ openInNewTab, ...props }) => {
  if (openInNewTab) {
    return <a target="_blank" rel="noreferrer" {...props} />;
  }
  return <a {...props} />;
};

export default Anchor;
