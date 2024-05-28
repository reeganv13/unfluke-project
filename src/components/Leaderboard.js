
import React from 'react';
import LeaderboardItem from './LeaderboardItem';
import './Leaderboard.css';

const Leaderboard = ({ data }) => {
    return (
        <div>
        <div>
            <h1 className='heading'>LeaderBoards</h1>
        </div>
        <div className="leaderboard">
            <h2>Basic Backtest</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Calmar Ratio</th>
                        <th>Overall Profit</th>
                        <th>Avg. Daily Profit</th>
                        <th>Win % (Day)</th>
                        <th>Price (Rs)</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <LeaderboardItem key={index} rank={index + 1} item={item} />
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default Leaderboard;
