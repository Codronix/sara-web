$("#modal-section").load("modals.html");

$("#btnAbout").on("click", function(){
    let modal_about = new bootstrap.Modal(document.getElementById("modalAbout"));
    modal_about.show();
});