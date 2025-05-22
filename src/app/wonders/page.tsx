'use client';

import { NeonButton } from '@/components/NeonButton';
import { VideoSequence } from '@/components/VideoSequence';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function WondersPage() {
  const router = useRouter();
  const [inputText, setInputText] = useState('');
  const [showVideoSequence, setShowVideoSequence] = useState(false);

  const handleBack = () => {
    router.push('/');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleWhisper = () => {
    if (!inputText.trim()) return;
    setShowVideoSequence(true);
  };

  const handleVideoComplete = () => {
    setShowVideoSequence(false);
    setInputText('');
  };

  return (
    <main className="fixed inset-0 w-screen h-screen bg-dark overflow-hidden">
      {/* Back Button */}
      <button 
        onClick={handleBack}
        className="fixed top-6 left-6 z-30 flex items-center gap-2 text-[#FF3E3C] font-pt-mono text-[16px] font-bold leading-[31px] tracking-[1.76px] hover:text-[#FF9F9F] transition-colors bg-[#000000] px-4 py-2 rounded-[30px]"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </button>

      {/* Background Video */}
      <div className="fixed inset-0 w-screen h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-screen h-screen object-cover"
        >
          <source src="/videos/man.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/30 z-10" />

      {/* Content Container - Centered in middle of screen */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[80vh] z-20">
        <div className="h-full flex flex-col items-center justify-between">
          {/* Quote Section */}
          <div className="w-full max-w-[688px] px-6">
            <div className="relative">
              <div className="absolute inset-0 bg-black/70 blur-[46.7px] rounded-lg" />
              <div className="absolute inset-0 bg-black/30 rounded-lg" />
              <p className="relative text-white text-center font-pt-mono text-[20px] font-bold leading-[31px] tracking-[2.2px] p-6 [text-shadow:_2px_2px_4px_rgb(0_0_0),_-2px_-2px_4px_rgb(0_0_0),_2px_-2px_4px_rgb(0_0_0),_-2px_2px_4px_rgb(0_0_0)]">
                "Another lost soul seeking for nourishment or knowledge? My counter serves both."
              </p>
            </div>
          </div>

          {/* Interaction Section */}
          <div className="w-full max-w-[631px] flex flex-col items-center gap-[24px]">
            {/* Quick Actions */}
            <div className="w-[calc(100%-48px)] min-[730px]:w-full mx-6 min-[730px]:mx-0 flex flex-col min-[730px]:flex-row justify-between items-center gap-[24px] min-[730px]:gap-0">
              <button className="quick-action-button w-full min-[730px]:w-[306px] bg-black/50 text-[#FF3E3C]">
                Who Are You?
              </button>
              <button className="quick-action-button w-full min-[730px]:w-[306px] bg-black/50 text-[#FF3E3C]">
                Where am I?
              </button>
            </div>

            {/* Question Input */}
            <div className="w-[calc(100%-48px)] min-[730px]:w-full mx-6 min-[730px]:mx-0">
              <div className="w-full flex py-[19px] items-center gap-[10px] flex-shrink-0 self-stretch rounded-[5px] input-gradient-border">
                <input
                  type="text"
                  placeholder="Or.. Enter your question"
                  value={inputText}
                  onChange={handleInputChange}
                  style={{ color: '#FFFFFF' }}
                  className="w-full px-[41px] bg-transparent text-white text-center font-pt-mono text-[20px] font-bold leading-[31px] tracking-[2.2px] outline-none appearance-none border-none focus:ring-0 focus:outline-none placeholder:text-[#BEABAC] placeholder:text-[20px] placeholder:font-bold placeholder:font-pt-mono placeholder:leading-[31px] placeholder:tracking-[2.2px]"
                />
              </div>
            </div>

            {/* Whisper Button */}
            <div className="w-full flex justify-center">
              <NeonButton disabled={!inputText.trim()} onClick={handleWhisper}>
                Whisper to him
              </NeonButton>
            </div>
          </div>
        </div>
      </div>

      {/* Video Sequence */}
      {showVideoSequence && (
        <VideoSequence 
          onComplete={handleVideoComplete} 
          userInput={inputText}
        />
      )}
    </main>
  );
} 