import TeamMember from "../team/TeamMember"
import pic from "../../images/profile-img.jpeg"

function Benefits({ all_benefits }) {
  return (
    <div className=" flex justify-center gap-2 py-24 ">

      <div className="w-5/6 text-left">
        <h1 className="text-3xl font-bold">BENEFITS</h1>
        <div className="pl-5">
          <ul className="list-disc pl-5 py-5">
            {all_benefits.map((benefit, index) => <li key={index}>{benefit}</li>)}
          </ul>
          <p>Mpad token will be used for yield farming, staking, and can be traded on exchange.</p>
        </div>
      </div>

      <div className="object-contain w-[40%]">
        <TeamMember image={pic} className='object-scale-down'/>
      </div>

    </div>
  )
}
export default Benefits
