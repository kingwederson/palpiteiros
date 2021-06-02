function rodapi(){
    var rodape = window.document.getElementById('rodape')
    var htmlrodape = `
    <nav class="main" id="rodapeinfo">
        <p class="lista">wederson.net.br, 2021.</p>
    </nav>
    `;
   rodape.innerHTML = htmlrodape
}
rodapi()