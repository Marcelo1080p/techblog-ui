
export default class Posts {
    constructor(axios) {
        this.axios = axios
    }

    findAll = () => {
        return this.axios.get("/posts").then(res => res.data)
    }

    findById = (id) => {
        return this.axios.get(`/posts/${id}`).then(res => res.data)
    }

    savePost = (post) => {
        return this.axios.post("/posts", post).then(res => res.data)
    }
}