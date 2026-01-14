
'use client';

import { useState, useEffect } from 'react';
import { DatabaseReference, onValue, off } from 'firebase/database';

interface UseRtdbValueResult<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

/**
 * React hook to subscribe to a Firebase Realtime Database path.
 *
 * IMPORTANT! YOU MUST MEMOIZE the database reference passed to this hook using useMemoFirebase.
 *
 * @template T Type of the data at the specified path.
 * @param {DatabaseReference | null | undefined} memoizedDbRef - The memoized Firebase Realtime Database reference.
 * @returns {UseRtdbValueResult<T>} Object with data, isLoading, and error.
 */
export function useRtdbValue<T = any>(
  memoizedDbRef: (DatabaseReference & { __memo?: boolean }) | null | undefined
): UseRtdbValueResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!memoizedDbRef) {
      setData(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    const listener = onValue(
      memoizedDbRef,
      (snapshot) => {
        setData(snapshot.val() as T);
        setIsLoading(false);
      },
      (err: Error) => {
        console.error('Realtime Database read failed:', err);
        setError(err);
        setIsLoading(false);
        setData(null);
      }
    );

    // Cleanup function to remove the listener
    return () => {
      off(memoizedDbRef, 'value', listener);
    };
  }, [memoizedDbRef]);

  if (memoizedDbRef && !memoizedDbRef.__memo) {
    throw new Error('Database reference was not properly memoized using useMemoFirebase');
  }

  return { data, isLoading, error };
}
