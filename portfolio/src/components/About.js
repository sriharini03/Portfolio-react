import AboutImg from '../assets/about.png';

export default function About() {
    const config={
        line1: "I am Sri harini. Motivated and passionate Computer Science Engineering student with a solid academic background and hands-on experience in programming languages and technologies. Skilled in software development and problem-solving, with a strong interest in staying current with industry advancements."
    }





    return (
        <section className='flex flex-col md:flex-row bg-secondary px-5' id="about">
            <div className='py-5 md:w-1/2'>
                <img src={AboutImg} alt="About" />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                    <p className='text-white pb-5'>{config.line1}</p> 
                </div>
            </div>
        </section>
    );
}
