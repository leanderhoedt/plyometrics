import YoutubeEmbed from '@/components/YoutubeEmbed';
import Head from 'next/head';

const videos = [
    {
        embedId: "NQvZv3WKwaw",
        title: "5 Essential Plyometric Exercises for Footballers"
    }, {
        embedId: "x84r0G2gYII",
        title: "10 MIN PLYOMETRIC HIIT WORKOUT - Speed / Vertical Jump Workout"
    }, {
        embedId: "mgolPSBgsMk",
        title: "Plyometric Training Progression | Go From Beginner to Advanced"
    }, {
        embedId: "4VodW4pW0Ic",
        title: "Plyometric Training Explained"
    }, {
        embedId: "ClRrFfog6So",
        title: "Loopscholing - Reactie, grondvormen van bewegen, wendbaarheid en spiegelen"
    }, {
        embedId: "_YudFDcW_Iw",
        title: "How to Progress Plyometrics | 5 Levels From Beginner to Advanced"
    }, {
        embedId: "PKvo7ehkUdk",
        title: "Best Plyometric Drills for Explosive Power"
    }
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
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        videos.map(({ embedId }) => {
                            return (
                                <li className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                                    <YoutubeEmbed
                                        embedId={embedId}
                                    />
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
