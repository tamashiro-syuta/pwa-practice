"use client";

import { useCallback, useEffect } from "react";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");

    new Notification("テスト", {
      body: "テスト",
    });
  };

  const subscribePush = useCallback(async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("プッシュ通知の権限が許可されました。");
      } else {
        console.log("プッシュ通知の権限が拒否されました。");
      }
    } catch (error) {
      console.error(
        "プッシュ通知の権限リクエストでエラーが発生しました:",
        error
      );
    }
  }, []);

  useEffect(() => {
    subscribePush();
  }, [subscribePush]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Button
      </button>
    </main>
  );
}
