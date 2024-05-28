// src/components/LikeCounter.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { like, unlike } from './actions';

const LikeCounter = () => {
    const likeCount = useSelector(state => state.likeCount);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Likes: {likeCount}</h1>
            <button onClick={() => dispatch(like())}>Like</button>
            <button onClick={() => dispatch(unlike())}>Unlike</button>
        </div>
    );
};

export default LikeCounter;
