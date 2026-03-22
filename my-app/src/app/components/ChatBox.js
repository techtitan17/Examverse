"use client";
import { useState } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant" }
  ]);
  const [input, setInput] = useState("");

const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", content: input };
  
  // 1. Update UI immediately with user message
  setMessages((prev) => [...prev, userMessage]);
  setInput("");

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Added header
      body: JSON.stringify({ 
        // We send the current state + the new message
        messages: [...messages, userMessage] 
      }),
    });

    const data = await res.json();

    if (data.reply) {
      // 2. Use functional update to append the AI reply
      setMessages((prev) => [...prev, data.reply]);
    } else {
      console.error("No reply from API:", data.error);
    }
  } catch (err) {
    console.error("Error:", err.message);
  }
};

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-2xl mx-auto border rounded-lg p-4 bg-black text-white">
      
      <div className="flex-1 overflow-y-auto space-y-3">
        {messages
          .filter(msg => msg.role !== "system")
          .map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded-lg max-w-[70%] ${
                msg.role === "user"
                  ? "bg-blue-500 ml-auto"
                  : "bg-gray-700"
              }`}
            >
              {msg.content}
            </div>
        ))}
      </div>

      <div className="flex mt-4 gap-2">
        <input
          className="flex-1 p-2 rounded bg-gray-800 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={sendMessage}
          className="bg-purple-600 px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}