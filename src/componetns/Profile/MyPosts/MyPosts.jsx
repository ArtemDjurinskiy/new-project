import React from 'react';
import s from'./MyPosts.module.css';
import Posts from './Posts/Posts';

const MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <div>New posts</div>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>
            <Posts/>

        </div>
    );
}

export default MyPosts;