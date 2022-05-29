
document.addEventListener('DOMContentLoaded', () => {  //Assim que a página carregar, o updatePosts será chamado
    updatePosts();
})

function updatePosts() {
    fetch("http://localhost:3000/api/all").then(res => {
        return res.json()
    }).then(json => {

        let postElements = '';

        let posts = JSON.parse(json);  //Irá transoformar o elemento recebido em um objeto
        posts.forEach((post) => {
            let postElement = `<div id=${post.id} class="card mb-4">
                                    <div class="card-header">
                                        <h5 class="card-title">${post.title}</h5>

                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>

                                </div>`
            postElements += postElement;
        })

        document.getElementById("posts").innerHTML = postElements;
    })
}

function newPost() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("desc").value;

    let post = { title, description }; //o mesmo que colocar title:title

    const options = {
        method: "POST",
        headers: new Headers({ 'content-type': 'application/json'}),
        body: JSON.stringify(post)
    }

    fetch("http://localhost:3000/api/new", options).then(res => { //o endereço http é uma requisição para o backend
        updatePosts();           //Atualiza a tela depois que recebe resposta do backend
        document.getElementById("title").value = ""; //Apaga o valor do input depois que aperta para salvar
        document.getElementById("desc").value = "";
    }) 
}