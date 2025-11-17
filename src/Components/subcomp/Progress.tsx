const Progress = ({ perc, dimensions }: {perc: number, dimensions: number}) => {
  return (
    <div className={`relative w-[200px] h-[200px] rounded-full flex items-center m-4 opacity-80 justify-center`} style={{ background: `conic-gradient(#4ade80 ${perc * 3.6}deg, #e5e7eb 0deg)` }}>
      <div className="absolute w-[calc(100%-12px)] h-[calc(100%-12px)] rounded-full bg-slate-800 flex items-center justify-center">
        <span className="text-xl font-semibold text-green-600">{perc | 0}%</span>
      </div>
    </div>
  );
};


export default Progress