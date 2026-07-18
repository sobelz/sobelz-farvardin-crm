import type { ComponentProps } from "react";

import { formatDuration, intervalToDuration } from "date-fns";
import { faIR } from "date-fns/locale";

import { Badge } from "@/components/ui/badge";
import { UNLIMITED_DURATION_DAYS } from "@/constants/appData";

const DurationDayBadge = ({ day, ...props }: ComponentProps<typeof Badge> & { day: number }) => {
  const dayNum = Number(day);
  if (isNaN(dayNum) || dayNum === 0) return;
  const duration =
    dayNum === UNLIMITED_DURATION_DAYS
      ? "بی‌نهایت"
      : formatDuration(intervalToDuration({ start: 0, end: dayNum * 1000 * 60 * 60 * 24 }), {
          locale: faIR,
        });
  return (
    <Badge variant="outline" {...props}>
      {duration}
    </Badge>
  );
};

export default DurationDayBadge;
