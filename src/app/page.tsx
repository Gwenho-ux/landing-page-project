'use client';

import { BlurOverlay } from '@/components/BlurOverlay';
import { NeonButton } from '@/components/NeonButton';
import { VideoBackground } from '@/components/VideoBackground';
import { CONTENT } from '@/constants/content';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleTransition = () => {
    router.push('/transition');
  };

  return (
    <>
      <VideoBackground videoPath="/videos/background.mp4" />
      
      {/* Header - Fixed Position */}
      <button className="header-link">
        {CONTENT.header.title}
      </button>

      <main className="relative min-h-screen w-full">
        {/* Main Content */}
        <div className="fixed bottom-[120px] left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center gap-6 max-w-[688px] w-full">
            <div className="relative w-full">
              <BlurOverlay className="rounded-lg -z-10" />
              <p className="font-bold text-xl text-center leading-[1.55em] tracking-[0.11em] p-4">
                {CONTENT.main.description}
              </p>
            </div>

            <button 
              onClick={handleTransition} 
              className="bg-transparent"
            >
              <NeonButton>
                {CONTENT.main.buttonText}
              </NeonButton>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="fixed bottom-0 left-0 right-0 z-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[688px] h-[73px] bg-dark-bg opacity-70 blur-[46.7px]" />
          <div className="absolute bottom-8 left-[617px] w-[174px] h-[31px] bg-dark-bg blur-[27.6px]" />
          <div className="absolute bottom-0 right-[271px] w-[436px] h-[146px] bg-dark-bg-2 blur-[42.6px] rounded-[73px]" />
        </div>
      </main>
    </>
  );
}
