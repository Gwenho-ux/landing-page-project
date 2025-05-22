import { useEffect, useState } from 'react';
import { ResultPage } from './ResultPage';
import { HandVideoPage } from './HandVideoPage';
import { RisingVideoPage } from './RisingVideoPage';

interface VideoSequenceProps {
  onComplete?: () => void;
  userInput: string;
}

type SequenceState = 'hand' | 'rising' | 'result' | null;

export const VideoSequence = ({ onComplete, userInput }: VideoSequenceProps) => {
  const [currentState, setCurrentState] = useState<SequenceState>('hand');
  const [nextState, setNextState] = useState<SequenceState>(null);
  const [blackOverlay, setBlackOverlay] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  // Fetch AI response when transitioning to result page
  const fetchAiResponse = async () => {
    try {
      const response = await fetch('/api/generate-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      if (!response.ok) throw new Error('Failed to generate answer');

      const data = await response.json();
      setAiResponse(data.answer);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setAiResponse("The mists are thick today. My vision is clouded, but the meal must go on.");
    }
  };

  const handleTransition = (next: SequenceState) => {
    // If transitioning to result page, fetch AI response
    if (next === 'result') {
      fetchAiResponse();
    }

    // Step 1: Show black overlay
    setBlackOverlay(true);
    
    // Step 2: After black overlay is fully visible, prepare next content
    setTimeout(() => {
      setNextState(next);
      
      // Step 3: Switch current state and hide overlay
      setTimeout(() => {
        setCurrentState(next);
        setNextState(null);
        
        // Step 4: Remove black overlay
        setTimeout(() => {
          setBlackOverlay(false);
        }, 50);
      }, 50);
    }, 300);
  };

  const handleHandComplete = () => {
    handleTransition('rising');
  };

  const handleRisingComplete = () => {
    handleTransition('result');
  };

  const handleBreakCycle = () => {
    if (onComplete) onComplete();
  };

  const handleShare = () => {
    if (onComplete) onComplete();
  };

  if (!currentState) return null;

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden" style={{ zIndex: 99999 }}>
      {/* Base black background */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Content layers */}
      <div className="absolute inset-0 bg-black">
        {currentState === 'hand' && (
          <HandVideoPage onComplete={handleHandComplete} />
        )}
        {currentState === 'rising' && (
          <RisingVideoPage onComplete={handleRisingComplete} />
        )}
        {currentState === 'result' && (
          <ResultPage 
            onBreakCycle={handleBreakCycle} 
            onShare={handleShare}
            aiResponse={aiResponse || "The mists are thick today. My vision is clouded, but the meal must go on."}
          />
        )}
      </div>
      
      {/* Black overlay for transitions */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 pointer-events-none ${
          blackOverlay ? 'opacity-100' : 'opacity-0'
        }`} 
      />
    </div>
  );
}; 