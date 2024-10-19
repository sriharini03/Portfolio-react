import ResumeImg from '../assets/resume.jpg'

export default function Contact(){
    return <section id="contact" className=' flex flex-col md:flex-row bg-primary px-5 py-32 text-white justify-center items-center '>
        <div className='flex flex-col items-center'>
            <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='text-white pb-5'>If you want to discuss in detail, please contact me.</p> 
            <p className='py-2'><span className='font-bold'>Email:</span>harinimeckk@gmail</p>
            <p className='py-2'><span className='font-bold'>Phone:</span>9344665954</p>
        </div>
    </section>
}
 