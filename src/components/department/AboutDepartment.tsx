import Image from "next/image";
import { ABOUT_DATA } from "./about.data";

type Photo = { src: string; alt: string };

type Props = {
  paragraphs?: string[];
  photos?: Photo[];
};

function renderBold(text: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-slate-900">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

function Collage({ photos }: { photos: Photo[] }) {
  const [main, ...rest] = photos.slice(0, 3);
  if (!main) return null;

  const cell = "relative overflow-hidden rounded-[18px] min-w-0";
  const img = (p: Photo, sizes: string) => (
    <Image
      src={p.src}
      alt={p.alt}
      fill
      sizes={sizes}
      loading="lazy"
      className="object-cover"
    />
  );

  return (
    <div
      className={`grid w-full gap-3 sm:gap-5 ${
        rest.length
          ? "grid-cols-2 sm:grid-cols-[1.36fr_1fr] sm:grid-rows-[55fr_45fr] sm:aspect-[2.2/1]"
          : "grid-cols-1"
      }`}
    >
      <div
        className={`${cell} ${
          rest.length
            ? "col-span-2 aspect-[5/4] sm:col-span-1 sm:row-span-2 sm:aspect-auto"
            : "aspect-[16/9]"
        }`}
      >
        {img(main, "(min-width:1024px) 40vw, 100vw")}
      </div>

      {rest.map((p) => (
        <div
          key={p.src}
          className={`${cell} aspect-[4/3] sm:aspect-auto ${rest.length === 1 ? "sm:row-span-2" : ""}`}
        >
          {img(p, "(min-width:1024px) 20vw, 50vw")}
        </div>
      ))}
    </div>
  );
}

export default function AboutDepartment({
  paragraphs = ABOUT_DATA.paragraphs,
  photos = ABOUT_DATA.photos,
}: Props) {
  return (
    <section className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="min-w-0">
        <h2 className="text-3xl font-bold text-slate-900">О нашем отделении</h2>
        <div className="mt-3 mb-6 h-0.5 w-10 bg-red-600" />
        <div className="space-y-4 text-base leading-relaxed text-slate-600">
          {paragraphs.slice(0, 2).map((t, i) => (
            <p key={i}>{renderBold(t)}</p>
          ))}
        </div>
      </div>

      <Collage photos={photos} />
    </section>
  );
}
