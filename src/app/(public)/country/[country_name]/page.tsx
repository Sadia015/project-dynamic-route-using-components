import React from "react";
import CountryDetailCard from "@/components/CountryDetailCard/card";
export  type CountryDetailsType = {
  name: string,
  population: number,
  capital: string;
}

const countriesName = ({ params }: { params: { country_name: string } }) => {
  const contrydetails: CountryDetailsType[] = [ 
       {
        name: "Pakistan",
        population: 88092400374,
        capital: "Islamabad",
      },
       {
        name: "Russia",
        population: 53871362115,
        capital: "Moscow",
      },
       {
        name: "America",
        population: 124494116876,
        capital: "Washington, D.C",
      },
      {
        name: "Turkey",
        population: 31736367294,
        capital: "Ankara",
      },
      {
        name: "India",
        population: 1450935791,
        capital: "New Delhi",
      },
    ]
    
    const country = contrydetails.find(
      (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
    );
    if (!country) {
      return <h1>Yahan nhi he ye country</h1>;
    }
  
    return (
      <div>
        <CountryDetailCard
          name={country.name}
          population={country.population}
          capital={country.capital}
        />
      </div>
    );
  };
  
  export default countriesName;