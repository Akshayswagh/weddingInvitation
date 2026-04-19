import EventCard from "./EventCard";
import weddingImg from "@/assets/lgna.jpeg";
import haldiImg from "@/assets/haldi.jpeg";
import receptionImg from "@/assets/barat.png";
import bgSaffron from "@/assets/bg-pattern-saffron.jpg";

const events = [
  {
    emoji: "🌼",
    title: "हळद समारंभ",
    date: "२७ एप्रिल २०२६, सोमवार",
    time: "सायंकाळी ६:०० वाजता ",
    venue: "आमचे राहते घर काजेगांव",
    venueLink: `https://www.google.com/maps?q=20.9950383,76.5966567&z=17&hl=en`,
    image: haldiImg,
  },
    {
    emoji: "🎉",
    title: "नानमुखाचा कार्यक्रम ",
    date: "२८ एप्रिल २०२६, मंगळवार ",
    time: "सकाळी ११:३० पासून आपल्या आगमनापर्यंत",
    venue: "आमच्या राहत्या घरी काजेगांव ला राहील",
    venueLink: `https://www.google.com/maps?q=20.9950383,76.5966567&z=17&hl=en`,
    image: receptionImg,
  },
  {
    emoji: "📅",
    title: "लग्न समारंभ",
    date: "२९ एप्रिल २०२६, बुधवार",
    time: "सकाळी ११:४५ वाजता",
    venue: "अनंतराव भागवत मंगल कार्यालय संताजी नगर भागवत  वाडी, तेल्हारा",
    venueLink: "https://maps.app.goo.gl/ZLQB4CgVern9QQbs9",
    image: weddingImg,
  },

];

const EventsSection = () => {
  return (
    <section className="wedding-section relative overflow-hidden" style={{ backgroundImage: `url(${bgSaffron})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white/70" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="reveal font-accent text-3xl md:text-5xl gold-text mb-4">
            🎊 शुभ समारंभ 🎊
          </h2>
          <div className="reveal w-24 h-1 saffron-gradient rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <EventCard key={event.title} {...event} delay={i * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
