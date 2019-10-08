// alert("Dit is mijn eerste typescript project!");
function show_winner() {
    let p_tag;
    let a_tag;
    let h5_tag;
    let img_tag;
    p_tag = document.querySelector("#p_01");
    img_tag = document.querySelector("#img_01");
    a_tag = document.querySelector("#a_01");
    h5_tag = document.querySelector("#h5_01");
    if (a_tag.innerHTML == "Show Winner") {
        a_tag.innerHTML = "Back";
        p_tag.innerHTML = "The winner is Khabib!!";
        h5_tag.innerHTML = "Khabib Nurmagomedov";
        img_tag.setAttribute("src", "./img/Khabib winner.jpg");
    }
    else {
        a_tag.innerHTML = "Show Winner";
        p_tag.innerHTML = "Fight of the year, This saturday october 6.";
        h5_tag.innerHTML = "Conor VS Khabib";
        img_tag.setAttribute("src", "./img/khabib_vs_conor.jpg");
    }
}
function show_winner_01() {
    let p_tag;
    let a_tag;
    let h5_tag;
    let img_tag;
    p_tag = document.querySelector("#p_02");
    img_tag = document.querySelector("#img_02");
    a_tag = document.querySelector("#a_02");
    h5_tag = document.querySelector("#h5_02");
    if (a_tag.innerHTML == "Show Winner") {
        a_tag.innerHTML = "Back";
        p_tag.innerHTML = "The winner is Tony Ferguson!!";
        h5_tag.innerHTML = "Tony Ferguson";
        img_tag.setAttribute("src", "./img/Tony Winner.jpg");
    }
    else {
        a_tag.innerHTML = "Show Winner";
        p_tag.innerHTML = "The fight of the night!";
        h5_tag.innerHTML = "Tony VS Anthony";
        img_tag.setAttribute("src", "./img/ferguson_vs_pettis.png");
    }
}
function show_winner_02() {
    let p_tag;
    let a_tag;
    let h5_tag;
    let img_tag;
    p_tag = document.querySelector("#p_03");
    img_tag = document.querySelector("#img_03");
    a_tag = document.querySelector("#a_03");
    h5_tag = document.querySelector("#h5_03");
    if (a_tag.innerHTML == "Show Winner") {
        a_tag.innerHTML = "Back";
        p_tag.innerHTML = "The winner is Derrick Lewis!!";
        h5_tag.innerHTML = "Derrick Lewis!!";
        img_tag.setAttribute("src", "./img/Lewis Winner.jpg");
    }
    else {
        a_tag.innerHTML = "Show Winner";
        p_tag.innerHTML = "Performance of tonight!";
        h5_tag.innerHTML = "Lewis VS Volkov";
        img_tag.setAttribute("src", "./img/lewis_vs_volkov.png");
    }
}
