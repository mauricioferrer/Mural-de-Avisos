module.exports = {
    posts: [
        {
            id: "erfer",
            title: "Teste do Mural",
            description: "Descrição teste"
        }
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, description) {
        this.posts.push({ id: Math.random().toString(36).substring(2), title, description })
    },

    deletePost(id){
        
    }
}

