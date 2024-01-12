
export default function Card() {
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg">
              “Tailwind CSS is the only framework that I&apos;ve seen scale
              on large teams. It&apos;s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption>
            <div>
              Sarah Dayan
            </div>
            <div>
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  )
}