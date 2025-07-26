"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  const publicRoutes = ["/login", "/register"];

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user && !publicRoutes.includes(pathname)) {
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [pathname]);

  if (loading) return null;

  return children;
}
