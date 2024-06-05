$(".dark_btn").click(function(){
    colored()
});
$("#search").click(function(){
    Search()
});
$("#search").change(function(){
    Search()
});
function colored(){
    $(".dark_btn").toggleClass('back_light');
    $("a").toggleClass("link_recolor");
    $("h5").toggleClass("title_recolor");
    $("i").toggleClass("text_recolor");
    $("main").toggleClass("main_light");
    $("input").toggleClass("input_recolor");
}
function Search(){
    $("ul.nav").toggleClass("col-4");
    $("ul.nav").toggleClass("d-none");
    $("div.search").toggleClass("col-3");
    $("div.search").toggleClass("col-7");
}