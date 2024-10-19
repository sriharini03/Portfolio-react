import ResumeImg from '../assets/resume.jpg'

export default function Resume(){
    return <section id="resume" className='flex flex-col md:flex-row bg-secondary px-5 py-15'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px] ' src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='text-white pb-5'>You can view my resume here. <a className='btn' href='#'> Download </a></p> 
            </div>
        </div>
    </section>
}
