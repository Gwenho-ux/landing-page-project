interface HandVideoPageProps {
  onComplete: () => void;
}

export const HandVideoPage = ({ onComplete }: HandVideoPageProps) => {
  return (
    <div className="relative w-full h-full">
      <video
        autoPlay
        muted
        playsInline
        onEnded={onComplete}
        className="w-full h-full object-cover"
        src="/videos/Hand.mp4"
      />
      <div className="absolute inset-x-0 bottom-0 flex justify-center items-center">
        <div className="w-full h-[200px] bg-gradient-to-t from-black to-transparent" />
        <p className="absolute bottom-[48px] text-white text-center font-pt-mono text-[20px] font-bold leading-[31px] tracking-[2.2px] [text-shadow:_2px_2px_4px_rgb(0_0_0),_-2px_-2px_4px_rgb(0_0_0),_2px_-2px_4px_rgb(0_0_0),_-2px_2px_4px_rgb(0_0_0)]">
          Ren stirs… listens… something simmers in the silence.
        </p>
      </div>
    </div>
  );
}; 