import React from 'react'
import { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import About2 from '../../components/About2'

const About = () => {
  return (
    <div>
        <Navbar/>
        <About2 />
    </div>
  )
}

export default About