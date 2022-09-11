$(function(){
    var tam = $(window).width();

    if(tam <= 780){
    $('.menu-btn').click(function(){
        $('.aside').slideToggle(200)

    })
}else{
    $('.menu-btn').click(function(){
        alert('Função desabilitada pelo tamanho da tela');

    })
    var tam = $(window).width();
};
if(tam <= 1000){
    $('.notify').click(function(){
        $('.att').slideToggle()

    })
}else{
    $('.notify').click(function(){
        alert('Função desabilitada pelo tamanho da tela');

    })
};

$(window).resize(function(){
    var tam = $(window).width();
})



})