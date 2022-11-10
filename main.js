$(document).ready(function(){

    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function(){
        $('form').slideUp()

    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereçoNovaImagem = $('#endereço-imagem').val()
        const novaImagem = $('<li style="display:none"></li>');
        $(`<img src= "${endereçoNovaImagem}" />`).appendTo(novaImagem)
        $(`<div class="overlay-img-link">
            <a href="${endereçoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real</a>
        </div>`)
        .appendTo(novaImagem)

        $(novaImagem).appendTo('ul')
        $(novaImagem).fadeIn(1000)
        $('#endereço-imagem').val('')
    })

})