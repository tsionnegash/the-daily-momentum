import { useState, useEffect } from "react";

const WhyMattersSection = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("dm-showcase-images");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Extract just the urls
        const urls = parsed.map((item: any) => item.url).filter(Boolean);
        if (urls.length > 0) {
          setImages(urls);
          return;
        }
      } catch (err) {
        console.error("Failed to parse showcase images", err);
      }
    }
    // Fallback: show nothing or placeholder if nothing saved yet
    setImages([]);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#ebebeb]">
      <div className="container-wide max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#E8C547]">
            Day One Planner & Journal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {images.length > 0 ? (
            images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-3xl shadow-xl shadow-[#5d222a]/10 hover:shadow-[#5d222a]/20 transition-shadow duration-300"
              >
                <img
                  src={src}
                  alt={`Day One showcase ${i + 1}`}
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5]"
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No showcase images uploaded yet (check admin panel)
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
