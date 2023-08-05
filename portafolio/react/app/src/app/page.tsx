import Image from 'next/image'
import db_profile from '../assets/img/db_profile.png'
import MainHeaderComponent from './shared/components/structure/main-header/main-header.component'
import BtnPrimaryComponent from './shared/components/button/btn-primary/btn-primary.component'
import AboutComponent from './modules/portafolio/about/about.component'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-24 md:p-5">
      <MainHeaderComponent></MainHeaderComponent>

      <section className="container mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-12 gap-2">
          <div className=" col-span-7 grid justify-center items-center">
            <div className='mt-5 container'>
              <div className='text-center'>
                <h2 className='text-3xl md:text-5xl font-semibold'>Hola, soy Danny Joel</h2>
                <h3 className='text-sm'>Ing. en Sistemas y Computación.</h3>
              </div>

              <p className='text-justify mx-12 my-10 hidden md:block'>
                Soy Ingeniero en Sistemas y Computación.
                
                Mi experiencia en prácticas profesionales me permitió colaborar estrechamente con equipos multidisciplinarios, y participar en proyectos en los que pude cultivar habilidades con diversas tecnologías de vanguardia.

              </p>

              

              <div className='text-center'>
                <BtnPrimaryComponent label="Github" icon=""></BtnPrimaryComponent>
                <BtnPrimaryComponent label="Linkedln" icon=""></BtnPrimaryComponent>
                <BtnPrimaryComponent label="Curriculum" icon=""></BtnPrimaryComponent>
                <BtnPrimaryComponent label="WhatsApp" icon=""></BtnPrimaryComponent>

              </div>
            </div>
          </div>
          <div className="col-span-5" >
            <div className='grid justify-center items-center'>
              <Image
                src={db_profile}
                alt="Danny Joel Bucay Shucad"
                width={348}
                height={348}
                priority
              />
            </div>

          </div>
        </div>

      </section>







      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>




      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sobre mi{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Educación{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Proyectos{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore the Next.js 13 playground.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Habilidades{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
