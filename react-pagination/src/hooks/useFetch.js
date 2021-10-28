import { useState, useEffect } from 'react'

export const useFetch = (link) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const fetchData = async (link) => {
    try {
      const response = await fetch(link)
      const data = await response.json()
      setData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData(link)
  }, [link])

  return {data, loading}
}
