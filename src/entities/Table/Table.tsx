import { classNames } from '@/shared/lib/classNames/classNames.ts'
import './Table.scss'

interface TableProps {
    className?: string
}

export const Table = ({ className }: TableProps) => {
    const testResults = [
        {
            name: '',
            results: ['John', 'Tom', 'Bruce']
        },
        {
            name: 'Math',
            results: ['10', '9', '10']
        },
        {
            name: 'Programming',
            results: ['11', '9', '11']
        },
        {
            name: 'Web-design',
            results: ['12', '8', '8']
        },
        {
            name: 'Microprocessors',
            results: ['10', '9', '9']
        },
    ]

    return (
        <div className={classNames('table', {}, [className!])}>
            {testResults.map((testResult) => (
                <div
                    key={testResult.name}
                    className='table__column'
                >
                    <div
                        className='table__cell'
                    >
                        {testResult.name}
                    </div>
                    {testResult.results.map((result) => (
                        <div
                            key={testResult.name}
                            className='table__cell'
                        >
                            {result}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
