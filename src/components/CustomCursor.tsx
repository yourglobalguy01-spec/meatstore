import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current || !followerRef.current) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1, ease: 'power2.out' });
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power4.out' });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 0, duration: 0.3 });
      gsap.to(follower, { scale: 3, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderColor: 'transparent', duration: 0.3 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgba(255, 255, 255, 0.5)', duration: 0.3 });
    };

    window.addEventListener('mousemove', onMouseMove);

    const addHoverEvents = () => {
      const interactables = document.querySelectorAll('a, button, input, [role="button"]');
      interactables.forEach((el) => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    // Initial addition
    addHoverEvents();

    // Re-add on mutation if links are dynamically added
    const observer = new MutationObserver(() => {
      addHoverEvents();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-colors"
      />
    </>
  );
}
