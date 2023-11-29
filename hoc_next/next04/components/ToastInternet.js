// useInternetStatus.js
"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function ToastInternet() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      toast.success("Success");
    } else {
      toast.error("No internet connection");
    }
  }, [isOnline]);
  return <></>;
}

export default ToastInternet;
