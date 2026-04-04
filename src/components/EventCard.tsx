interface EventCardProps {
  emoji: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  delay?: number;
}

const EventCard = ({ emoji, title, date, time, venue, image, delay = 0 }: EventCardProps) => {
  return (
    <div
      className="reveal-scale ornate-frame overflow-hidden bg-card"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <span className="text-4xl block mb-3">{emoji}</span>
        <h3 className="font-display text-2xl text-primary mb-4">{title}</h3>
        <div className="space-y-2 font-body text-foreground/80">
          <p className="flex items-center justify-center gap-2">
            📅 <span className="font-semibold">{date}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            🕐 <span>{time}</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            📍 <span>{venue}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
