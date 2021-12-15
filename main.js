const animado = document.querySelectorAll(".animado");
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animado[i].style.opacity = 1;
                }
            }
        }
window.addEventListener('scroll', mostrarScroll );



const button = document.querySelector(".button");
const email = document.getElementById("email");
button.addEventListener("click", registrar);
function registrar(){
    alert("Gracias por registrarte");
    button.removeEventListener("click", registrar);
    button.innerHTML = "Te has suscripto con éxito! :)";
    email.remove();

    };




const getRemainTime = deadline => {
    let now = new Date(),
    remainTime = (new Date(deadline) - now + 1000) / 1000,
    remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
    remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
    remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
    remainDays = Math.floor(remainTime / (3600 * 24));

return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
    }
};

const countdown = (deadline, elem) => {
    const el = document.getElementById(elem);
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `Faltan ${t.remainDays} días, ${t.remainHours} horas, ${t.remainMinutes} minutos, ${t.remainSeconds} segundos`;
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            
        }
    }, 1000)
};

countdown ('Mar 13 2022 10:00:00 GMT-0300', 'clock1');
countdown ('Jun 10 2022 10:00:00 GMT-0300', 'clock2');
countdown ('Aug 20 2022 10:00:00 GMT-0300', 'clock3');

