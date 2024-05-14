"use client";

import { useEffect } from "react";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");

    new Notification("テスト", {
      body: "テスト",
      icon: "localhost:3001/",
    });
  };

  useEffect(() => {
    // NOTE: プッシュ通知の権限をリクエスト(本当はuseContextとかで管理するはず、たぶん)
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("プッシュ通知の権限が許可されました。");
      } else {
        console.log("プッシュ通知の権限が拒否されました。");
      }
    });
  }, []);

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
