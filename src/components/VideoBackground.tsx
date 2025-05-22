interface VideoBackgroundProps {
  videoPath: string;
}

export const VideoBackground = ({ videoPath }: VideoBackgroundProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen -z-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute min-h-screen min-w-screen w-auto h-auto object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Optional overlay to adjust video brightness/contrast */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
}; 