import React from "react";

const statusStyles = {
  Submitted: "bg-[#DEF7EC] text-[#03543F]",
  Pending: "bg-[#FDF6B2] text-[#723B13]",
  Missing: "bg-[#FCE8F3] text-[#99154B]",
};

export default function StatusBadge({ status }) {
  const style = statusStyles[status] || statusStyles.default;

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${style} max-w-fit`}
    >
      {status}
    </span>
  );
}
