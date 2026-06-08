export function ChatMessage({
  role,
  content,
}: {
  role: "user" | "assistant";
  content: string;
}) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[75%] rounded-2xl px-4 py-2 text-sm leading-relaxed ${
          isUser
            ? "bg-zinc-900 text-white rounded-br-md"
            : "bg-zinc-100 text-zinc-800 rounded-bl-md"
        }`}
      >
        {content}
      </div>
    </div>
  );
}
