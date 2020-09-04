document.getElementById('tl').addEventListener('change', function () {
    if (this.value != "") {
        const titulo = document.getElementById('tl').value
        const key = "AIzaSyDkRQE007pCkimoASj9FnwM0DSSGn2LBWQ"
        const xhr = new XMLHttpRequest
        const livros = document.getElementById('livros')
        livros.innerHTML = "<div class='cdgif'><img id='gif' src='https://media4.giphy.com/media/3oriOiizS4Pmofj46A/200w.webp?cid=ecf05e47kabcem70ykqyug5aisylvsgp5kh6vu2fo642o0w9&rid=200w.webp'></div>"
        xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=intitle:${titulo}&key=${key}`)


        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const objeto = JSON.parse(this.responseText)
                console.log(objeto)
                livros.innerHTML = ""
                for (var i = 0; i < objeto.items.length; i++) {
                    var date = objeto.items[i].volumeInfo.publishedDate
                    var titulo = objeto.items[i].volumeInfo.title
                    var autor = objeto.items[i].volumeInfo.authors
                    var editora = objeto.items[i].volumeInfo.publisher
                    var link = objeto.items[i].volumeInfo.infoLink

                    if (date === undefined) {
                        date = '';
                    }
                    if (autor === undefined) {
                        autor = '';
                    }
                    if (editora === undefined) {
                        editora = '';
                    }
                    livros.innerHTML += "<div class='cdlivros'>" + '<table><tr>' + titulo + '</tr><tbody><tr><td>' + autor + '</td></tr>' + '<tr><td>' + editora + '</td></tr><tr><td>' + date + `</td></tr><tr><td><a href="${link}">Saiba mais <img src='${icon}' alt=''></a></td></tr></tbody></table></div>`
                }
            }
        }
        xhr.send()

    }

})
document.getElementById('na').addEventListener('change', function () {
    if (this.value != "") {
        const autor = document.getElementById('na').value
        const key = "AIzaSyDkRQE007pCkimoASj9FnwM0DSSGn2LBWQ"
        const xhr = new XMLHttpRequest
        const livros = document.getElementById('livros')
        xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=inauthor:${autor}&key=${key}`)


        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const objeto = JSON.parse(this.responseText)
                console.log(objeto)
                livros.innerHTML = ""
                for (var i = 0; i < objeto.items.length; i++) {
                    var date = objeto.items[i].volumeInfo.publishedDate
                    var titulo = objeto.items[i].volumeInfo.title
                    var autor = objeto.items[i].volumeInfo.authors
                    var editora = objeto.items[i].volumeInfo.publisher
                    var link = objeto.items[i].volumeInfo.infoLink

                    if (date === undefined) {
                        date = '';
                    }
                    if (autor === undefined) {
                        autor = '';
                    }
                    if (editora === undefined) {
                        editora = '';
                    }
                    livros.innerHTML += "<div class='cdlivros'>" + '<table><tr>' + titulo + '</tr><tbody><tr><td>' + autor + '</td></tr>' + '<tr><td>' + editora + '</td></tr><tr><td>' + date + `</td></tr><tr><td><a href="${link}">Saiba mais <img src='${icon}' alt=''></a></td></tr></tbody></table></div>`
                }
            }
        }
        xhr.send()
    }

})

var icon = "https://image.flaticon.com/icons/svg/2232/2232688.svg"
