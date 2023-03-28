import Link from 'next/link'
import React from 'react'


const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-200">
            lets build something together
          </p>
          <h1 className="py-4 text-gray-100">
            Hi, I am<span className="text-blue-600"> Josh</span>
          </h1>
          <p className="py-4 text-gray-400 text-lg max-w-[70%] m-auto">
          I am an enthusiast with a relentless curiosity to learn, discover and innovate.
          My biggest committment lies in creating, educating and empowering. I believe empowerment is the true key to unlocking potential
          </p>
          <div className="flex md:flex-row items-center justify-between max-w-[330px] m-auto py-8">
            <Link href="" className="bg-blue-600 px-4 py-2 rounded-lg ml-4 text-xl ">Resume</Link>
            <Link href="/contact" className="bg-blue-600 px-4 py-2 rounded-lg ml-4 text-xl ">Hire Me </Link>
          </div>
          </div>
        </div>
      </div>
      )
}

      export default Main