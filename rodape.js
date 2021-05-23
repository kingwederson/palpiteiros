function rodapi(){
    var rodape = window.document.getElementById('rodape')
    var htmlrodape = `
    <nav class="main" id="rodapeinfo">
        <p class="lista"><b>Disclamer</b>: As informaçõe contidas neste site não são recomentação de investimento.</p>
        <p class="lista">wederson.net.br, 2021.</p>
    </nav>
    `;
   rodape.innerHTML = htmlrodape
}
rodapi()