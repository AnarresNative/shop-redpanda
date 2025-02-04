interface BackgroundTextProps {
  background_text: string;
}

export default function Background_text({ background_text }: BackgroundTextProps) {
  return (
    <div className="z-0 fixed pointer-events-none flex flex-col gap-5 fixed font-[family-name:var(--font-geist-sans)]">
      <div className="type_line">
        Shop-Redpanda {background_text} Shop-Redpanda {background_text}
      </div>
      <div className="type_line">
        {background_text} Shop-Redpanda {background_text} Shop-Redpanda
      </div>
      <div className="type_line">
        Shop-Redpanda {background_text} Shop-Redpanda {background_text}
      </div>
      <div className="type_line">
        {background_text} Shop-Redpanda {background_text} Shop-Redpanda
      </div>
      <div className="type_line">
        Shop-Redpanda {background_text} Shop-Redpanda {background_text}
      </div>
      <div className="type_line">
        {background_text} Shop-Redpanda Shop-Redpanda {background_text}
      </div>
      <div className="type_line">Shop-Redpanda {background_text}</div>
      <div className="type_line">{background_text} Shop-Redpanda</div>
      <div className="type_line">Shop-Redpanda {background_text}</div>
    </div>
  );
}
