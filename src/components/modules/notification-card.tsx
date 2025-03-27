import { CSSProperties, FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface NotificationCardProps {
  icon: ReactNode | string;
  text: string;
  user?: string;
  time?: string;
  className?: string;
  style?: CSSProperties;
}

export const NotificationCard: FC<NotificationCardProps> = ({
  icon,
  text,
  user,
  time,
  className,
  style,
}) => {
  const ref = useRef(null!);
  // const tl = gsap.timeline()

  return (
    <div
      ref={ref}
      className={cn(
        "absolute bg-white/10 backdrop-blur-md rounded-4xl px-6 py-6 z-10",
        "border border-white/30 shadow-lg backdrop-blur-lg",
        "transition-all duration-700 hover:scale-105 lg:max-w-[350px] whitespace-nowrap",
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-3">
        <div className="w-[50px] rounded-lg flex justify-center items-center h-[50px] bg-gray-100/25">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-medium text-md">{text}</span>
          <div className="flex  items-center gap-2 text-xs text-white/60">
            <span>{user}</span>

            {time && (
              <span>
                <span>•</span>
                <span>{time}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


interface NotificationBannerProps extends NotificationCardProps {
  name:string;
  role:string,
  message:string,
  supports:string
}

export const NotificationBanner = ({
  className,
  style,
  name,
  role,
  message,
  supports
}: NotificationBannerProps) => {
  return (
    <div
      className={cn(
        "bg-white/20 backdrop-blur-xl text-white rounded-xl p-6 shadow-md max-w-sm",
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <img
          src="https://s3-alpha-sig.figma.com/img/9b14/84b1/3c5519315f4efff9f839378aa02001b4?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CgoB19xn-Mc8BQ8lmW-k2gCA6jiB7rPSQBmfc2EIirnDgg7oZFhlhrfcdNhdWafjHuJVVCZtsNs6AGMLXKhuGtptpeIILo-aCnBv3c5u5kZ5t0XnXGh4oI3zi-Sbt7q5CY~tqpp9ubZoorPhL0vFP1lId8vTBiJMBHgm-HRBWWLRMRnNrwk5G~Yg-fbQqW6Gsp03sDS88I7nrws~mpf7M-NLdMJfF6-QIbGHHHq8~M2vp1ok7BfT8Kxadn96xEgD7ztu4GD0ign5J91kZ~JRVCFLzPzLM5RXT8o7xkfChIjQmkqaJH~Z6WF5C685HLBTuSSpQD8sQadNlhPjkWeN9g__" 
          alt={name}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-300 text-sm">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-gray-300">{message}</p>
      <div className="flex items-center mt-3 space-x-2 text-pink-400">
        <Heart size={16} />
        <span className="text-sm">{supports} supports</span>
      </div>
    </div>
  );
};
