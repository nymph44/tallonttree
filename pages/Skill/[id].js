import { skillsAll } from '../../data/config'
import Link from 'next/link'

export const getStaticPaths = async () => {
  const paths = skillsAll.id.map((skill) => {
    return {
      params: { id: skill.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id
  const skill = skillsAll.title[id]
  const skillDescription = skillsAll.description[id]
  return {
    props: { skill, skillDescription, id },
  }
}

const Details = ({ skill, skillDescription, id }) => {
  console.log(skill)
  console.log(skillDescription)
  return (
    <div>
      <div className="pt-4 flex">
        <h1 className="font-bold text-4xl">Skills</h1>
        <p className="text-4xl">&nbsp;/&nbsp;</p>

        <h1 className=" text-2xl">{skill}</h1>
      </div>
      <div className="bg-base-200 flex flex-col items-center rounded-xl p-4 my-4 w-1/6">
        <div>
          <p>Due date</p>
        </div>
        <div>
          <p className="font-bold">Friday, november 11, 2022</p>
        </div>
        <div>
          <p>11:59&nbsp; PM</p>
        </div>
      </div>
      {/* description */}
      <div className="bg-base-200  w-3/4 p-4 rounded-lg flex flex-col space-y-4">
        <h1 class="text-2xl font-bold">Description</h1>
        <p class="text-md">{skillDescription}</p>
      </div>
      <div className="bg-base-200 my-8 rounded-xl py-4 px-4">
        <h1 class="text-2xl">Subgoal KDA reflection</h1>
        <div className="flex py-4 w-full">
          <div className="w-1/6">
            <div className="bg-base-200 rounded-xl p-4 flex space-y-4 flex-col">
              <h2>Reflect</h2>
              <div className="bg-primary h-2.5 rounded-full"></div>
              <Link href={'/Kdarate'}>
                <button className="btn btn-primary">
                  Continue reflect on subgoal
                </button>
              </Link>
            </div>
          </div>
          <div className="w-5/6 flex">
            <ul className="steps w-full">
              <li data-content="✓" className="step step-success">
                Self-directed Learning
              </li>
              <li data-content="✓" className="step step-success">
                Initiative
              </li>
              <li data-content="✓" className="step step-success">
                Motivation
              </li>
              <li data-content="✓" className="step step-success">
                P2P
              </li>
              <li data-content="●" className="step step-neutral">
                Hub Participation
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h1 class="text-2xl">Hand-in subgoal materials</h1>
      <p className="text-xs">
        Hand in any kind of materials to show your subgoal progress, if
        necessary.
      </p>
      <div class="max-w-xl my-8">
        <label class="flex justify-center w-full h-32 px-4 transition bg-base-300 border-2 border-base-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary focus:outline-none">
          <span class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium text-gray-600">
              Drop files to Attach, or&nbsp;
              <span class="text-blue-600 underline">browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" class="hidden" />
        </label>
      </div>
    </div>
  )
}

export default Details
