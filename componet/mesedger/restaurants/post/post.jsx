import React from 'react';
import s from "./post.module.css";

const Post = (props) => {

    return (
      <div className={s.item}>
        <img src='https://sun9-55.userapi.com/impg/MBODgbKTIB1qh_f9MqX7RiVF3xxfQbKulzYMKg/w7EIi_JmWHo.jpg?size=600x600&quality=96&sign=606a259f17c8df79344b40151864eac1&type=album' />
          { props.dialog }
            <div>
          <span>like</span> { props.likecount }
        </div>
      </div>
    )
  }
  
  export default Post;