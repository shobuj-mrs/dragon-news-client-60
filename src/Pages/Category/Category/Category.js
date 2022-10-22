import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummarycard/NewsSummaryCard';

const Category = () => {
    const categoryNews = useLoaderData();
    return (
        <div>
            <h2>This is a news Category has new : { categoryNews.length}</h2>
            {
                categoryNews.map (news => <NewsSummaryCard
                key={news._id}
                news={news}
                ></NewsSummaryCard>)
            }

        </div>
    );
};

export default Category;