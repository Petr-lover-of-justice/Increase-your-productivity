
let store = {
    _rerenderEntireTree() {
        console.log("all");
    },
    _state: {

        pagePosts: {
            posts: [
                { id: 1, dialog: "i like food", likecount: 30 },
                { id: 2, dialog: "i like f2ood", likecount: 320 },
                { id: 3, dialog: "i like food21", likecount: 20 },
            ],
            newPostText: "run to eat"
        },
        dialogs: {
            userData: [
                { name: "Пётр", id: 1 },
                { name: "Настя", id: 2 },
                { name: "Вика", id: 3 },
            ],
            messageDataWord: [
                { word: "я блинчик", id: 1 },
                { word: "яНеБлинчик", id: 2 },
                { word: "ты монстр", id: 3 },]
        },
    },
    getState() {
        return this._state
    },
    addPost() {
        let newData = {
            id: 4,
            dialog: this._state.pagePosts.newPostText,
            likecount: 1,
        };
        this._state.pagePosts.posts.push(newData);
        this._state.pagePosts.newPostText = '';
        this._rerenderEntireTree(this._state);
    },
    updateNewPostText(newText) {
        this._state.pagePosts.newPostText = newText;
        this._rerenderEntireTree(this._state);
    },  
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    }

}

export default store;
window.store = store;