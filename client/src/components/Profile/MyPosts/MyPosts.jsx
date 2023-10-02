import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Подбор персонала в сферах бьюти, медицины и менеджмента', likesCount: 18 },
        { id: 2, message: 'It is my first post', likesCount: 35 },
        { id: 3, message: 'Where are you from?', likesCount: 35 }
    ];

    let PostsElements = postsData.map(postItem => <Post message={postItem.message} likesCount={postItem.likesCount} />)

    return (
        <div>
            <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
            <Post message={postsData[1].message} likesCount={postsData[1].likesCount} />
            <Post message="Наша миссия:
            ускорить каръерный рост мастеров за счет подсвечивания топов индустрии
            ускорить рост бизнеса за счет подсвечивания топов мастеров
            повысить эффективность за счет расположения
            конкурентное преимущество за счет скорости доставки самой передовой информации"/>

            {PostsElements}
        </div>
    )
}

export default MyPosts;