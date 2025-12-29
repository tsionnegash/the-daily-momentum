import testimonial1 from "@/assets/testimonial-1.png";
import testimonial2 from "@/assets/testimonial-2.png";
import testimonial3 from "@/assets/testimonial-3.jpeg";
import testimonial4 from "@/assets/testimonial-4.jpeg";
import testimonial5 from "@/assets/testimonial-5.jpeg";
import testimonial6 from "@/assets/testimonial-6.jpeg";

const testimonialImages = [
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
  testimonial5,
  testimonial6,
];

const WordOnStreetSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="font-bold">see what you will get </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {testimonialImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Testimonial ${index + 1}`}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WordOnStreetSection;
