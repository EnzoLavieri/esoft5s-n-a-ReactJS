'use client'
 
import { CardSection } from '@/components/CardSection/card'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'

type PokemonWithSprite = {
    sprites: {
        front_default: string
    }
}

export default function SearchBar() {
  const searchParams = useSearchParams()
    const search = searchParams.get('evolucao')
    console.log(search)
    const [data, setData] = useState<PokemonWithSprite | null>(null)
    const [isLoading, setLoading] = useState(true)  

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
    
    console.log(data)
    
    return (
        <CardSection h2={`${search}`} >
            <img src={data?.sprites.front_default}></img>
        </CardSection>
  )
}

export async function getImage(search: any) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
    const jsonData = await data.json()
    return jsonData.sprites.front_default
}
