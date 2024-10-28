export default function About() {
  return (
    <div className="flex justify-center fusion-pixel text-2xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-5xl text-center uppercase fusion-pixel text-whitepurp">
        製作遊戲, <span className="text-pink">結交酷友</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 border-4 border-pink border-dashed p-8 md:p-12 space-y-12">
            <p>
              <span className="neuebit text-3xl">Counterspell Hong Kong</span> 是一個針對高中生的新手友善遊戲開發活動，在長沙灣舉辦，讓
              <span className="text-pink">
              藝術家、音樂家和程式設計師
              </span>{" "}
              齊聚一堂，共同開發程式和遊戲。
            </p>
            <p className="text-3xl uppercase">盡情發揮你的創意！</p>
            <p>
            任何遊戲都可以！<span className="neuebit text-3xl">Counterspell Hong Kong</span> 的主題將在活動開始前通過參與者投票決定。{" "}
            </p>
            <p>
            無論你是程式設計新手還是經驗豐富的開發者，我們都將在 12 小時的活動中提供工作坊、資源和導師來協助你的專案。
            </p>
          </div>
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/city/HongKong/venue.jpg)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
