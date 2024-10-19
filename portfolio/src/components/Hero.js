import HeroImg from '../assets/hero.png';
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";


export default function Hero(){
    const config={
        subtitle: "I'm a Computer Science Engineer"
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font'>Hi!!  <br/> I'm <span className='text-black '>Sri harini </span>
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href='https://www.linkedin.com/in/sri-harini-saravanan-12076b234/' className='pr-5 hover:text-white'><FaLinkedin size={40}/></a>
                <a href='https://leetcode.com/u/user0421qq/' className='pr-5 hover:text-white'><SiLeetcode size={40}/></a>
                <a href='https://www.geeksforgeeks.org/user/srihari9aik/?ref=header_profile' className='pr-5 hover:text-white'><SiGeeksforgeeks size={40}/></a>
            
            </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>

        </section>
}