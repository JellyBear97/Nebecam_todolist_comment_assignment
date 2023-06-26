import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'react-uuid';

// input : comment id, comment body
// url에서 게시물 번호가져와서 submit에 담아 보낼까?

function Reviews({ todoId }) {
  const [commentName, setCommentName] = useState('');
  const [commentBody, setCommentBody] = useState('');

  const dispatch = useDispatch();
  const onCommentSubmit = (event, todoId) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_COMMENT',
      payload: { commentId: uuid(), todoId, commentName, commentBody },
    });
  };
  const onCommentNameChange = event => {
    setCommentName(event.target.value);
  };
  const onCommentBodyChange = event => {
    setCommentBody(event.target.value);
  };

  const reviews = useSelector(state => {
    console.log(state);
    return state.reviews;
  });
  return (
    <>
      <form onSubmit={event => onCommentSubmit(event, todoId)}>
        <input type="text" value={commentName} onChange={onCommentNameChange} placeholder="닉네임을 입력하세염" />
        <input type="text" value={commentBody} onChange={onCommentBodyChange} placeholder="댓글 내용을 입력하세욤" />
        <button>댓글 등록</button>
      </form>
      <div>
        <ul>
          {reviews
            .filter(review => {
              return review.todoId === todoId;
            })
            .map(review => {
              return (
                <li>
                  <p>userName임 : {review.commentName}</p>
                  <p>userComment임 : {review.commentBody}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
}

export default Reviews;
