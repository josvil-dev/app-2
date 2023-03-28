import React from 'react'
import Contact from '../../components/Contact'
import { NextPage } from 'next'
import Navbar from '../../components/Navbar'
import Link from 'next/link'
import Nav from '../../components/Nav'

const contact = () => {
  return (
    <div>
        <Navbar/>
        <Nav/>
        <Contact />
    </div>
  )
}

export default contact