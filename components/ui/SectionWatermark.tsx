export function SectionWatermark({ children }: { children: string }) {
  return (
    <p className="pointer-events-none -mb-[0.22em] select-none text-center font-bold text-black/75 leading-[1.1] text-[15vw] sm:text-[120px] lg:text-[180px] xl:text-[220px]">
      {children}
    </p>
  );
}
