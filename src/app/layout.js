"use client";
import "./globals.css";

import { Provider } from "react-redux";
import store from "@/reduxslice/store";
import ProtectedRoute from "@/components/ProtectedRoute.js";
import { SnackbarProvider } from "notistack";
import { createContext, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const UserContext = createContext();
export const rootData = () => useContext(UserContext);

export default function RootLayout({ children }) {
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <ProtectedRoute>
            <SnackbarProvider
              maxSnack={3}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <UserContext.Provider value={{ user }}>
                {user ? (
                  <>
                    <Navbar />
                    <main className="pt-16">{children}</main>
                    <Footer />
                  </>
                ) : (
                  children
                )}
              </UserContext.Provider>
            </SnackbarProvider>
          </ProtectedRoute>
        </Provider>
      </body>
    </html>
  );
}
