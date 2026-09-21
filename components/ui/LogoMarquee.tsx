type Logo = { name: string; src: string };

export function LogoMarquee({ logos }: { logos: Logo[] }) {
  const track = [...logos, ...logos];

  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max items-center gap-16">
        {track.map((logo, i) => (
          <img
            key={`${logo.name}-${i}`}
            src={logo.src}
            alt={logo.name}
            className="h-6 w-auto shrink-0 opacity-50 grayscale"
          />
        ))}
      </div>
    </div>
  );
}
