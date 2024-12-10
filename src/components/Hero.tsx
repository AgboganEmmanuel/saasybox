import Image from 'next/image'
import landingImage from '@/img/landing.png.jpg'

export function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen pb-0 mb-0">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-base-content">Bring Your idea to Life</h1>
          <p className="py-6 text-base-content">
          Streamline your workflow, boost productivity, and scale your business with this free and open source SaaS Boilerplate.
          </p>
        </div>
        <div className="mockup-browser border border-base-300 w-full lg:w-1/2">
          <div className="mockup-browser-toolbar">
            <div className="input border-base-300 border text-base-content">https://saasybox.com</div>
          </div>
          <div className="border-base-300 flex justify-center border-t px-4 py-16 text-base-content">
            <Image 
              src={landingImage} 
              alt="SaaS Landing Page" 
              layout="responsive"
              objectFit="cover"
              width={1200}
              height={800}
              className="rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}
