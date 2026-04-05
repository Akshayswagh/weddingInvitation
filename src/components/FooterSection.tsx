import { useSearchParams } from "react-router-dom";
import rangoli from "@/assets/rangoli.png";
import bgFooter from "@/assets/footer-bg.png";
// import bgFooter from "@/assets/bg-pattern-footer.jpg";

const familyMembers = [
  { relation: "", name: "श्री. प्रा. ज्ञानेश्वर बाबुराव  टिकार" },
  { relation: "", name: "श्री. रोशन संतोष  टिकार" },
];

const FooterSection = () => {
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("guest")?.trim();

  return (
    <footer className="relative py-20 px-4 text-center overflow-hidden" style={{ backgroundImage: `url(${bgFooter})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/30" />
      <img
        src={rangoli}
        alt=""
        className="absolute opacity-5 w-[400px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Blessing */}
        <div className="reveal font-accent text-2xl md:text-3xl text-primary-foreground mb-4 leading-relaxed italic">
          "आपल्या पावलांनी सजेल हा सोहळा, आपल्या आशीर्वादाने फुलेल हा नवा संसार 🙏"
        </div>

        {/* Guest Name */}
        {guestName ? (
          <div className="reveal mt-6 py-4 px-6 rounded-xl inline-block" style={{ transitionDelay: "0.2s", background: "hsl(var(--gold) / 0.15)", border: "1px solid hsl(var(--gold) / 0.3)" }}>
            <p className="text-primary-foreground/70 font-body text-sm mb-1">प्रति,</p>
            <p className="font-accent text-2xl md:text-3xl text-gold animate-shimmer">{guestName}</p>
            <p className="text-primary-foreground/60 font-body text-lg mt-1">सहपरिवार आमंत्रित</p>
          </div>
        ) : null}

        <div className="reveal w-16 h-1 saffron-gradient rounded-full mx-auto my-8" style={{ transitionDelay: "0.3s" }} />

        {/* Family */}
        <div className="reveal text-primary-foreground/80 font-display text-xl mb-4" style={{ transitionDelay: "0.4s" }}>
       निमंत्रक 
        </div>
        

        {/* Family Members Grid */}
        <div className="reveal flex justify-center gap-6 mb-10" style={{ transitionDelay: "0.6s" }}>
          {familyMembers.map((member, i) => (
            <div
              key={i}
              className="rounded-lg py-3 px-6 text-center transition-all duration-300 hover:scale-105"
              style={{
                background: "hsl(var(--gold) / 0.08)",
                border: "1px solid hsl(var(--gold) / 0.2)",
              }}
            >
              <p className="text-primary-foreground/50 font-body text-xs mb-0.5">{member.relation}</p>
              <p className="text-primary-foreground font-display text-sm md:text-base">{member.name}</p>
            </div>
          ))}
        </div>

        <div className="reveal font-accent text-3xl md:text-4xl text-gold animate-shimmer mb-8" style={{ transitionDelay: "0.5s" }}>
          व समस्त टिकार परिवार काजेगाव 
        </div>

        <div className="reveal mt-8 text-primary-foreground/50 font-body text-sm" style={{ transitionDelay: "0.8s" }}>
          © २०२६ | शुभ विवाह
        </div>
      </div>

       <div className="reveal mt-4 text-primary-foreground/30 font-body text-xs" style={{ transitionDelay: "0.9s" }}>
          Website designed by <a href="https://akshayswagh.netlify.app/" className="hover:text-gold transition-colors underline">Akshay Wagh</a> | <a href="https://akshayswagh.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors underline">Hire for your special occasion</a>
        </div>
    </footer>
  );
};

export default FooterSection;
