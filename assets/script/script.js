var languages = ["webpage/gacek.html","webpage/beniek.html","webpage/drobny.html","webpage/ernest.html","webpage/faraon.html","webpage/filmun.html","webpage/karakan.html","webpage/ksawery.html",
"webpage/lechu.html","webpage/noname.html","webpage/ocet.html","webpage/prezes.html","webpage/tomasz.html","webpage/maciek.html","webpage/illia.html"];
var output = languages[Math.floor(Math.random() * 15)];
document.getElementById('button').onclick = function (){
    button.style.display = 'none';
    let field1 = document.getElementById('field');
    let out = '';
        out += `<a class="btn" role="alert" href="${output}">Lets go</a>`
        field1.innerHTML = out;
}

