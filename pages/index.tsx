import Head from 'next/head';
import { Inter } from '@next/font/google'
import Hero from '@/components/Hero';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Plyometrie</title>
        <meta name="description" content="Plyometrie in amateurvoetbal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Hero />

        <div className="relative overflow-hidden pt-16 pb-32">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48" />
          <div className="relative">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-12 lg:gap-12 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-8 lg:px-0 lg:col-span-7">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Krachttraining voor betere prestaties en blessurepreventie: wetenschappelijk onderbouwd en praktisch toepasbaar
                    </h2>
                    <p className="mt-4 text-lg text-gray-800">
                      Als trainer in het amateurvoetbal weet je als geen ander hoe uitdagend het kan zijn om krachttrainingen en plyometrie toe te passen. Tijdgebrek, gebrek aan faciliteiten en onvoldoende trainingen zijn slechts enkele van de vele obstakels waarmee je wordt geconfronteerd.
                    </p>
                    <p className="mt-4 text-lg text-gray-800">
                      Toch is het wetenschappelijk bewezen dat plyometrie een positief effect heeft op de sprongkracht, snelheid, richtingsveranderingen, schotkracht en andere belangrijke variabelen die een rol spelen bij de prestaties van spelers in een wedstrijd. Bovendien kan plyometrie ook blessures helpen voorkomen.
                    </p>
                    <p className="mt-4 text-lg text-gray-800">
                      Als we kijken naar de hoogste niveaus van het voetbal, wordt plyometrie al veelvuldig toegepast. Dus waarom zou je het niet ook toepassen in het amateurvoetbal? Ontdek hoe plyometrie kan bijdragen aan de ontwikkeling van jouw team en aan de prestaties van jouw spelers. Lees meer over de resultaten van ons onderzoek naar het effect van plyometrie in het amateurvoetbal en krijg handige tips en tools om deze trainingsmethode succesvol toe te passen.
                    </p>
                  </div>
                </div>

              </div>
              <div className="mt-12 py-2 sm:py-36 sm:mt-16 lg:mt-0 lg:col-span-5">
                <div className="px-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <Image
                    fill
                    className="w-full rounded-xl shadow-xl shadow-amber-200 ring-2 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:max-w-none"
                    src="/lukaku.png"
                    alt="Lukaku"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-24">
            <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
              <div className="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                <div>
                  <div className="mt-6">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                      Wat kan je verwachten?
                    </h2>
                    <p className="mt-4 text-lg text-gray-800">
                      Deze website biedt trainers een wetenschappelijk onderbouwde methode om krachttraining en trainingen voor snelheid en wendbaarheid te integreren in de oefensessies van amateurvoetbalclubs. Het is een gebruiksvriendelijke tool die het hele seizoen door kan worden gebruikt. Op deze website worden enkele stappen doorlopen om een trainingsschema op maat van jouw spelers te ontwikkelen, gebaseerd op het OPT-model en wetenschappelijk onderbouwd. Bovendien biedt onze database met oefeningen de nodige inspiratie voor jouw sessies.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                  <img
                    className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/ronaldo-plyometrie.jpg"
                    alt="Customer profile user interface"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
