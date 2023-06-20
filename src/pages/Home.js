import supabase from "../config/supabaseClient"
import { useEffect, useState } from "react"

const Home = () => {
  const [fetchError, setfetchError] = useState(null)
  const [smoothies, setSmoothies] = useState(null)

  useEffect(() => {
    const fetchSmoothies = async () =>{
      const { data, error } = await supabase
      .from('smoothies')
      .select()
    }
  }, [])

  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  )
}

export default Home