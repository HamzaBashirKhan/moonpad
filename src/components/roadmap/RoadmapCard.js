const RoadmapCard = ({ heading, list }) => {
  return (
    <div className="px-5 py-5 border-[2px] border-violet-600/70 mx-5 my-5 bg-slate-50/10 mb:w-64 sm:w-80 xl:w-96">
      <h1 className="uppercase pb-2 text-lg xl:text-2xl">{heading}</h1>
      <ul className="text-xs space-y-2 pl-4 list-disc xl:text-base">
        {list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}
export default RoadmapCard
