import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news = useLoaderData();
    const { title, rating, total_view, details, image_url,category_id } = news;

    return (
        <div>
            <h3>{news.title} </h3>

            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All News in this Category</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;