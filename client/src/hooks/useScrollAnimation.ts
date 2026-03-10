// ============================================================
// 01FutStore — useScrollAnimation Hook
// Triggers CSS class changes when elements enter viewport
// ============================================================

import { useEffect, useRef } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Observe all .scroll-hidden children
    const targets = el.querySelectorAll('.scroll-hidden');
    targets.forEach(t => observer.observe(t));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
