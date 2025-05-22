'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function TransitionPage() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      router.push('/wonders');
    };

    video.addEventListener('ended', handleVideoEnd);
    return () => {
      video.removeEventListener('ended', handleVideoEnd);
    };
  }, [router]);

  return (
    <main className="relative min-h-screen w-full bg-black">
      <div className="absolute inset-0 w-screen h-screen">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover min-w-full min-h-full"
        >
          <source src="/videos/transition1.mp4" type="video/mp4" />
        </video>
      </div>
    </main>
  );
} 