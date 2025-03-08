'use client'; // This directive is required for error handling in Next.js

import { useEffect } from 'react';

export default function GlobalError({error}: {error: Error & { digest?: string };
}) {

  return (
    <div>
      <h2>Global Error</h2>
    </div>
  );
}