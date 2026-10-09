import { assets } from "@/lib/assets";
import { ConnectButton } from "@/components/ui/ConnectButton";

export function ConnectCta() {
  return (
    <div className="flex flex-col items-center">

      <p className="font-handwritten text-center text-[22px] leading-snug text-slate z-1">
        Tap this &lsquo;tiny&rsquo; button to
        <br />
        create incredible work together.
        <img
          src={assets.connect.lines}
          alt=""
          aria-hidden
          className="h-[155px] w-[160px] -mt-8.75 mx-0 -mb-16.25"
        />
      </p>
      <ConnectButton className="-mt-55" />
    </div>
  );
}
