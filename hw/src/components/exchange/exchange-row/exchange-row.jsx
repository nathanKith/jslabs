import React from 'react';
import './exchange-row.css'

export const ExchangeRow = ({ exchangeKey, exchangeValue }) => {
    return (
        <tr>
            <td className="Exchange">
                {
                    exchangeKey != 'RUB' 
                    ?
                        `${exchangeKey} => ${exchangeValue.toFixed(10)}`
                    :   ``
                }
            </td>
        </tr>
    );
}
