import React, { useEffect, useState, useRef } from 'react';

export function useEffectOnce(effect: any) {
  const effectFn = useRef(effect);
  const destroyFn = useRef(effect);
  const effectCalled = useRef(false);
  const rendered = useRef(false);
  const [, refresh] = useState(0);

  if (effectCalled.current) {
    rendered.current = true;
  }

  useEffect(() => {
    if (!effectCalled.current) {
      destroyFn.current = effectFn.current();
      effectCalled.current = true;
    }

    refresh(1);

    return () => {
      if (rendered.current === false) return;
      if (destroyFn.current) destroyFn.current();
    };
  }, []);
}

export function suffle(array: string[]) {
  array.sort(() => Math.random() - 0.5);

  return array;
}
