export default function Background_text({background_text}) {
    return (
      <div className="z-1 fixed flex flex-col gap-5 fixed font-[family-name:var(--font-geist-sans)]">
        <div className="type_line">Shop-Redpanda {background_text} </div> 
        <div className="type_line">{background_text} Shop-Redpanda </div> 
        <div className="type_line">Shop-Redpanda {background_text} </div> 
        <div className="type_line">{background_text} Shop-Redpanda </div>
        <div className="type_line">Shop-Redpanda {background_text} </div> 
        <div className="type_line">{background_text} Shop-Redpanda </div>
        <div className="type_line">Shop-Redpanda {background_text} </div> 
        <div className="type_line">{background_text} Shop-Redpanda </div>
        <div className="type_line">Shop-Redpanda {background_text} </div> 
      </div>
    );
  }