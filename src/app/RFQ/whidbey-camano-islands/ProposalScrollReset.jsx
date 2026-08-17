'use client';

import { useEffect } from 'react';

export default function ProposalScrollReset() {
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}
