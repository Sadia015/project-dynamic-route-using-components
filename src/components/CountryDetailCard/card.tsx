import Link from 'next/link'
import React from 'react'

type Props1 = {
    name: string,
    population: number,
    capital: string
}

const CountryDetailCard = ({name,population,capital}: Props1) => {
  return (
    <div className="w-max h-max bg-slate-600 shadow-2xl shadow-black py-8 px-14 m-auto mt-20 rounded-3xl font-bold text-white">
      <div className="text-6xl text-center text-black py-2 "> {name}</div>
      <div className="text-4xl py-3 m-5"> <strong className='text-black'>Capital</strong>  : {capital}</div>
      <div className="text-4xl py-3"><strong className='text-black'>Population</strong> : {population}</div>

      <button className="bg-black ml-40 mt-10 text-lg px-6 py-2 rounded-full duration-100 text-white hover:ease-linear hover:scale-110 ">
        <Link href={"/countries"}> Back</Link>{" "}
      </button>
    </div>
  )
}

export default CountryDetailCard