import Head from 'next/head';
import dynamic from 'next/dynamic';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Tooltip from '@/components/Tooltip';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '@/helpers';
import { useState } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

interface Video {
    url: string;
    title: string;
    categories: string[];
    description?: string;
}

const videos: Video[] = [
    {
        url: "https://youtube.com/shorts/x_EY6nc8w6I",
        thumbnail: "/jumping-lunges.jpg",
        title: "Jumping lunges",
        categories: ["middle"],
        description: "Deze oefening behoort tot de categorie ‘middel’ qua intensiteit."
    }, {
        url: "https://youtube.com/shorts/Zxg9gpuCouw",
        title: "Skater jumps",
        categories: ["middle"],
        description: "Deze oefening behoort tot de categorie ‘middel’ qua intensiteit."
    }, {
        url: "https://youtube.com/shorts/pkkxwfoclfs",
        title: "Kneeling hurdle jump",
        categories: ["middle", "high"],
        description: () => <div>De oefening die wordt uitgebeeld in het filmpje behoort tot de categorie ‘middel’. Indien je gebruik maakt van een hoger hekje schroef je de intensiteit omhoog naar ‘hoog’.<br />*Maak de oefening sport specifiek door het toevoegen van een bal.</div>
    }, {
        url: "https://youtu.be/hL1-VL0bmuo",
        title: "Continuous broad jump",
        categories: ["high"],
        description: "Deze oefening behoort tot de categorie ‘hoog’ qua intensiteit. Elke sprong telt als één herhaling."
    }, {
        url: "https://youtu.be/vmZfx0PX2Gk",
        title: "One leg continuous broad jump",
        categories: ["high"],
        description: "Deze oefening behoort tot de categorie ‘hoog’ qua intensiteit. Elke sprong telt als één herhaling."
    }, {
        url: "https://youtube.com/shorts/uRaJwjqrrcw",
        title: "Single leg RD jump",
        categories: ["middle"],
        description: () => <div>Deze oefening behoort tot de categorie ‘middel’ qua intensiteit.<br />*Maak de oefening sport specifiek door het toevoegen van een bal.</div>
    }, {
        url: "https://youtube.com/shorts/wTDzTLJfAIc",
        title: "Small to big lateral bounds",
        categories: ["middle", "high"],
        description: "De oefening die wordt uitgebeeld in het filmpje behoort tot de categorie ‘middel’. Indien je gebruik maakt van een hoger hekje schroef je de intensiteit omhoog naar ‘hoog’."
    }, {
        url: "https://youtu.be/cvph47tyuO4",
        title: "One leg jump",
        categories: ["low", "middle", "high"],
        description: "De oefening die wordt uitgebeeld behoort tot de categorie ‘laag’. Indien je gebruik maakt van een hoger hekje schroef je de intensiteit omhoog naar ‘middel’. Maak je gebruik van een nog hoger hekje is de intensiteit ‘hoog’."
    }, {
        url: "https://youtu.be/lF3Od-BgV7Y",
        title: "Two leg jump",
        categories: ["low", "middle", "high"],
        description: "De oefening die wordt uitgebeeld behoort tot de categorie ‘laag’. Indien je gebruik maakt van een hoger hekje schroef je de intensiteit omhoog naar ‘middel’. Maak je gebruik van een nog hoger hekje is de intensiteit ‘hoog’."
    }, {
        url: "https://youtu.be/b2GFyos-N0I",
        title: "Squat jump",
        categories: ["low", "middle", "high"],
        description: "Verhoog telkens de hekjes om de intensiteit van de oefening te verhogen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtube.com/shorts/bn4CWAaTX_E",
        title: "Single leg side to side hops",
        categories: ["low", "middle", "high"],
        description: () => <div>Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit.<br />*Maak de oefening sport specifiek door het toevoegen van een bal tussenin de sprongen.</div>
    }, {
        url: "https://youtube.com/shorts/oRSXqOAnpTw",
        title: "Forward and backwords two legged jumps",
        categories: ["low", "middle", "high"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtube.com/shorts/SH33dwMe50Y",
        title: "Scissor hops",
        categories: ["low", "middle"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtu.be/2nx2WUcooXA",
        title: "Turning jump squats",
        categories: ["low", "middle", "high"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtube.com/shorts/42yiTBThcfY",
        title: "Seated jumps",
        categories: ["middle"],
        description: "Deze oefening behoort tot de categorie ‘middel’ qua intensiteit."
    }, {
        url: "https://youtube.com/shorts/b4qAxmLccnc",
        title: "Kneeling broad jump into tuck jump (hoog)",
        categories: ["high"],
        description: () => <div>Deze oefening behoort tot de categorie ‘hoog’ qua intensiteit.<br/>*Voeg een kopbal toe om deze oefening sport specifiek te maken.</div>
    }, {
        url: "https://youtube.com/shorts/v25Bn632Mpo",
        title: "Lateral double leg hops",
        categories: ["low", "middle", "high"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtube.com/shorts/clYr2Ae2aEY",
        title: "Box drill",
        categories: ["low", "middle", "high"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    }, {
        url: "https://youtube.com/shorts/JzDowgvr6-8",
        title: "Skater jumps followed by upward jump",
        categories: ["middle", "high"],
        description: "Deze oefening wordt uitgevoerd aan ‘middel’ intensiteit. Plaats één hekje in het midden waarover de skater jump wordt uitgevoerd om de intensiteit naar ‘hoog’ te verhogen."
    }, {
        url: "https://youtube.com/shorts/sI2j--PN7fY",
        title: "Stairway weave hops",
        categories: ["low", "middle", "high"],
        description: "Verhoog of verlaag telkens de hekjes om de intensiteit van de oefening te veranderen. De voorgetoonde oefening is aan een ‘middel’ intensiteit."
    },
];

const categoryLabels: Record<string, string> = {
    low: 'Laag',
    middle: 'Middel',
    high: 'Hoog',
};

const filterOptions = [
    { value: null, label: 'Alles' },
    { value: 'low', label: categoryLabels.low },
    { value: 'middle', label: categoryLabels.middle },
    { value: 'high', label: categoryLabels.high },
]

const Databank = () => {
    const [currentCategory, setCurrentCategory] = useState(filterOptions[0]);

    return (
        <>
            <Head>
                <title>Plyometrie databank</title>
                <meta name="description" content="Plyometrie databank" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="mb-10">
                    <RadioGroup value={currentCategory} onChange={setCurrentCategory} className="mt-2">
                        <RadioGroup.Label className="sr-only"> Choose a memory option </RadioGroup.Label>
                        <div className="flex gap-2">
                            {filterOptions.map((option) => (
                                <RadioGroup.Option
                                    key={option.label}
                                    value={option}
                                    className={({ active, checked }) =>
                                        classNames(
                                            'cursor-pointer focus:outline-none',
                                            active ? 'ring-2 ring-offset-2 ring-gray-600' : '',
                                            checked
                                                ? 'bg-gray-700 border-transparent text-white hover:bg-gray-800'
                                                : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                                            'border rounded-md py-3 px-3 text-sm font-medium uppercase'
                                        )
                                    }
                                >
                                    <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        videos.filter(v => {
                            if (!currentCategory.value) return true;
                            return v.categories.includes(currentCategory.value);
                        }).map(({ url, title, categories, description, thumbnail }) => {
                            return (
                                <li key={url}>
                                    <div className="rounded-md overflow-hidden">
                                        <ReactPlayer
                                            url={url}
                                            config={{
                                                youtube: {
                                                    playerVars: { controls: 1 }
                                                }
                                            }}
                                            light={thumbnail ? <Image src={thumbnail} width={384} height={288} alt={title} /> : true}
                                            width={384}
                                            height={288}
                                        />
                                    </div>
                                    <div className="flex justify-between mt-2 px-2 font-medium text-gray-900">
                                        <div>
                                            <span className="flex">
                                                {title}
                                            </span>
                                            <div className="text-gray-500 font-normal">
                                                {
                                                    categories?.map(category => (
                                                        <span key={category} className="mr-2 my-1">{categoryLabels[category]}</span>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex items-end text-gray-800">
                                            {
                                                description ?
                                                    <Tooltip
                                                        message={description}
                                                    >
                                                        <InformationCircleIcon
                                                            className="w-6 h-6 cursor-pointer"
                                                        />
                                                    </Tooltip>
                                                    : null
                                            }
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Databank;
