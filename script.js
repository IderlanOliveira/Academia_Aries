function redirecionarParaWhatsapp(){

    let userAgent = navigator.userAgent || navigator.vendor || window.open
    let telefone = this.getAttribute("data-phone");
    let mensagem = encodeURIComponent(this.getAttribute("data-mensagem"));

    if(/android|iPad|iPhone|iPod/.test(userAgent.toLowerCase())){
        window.location.href = "whatsapp://send?phone=5582994181633" + telefone
    } else {
        window.open("https://wa.me/5582994181633?text=Ol%C3%A1%2C+quero+este+plano%21" + telefone + "&text=" + mensagem)
    }

}

let buttons = document.querySelectorAll(".btn-whatsapp");

buttons.forEach(function(button){
    button.addEventListener("click", redirecionarParaWhatsapp);
})

document.querySelectorAll(".scrollButton").forEach(function(button) {
    button.addEventListener("click", function() {
        var scrollToPosition = parseInt(this.getAttribute("data-scrollToPosition")); // Obtém a posição de rolagem a partir do atributo de dados
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth" // Rola suavemente
        });
    });
});