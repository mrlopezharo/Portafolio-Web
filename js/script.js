const nav = document.getElementById('navbar');
const darkmode = document.querySelector("#darkmode");
const container = document.querySelector(".darkmode__container");
const icon = document.querySelector(".darkmode__container i");
const overlay = document.getElementById('nav__overlay');
const darkmodeStatus = document.getElementById('darkmode_overlay');

const webBtn = document.getElementById('web');
const reactBtn = document.getElementById('react');
const androidBtn = document.getElementById('android');
const cssBtn = document.getElementById('css');
const nodeBtn = document.getElementById('node');
const pythonBtn = document.getElementById('python');
const phpBtn = document.getElementById('php');
const netBtn = document.getElementById('net');

const web = document.getElementById('spanWeb');
const react = document.getElementById('spanReact');
const android = document.getElementById('spanAndroid');
const css = document.getElementById('spanCSS');
const node = document.getElementById('spanNode');
const python = document.getElementById('spanPython');
const php = document.getElementById('spanPHP');
const net = document.getElementById('spanNet');

let day = false;

window.onscroll = function (e) {  
	if (window.scrollY >= 80) {
		nav.classList.add('active');
		document.getElementById('navbar-logo').style.display = 'flex';
	}else{
		nav.classList.remove('active');
		document.getElementById('navbar-logo').style.display = 'none';
	}
}

darkmode.addEventListener("click", function () {
	container.classList.toggle("move");
	icon.classList.toggle("fa-sun");
	icon.classList.toggle("fa-moon");

	document.body.classList.toggle("dark-mode");

	if(day === false){
		darkmodeON();
	}else{
		darkmodeOFF();
	}
});

link6.addEventListener("click", function () {
	container.classList.toggle("move");
	icon.classList.toggle("fa-sun");
	icon.classList.toggle("fa-moon");

	document.body.classList.toggle("dark-mode");
	overlay.classList.remove('active');

	if(day === false){
		darkmodeON();
	}else{
		darkmodeOFF();
	}
});

nav__btn.addEventListener('click', (evento) =>{
	overlay.classList.add('active');
});

nav__cerrar.addEventListener('click', (evento) =>{
	overlay.classList.remove('active');
});

overlay__container.addEventListener('click', (evento) =>{
	overlay.classList.remove('active');
});

document.onkeydown = checkKey;
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '27') {
		overlay.classList.remove('active');
    }
}



addEventListener("load",function(){
    var links = document.getElementsByClassName("projects__a-container");
    for (var i = 0;i < links.length;i++){
        links[i].addEventListener("click",function(e){
        e.preventDefault();
        })
    }
}); 






webBtn.addEventListener('click', (e) =>{

	blockAll();
	web.classList.add('activo');
	document.getElementById('web1').style.display = 'flex';
	document.getElementById('web2').style.display = 'flex';
	document.getElementById('web3').style.display = 'flex';

});


reactBtn.addEventListener('click', (e) =>{

	blockAll();
	react.classList.add('activo');
	document.getElementById('react1').style.display = 'flex';
	document.getElementById('react2').style.display = 'flex';
	document.getElementById('react3').style.display = 'flex';

});

androidBtn.addEventListener('click', (e) =>{

	blockAll();
	android.classList.add('activo');
	document.getElementById('android1').style.display = 'flex';
	document.getElementById('android2').style.display = 'flex';
	document.getElementById('android3').style.display = 'flex';

});


cssBtn.addEventListener('click', (e) =>{

	blockAll();
	css.classList.add('activo');
	document.getElementById('css1').style.display = 'flex';

});

nodeBtn.addEventListener('click', (e) =>{

	blockAll();
	node.classList.add('activo');
	document.getElementById('node1').style.display = 'flex';
	document.getElementById('node2').style.display = 'flex';

});

pythonBtn.addEventListener('click', (e) =>{

	blockAll();
	python.classList.add('activo');
	document.getElementById('python1').style.display = 'flex';
	document.getElementById('python2').style.display = 'flex';

});

phpBtn.addEventListener('click', (e) =>{

	blockAll();
	php.classList.add('activo');
	document.getElementById('php1').style.display = 'flex';

});

netBtn.addEventListener('click', (e) =>{

	blockAll();
	net.classList.add('activo');
	document.getElementById('net1').style.display = 'flex';

});


function blockAll() {
	web.classList.remove('activo')
	react.classList.remove('activo');
	android.classList.remove('activo');
	css.classList.remove('activo');
	node.classList.remove('activo');
	python.classList.remove('activo');
	php.classList.remove('activo');
	net.classList.remove('activo');

	document.getElementById('react1').style.display = 'none';
	document.getElementById('react2').style.display = 'none';
	document.getElementById('react3').style.display = 'none';
	document.getElementById('web1').style.display = 'none';
	document.getElementById('web2').style.display = 'none';
	document.getElementById('web3').style.display = 'none';
	document.getElementById('android1').style.display = 'none';
	document.getElementById('android2').style.display = 'none';
	document.getElementById('android3').style.display = 'none';
	document.getElementById('css1').style.display = 'none';
	document.getElementById('node1').style.display = 'none';
	document.getElementById('node2').style.display = 'none';
	document.getElementById('python1').style.display = 'none';
	document.getElementById('python2').style.display = 'none';
	document.getElementById('php1').style.display = 'none';
	document.getElementById('net1').style.display = 'none';
}

function darkmodeON() {
	document.getElementById("darkmode_overlay").innerHTML = "On";
	darkmodeStatus.classList.add('on');
	day = true;
	document.getElementById("navbar-logo").src="../img/firmaWhite.png";
	document.getElementById("footer__logo-img").src="../img/firmaWhite.png";
	document.getElementById("nodeSpan1").style.color = "#026e00";
	document.getElementById("nodeSpan2").style.color = "#026e00";
}

function darkmodeOFF() {
	document.getElementById("darkmode_overlay").innerHTML = "Off";
	darkmodeStatus.classList.remove('on');
	day = false;
	document.getElementById("navbar-logo").src="../img/firmaBlack.png";
	document.getElementById("footer__logo-img").src="../img/firmaBlack.png";
	document.getElementById("nodeSpan1").style.color = "#000000";
	document.getElementById("nodeSpan2").style.color = "#000000";
}