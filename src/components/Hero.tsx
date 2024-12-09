import Link from 'next/link'

export function Hero() {
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-base-content">Bring your ideas to life</h1>
      <p className="py-6 text-base-content">
      Streamline your workflow, boost productivity, and scale your business with this free and open source SaaS Boilerplate.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="mockup-browser border-base-300 border">
        <div className="mockup-browser-toolbar">
          <div className="input border-base-300 border text-base-content">https://saasybox.com</div>
        </div>
        <div className="border-base-300 flex justify-center border-t px-4 py-16 text-base-content">Hello!</div>
      </div>
    </div>
  </div>
</div>
  )
}
