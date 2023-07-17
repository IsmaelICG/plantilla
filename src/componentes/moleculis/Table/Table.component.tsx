import React from 'react'

interface columnProps {
    id: string;
    name: string;
}

interface TableProps {
    rows?: any[];
    columns?: columnProps[];
}

export const Table: React.FC<TableProps> = ({ rows = [], columns = [] }) => {

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px"
            }}
        >
            <table
                style={{
                    border: "2px solid #000",
                    borderCollapse: "collapse",
                    width: "100%",
                    borderRadius: "8px",
                    boxShadow: "0 0 0 2px #000",
                    borderStyle: "hidden",
                    padding: "8px"
                }}
            >
                <thead>
                    <tr>
                        {columns.map((item) => (
                            <th style={{ border: "1px solid #000" }} key={item.id}>
                                {item.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr style={{ border: "1px solid #000" }} key={index}>
                            {columns.map((column) => (
                                <td style={{ border: "1px solid #000" }}>{row[column.id]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};