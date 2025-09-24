import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface CountdownProps {
  targetDate: Date;
  onExpire?: () => void;
  className?: string;
}

export const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  onExpire,
  className
}) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onExpire?.();
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onExpire]);

  const isEndingSoon = timeLeft.days === 0 && timeLeft.hours < 1;

  return (
    <div className={cn("flex items-center gap-1 text-sm font-mono", className)}>
      {timeLeft.days > 0 && (
        <span className="bg-muted px-2 py-1 rounded text-xs">
          {timeLeft.days}d
        </span>
      )}
      <span className={cn(
        "bg-muted px-2 py-1 rounded text-xs",
        isEndingSoon && "bg-destructive text-destructive-foreground animate-pulse"
      )}>
        {timeLeft.hours.toString().padStart(2, '0')}h
      </span>
      <span className={cn(
        "bg-muted px-2 py-1 rounded text-xs",
        isEndingSoon && "bg-destructive text-destructive-foreground animate-pulse"
      )}>
        {timeLeft.minutes.toString().padStart(2, '0')}m
      </span>
      <span className={cn(
        "bg-muted px-2 py-1 rounded text-xs",
        isEndingSoon && "bg-destructive text-destructive-foreground animate-pulse"
      )}>
        {timeLeft.seconds.toString().padStart(2, '0')}s
      </span>
    </div>
  );
};