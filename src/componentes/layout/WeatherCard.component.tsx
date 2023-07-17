import { Forecastday } from "../../App"

interface WeatherCardProps {
    day: Forecastday
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ day }) => {
    return (
        <div key={day.date} className='flex flex-col bg-slate-50 p-3 rounded-3xl justify-center items-center shadow-lg mb-2'>
            <h1 className='font-sans text-xl text-slate-950 font-bold text-center'>{day.date}</h1>
            <img src={day.day.condition.icon} />
            <div className='flex w-full justify-between'>
                <p className='font-sans text-base'>
                    Máxima:
                </p>
                <p className='font-sans text-base font-bold'>
                    {day.day.maxtemp_c}º
                </p>
            </div>
            <div className='flex w-full justify-between'>
                <p className='font-sans text-base'>
                    Media:
                </p>
                <p className='font-sans text-base font-bold'>
                    {day.day.avgtemp_c}º
                </p>
            </div>
            <div className='flex w-full justify-between'>
                <p className='font-sans text-base'>
                    Mínima:
                </p>
                <p className='font-sans text-base font-bold'>
                    {day.day.mintemp_c}º
                </p>
            </div>
        </div>
    )
}
