import { NeonButton } from '@/components/NeonButton';

interface ResultPageProps {
  onBreakCycle: () => void;
  onShare: () => void;
  aiResponse: string;
}

export const ResultPage = ({ onBreakCycle, onShare, aiResponse }: ResultPageProps) => {
  return (
    <div className="fixed inset-0 w-screen h-screen z-50">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-screen h-screen object-cover"
        >
          <source src="/videos/food.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Blur Overlay */}
      <div className="absolute right-[77px] top-[83px] w-[569px] h-[633px] bg-black/70 backdrop-blur-[73.5px] rounded-lg" />

      {/* Content Container */}
      <div className="absolute right-[77px] top-[139px] w-[538px] flex flex-col gap-[43px]">
        {/* Type and Title */}
        <div className="w-[448px] flex flex-col gap-[29px]">
          <div className="w-full flex flex-col items-end">
            <p className="font-['Public_Sans'] text-[#C9312F] text-right text-[24px] font-bold leading-[31px] tracking-[2.64px]">
              Type A
            </p>
            <h1 className="font-['Public_Sans'] text-white text-[60px] font-black leading-[62px] tracking-[6.6px]">
              Twilight Veil
            </h1>
          </div>

          {/* Attributes */}
          <div className="relative w-[442px] h-[133px]">
            <div className="absolute left-0 top-0 text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Bitter</div>
            <div className="absolute left-0 top-[51px] text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Cold</div>
            <div className="absolute left-0 top-[102px] text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Common</div>
            <div className="absolute right-0 top-0 text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Sweet</div>
            <div className="absolute right-0 top-[51px] text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Warm</div>
            <div className="absolute right-0 top-[102px] text-white opacity-60 font-['Public_Sans'] text-[14px] leading-[31px] tracking-[1.54px]">Rare</div>

            {/* Rating Bars */}
            <div className="absolute left-[91px] top-[9px] w-[275px] h-[12px] flex items-center">
              <div className="w-[263.5px] h-[1px] bg-[#531716]" />
              <div className="flex gap-[55px] absolute left-0 top-0">
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
              </div>
            </div>
            <div className="absolute left-[91px] top-[60px] w-[275px] h-[12px] flex items-center">
              <div className="w-[263.5px] h-[1px] bg-[#531716]" />
              <div className="flex gap-[55px] absolute left-0 top-0">
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
              </div>
            </div>
            <div className="absolute left-[91px] top-[111px] w-[275px] h-[12px] flex items-center">
              <div className="w-[263.5px] h-[1px] bg-[#531716]" />
              <div className="flex gap-[55px] absolute left-0 top-0">
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#C9312F]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
                <div className="w-3 h-3 rounded-full bg-[#531716]" />
              </div>
            </div>
          </div>
        </div>

        {/* Answer Section */}
        <div className="w-full flex flex-col gap-[32px]">
          <div className="w-full flex flex-col gap-[18px]">
            <p className="font-pt-mono text-[#FF3E3C] text-[20px] font-bold leading-[31px] tracking-[2.2px]">
              Ren's Answer:
            </p>
            <p className="font-pt-mono text-white text-[20px] font-bold leading-[31px] tracking-[2.2px]">
              "{aiResponse}"
            </p>
          </div>

          {/* Action Buttons */}
          <div className="w-[402px] flex justify-between items-center gap-[18px]">
            <button
              onClick={onBreakCycle}
              className="w-[192px] h-[48px] rounded-[5px] bg-gradient-to-r from-black to-[#331110] border border-gradient-to-br from-[#CF6261] via-[#550505] to-[#BD3533] flex justify-center items-center"
            >
              <span className="font-pt-mono text-[#FF3E3C] text-[14px] font-bold leading-[31px] tracking-[1.54px]">
                break your cycle →
              </span>
            </button>
            <button
              onClick={onShare}
              className="w-[192px] h-[48px] rounded-[5px] bg-gradient-to-r from-black to-[#331110] border border-gradient-to-br from-[#CF6261] via-[#550505] to-[#BD3533] flex justify-center items-center"
            >
              <span className="font-pt-mono text-[#FF3E3C] text-[14px] font-bold leading-[31px] tracking-[1.54px]">
                Share your answer
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 