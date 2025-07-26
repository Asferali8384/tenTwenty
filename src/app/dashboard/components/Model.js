import React from "react";

export default function AddTaskModal({
  newNotesData,
  closeModal,
  handleAddTask,
  setNewNotesData,
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

        <label className="block mb-2">
          <span className="text-gray-700">Project Name *</span>
          <input
            type="text"
            value={newNotesData?.projectName}
            className="mt-1 block w-full rounded border border-gray-300 shadow-sm p-3"
            placeholder="Enter project Name"
            onChange={(e) =>
              setNewNotesData({ ...newNotesData, projectName: e.target.value })
            }
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Work *</span>
          <textarea
            value={newNotesData?.work}
            onChange={(e) =>
              setNewNotesData({ ...newNotesData, work: e.target.value })
            }
            className="mt-1 block w-full rounded border border-gray-300 shadow-sm p-3"
            rows={3}
            placeholder="Enter Work Details "
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Time Taken *</span>
          <input
            type="number"
            value={newNotesData?.timeTaken}
            onChange={(e) =>
              setNewNotesData({ ...newNotesData, timeTaken: e.target.value })
            }
            className="mt-1 block w-full rounded border border-gray-300 shadow-sm p-3"
            placeholder="e.g. 12hrs"
          />
        </label>

        <div className="flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="px-4 py-2 rounded border border-gray-300 hover:bg-green-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="px-4 py-2 rounded bg-white-600 text-[#dcab63] hover:bg-green-50 border-1 cursor-pointer"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}
