export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* left */}
      <div className="items-star relative flex flex-col justify-between overflow-hidden border-r border-white/10 px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      {/* right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
