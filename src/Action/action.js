let key = 1

export const addUser = (payload) => {
    return {
        type: "ADD_USER_FORM",
        payload: { ...payload, key: key++ }
    }
}

export const handleFormChange = (formData) => ({
    type: "HANDLE_FORM_CHANGE",
    payload: formData,
});


const loadJokeData = (payload) => ({
    type: "LOAD_JOKE_DATA",
    payload,
});




export const loadJoke = () => {

    return (dispatch) => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then((joke) => {

                dispatch(loadJokeData({joke:joke.value, status:true}));
                
            })
            .catch((e) => console.log(e));
    };
};
