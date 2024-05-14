"use client";

export default function Home() {
  const handleClick = () => {
    console.log("Button clicked");

    new Notification("テスト", {
      body: "テスト",
      icon: "localhost:3001/",
    });
  };

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
