import { CSSProperties, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface NotificationCardProps {
  icon: ReactNode | string;
  text: string;
  user: string;
  time: string;
  className?: string;
  style?:CSSProperties
}

export const NotificationCard: FC<NotificationCardProps> = ({
  icon,
  text,
  user,
  time,
  className,
  style
}) => {
  const ref = useRef(null!);
  // const tl = gsap.timeline()

  return (
    <div
    ref={ref}
      className={cn(
        "absolute bg-white/10 backdrop-blur-md rounded-4xl px-6 py-6 z-10",
        "border border-white/30 shadow-lg backdrop-blur-lg",
        "transition-all duration-700 hover:scale-105 lg:w-[350px]",

        className
      )}
      style={style}
    >
      <div className="flex items-center gap-3">
        <div className="w-[50px] rounded-lg flex justify-center items-center h-[50px] bg-gray-100/25">
      {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-medium text-lg whitespace-nowrap">
            {text}
          </span>
          <div className="flex  items-center gap-2 text-xs text-white/60">
            <span>{user}</span>
            <span>•</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
