import Supply from '../Supply/Supply';
import './suppliesTable.css';
import { FC } from 'react';

interface SuppliesTableProps {
    headers: Array<string>,
    rowsData: Array<{
        "id": string,
        "date": string,
        "city": string,
        "quantity": number,
        "type": string,
        "warehouse": {
            "name": string,
            "address": string
        },
        "status": string
    }>;
}

const SuppliesTable: FC<SuppliesTableProps> = ({ headers, rowsData }) => {
    return (
        <table className="suppliesTable">
            <thead>
                <tr className="suppliesTable__header">
                    {headers.map((val) => (
                        <th key={val}>
                            <div>{val}</div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rowsData.map((rowData) => (
                    <Supply key={rowData.id} rowData={rowData} />
                ))}
            </tbody>
        </table>
    );
}

export default SuppliesTable;