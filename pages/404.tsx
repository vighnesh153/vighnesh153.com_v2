/**
 * @author Vighnesh Raut <me@vighnesh153.com>
 */

import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Custom404: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, []);

  return null;
};

export default Custom404;
