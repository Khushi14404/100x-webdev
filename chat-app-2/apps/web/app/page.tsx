"use client";

import { useState } from "react";
import { TextInput } from "@repo/ui/text-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChange={setName}
        />

        <button
          onClick={() => {
            router.push(`/chat/123`);
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
