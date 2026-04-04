import brideImg from "@/assets/bride.jpg";
import groomImg from "@/assets/groom.jpg";
import weddingImg from "@/assets/wedding-venue.jpg";
import haldiImg from "@/assets/haldi.jpg";
import receptionImg from "@/assets/reception.jpg";
import rangoli from "@/assets/rangoli.png";
import bgCream from "@/assets/bg-pattern-cream.jpg";

const images = [brideImg, groomImg, weddingImg, haldiImg, receptionImg, rangoli];

const GallerySection = () => {
  return (
    <section className="wedding-section relative overflow-hidden" style={{ backgroundImage: `url(${bgCream})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="reveal font-accent text-3xl md:text-5xl gold-text mb-4">
            📸 फोटो गॅलरी 📸
          </h2>
          <div className="reveal w-24 h-1 saffron-gradient rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="reveal-scale ornate-frame overflow-hidden aspect-square group cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
