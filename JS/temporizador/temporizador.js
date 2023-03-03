const getRemainTime = deadline =>{

	let now = new Date(),

		remainTime 	  = (new Date(deadline) - now + 1000) / 1000,
		remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),	
		remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),	
		remainHours   = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),	
		remainDays    = Math.floor(remainTime / (3600 * 24));

	return {

		remainTime,
		remainSeconds,
		remainMinutes,
		remainHours,
		remainDays
	}	
};

const cuentaRegresiva = (deadline, tiempo, final) => {

	const restante = document.getElementById(tiempo);

const actualizacion = setInterval( () => {

	let t = getRemainTime(deadline);

	restante.innerHTML =`D: ${t.remainDays} H: ${t.remainHours} M: ${t.remainMinutes} S: ${t.remainSeconds}`;


	}, 1000) 
};

cuentaRegresiva('March 24 2023 23:59:59 GMT-0600', 'tiempo');
