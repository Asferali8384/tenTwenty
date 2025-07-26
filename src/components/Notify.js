"use client";
import { useSnackbar } from "notistack";

// Custom hook that returns a reusable notify function
export default function useNotify() {
  const { enqueueSnackbar } = useSnackbar();

  // This function can be called manually when needed
  const notify = ({ message, variant = "default", duration = 3000 }) => {
    enqueueSnackbar(message, {
      variant, // "success", "error", "info", "warning", or "default"
      autoHideDuration: duration,
    });
  };

  return notify;
}
