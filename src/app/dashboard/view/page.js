"use client";
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  useCreateNoteMutation,
  useGetNotesByDateQuery,
} from "@/reduxslice/notesApi";
import { groupNotesByWeek } from "@/components/FilterNotes";
import { rootData } from "@/app/layout";
import LoaderSpinner from "@/components/LoaderSpinner";
import AddTaskModal from "../components/Model";

export default function Page() {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newNotesData, setNewNotesData] = useState({
    projectName: "",
    work: "",
    timeTaken: "",
  });

  const openModal = () => {
    setIsModalOpen(true);
    setNewNotesData({
      projectName: "",
      work: "",
      timeTaken: "",
    });
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const { week } = useParams();
  const { user } = rootData();

  const {
    data: NotesData,
    isLoading: NotesDataLoading,
    refetch: NotesDataRefetch,
  } = useGetNotesByDateQuery(user?.id);

  const uniqueWeekData = groupNotesByWeek(NotesData);

  const normalizedWeek = week
    ? week
        .toString()
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
    : null;

  const filteredWeekData = normalizedWeek
    ? uniqueWeekData.filter((w) => w.week === normalizedWeek)
    : uniqueWeekData;

  // console.log(filteredWeekData, "Filtered Week Data");

  const tasksByDate =
    filteredWeekData && filteredWeekData.length > 0
      ? filteredWeekData[0].tasksByDate
      : {};

  // console.log(tasksByDate, "tasksByDate");

  const [sendNotesData] = useCreateNoteMutation();

  const handleAddTask = () => {
    const noteDate = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"

    const newTask = {
      ...newNotesData,
      noteDate,
      userId: user?.id,
    };
    sendNotesData(newTask);
    setIsModalOpen(false);
    NotesDataRefetch();
    // console.log(newTask, "New Data");
  };

  return (
    <>
      {NotesDataLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <div className="px-6 py-2 flex justify-startborder border-[#dcab63]">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-2 border border-gray-400 rounded px-3 py-1 text-gray-700 hover:bg-gray-100"
              style={{
                justifyContent: "flex-end",
                border: "1px solid #dcab63 ",
                cursor: "pointer",
              }}
            >
              <ArrowLeft size={15} className="text-[#dcab63]" />
              <span className="text-[#dcab63]">Back</span>
            </button>
          </div>
          <div className="p-6 space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Time Sheet Management</h2>
              <p className="text-gray-500">{filteredWeekData[0]?.dateRange}</p>
            </div>

            {Object.entries(tasksByDate).map(([date, tasks]) => (
              <div key={date} className="space-y-4">
                <h3 className="text-lg font-medium text-gray-700">{date}</h3>

                <div className="space-y-4">
                  {tasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-4 border rounded-xl bg-white shadow-sm space-x-4"
                    >
                      <div className="w-24 text-[#9CA3AF] font-medium whitespace-nowrap ">
                        {task.taskTime}hr
                      </div>

                      <div className="flex-1 font-semibold truncate">
                        {task.work}
                      </div>

                      <div className="max-w-xs text-sm text-gray-500 truncate">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#E1EFFE] text-[#1E429F] max-w-fit`}
                        >
                          {task.projectName}
                        </span>
                      </div>

                      <div className="relative group">
                        <Settings className="w-5 h-5 cursor-pointer text-gray-600" />
                        <div
                          className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded shadow-md w-28 "
                          style={{ zIndex: 99 }}
                        >
                          <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
                            Edit
                          </button>
                          <button className="block w-full px-4 py-2 text-sm hover:bg-gray-100 text-left">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openModal(date)}
                  className="w-full text-center p-4 border rounded-xl bg-white shadow-sm text-[#dcab63] font-semibold hover:bg-green-50 cursor-pointer"
                  type="button"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {isModalOpen && (
        <AddTaskModal
          closeModal={closeModal}
          newNotesData={newNotesData}
          setNewNotesData={setNewNotesData}
          handleAddTask={handleAddTask}
        />
      )}
    </>
  );
}
