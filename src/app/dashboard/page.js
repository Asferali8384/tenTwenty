"use client";
import StatusBadge from "@/components/StatusBadge";
import { useGetNotesByDateQuery } from "@/reduxslice/notesApi";
import { useRouter } from "next/navigation";
import React from "react";
import { groupNotesByWeek } from "@/components/FilterNotes";
import { rootData } from "../layout";
import LoaderSpinner from "@/components/LoaderSpinner";

export default function DashboardPage() {
  const router = useRouter();

  const viewClick = (week) => {
    router.push(`/dashboard/view?week=${week}`);
    console.log(week);
  };

  const { user } = rootData();

  const { data: NotesData, isLoading: NotesDataLoading } =
    useGetNotesByDateQuery(user?.id);

  const uniqueWeekData = groupNotesByWeek(NotesData);

  return (
    <div className="flex h-screen font-sans text-black bg-[#ffff]">
      <div className="flex-1 flex flex-col">
        <div className="p-4 flex-grow bg-[#ffff] flex justify-center items-start  ">
          {NotesDataLoading ? (
            <LoaderSpinner />
          ) : (
            <div className="backdrop-blur-md bg-white/30 rounded-xl p-6 w-full max-w-12xl">
              <div className="flex justify-between align-center mb-4 ">
                <h6 className="text-2xl">Time Sheet Management</h6>
                <button
                  disabled
                  className="px-3 py-1 bg-[#ffff] text-black rounded cursor-not-allowed opacity-50 border-1"
                >
                  Filter
                </button>
              </div>

              <div className="divide-y divide-gray-300 border-1 p-3 mt-5 ">
                <div className="grid grid-cols-4 font-bold py-2">
                  <span>Week</span>
                  <span>Date</span>
                  <span>Status</span>
                  <span>Actions</span>
                </div>

                {uniqueWeekData?.map((weekItem, index) => (
                  <div key={index} className="grid grid-cols-4 py-2">
                    <span>{weekItem.week}</span>
                    <span>{weekItem.dateRange}</span>
                    <StatusBadge status={weekItem.status} />
                    <span>
                      <button
                        onClick={() => viewClick(weekItem.week)}
                        className="text-blue-600 hover:underline cursor-pointer"
                      >
                        View
                      </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
