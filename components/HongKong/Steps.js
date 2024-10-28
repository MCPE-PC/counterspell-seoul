import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase fusion-pixel">
            一個 <span className="text-pink retro">game jam</span> 如何運作？
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink">
              <StepCard
                img="/photos/3.png"
                text="報名參加 Counterspell Hong Kong"
              />
              <StepCard
                img="/photos/4.png"
                text="在 Counterspell 中尋找其他青少年團隊"
              />
              <StepCard
                img="/photos/5.png"
                text="開始建造你的遊戲 (無需經驗!)"
              />
              <StepCard
                img="/photos/6.png"
                text="參加研討會或向我們的導師尋求幫助"
              />
              <StepCard
                img="/photos/7.png"
                text="發佈你的作品並與全世界分享！"
              />
            </div>
          </div>
          <div className="py-10 mx-6 space-y-4 text-xl uppercase fusion-pixel">
            <p>
              <span className="retro">Counterspell Hong Kong</span> 將持續 
              <span className="text-pink"><span className="retro">12</span>小時</span>。
            </p>
            <p className="">
            以下是一個粗略的行程表，讓您了解預期活動！
            </p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="p-4 text-l leading-6 tracking-wide bg-pink fusion-pixel">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="flex flex-col items-center justify-center overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
