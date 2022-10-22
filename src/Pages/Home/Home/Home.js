import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummarycard/NewsSummaryCard';

const Home = () => {
    const allNews = useLoaderData()
    return (
        <div>
            <h1>Dragon News : {allNews.length} </h1>
            {
                allNews.map(news => <NewsSummaryCard
                    key={news._id}
                    news={news}
                ></NewsSummaryCard>)
            }
        </div>
    );
};

export default Home;