import { useEffect, useRef } from "react";
import ganeshImg from "@/assets/ganesh.png";
import shivajiImg from "@/assets/image-removebg-preview.png";
// import shivajiImg from "@/assets/shivaji.png";
import rangoli from "@/assets/rangoli.png";
import bgMaroon from "@/assets/bg-pattern-maroon.jpg";

const HeaderSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    setTimeout(() => {
      titleRef.current?.classList.add("visible");
    }, 300);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" style={{ backgroundImage: `url(${bgMaroon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />
      {/* Background rangoli */}
      <img
        src={rangoli}
        alt="Rangoli decoration"
        className="absolute opacity-10 w-[500px] animate-rotate-slow"
      />

      {/* Top icons */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10">
        <img
          src={ganeshImg}
          alt="ॐ"
          className="w-16 h-16 md:w-24 md:h-24 "
        />
      </div>
      <div className="absolute top-6 right-6 md:top-10 md:right-10">
        <img
          src={shivajiImg}
          // src={shivajiImg}
          alt="Chhatrapati Shivaji Maharaj"
          className="w-16 h-16 md:w-24 md:h-24 "
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Main title */}
      <div className="text-center z-10 px-4">
        <h1
          ref={titleRef}
          className="reveal font-accent text-4xl md:text-6xl lg:text-7xl animate-shimmer mb-6"
        >
          || श्री गणेशाय नमः ||
        </h1>
        <div className="reveal mt-4 text-primary-foreground/80 font-display text-xl md:text-2xl" style={{ transitionDelay: "0.5s" }}>
          शुभ विवाह निमंत्रण पत्रिका
        </div>
        <div className="reveal mt-8 flex justify-center" style={{ transitionDelay: "0.8s" }}>
          <div className="w-32 h-1 saffron-gradient rounded-full" />
        </div>
        <div className="reveal mt-8 text-primary-foreground/70 font-body text-lg" style={{ transitionDelay: "1.1s" }}>
          ▼ खाली स्क्रोल करा ▼
        </div>
      </div>

      {/* Bottom decorative border */}
      <div className="absolute bottom-0 left-0 right-0 h-4 saffron-gradient" />
    </section>
  );
};

export default HeaderSection;
