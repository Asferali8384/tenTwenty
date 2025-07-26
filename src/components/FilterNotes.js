// utils/groupNotesByWeek.js
import { parseISO, addDays, format, differenceInCalendarWeeks } from "date-fns";

export const groupNotesByWeek = (notes = [], weekStartDate = "2025-07-01") => {
  const weekStart = new Date(weekStartDate);
  const uniqueWeekData = [];
  const seenWeeks = new Set();

  const getWeekInfo = (date) => {
    const weekIndex = differenceInCalendarWeeks(date, weekStart, {
      weekStartsOn: 1,
    });
    const start = addDays(weekStart, weekIndex * 7);
    const end = addDays(start, 6);

    return {
      week: `Week ${weekIndex + 1}`,
      dateRange: `${format(start, "MMM d")} - ${format(end, "MMM d")}`,
      start,
      end,
    };
  };

  notes?.forEach((item) => {
    const createdDate = parseISO(item.createdAt);
    const { week, dateRange, start, end } = getWeekInfo(createdDate);

    if (!seenWeeks.has(week)) {
      uniqueWeekData.push({
        week,
        dateRange,
        status: "Submitted",
        tasksByDate: {},
      });
      seenWeeks.add(week);
    }

    const weekObj = uniqueWeekData.find((w) => w.week === week);
    const formattedDate = format(createdDate, "d MMMM");

    if (!weekObj.tasksByDate[formattedDate]) {
      weekObj.tasksByDate[formattedDate] = [];
    }

    weekObj.tasksByDate[formattedDate].push({
      work: item.work,
      projectName: item.projectName,
      taskTime: item.timeTaken,
    });
  });

  return uniqueWeekData;
};
