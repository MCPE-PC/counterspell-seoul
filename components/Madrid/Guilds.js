import { Tilt } from "react-next-tilt";
import { useState, useEffect } from "react";

export default function Guilds() {

  
  const [isFeminine, setFeminine] = useState(false);

  useEffect(_=>{
    const interval = setInterval(() => setFeminine(!isFeminine), 5000);

    return () => clearInterval(interval);
  
  }, [isFeminine])


  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>¿Artista, músic<span>{isFeminine ? "a" : "o"}</span> o programador<span className={!isFeminine ? "invisible" : ""}>a</span>?</p>
        <p>
          Únete a uno de los tres <span className="text-pink">grupos</span> al 
          inscribirte.
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/artist.png"
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/musician.png"
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/hacker.png"
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </Tilt>
      </div>

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="max-w-6xl px-6 py-6 mt-6 border-4 border-dashed border-pink">
          <p className="text-3xl neuebit">
            ¡Puedes unirte al grupo con el que te identifiques para swag y pins exclusivos! También podrás 
            competir contra otros grupos en diversas actividades/retos a lo largo de Counterspell Madrid.
          </p>
        </div>
      </div>
    </div>
  );
}
