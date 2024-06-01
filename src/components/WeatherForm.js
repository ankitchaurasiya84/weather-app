
import React ,{useState} from 'react'

 const WeatherForm = ({fetchWeather}) => {
    const [city,setCity]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        fetchWeather(city)
    }
  return (
    <form onClick={handleSubmit}>
        <input
        type=""
        placeholder="enter city"
        onChange={(e)=>setCity(e.target.value)}
        />
        <button type='submit'> Get Weather</button>

    </form>
  )
}
export default WeatherForm