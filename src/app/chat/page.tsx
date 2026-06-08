"use client";

import { useState, useRef, useEffect } from "react";
import { ChatMessage } from "@/components/ChatMessage";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi, I'm Michael's AI persona. Ask me anything about his work, experience, or interests." },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: text }]);
  };

  return (
    <div className="content-page flex min-h-screen flex-col bg-white">
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col px-6 pt-24 pb-4">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Chat
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Speak to Michael&apos;s AI.
        </p>

        <div className="mt-6 flex-1 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} content={msg.content} />
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="mt-4 flex gap-2 border-t border-zinc-200 pt-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type a message..."
            className="min-w-0 flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none transition-colors focus:border-zinc-500"
          />
          <button
            onClick={handleSend}
            className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            Send
          </button>
        </div>
      </main>
    </div>
  );
}
