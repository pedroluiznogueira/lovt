console.log('Arquivo Externo');

let infos = document.querySelectorAll('div.info');

let body = document.querySelector('body');

let button = document.querySelector('button.dark');

button.onclick = function() {
    body.classList.toggle('dark');
    
    for (info of infos) {
        info.classList.toggle('dark-section');
    }
}

// -- BOTAO DARK THEME JS HENDY --
//
// let btnToggleTheme = document.querySelector('.toggleTheme');
// // console.log(btnToggleTheme);

// // arrow function
// // btnToggleTheme.onclick = (event) => {

// // }

// // // usual function
// // btnToggleTheme.onclick = function(event) {

// //     let cafeDaManha = true;

// //     // if (cafeDaManha) {
// //     //     console.log('Tô de bom humor')
// //     // } else {
// //     //     console.log('Sem tempo, irmão')
// //     // }

// //     // if ternário : (condição) ? true : false;
// //     console.log((cafeDaManha) ? 'Tô de bom humor' : 'Sem tempo, irmão');
// // }

// let body = document.querySelector('body');
// // let iframe = document.querySelector('iframe');

// btnToggleTheme.onclick = function() {
//     // 'classList' => se a classe ta la ela retira, se não ela coloca
//     // classList => objeto que dentro tem algo a ser acessado
//     // toggle => função ou método, pois realiza uma ação
//     body.classList.toggle('dark-theme');
//     // deixa o iframe escuro tambpem
//     // esse cssText é uma propriedade
//     // iframe.style.cssText = "filter: invert(90%)";
// }