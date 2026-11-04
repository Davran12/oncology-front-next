export function HeroDots() {
  const mask =
    "radial-gradient(circle at 0% 100%, #000 0, transparent 38%), radial-gradient(circle at 72% 75%, #000 0, transparent 30%)"
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(circle,rgba(15,24,76,0.16)_1.5px,transparent_1.6px)] [background-size:14px_14px]"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    />
  )
}
