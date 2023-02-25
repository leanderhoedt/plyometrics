import Head from 'next/head';
import dynamic from 'next/dynamic';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import Tooltip from '@/components/Tooltip';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const videos = [
    {
        url: "https://youtube.com/shorts/x_EY6nc8w6I",
        title: "Jumping lunges",
        categories: ["middle"]
    }, {
        url: "https://youtube.com/shorts/Zxg9gpuCouw",
        title: "Skater jumps",
        categories: ["middle"]
    }, {
        url: "https://youtube.com/shorts/pkkxwfoclfs",
        title: "Kneeling hurdle jump",
        categories: ["middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtu.be/hL1-VL0bmuo",
        title: "Continuous broad jump",
        categories: ["high"],
        description: ""
    }, {
        url: "https://youtu.be/vmZfx0PX2Gk",
        title: "One leg continuous broad jump",
        categories: ["high"]
    }, {
        url: "https://youtube.com/shorts/uRaJwjqrrcw",
        title: "Single leg RD jump",
        categories: ["middle"]
    }, {
        url: "https://youtube.com/shorts/wTDzTLJfAIc",
        title: "Small to big lateral bounds",
        categories: ["middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtu.be/cvph47tyuO4",
        title: "One leg jump",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtu.be/lF3Od-BgV7Y",
        title: "Two leg jump",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtu.be/b2GFyos-N0I",
        title: "Squat jump",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/bn4CWAaTX_E",
        title: "Single leg side to side hops",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/oRSXqOAnpTw",
        title: "Forward and backwords two legged jumps",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/SH33dwMe50Y",
        title: "Scissor hops",
        categories: ["low", "middle"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtu.be/2nx2WUcooXA",
        title: "Turning jump squats",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/42yiTBThcfY",
        title: "Seated jumps",
        categories: ["middle"]
    }, {
        url: "https://youtube.com/shorts/b4qAxmLccnc",
        title: "Kneeling broad jump into tuck jump (hoog)",
        categories: ["high"]
    }, {
        url: "https://youtube.com/shorts/v25Bn632Mpo",
        title: "Lateral double leg hops",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/clYr2Ae2aEY",
        title: "Box drill",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/JzDowgvr6-8",
        title: "Skater jumps followed by upward jump",
        categories: ["middle", "high"],
        description: "Lorem ipsum"
    }, {
        url: "https://youtube.com/shorts/sI2j--PN7fY",
        title: "Stairway weave hops",
        categories: ["low", "middle", "high"],
        description: "Lorem ipsum"
    },
];

const categoryLabels: Record<string, string> = {
    low: 'Laag',
    middle: 'Middel',
    high: 'Hoog',
};

const Databank = () => {
    return (
        <>
            <Head>
                <title>Plyometrie databank</title>
                <meta name="description" content="Plyometrie databank" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        videos.map(({ url, title, categories, description }) => {
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
                                            light={true}
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
                                                        <span className="mr-2 my-1">{categoryLabels[category]}</span>
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
