import Image from 'next/image';

const AboutMe = () => {
    return (
        <section className="relative lg:h-screen py-10 px-4 lg:px-10">
            <div className="mx-auto max-w-7xl lg:px-8 h-5/6 flex">
                <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:flex-col lg:justify-center lg:items-center lg:px-0 lg:text-left">
                        <div>
                            <h1 className="flex mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                                Over mij
                            </h1>
                            <p className="mt-8 pb-4 text-base font-medium text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                                Mijn naam is Artuur Zutterman. Ik zit in mijn laatste jaar sport&amp;bewegen aan Howest en voor mijn bachelorproef heb ik onderzoek gedaan naar een onderwerp dat mij heel erg interesseert, namelijk plyometrie en krachttraining in het amateurvoetbal.
                            </p>
                            <p className="mt-2 pb-4 text-base font-medium text-gray-700 sm:text-xl lg:text-lg xl:text-xl">
                                Deze interesse komt voornamelijk voort uit het feit dat ik zelf actief ben in het amateurvoetbal bij HSV Hoek, weliswaar is dit niet in België maar in Nederland. Vanuit mijn eigen ervaring weet ik dat het allesbehalve simpel is om krachttrainingen en plyometrie te integreren in het amateurvoetbal omdat je tegen allerlei obstakels botst. Ik hoop van harte dat ik met deze tool toch enigszins mijn steentje heb kunnen bijdragen aan de trainers in het amateurvoetbal.
                            </p>
                        </div>
                    </div>
                    <div className="-mb-16 sm:-mb-48 lg:relative lg:m-0 sm:text-center lg:flex lg:items-center">
                        <div className="mx-auto max-w-md px-4 py-10 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center justify-center">
                            <Image
                                src="/zutterman-artuur-modified-2.png"
                                alt="Zutterman Artuur"
                                width={600}
                                height={600}
                            />
                            <div className="mt-8 flex justify-center space-x-6">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;
