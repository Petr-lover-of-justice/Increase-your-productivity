import React from 'react';
import Post from './post/post';
import s from "./restaurants.module.css"
import RestaurantsTitle from './restaurantsTitle/restaurantsTitle';




const Restaurants = (props) => {

    let postElement = props.pagePosts.posts.map(p => <Post dialog={p.dialog} likecount={p.likecount} />)

    let newElement = React.createRef();

    let addPost = () => {
        props.addPost();
        // newElement.current.value = "";
    };

    let onPostChange = () => {
        let text = newElement.current.value;
        props.updateNewPostText(text);
    }

    // props.newPostText
    return (
        <div className={s.foot}>
            <RestaurantsTitle />
            <textarea onChange={onPostChange}
                ref={newElement}
                value={props.newPostText} cols="20" rows="3"></textarea>

            <div><button onClick={addPost}>add post</button></div>
            {postElement}
        </div>
    )
}
export default Restaurants;