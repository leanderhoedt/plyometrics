import Head from 'next/head';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const videos = [
    {
        url: "https://youtube.com/shorts/x_EY6nc8w6I",
        title: "Jumping lunges (middel)"
    }, {
        url: "https://youtube.com/shorts/Zxg9gpuCouw",
        title: "Skater jumps (middel)"
    }, {
        url: "https://youtube.com/shorts/pkkxwfoclfs",
        title: "Kneeling hurdle jump (middel, hoog)"
    }, {
        url: "https://youtu.be/hL1-VL0bmuo",
        title: "Continuous broad jump (hoog)"
    }, {
        url: "https://youtu.be/vmZfx0PX2Gk",
        title: "One leg continuous broad jump (hoog)"
    }, {
        url: "https://youtube.com/shorts/uRaJwjqrrcw",
        title: "Single leg RD jump (middel)"
    }, {
        url: "https://youtube.com/shorts/wTDzTLJfAIc",
        title: "Small to big lateral bounds (middel, hoog)"
    }, {
        url: "https://youtu.be/cvph47tyuO4",
        title: "One leg jump (laag, middel, hoog)"
    }, {
        url: "https://youtu.be/lF3Od-BgV7Y",
        title: "Two leg jump (laag, middel, hoog)"
    }, {
        url: "https://youtu.be/b2GFyos-N0I",
        title: "Squat jump (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/bn4CWAaTX_E",
        title: "Single leg side to side hops (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/oRSXqOAnpTw",
        title: "Forward and backwords two legged jumps (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/SH33dwMe50Y",
        title: "Scissor hops (laag, middel)"
    }, {
        url: "https://youtu.be/2nx2WUcooXA",
        title: "Turning jump squats (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/42yiTBThcfY",
        title: "Seated jumps (middel)"
    }, {
        url: "https://youtube.com/shorts/b4qAxmLccnc",
        title:"Kneeling broad jump into tuck jump (hoog)"
    }, {
        url: "https://youtube.com/shorts/v25Bn632Mpo",
        title: "Lateral double leg hops (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/clYr2Ae2aEY",
        title: "Box drill (laag, middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/JzDowgvr6-8",
        title: "Skater jumps followed by upward jump (middel, hoog)"
    }, {
        url: "https://youtube.com/shorts/sI2j--PN7fY",
        title: "Stairway weave hops (laag, middel, hoog)"
    },
]

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
                        videos.map(({ url, title }) => {
                            return (
                                <li key={url}>
                                    <ReactPlayer
                                        url={url}
                                        light={true}
                                        width={384}
                                        height={288}
                                    />
                                    <div className="mt-2 px-2 font-medium">{title}</div>
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
