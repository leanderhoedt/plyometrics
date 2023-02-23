import { useEffect, useState } from 'react';
import Head from 'next/head';
import Table from '@/components/Table';
import { cycles } from '../helpers/databank';

const Periodization = () => {
    const [currentCycle, setCurrentCycle] = useState({});

    useEffect(() => {
        setCurrentCycle(cycles[0]);
    }, []);

    return (
        <>
            <Head>
                <title>Plyometrie</title>
                <meta name="description" content="Plyometrie in amateurvoetbal" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <div className="relative overflow-hidden py-16">

                    <div className="relative px-6 lg:px-8">
                        <Table
                            data={currentCycle}
                        />
                        <div className="mx-auto max-w-7xl text-lg">
                            <h1>
                                <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                    Stap 1: Wanneer plan je uw plyometrie sessie best in?
                                </span>
                            </h1>
                            <p className="mt-8 text-xl leading-8 text-gray-600">
                                Wetenschappelijk onderzoek toont aan dat je tot twee dagen na de match geen plyometrie
                                mag implementeren in het trainingsschema. (Bucchneit et al, 2021). Drie tot vier dagen na
                                de wedstrijd is het ideale moment om uw plyometrie sessie in te plannen. Doe dit aan het
                                <b> eind van uw training</b> aangezien plyometrie aan maximale intensiteit wordt uitgevoerd.
                                Indien het niet mogelijk is om drie of vier dagen na de wedstrijd de plyometrie sessie in te
                                plannen, dan plan je het in op vijf dagen na de wedstrijd. (Ramirez-Campillo et al., 2022)
                            </p>
                            <div className="prose prose-lg prose-indigo mt-6 text-gray-600">
                                <ul>
                                    <li>Matchday +1, Matchday +2 = No plyometrics training!</li>
                                    <li>Matchday +3, Matchday +4= Ideal moment for plyometrics training!</li>
                                    <li>(Matchday +5= Only if necessary)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mx-auto max-w-7xl text-lg mt-16">
                            <h1>
                                <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                    Stap 2: A/C-ratio
                                </span>
                            </h1>
                            <p className="mt-8 text-xl leading-8 text-gray-600">
                                Natuurlijk is het van belang dat je uw spelers blessurevrij blijven en stappen zetten naar een
                                betere fitheid. Het trainingsschema is opgesteld volgens het A/C-ratio van Tim Gabett. Wat
                                houdt dit nu precies in?
                                <br />
                                <b>Acute load</b> = de load van de afgelopen 7 dagen (de effectieve trainingsarbeid die week)
                                <br />
                                <b>Chronische load</b> = de load van de afgelopen 28 dagen (de load waarop de spelers zijn
                                voorbereid de afgelopen 28 dagen)
                                <br />
                                <b>A/C-ratio</b> = acute load gedeeld door de chronische load
                                Het is de bedoeling dat de A/C-ratio altijd tussen de <b>0,8-1,2</b> ligt, dan spreken we van een
                                optimale trainingsload. (Fanchini et al., 2018) (Hulin et al., 2015)
                            </p>
                        </div>

                        <div className="mx-auto max-w-7xl text-lg mt-16">
                            <h1>
                                <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                    Stap 3: OPT-Model
                                </span>
                            </h1>
                            <p className="mt-8 text-xl leading-8 text-gray-600">
                                Het gehele schema hieronder is opgesteld volgens het OPT-model. Dit model bestaat uit
                                verschillende fases.
                            </p>
                            <div className="prose prose-lg prose-indigo mt-6 text-gray-600" style={{ maxWidth: '100%' }}>
                                <ul>
                                    <li>
                                        <b>Fase 1</b>: Stabilisatie & uithouding. De oefeningen hiervoor worden geïmplementeerd in de <b>WARM-UP</b>.
                                    </li>
                                    <li>
                                        <b>Fase 2</b>: Krachtuithouding. In deze fase zullen de spelers voornamelijk <span className="text-emerald-400 font-bold">LAGE</span> sprongen uitvoeren.
                                    </li>
                                    <li>
                                        <b>Fase 3</b>: Krachtontwikkeling. In deze fase zullen de spelers voornamelijk <span className="text-emerald-400 font-bold">MIDDEL</span> sprongen uitvoeren.
                                    </li>
                                    <li>
                                        <b>Fase 4 & 5</b>: combinatie van power en maximale kracht. In deze fase zullen de spelers voornamelijk <span className="text-red-400 font-bold">HOGE</span> sprongen uitvoeren.
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mx-auto max-w-7xl text-lg mt-16">
                            <h1>
                                <span className="mt-2 block text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                                    Stap 4: Rustperiodes
                                </span>
                            </h1>
                            <p className="mt-8 text-xl leading-8 text-gray-600">
                                Rust tussen de <b>reeksen</b>: minimaal <b>30</b> seconden
                                <br />
                                Rust tussen <b>herhalingen</b>: maximaal <b>15</b> seconden
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Periodization;
