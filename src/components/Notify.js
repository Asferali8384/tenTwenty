"use client";
import { useSnackbar } from "notistack";

export default function useNotify({ message, variant, duration }) {
  const { enqueueSnackbar } = useSnackbar();

  enqueueSnackbar(message, {
    variant, // "success" | "error" | "info" | "warning" | "default"
    autoHideDuration: duration,
  });

  return notify;
}
