
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://comdema.wederson.net.br/">
            <nav class="titulo"><span id="hie1">Palpiteiros</span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="http://comdema.wederson.net.br/"><li>Resultados</li></a>
                <a href="http://comdema.wederson.net.br/stand/"><li>Classificação</li></a></a>
                <a href="http://comdema.wederson.net.br/aposta/"><li>Aposta</li></a></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()