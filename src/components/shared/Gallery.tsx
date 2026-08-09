"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex, close, prev, next]);

  if (images.length === 0) return null;

  const [main, ...rest] = images;

  return (
    <>
      {/* Mobile: horizontal snap carousel */}
      <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 md:hidden [-webkit-overflow-scrolling:touch]">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i)}
            className="relative h-64 w-[85vw] shrink-0 snap-center overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`${alt} — foto ${i + 1}`}
              fill
              sizes="85vw"
              className="object-cover"
              priority={i === 0}
            />
          </button>
        ))}
      </div>

      {/* Desktop: featured + grid */}
      <div className="hidden grid-cols-4 grid-rows-2 gap-3 md:grid" style={{ height: 520 }}>
        <button
          onClick={() => setOpenIndex(0)}
          className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl"
        >
          <Image
            src={main}
            alt={`${alt} — foto principal`}
            fill
            sizes="50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
          />
        </button>
        {rest.slice(0, 4).map((src, i) => (
          <button
            key={src}
            onClick={() => setOpenIndex(i + 1)}
            className="relative overflow-hidden rounded-2xl"
          >
            <Image
              src={src}
              alt={`${alt} — foto ${i + 2}`}
              fill
              sizes="25vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {i === 3 && rest.length > 4 && (
              <span className="absolute inset-0 flex items-center justify-center bg-forest-950/60 text-sm font-semibold text-cream-50">
                +{rest.length - 4} fotos
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-forest-950/95 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Cerrar galería"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ✕
          </button>

          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:left-6"
          >
            ‹
          </button>

          <div className="relative h-[70vh] w-full max-w-4xl">
            <Image
              src={images[openIndex]}
              alt={`${alt} — foto ${openIndex + 1}`}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:right-6"
          >
            ›
          </button>

          <p className="mt-4 text-sm text-cream-100/70">
            {openIndex + 1} / {images.length}
          </p>
        </div>
      )}
    </>
  );
}
