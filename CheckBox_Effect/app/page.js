'use client'
import { FaInstagram,FaSlack,FaFacebook,FaTwitter,FaTiktok,FaYoutube,FaSpotify } from 'react-icons/fa';
import {RxDiscordLogo} from  'react-icons/rx'

function handleCheckboxClick(e) {
    const div = e.target.closest(".checkbox-container");
    div.classList.toggle("selected");
    div.classList.toggle("icon")
    
  }

export default function Page() {
    return (
        <>
            <h1 className=" text-4xl text-black flex justify-center p-10">Choose your favorite Icon</h1>
            <section className=''>
                <form className='flex flex-wrap justify-center gap-4'>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Discord" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Discord" className='block p-2 text-center cursor-pointer '><RxDiscordLogo className='checkbox-container text-6xl'/> Discord </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Instagram" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Instagram" className='block p-2 text-center cursor-pointer  '><FaInstagram className='checkbox-container text-6xl'/> Instagram </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Facebook" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Facebook" className='block p-2 text-center cursor-pointer  '><FaFacebook className='checkbox-container text-6xl'/> Facebook </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Slack" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Slack" className='block p-2 text-center cursor-pointer  '><FaSlack className='checkbox-container text-6xl'/> Slack </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Twitter" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Twitter" className='block p-2 text-center cursor-pointer  '><FaTwitter className='checkbox-container text-6xl'/> Twitter </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Tiktok" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Tiktok" className='block p-2 text-center cursor-pointer  '><FaTiktok className='checkbox-container text-6xl'/> Tiktok </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Youtube" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Youtube" className='block p-2 text-center cursor-pointer  '><FaYoutube className='checkbox-container text-6xl'/> Youtube </label>
                    </div>
                    <div className='checkbox-container flex justify-center bg-white p-3 w-[140px] rounded-md shadow-md relative border hover:border-green-400 cursor-pointer'>
                        <input type="checkbox" id="Spotify" onClick={handleCheckboxClick} className="absolute left-3 cursor-pointer" />
                        <label htmlFor="Spotify" className='block p-2 text-center cursor-pointer  '><FaSpotify className='checkbox-container text-6xl'/> Spotify </label>
                    </div>
                    
                </form>
            </section>
        </>
    )
}