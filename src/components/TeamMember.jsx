const TeamMember = ({ image, name, designation }) => {
  return (
    <div className="">
      <div className=" bg-slate-50/10">
        <img src={image} alt="profile" className="object-scale-down w-[25%] h-[25%]" />
      </div>
    </div>
  )
}
export default TeamMember
