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
                      Krachttrainingen en plyometrie in het amateurvoetbal toepassen is allesbehalve een
                      makkelijke opgave. Als trainer kamp je met verschillende problemen zoals een gebrek aan
                      tijd, faciliteiten, te weining trainingen, enzovoort …
                      Desondanks is het bewezen in de literatuur en aan de hand van vele studies dat plyometrie
                      een positief effect heeft op de sprongkracht, snelheid, richtingsveranderingen, schotkracht,
                      … bij voetballers.
                    </p>
                    <p className="mt-4 text-lg text-gray-800">
                      Deze variabelen spelen een grote rol voor de prestaties van spelers in een
                      wedstrijd. Verder heeft het ook een belangrijke functie als blessurepreventie. Plyometrie
                      wordt toegepast in de allerhoogste regionen van het voetbal, dus waarom ook niet op
                      amateurniveau?
                    </p>
                  </div>
                </div>

              </div>
              <div className="mt-12 py-2 sm:py-20 sm:mt-16 lg:mt-0 lg:col-span-5">
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
                      Deze website is opgericht om een wetenschappelijk onderbouwde manier van plyometrie te
                      integreren in de trainingen van amateurclubs. Het is een simpele tool die je als trainer kan
                      gebruiken doorheen het hele seizoen. Op deze website overloop je enkele stappen om een
                      voor jou gepast traniningsschema te verkrijgen die van toepassing is op jouw spelers. Dit
                      schema is opgebouwd aan de hand van het OPT-model en is wetenschappelijk onderbouwd.
                      Verder kun je ook de nodige inspiratie opdoen voor uw sessies aan de hand van onze
                      oefeningen databank.
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
