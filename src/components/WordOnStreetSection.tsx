import { useState, useEffect, useRef } from "react";

const WordOnStreetSection = () => {
  const [images, setImages] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Load images from admin
  useEffect(() => {
    const saved = localStorage.getItem("dm-testimonial-images");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const urls = parsed.map((item: any) => item.url).filter(Boolean);
        setImages(urls);
      } catch (err) {
        console.error("Failed to parse testimonial images", err);
      }
    }
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || images.length === 0 || isPaused) return;

    let scrollAmount = container.scrollLeft;
    const scrollSpeed = 0.5; // pixels per frame – adjust for faster/slower (0.3–1.0 is nice)

    const animate = () => {
      if (!container) return;

      scrollAmount += scrollSpeed;

      // Seamless infinite loop: reset when reaching the end
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = scrollAmount;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [images, isPaused]);

  // Pause on hover/touch
  const handlePause = () => setIsPaused(true);
  const handleResume = () => setIsPaused(false);

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#E8C547]">
          <span className="font-bold">see what you will get</span>
        </h2>

        {images.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="overflow-x-hidden pb-4 cursor-grab active:cursor-grabbing"
            onMouseEnter={handlePause}
            onMouseLeave={handleResume}
            onTouchStart={handlePause}
            onTouchEnd={handleResume}
          >
            <div className="flex flex-row gap-4 md:gap-6 min-w-max">
              {/* Duplicate images for seamless loop */}
              {[...images, ...images].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 sm:w-72 md:w-80 overflow-hidden rounded-lg aspect-[4/5] bg-muted shadow-sm"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            No gallery images yet — upload them in the admin panel
          </div>
        )}
      </div>
    </section>
  );
};

export default WordOnStreetSection;
