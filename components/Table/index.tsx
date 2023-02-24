import { classNames } from "@/helpers";

interface TableProps {
    data: {
        data: Record<string, { series: number, rep: number, total: number, load: number }>,
        week: number,
        acuteLoad: number,
        chronicLoad: number | null,
        acRatio: number | null,
    }
    size: string,
}

const labels: Record<string, string> = {
    low: 'LAAG',
    middle: 'MIDDEL',
    high: 'HOOG',
};

const headerColors: Record<number, string> = {
    1: 'bg-blue-500',
    2: 'bg-blue-500',
    3: 'bg-yellow-500',
    4: 'bg-yellow-500',
    5: 'bg-green-500',
    6: 'bg-green-500',
};

const headerPadding: Record<string, string> = {
    lg: 'px-4 py-3.5',
    sm: 'px-2 py-1.5',
};

const headerStartPadding: Record<string, string> = {
    lg: 'py-3.5 pl-6 pr-4',
    sm: 'py-1.5 pl-3 pr-2',
};

const headerEndPadding: Record<string, string> = {
    lg: 'py-3.5 pl-4 pr-6',
    sm: 'py-1.5 pl-2 pr-3',
};

const rowPadding: Record<string, string> = {
    lg: 'p-4',
    sm: 'p-2',
};

const rowStartPadding: Record<string, string> = {
    lg: 'py-4 pl-6 pr-4',
    sm: 'py-2 pl-3 pr-2',
};
const rowEndPadding: Record<string, string> = {
    lg: 'py-4 pl-4 pr-6',
    sm: 'py-2 pl-2 pr-3',
};

const Table = ({ data: { data, week, acuteLoad, chronicLoad, acRatio }, size = 'lg' }: TableProps) => {

    return (
        <div className={classNames("-mx-2 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg", headerColors[week])}>
            <div className="flow-root">
                <div className="-my-2 overflow-x-auto lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle lg:px-8">
                        <table className={`min-w-full divide-y divide-gray-300 text-sm`}>
                            <thead>
                                <tr>
                                    <th scope="col" className={`${headerStartPadding[size]} text-left font-semibold text-gray-900 text-center`}>

                                    </th>
                                    <th scope="col" className={`${headerPadding[size]} text-left font-semibold text-gray-900 text-center`}>
                                        REEKSEN
                                    </th>
                                    <th scope="col" className={`${headerPadding[size]} text-left font-semibold text-gray-900 text-center`}>
                                        REP
                                    </th>
                                    <th scope="col" className={`${headerPadding[size]} text-left font-semibold text-gray-900 text-center`}>
                                        TOTAAL
                                    </th>
                                    <th scope="col" className={`${headerEndPadding[size]} text-left font-semibold text-gray-900 text-center`}>
                                        LOAD
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                                {data ? Object.keys(data).map((key) => (
                                    <tr key={key} className="divide-x divide-gray-200">
                                        <td className={`whitespace-nowrap ${rowStartPadding[size]} font-medium text-gray-900 text-center`}>
                                            {labels[key]}
                                        </td>
                                        <td className={`whitespace-nowrap ${rowPadding[size]} text-gray-600 text-center`}>{data[key].series}</td>
                                        <td className={`whitespace-nowrap ${rowPadding[size]} text-gray-600 text-center`}>{data[key].rep}</td>
                                        <td className={`whitespace-nowrap ${rowPadding[size]} text-gray-600 text-center`}>{data[key].total}</td>
                                        <td className={`whitespace-nowrap ${rowEndPadding[size]} text-gray-600 sm:pr-0 text-center`}>{data[key].load}</td>
                                    </tr>
                                )) : null}
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className={`whitespace-nowrap ${rowStartPadding[size]} font-medium text-gray-900 text-center`}>
                                        ACUTE LOAD
                                    </td>
                                    <td className={`whitespace-nowrap ${rowEndPadding[size]} text-gray-600 sm:pr-0 text-center`}>{acuteLoad}</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className={`whitespace-nowrap ${rowStartPadding[size]} font-medium text-gray-900 text-center`}>
                                        CHRONISCHE LOAD
                                    </td>
                                    <td className={`whitespace-nowrap ${rowEndPadding[size]} text-gray-600 sm:pr-0 text-center`}>{chronicLoad ? chronicLoad : '/'}</td>
                                </tr>
                                <tr className="divide-x divide-gray-200">
                                    <td colSpan={4} className={`whitespace-nowrap ${rowStartPadding[size]} font-medium text-gray-900 text-center`}>
                                        A/C RATIO
                                    </td>
                                    <td className={`whitespace-nowrap ${rowEndPadding[size]} text-gray-600 sm:pr-0 text-center`}>{acRatio ? acRatio : '/'}</td>
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
