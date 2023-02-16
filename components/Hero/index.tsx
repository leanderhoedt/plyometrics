const Hero = () => {
    return (
        <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                    <div className="absolute inset-0">
                        <img
                            className="h-full w-full object-cover"
                            src="/plyometrie-soccer.jpg"
                            alt="People working on laptops"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-amber-800 to-amber-700 mix-blend-multiply" />
                    </div>
                    <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
                        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">Plyometrie in</span>
                            <span className="block text-amber-600">amateurvoetbal</span>
                        </h1>
                        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-amber-100 sm:max-w-3xl">
                            Versterk de prestaties van jouw team met bewezen plyometrie technieken en voorkom blessures
                        </p>
                        <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5 sm:space-y-0">
                                <a
                                    href="/periodization"
                                    className="flex items-center justify-center rounded-md border border-transparent bg-amber-500 bg-opacity-80 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-90 sm:px-8"
                                >
                                    Start mijn trainingsschema
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;