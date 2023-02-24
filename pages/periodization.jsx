import { useEffect, useState } from 'react';
import Head from 'next/head';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import Table from '@/components/Table';
import Dropdown from '@/components/Dropdown';
import { cycles } from '../helpers/databank';


const lsKeys = {
    week: 'week',
    cycle: 'cycle',
};

const phaseLabels = {
    1: '2',
    2: '2',
    3: '3',
    4: '3',
    5: '4 & 5',
    6: '4 & 5',
};

const Periodization = () => {
    const [currentWeekCycle, setCurrentWeekCycle] = useState({});
    const [week, setWeek] = useState(1);
    const [cycle, setCycle] = useState(1);
    const [tableView, setTableView] = useState('week');

    useEffect(() => {
        const lsWeek = Number(window.localStorage.getItem(lsKeys.week));
        const lsCycle = Number(window.localStorage.getItem(lsKeys.cycle));
        if (lsWeek > 1 && lsWeek < 7) setWeek(lsWeek);
        if (lsCycle > 1 && lsCycle < 7) setCycle(lsCycle);
    }, []);

    useEffect(() => {
        setCurrentWeekCycle(cycles.find((c) => c.cycle === cycle && c.week === week));
    }, [week, cycle]);

    useEffect(() => {
        window.localStorage.setItem(lsKeys.week, week);
    }, [week]);

    useEffect(() => {
        window.localStorage.setItem(lsKeys.cycle, cycle);
    }, [cycle]);

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
                        <div className={`mx-auto text-lg ${tableView === 'season' ?'' : 'max-w-7xl'}`}>
                            <div className="pb-2 grid grid-cols-3">
                                <div className="flex flex-wrap">

                                    {(tableView === 'week' || tableView === 'cycle') ?
                                        <div className="flex mr-0 sm:mr-4">
                                            <button
                                                disabled={cycle === 1}
                                                onClick={() => setCycle(cycle - 1)}
                                                className="flex items-center justify-center cursor-pointer h-8 w-8 rounded-full text-gray-900 hover:bg-gray-100 disabled:text-gray-400"
                                            >
                                                <ChevronLeftIcon className="h-5 w-5" />
                                            </button>
                                            <button
                                                disabled={cycle >= 6}
                                                onClick={() => setCycle(cycle + 1)}
                                                className="flex items-center justify-center cursor-pointer h-8 w-8 rounded-full text-gray-900 hover:bg-gray-100 disabled:text-gray-400"
                                            >
                                                <ChevronRightIcon className="h-5 w-5" />
                                            </button>
                                            <span className="ml-1 font-semibold text-gray-900 whitespace-nowrap">
                                                {`Cyclus ${cycle}`}
                                            </span>
                                        </div>
                                        : null
                                    }
                                    {tableView === 'week' ?
                                        <div className="flex">
                                            <button
                                                disabled={week === 1}
                                                onClick={() => setWeek(week - 1)}
                                                className="flex items-center justify-center h-8 w-8 rounded-full text-gray-900 hover:bg-gray-100 disabled:text-gray-400"
                                            >
                                                <ChevronLeftIcon className="h-5 w-5" />
                                            </button>
                                            <button
                                                disabled={week >= 6}
                                                onClick={() => setWeek(week + 1)}
                                                className="flex items-center justify-center h-8 w-8 rounded-full text-gray-900 hover:bg-gray-100 disabled:text-gray-400"
                                            >
                                                <ChevronRightIcon className="h-5 w-5" />
                                            </button>
                                            <span className="ml-1 font-semibold text-gray-900 whitespace-nowrap">
                                                {`Week ${week}`}
                                            </span>
                                        </div>
                                        : null
                                    }
                                </div>

                                <div className="text-center">
                                    {tableView === 'week' ?
                                        <span className="text-gray-900 font-semibold">Fase {phaseLabels[week]}</span>
                                        : null
                                    }
                                </div>

                                <div className="text-right">
                                    <Dropdown
                                        items={[
                                            { value: 'week', label: 'Week' },
                                            { value: 'cycle', label: 'Cycle' },
                                            { value: 'season', label: 'Season' },
                                        ]}
                                        value={tableView}
                                        onSelect={v => setTableView(v)}
                                    />
                                </div>
                            </div>
                            {
                                tableView === 'week' ?
                                    <Table
                                        data={currentWeekCycle}
                                    />
                                    : null
                            }
                            {
                                tableView === 'cycle' ?
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                        {
                                            cycles.filter(c => c.cycle === cycle).map((dataCycle => {
                                                return (
                                                    <div key={dataCycle?.week}>
                                                        <div className="text-gray-900 font-semibold mb-1">
                                                            <span>{`Fase ${phaseLabels[dataCycle?.week]}`}{' / '}{`Week ${dataCycle?.week}`}</span>
                                                        </div>
                                                        <Table data={dataCycle} />
                                                    </div>
                                                )
                                            }))
                                        }
                                    </div>
                                    : null
                            }
                            {
                                tableView === 'season' ?
                                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6">
                                        {
                                            cycles.map((dataCycle => {
                                                return (
                                                    <div key={dataCycle?.week}>
                                                        <div className="font-semibold mb-1">
                                                            <span>{`Fase ${phaseLabels[dataCycle?.week]}`}{' / '}{`Week ${dataCycle?.week}`}</span>
                                                        </div>
                                                        <Table
                                                            data={dataCycle}
                                                            size="sm"
                                                        />
                                                    </div>
                                                )
                                            }))
                                        }
                                    </div>
                                    : null
                            }
                        </div>

                        <div className="mx-auto max-w-7xl text-lg mt-16">
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
                                    <li>Matchdag +1, Matchdag +2 = Geen plyometrische training!</li>
                                    <li>Matchdag +3, Matchdag +4 = Ideaal moment voor plyometrische training!</li>
                                    <li>(Matchdag +5 = Alleen indien nodig)</li>
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
                                        <b>Fase 3</b>: Krachtontwikkeling. In deze fase zullen de spelers voornamelijk <span className="text-yellow-400 font-bold">MIDDEL</span> sprongen uitvoeren.
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
