// app/components/AnimatedSection.tsx
'use client';

import { useInView } from 'react-intersection-observer';

type AnimatedSectionProps = {
  children: React.ReactNode;
};

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true, // The animation will only happen once
    threshold: 0.1,    // The component will be considered "in view" when 10% of it is visible
  });

  return (
    <div
      ref={ref}
      // These classes apply the animation based on the 'inView' state
      className={`transition-all duration-1000 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
}