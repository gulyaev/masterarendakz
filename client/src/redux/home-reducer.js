let initialState = {
    postsData: [
        { id: 1, message: 'Подбор персонала в сферах бьюти, медицины и менеджмента', likesCount: 18 },
        { id: 2, message: 'It is my first post', likesCount: 35 },
        { id: 3, message: 'Where are you from?', likesCount: 35 },
        { id: 4, message: 'Наша миссия:ускорить каръерный рост мастеров за счет подсвечивания топов индустрии ускорить рост бизнеса за счет подсвечивания топов мастеров повысить эффективность за счет расположения конкурентное преимущество за счет скорости доставки самой передовой информации', likesCount: 35 }
    ]
};

const homeReducer = (state=initialState, action) => {
    return state
}

export default homeReducer;