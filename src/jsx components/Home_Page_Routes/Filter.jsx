import { useRef } from 'react'
import { calendar_icon, location_icon } from '../../assets'

const Filter = () => {
    const filterRef = useRef()

    return (
        <div className='filter fixed bottom-0 hidden flex-col gap-3 p-[30px] w-full h-[60%] bg-page_color rounded-tl-[20px] rounded-tr-[20px] z-[1] lg:w-[1000px]' ref={filterRef}>
            <span className='w-full relative'>
                <h3 className='text-primary' htmlFor="date">Dates</h3>
                <img src={calendar_icon} alt="calendar icon" className='absolute bottom-[15px] left-[15px]' />
                <input type="date" name='date' id='date' className='h-[45px] w-[100%] mt-2 rounded-[10px] pl-[35px] pr-[10px]  bg-secondary outline-none text-[12px] ' />
            </span>
            <span className='w-full relative'>
                <h3 className='text-primary' htmlFor="days">Days</h3>
                <img src={calendar_icon} alt="calendar icon" className='absolute bottom-[15px] left-[15px]' />
                <select id='days' className='h-[45px] w-[100%] mt-2 rounded-[10px] pl-[35px] pr-[10px] bg-secondary outline-none text-[12px] '>
                    <option value="">5 days</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                </select>
            </span>
            <span className='w-full relative'>
                <h3 className='text-primary' htmlFor="Location">Location</h3>
                <img src={location_icon} alt="location icon" className='absolute bottom-[15px] left-[15px]' />
                <select id="states" className='h-[45px] w-[100%] mt-2 rounded-[10px] pl-[35px] pr-[10px] bg-secondary outline-none text-[12px] '>
                    <option value="">location</option>
                    <option value="Abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="FCT">Federal Capital Territory (Abuja)</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Katsina">Katsina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Kwara">Kwara</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                </select>
            </span>
        </div>
    )
}

export default Filter
