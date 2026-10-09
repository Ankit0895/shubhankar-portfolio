"use client";

import { useConnectState } from "@/components/ConnectState";

export function ConnectButton({ className = "" }: { className?: string }) {
  const { active, toggle } = useConnectState();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Connect"
      aria-pressed={active}
      className={`group inline-grid rotate-6 place-items-center cursor-pointer ${className}`}
    >
      <img
        src="/assets/connect-button-default.svg"
        alt=""
        className={`[grid-area:1/1] transition-opacity duration-500 ease-in-out w-full ${
          active ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        src="/assets/connect-button-active.svg"
        alt=""
        className={`[grid-area:1/1] transition-opacity duration-500 ease-in-out w-full ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />
    </button>
  );
}
