import coupleImg from "@/assets/bothpic.jpeg";
import bgCream from "@/assets/bg-pattern-cream.jpg";

const BrideGroomSection = () => {
  return (
    <section className="wedding-section relative overflow-hidden" style={{ backgroundImage: `url(${bgCream})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="reveal font-accent text-3xl md:text-5xl gold-text mb-4">
          वर  -  वधू
        </h2>
        <div className="reveal w-24 h-1 saffron-gradient rounded-full mx-auto mb-12" />

        <div className="reveal-scale flex flex-col items-center">
          <div className="ornate-frame overflow-hidden rounded-2xl w-64 md:w-80">
            <img
              src={coupleImg}
              alt="वधू-वर"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6 space-y-1">
            <p className="font-accent text-xl md:text-2xl gold-text">
          चि. वैभव  &   चि. सौ. का. वर्षा    
            </p>
            <p className="text-muted-foreground font-body text-sm md:text-base">
                श्रीमती सविताबाई संतोष नारायण टिकार यांचे जेष्ठ  चिरंजीव & श्रीमती जिजाबाई पांडुरंग तुकाराम घुंगळ यांची कन्या 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrideGroomSection;
