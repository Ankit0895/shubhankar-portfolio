import { ConnectButton } from "@/components/ui/ConnectButton";

export function ConnectCta({ eyebrow = false }: { eyebrow?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-8">
      {eyebrow && (
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-black" aria-hidden />
          <span className="font-accent text-[14px] font-semibold tracking-[3px] text-black uppercase">
            let&apos;s Connect
          </span>
        </div>
      )}

      <p className="font-handwritten text-center text-[22px] leading-snug text-slate">
        Tap this &lsquo;tiny&rsquo; button to
        <br />
        create incredible work together.
      </p>

      <ConnectButton />
    </div>
  );
}
