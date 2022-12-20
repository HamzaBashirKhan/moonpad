const TeamMember = ({ image, name, designation }) => {
  return (
    <div className="pb-5 text-white">
      <div className="ring-0 p-2 ring-purple-800/90 ring-offset-[2px] ring-offset-transparent bg-slate-50/10 xl:ring-offset-[5px] xl:p-[10px]">
        <img src={image} alt="profile" />
      </div>
      <h1 className="uppercase flex justify-center text-2xl font-bold pt-5">{name}</h1>
      <p className="flex justify-center text-base lg:text-lg pb-5">{designation}</p>
    </div>
  )
}
export default TeamMember
