import React from 'react'
// import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import Nav from './Nav'


const About2 = () => {
  // const[ref,inView]=useInView({
  //   threshold:0.5,
  // });
  return (

    <div className="container mx-auto py-[18rem] ">
         <Nav />
      <div className="flex flex-col md:px-[32rem] gap-y-10 lg:flex-row">
       
        <div className="">
          {/* <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          > */}
            <h2 className='h1 text-blue-500 '>About Me</h2>
          <h3 className='h3 text-xl justify-center py-4 uppercase mb-4'>
            coming soon!!
           </h3>

          {/*<p className='mb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum doloremque nisi culpa quibusdam aut ex inventore
            temporibus voluptates neque hic quod, quos laborum necessitatibus expedita sequi totam illo dicta tempore rem maxime cupiditate libero
            alias! Illo eos perferendis dicta repudiandae vitae nihil maxime sed voluptatum ex, vel deserunt harum iusto eligendi id ipsam consequuntur
            porro? Impedit saepe repudiandae veniam atque doloremque architecto corrupti rerum ad, laudantium aliquam a vitae facilis voluptate id dolorem
            non deleniti eum officia quia velit. Ab voluptas veritatis illo deleniti ratione natus reiciendis dicta voluptatum placeat. Modi ipsam error quo
            doloribus. Asperiores, eum? Odit magni dolorum accusantium perferendis aspernatur, voluptatibus non sapiente, cupiditate, perspiciatis qui neque
            autem est voluptas? Earum quo corporis id distinctio quaerat recusandae, repellendus cupiditate perferendis tempora ipsum? Molestiae, expedita ip
            sa ab cu
          </p>
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                <h2 className='text-blue-500'>78</h2>
                <div className="font-primary text-primary text-sm tracking-[2px]">
                  Years of <br /> Experiance
                </div>
              </div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                <h2 className='text-blue-500'>78</h2>
                <div className="font-primary text-primary text-sm tracking-[2px]">
                  Years of <br /> Experiance
                </div>
              </div>
              <div className="text-[40px] font-tertiary text-gradient mb-2">
                <h2 className='text-blue-500'>78</h2>
                <div className="font-primary text-primary text-sm tracking-[2px]">
                  Years of <br /> Experiance
                </div>
              </div>
            </div>
          </motion.div> */}

        </div>
      </div>
    </div>
  )
}

export default About2