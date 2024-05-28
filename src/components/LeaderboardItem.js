import React from 'react';

const LeaderboardItem = ({ rank, item }) => {
    return (
        <tr>
            <td>{rank}</td>
            <td>{item.name}</td>
            <td>{item.calmarRatio}</td>
            <td>{item.overallProfit}</td>
            <td>{item.avgDailyProfit}</td>
            <td>{item.winPercentage}</td>
            <td>{item.price ? item.price : '-'}</td>
            <td>
                {item.price ? (
                    <button onClick={() => alert('Buy clicked!')}>Buy</button>
                ) : (
                    <button onClick={() => alert('View clicked!')}>View</button>
                )}
            </td>
        </tr>
    );
};

export default LeaderboardItem;
