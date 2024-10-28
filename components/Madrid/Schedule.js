export default function Schedule() {
  const schedule = [
    { time: "11:00 AM", event: "Se abren las puertas" },
    { time: "12:00 PM", event: "Ceremonia de apertura" },
    { time: "12:30 PM", event: "Comida" },
    { time: "1:00 PM", event: "¡Empieza a trabajar en tu juego!" },
    { time: "2:00 PM", event: "Gamedev workshop 1" },
    { time: "4:00 PM", event: "Actividad 1" },
    { time: "4:00 PM", event: "Gamedev workshop 2" },
    { time: "6:00 PM", event: "Cena" },
    { time: "8:00 PM", event: "Lightning talks" },
    { time: "12:00 AM", event: "Sorpresa" },
    { time: "8:00 AM", event: "Desayuno" },
    { time: "10:30 AM", event: "Exposición de demos" },
    { time: "12:00 PM", event: "Ceremonia de clausura" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              <p>{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
