import { classNames } from "@/helpers";

const labels = {
    low: 'LAAG',
    middle: 'MIDDEL',
    high: 'HOOG',
};
const headerColors = {
    1: 'bg-blue-500',
    2: 'bg-blue-500',
    3: 'bg-yellow-500',
    4: 'bg-yellow-500',
    5: 'bg-green-500',
    6: 'bg-green-500',
}

const Table = ({ data: { data, week, acuteLoad, chronicLoad, acRatio } }) => {

    return (
        <div className={classNames("-mx-6 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg", headerColors[week])}>
            <div className="mt-8 flow-root">
                <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table className="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3.5 pl-6 pr-4 text-left text-sm font-semibold text-gray-900 text-center">

                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 text-center">
                                        REEKSEN
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 text-center">
                                        REP
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900 text-center">
                                        TOTAAL
                                    </th>
                                    <th scope="col" className="py-3.5 pl-4 pr-6 text-left text-sm font-semibold text-gray-900 sm:pr-0 text-center">
                                        LOAD
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data ? Object.keys(data).map((key) => (
                                    <tr key={key} className="divide-x divide-gray-200">
                                        <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 text-center">
                                            {labels[key]}
                                        </td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-600 text-center">{data[key].series}</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-600 text-center">{data[key].rep}</td>
                                        <td className="whitespace-nowrap p-4 text-sm text-gray-600 text-center">{data[key].total}</td>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-6 text-sm text-gray-600 sm:pr-0 text-center">{data[key].load}</td>
                                    </tr>
                                )) : null}
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className="whitespace-nowrap py-4 pl-6 pr-4 text-sm font-medium text-gray-900 text-center">
                                        ACUTE LOAD
                                    </td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-6 text-sm text-gray-600 sm:pr-0 text-center">{acuteLoad}</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className="whitespace-nowrap py-4 pl-6 pr-4 text-sm font-medium text-gray-900 text-center">
                                        CHRONISCHE LOAD
                                    </td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-6 text-sm text-gray-600 sm:pr-0 text-center">{chronicLoad ? chronicLoad : '/'}</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className="whitespace-nowrap py-4 pl-6 pr-4 text-sm font-medium text-gray-900 text-center">
                                        A/C RATIO
                                    </td>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-6 text-sm text-gray-600 sm:pr-0 text-center">{acRatio ? acRatio : '/'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table;
