var listaNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
fetch(listaNoticias)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
        for (let i = 0; i < 3; i++) {
            body += `<h3> <a id="mostrarnoti" href="#"> ${data[i].titulo+" - "+data[i].categoria+" - "+data[i].fecha} </a> </h3>
            <p>${data[i].descripcion+" "}   <a id="mostrarnoti" href="#"> ver mas </a> </p>`
        }
        document.getElementById('l-noticias').innerHTML = body
    })
     document.getElementById("btn-mostrar").onclick = function () {

        var listaNoticias = 'https://carlosreneas.github.io/endpoints/noticias.json';
        fetch(listaNoticias)
            .then(response => response.json())
            .then(data => {
                console.log(data);

                let body = ""
                for (let i = 0; i < data.length; i++) {
                    body += `<h3> <a id="mostrarnoti" href="#"> ${data[i].titulo+" - "+data[i].categoria+" - "+data[i].fecha} </a> </h3>
                    <p>${data[i].descripcion+" "}   <a id="mostrarnoti" href="#"> ver mas </a> </p>`
                }
                document.getElementById('l-noticias').innerHTML = body
            })
 }
 var noticiasDeporte = "https://carlosreneas.github.io/endpoints/categoria_deporte.json";
fetch(noticiasDeporte)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
        for (let i = 0; i < 3; i++) {
            body +=`<p> <a href="#"> ${data[i].titulo} </a> </p>  `
        }
        document.getElementById('notdeportes').innerHTML = body
    })

    var noticiasTecnologia = "https://carlosreneas.github.io/endpoints/categoria_tecnologia.json";
fetch(noticiasTecnologia)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let body = ""
        for (let i = 0; i < 3; i++) {
            body +=`<p> <a href="#"> ${data[i].titulo} </a> </p>  `
        }
        document.getElementById('nottecnologia').innerHTML = body
    })