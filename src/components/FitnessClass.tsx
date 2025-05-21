import type { FitnessClassType } from "../types/FitnessClassType";

type Props = {
    key: string;
    fitnessClass: FitnessClassType;
}

const FitnessClass = ({fitnessClass}: Props) => {
  return (
    <li className="relative mx-5 inline-block h-96 w-[450px]">
      <div className="absolute opacity-0 hover:opacity-80 bg-red-400 mx-auto whitespace-normal text-white h-[350px] w-[450px] text-center flex-col flex items-center justify-center px-10 transition duration-200">
        <p className="text-2xl">
          {fitnessClass.name}
        </p>
        <p className="mt-5">
          {fitnessClass.description}
        </p>
      </div>
      <img src={fitnessClass.image} alt={fitnessClass.image} />
    </li>
  )
}

export default FitnessClass