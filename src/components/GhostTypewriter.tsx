"use client";

import { useEffect, useRef, useState } from "react";

const prompts: { text: string; href: string }[] = [
  { text: "check out my GitHub →", href: "https://github.com/devmikeroberts" },
  { text: "read my blog →", href: "https://mikeroberts.bearblog.dev" },
  { text: "view my resume →", href: "/michael_roberts_resume.pdf" },
];

const TYPE_SPEED = 52;
const HOLD_DURATION = 3500;
const FADE_DURATION = 600;
const GAP_DURATION = 9000;
const INITIAL_DELAY = 5000;

export function GhostTypewriter() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"hidden" | "typing" | "holding" | "fading">("hidden");
  const [index, setIndex] = useState(0);
  const t = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const schedule = (fn: () => void, ms: number) => {
      t.current = setTimeout(fn, ms);
    };

    const clear = () => {
      if (t.current) clearTimeout(t.current);
    };

    const runCycle = (msgIndex: number) => {
      const message = prompts[msgIndex].text;
      let charIndex = 0;
      setIndex(msgIndex);
      setDisplayText("");
      setPhase("typing");

      const typeNext = () => {
        charIndex++;
        setDisplayText(message.slice(0, charIndex));
        if (charIndex < message.length) {
          schedule(typeNext, TYPE_SPEED);
        } else {
          setPhase("holding");
          schedule(() => {
            setPhase("fading");
            schedule(() => {
              setPhase("hidden");
              setDisplayText("");
              schedule(() => runCycle((msgIndex + 1) % prompts.length), GAP_DURATION);
            }, FADE_DURATION);
          }, HOLD_DURATION);
        }
      };

      schedule(typeNext, TYPE_SPEED);
    };

    schedule(() => runCycle(0), INITIAL_DELAY);
    return clear;
  }, []);

  const visible = phase === "typing" || phase === "holding";
  const fading = phase === "fading";
  const prompt = prompts[index];

  return (
    <div
      className="fixed bottom-8 left-4 z-10 sm:left-6"
      style={{
        opacity: fading ? 0 : visible ? 1 : 0,
        transition: fading ? `opacity ${FADE_DURATION}ms ease-out` : "none",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href={prompt.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={visible ? 0 : -1}
        className="group flex items-center gap-1 font-mono text-xs text-white/30 transition-colors hover:text-white/55"
      >
        <span className="text-white/15 select-none">›</span>
        <span>{displayText}</span>
        {phase === "typing" && (
          <span className="animate-pulse text-white/20">▌</span>
        )}
      </a>
    </div>
  );
}
