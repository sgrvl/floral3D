window.onload=function() {
	var btn1 = document.querySelector('#button1');
	var btn2 = document.querySelector('#button2');
	var btn3 = document.querySelector('#button3');
	var btn4 = document.querySelector('#button4');
	var btn5 = document.querySelector('#button5');

	var img1 = document.querySelector('#image1');
	var img2 = document.querySelector('#image2');
	var img3 = document.querySelector('#image3');
	var img4 = document.querySelector('#image4');
	var img5 = document.querySelector('#image5');

	var dot1 = document.querySelector('#dot1');
	var dot2 = document.querySelector('#dot2');
	var dot3 = document.querySelector('#dot3');
	var dot4 = document.querySelector('#dot4');
	var dot5 = document.querySelector('#dot5');

	btn1.addEventListener('click', function() {
		img1.style.display = ('block');
		img2.style.display = ('none');
		img3.style.display = ('none');
		img4.style.display = ('none');
		img5.style.display = ('none');

		btn1.style.color = ('var(--rose)');
		btn2.style.color = ('var(--noir)');
		btn3.style.color = ('var(--noir)');
		btn4.style.color = ('var(--noir)');
		btn5.style.color = ('var(--noir)');

		dot1.style.visibility = ('visible');
		dot2.style.visibility = ('hidden');
		dot3.style.visibility = ('hidden');
		dot4.style.visibility = ('hidden');
		dot5.style.visibility = ('hidden');

		document.documentElement.style.setProperty('--rose', '#e87f7c');
		document.documentElement.style.setProperty('--bleu', '#0f5868');
	});

	btn2.addEventListener('click', function() {
		img1.style.display = ('none');
		img2.style.display = ('block');
		img3.style.display = ('none');
		img4.style.display = ('none');
		img5.style.display = ('none');

		btn1.style.color = ('var(--noir)');
		btn2.style.color = ('var(--rose)');
		btn3.style.color = ('var(--noir)');
		btn4.style.color = ('var(--noir)');
		btn5.style.color = ('var(--noir)');

		dot1.style.visibility = ('hidden');
		dot2.style.visibility = ('visible');
		dot3.style.visibility = ('hidden');
		dot4.style.visibility = ('hidden');
		dot5.style.visibility = ('hidden');

		document.documentElement.style.setProperty('--rose', '#009BBA');
		document.documentElement.style.setProperty('--bleu', '#805DB7');
	});

	btn3.addEventListener('click', function() {
		img1.style.display = ('none');
		img2.style.display = ('none');
		img3.style.display = ('block');
		img4.style.display = ('none');
		img5.style.display = ('none');

		btn1.style.color = ('var(--noir)');
		btn2.style.color = ('var(--noir)');
		btn3.style.color = ('var(--rose)');
		btn4.style.color = ('var(--noir)');
		btn5.style.color = ('var(--noir)');

		dot1.style.visibility = ('hidden');
		dot2.style.visibility = ('hidden');
		dot3.style.visibility = ('visible');
		dot4.style.visibility = ('hidden');
		dot5.style.visibility = ('hidden');

		document.documentElement.style.setProperty('--rose', '#805DB7');
		document.documentElement.style.setProperty('--bleu', '#FAC55F');
	});

	btn4.addEventListener('click', function() {
		img1.style.display = ('none');
		img2.style.display = ('none');
		img3.style.display = ('none');
		img4.style.display = ('block');
		img5.style.display = ('none');

		btn1.style.color = ('var(--noir)');
		btn2.style.color = ('var(--noir)');
		btn3.style.color = ('var(--noir)');
		btn4.style.color = ('var(--rose)');
		btn5.style.color = ('var(--noir)');

		dot1.style.visibility = ('hidden');
		dot2.style.visibility = ('hidden');
		dot3.style.visibility = ('hidden');
		dot4.style.visibility = ('visible');
		dot5.style.visibility = ('hidden');

		document.documentElement.style.setProperty('--rose', '#FAC55F');
		document.documentElement.style.setProperty('--bleu', '#009CBB');
	});

	btn5.addEventListener('click', function() {
		img1.style.display = ('none');
		img2.style.display = ('none');
		img3.style.display = ('none');
		img4.style.display = ('none');
		img5.style.display = ('block');

		btn1.style.color = ('var(--noir)');
		btn2.style.color = ('var(--noir)');
		btn3.style.color = ('var(--noir)');
		btn4.style.color = ('var(--noir)');
		btn5.style.color = ('var(--rose)');

		dot1.style.visibility = ('hidden');
		dot2.style.visibility = ('hidden');
		dot3.style.visibility = ('hidden');
		dot4.style.visibility = ('hidden');
		dot5.style.visibility = ('visible');

		document.documentElement.style.setProperty('--rose', '#D479B3');
		document.documentElement.style.setProperty('--bleu', '#e87f7c');
	});

	var home = document.querySelector('#nHome');
	var work = document.querySelector('#nWork');
	var collections = document.querySelector('#nCollections');
	var contact = document.querySelector('#nContact');

	var line1 = document.querySelector('#line1');
	var line2 = document.querySelector('#line2');
	var line3 = document.querySelector('#line3');
	var line4 = document.querySelector('#line4');

	home.addEventListener('click' , function(){
		home.style.color = ('var(--rose)');
		work.style.color = ('var(--noir)');
		collections.style.color = ('var(--noir)');
		contact.style.color = ('var(--noir)');

		line1.style.visibility = ('visible');
		line2.style.visibility = ('hidden');
		line3.style.visibility = ('hidden');
		line4.style.visibility = ('hidden');
	});

	work.addEventListener('click' , function(){
		home.style.color = ('var(--noir)');
		work.style.color = ('var(--rose)');
		collections.style.color = ('var(--noir)');
		contact.style.color = ('var(--noir)');

		line1.style.visibility = ('hidden');
		line2.style.visibility = ('visible');
		line3.style.visibility = ('hidden');
		line4.style.visibility = ('hidden');
	});

	collections.addEventListener('click' , function(){
		home.style.color = ('var(--noir)');
		work.style.color = ('var(--noir)');
		collections.style.color = ('var(--rose)');
		contact.style.color = ('var(--noir)');

		line1.style.visibility = ('hidden');
		line2.style.visibility = ('hidden');
		line3.style.visibility = ('visible');
		line4.style.visibility = ('hidden');
	});

	contact.addEventListener('click' , function(){
		home.style.color = ('var(--noir)');
		work.style.color = ('var(--noir)');
		collections.style.color = ('var(--noir)');
		contact.style.color = ('var(--rose)');

		line1.style.visibility = ('hidden');
		line2.style.visibility = ('hidden');
		line3.style.visibility = ('hidden');
		line4.style.visibility = ('visible');
	});
}
	