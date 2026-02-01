"use client";

import React, { useMemo } from "react";
import { ExternalLink } from "lucide-react";
import Tooltip from "@/components/ui/tooltip";
import experienceData from "@/data/experienceData.json";

interface ExperienceEntry {
  id: string;
  company: string;
  position: string;
  color: string;
  startDate: string;
  endDate: string | null;
  isCurrentRole: boolean;
  row: number;
  companyUrl: string;
  tooltipContent: {
    description: string;
    achievements: string[];
    technologies: string[];
  };
}


const parseDate = (dateStr: string): Date => {
  const [year, month] = dateStr.split("-").map(Number);
  return new Date(year, month - 1);
};


const formatDate = (dateStr: string): string => {
  const date = parseDate(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
};


const generateTimelineMarkers = (
  startDate: Date,
  endDate: Date
): { date: Date; label: string; isYear: boolean }[] => {
  const markers: { date: Date; label: string; isYear: boolean }[] = [];
  const current = new Date(startDate.getFullYear(), 0);

  while (current <= endDate) {
    const isYear = current.getMonth() === 0;
    markers.push({
      date: new Date(current),
      label: isYear
        ? current.getFullYear().toString()
        : current.toLocaleDateString("en-US", { month: "short" }),
      isYear,
    });
    current.setMonth(current.getMonth() + 3);
  }

  return markers;
};

export default function Experience() {
  const experiences = experienceData as ExperienceEntry[];


  const { timelineStart, timelineEnd, totalMonths, markers } = useMemo(() => {
    const allDates = experiences.flatMap((exp) => [
      parseDate(exp.startDate),
      exp.endDate ? parseDate(exp.endDate) : new Date(),
    ]);

    const minDate = new Date(Math.min(...allDates.map((d) => d.getTime())));
    const now = new Date();


    const monthsFromMinToNow =
      (now.getFullYear() - minDate.getFullYear()) * 12 +
      (now.getMonth() - minDate.getMonth());


    const leftPadding = 3;
    const rightPadding = leftPadding;

    const startDate = new Date(minDate);
    startDate.setMonth(startDate.getMonth() - leftPadding);

    const endDate = new Date(now);
    endDate.setMonth(endDate.getMonth() + rightPadding);

    const months =
      (endDate.getFullYear() - startDate.getFullYear()) * 12 +
      (endDate.getMonth() - startDate.getMonth());

    return {
      timelineStart: startDate,
      timelineEnd: endDate,
      totalMonths: months,
      markers: generateTimelineMarkers(startDate, endDate),
    };
  }, [experiences]);


  const getBarStyle = (exp: ExperienceEntry) => {
    const start = parseDate(exp.startDate);
    const end = exp.endDate ? parseDate(exp.endDate) : new Date();

    const startOffset =
      (start.getFullYear() - timelineStart.getFullYear()) * 12 +
      (start.getMonth() - timelineStart.getMonth());

    const duration =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) +
      1;

    const left = (startOffset / totalMonths) * 100;
    const width = (duration / totalMonths) * 100;

    return { left: `${left}%`, width: `${width}%` };
  };


  const getMarkerPosition = (date: Date) => {
    const offset =
      (date.getFullYear() - timelineStart.getFullYear()) * 12 +
      (date.getMonth() - timelineStart.getMonth());
    return (offset / totalMonths) * 100;
  };

  return (
    <section
      id="experience"
      className="font-geist-sans w-full bg-white py-16 md:py-24"
    >

      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Professional Experience
          </h2>
        </div>
      </div>


      <div className="w-full px-4 hidden md:block md:px-8 md:pb-8">
        <div className="relative">

          <div className="relative h-36 mb-4">
            {experiences.map((exp) => {
              const barStyle = getBarStyle(exp);
              const rowIndex = exp.row;

              return (
                <React.Fragment key={exp.id}>

                  {/* <Tooltip
                  key={exp.id}
                  content={
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-sm">{exp.company}</p>
                        <p className="text-xs text-gray-300">
                          {exp.position}
                        </p>
                      </div>
                      <p className="text-xs text-gray-400">
                        {formatDate(exp.startDate)} –{" "}
                        {exp.isCurrentRole
                          ? "Present"
                          : formatDate(exp.endDate!)}
                      </p>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        {exp.tooltipContent.description}
                      </p>
                      {exp.tooltipContent.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {exp.tooltipContent.technologies
                            .slice(0, 4)
                            .map((tech) => (
                              <span
                                key={tech}
                                className="text-[10px] px-1.5 py-0.5 bg-white/10 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                        </div>
                      )}
                    </div>
                  }
                > */}
                  <div
                    key={exp.id}
                    className="absolute h-10 rounded-md cursor-pointer transition-all duration-200 hover:scale-y-110 hover:shadow-lg group"
                    style={{
                      ...barStyle,
                      backgroundColor: exp.color,
                      top: `${rowIndex * 44}px`,
                      opacity: 0.9,
                    }}
                  >

                    {exp.isCurrentRole && (
                      <div
                        className="absolute right-0 top-0 bottom-0 w-4 overflow-hidden"
                        style={{ right: "-8px" }}
                      >
                        <div
                          className="absolute inset-y-0 left-0 w-8 rounded-r-md opacity-50"
                          style={{
                            background: `linear-gradient(to right, ${exp.color}, transparent)`,
                          }}
                        />
                        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex gap-0.5">
                          <span
                            className="w-1 h-1 rounded-full animate-pulse"
                            style={{ backgroundColor: exp.color }}
                          />
                        </div>
                      </div>
                    )}


                    <div className="h-full flex items-center justify-center px-3">
                      <span className="text-white text-sm font-medium truncate opacity-90">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  {/* </Tooltip> */}

                </React.Fragment>
              );
            })}
          </div>


          <div className="relative h-px bg-gray-200">

            {markers.map((marker, idx) => {
              const position = getMarkerPosition(marker.date);
              return (
                <div
                  key={idx}
                  className="absolute -translate-x-1/2"
                  style={{ left: `${position}%` }}
                >

                  <div
                    className={`w-px bg-gray-300 ${marker.isYear ? "h-3 -mt-1.5" : "h-2 -mt-1"
                      }`}
                  />

                  <p
                    className={`mt-2 whitespace-nowrap ${marker.isYear
                      ? "text-sm font-medium text-gray-700"
                      : "text-xs text-gray-400"
                      }`}
                  >
                    {marker.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative rounded-md border border-gray-100 bg-gray-50/50 p-3 transition-shadow"
            >

              <div
                className="absolute left-0 top-4 bottom-4 w-1 rounded-full"
                style={{ backgroundColor: exp.color }}
              />

              <div className="pl-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-1">
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">
                    {formatDate(exp.startDate)} –{" "}
                    {exp.isCurrentRole ? "Present" : formatDate(exp.endDate!)}
                  </span>
                </div>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {exp.tooltipContent.description}
                </p>


                <div className="mt-3 flex flex-wrap gap-1.5">
                  {exp.tooltipContent.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section >
  );
}