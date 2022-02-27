document.addEventListener('DOMContentLoaded', function () {

  // inputmask
  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]');
  const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
//картинка
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', (e) => {
	let files = e.currentTarget.files;
	console.log(files);

	if (files.length) {
		fileInput.closest('label').querySelector('span').textContent = files[0].name;
	} else {
		fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
	}

});
//конец картинка

//Телефон
new window.JustValidate('.form', {
  rules: {
    tel: {
      required: true,
      function: () => {
        const phone = telSelector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10;
      }
    }
  },
  colorWrong: '#ff0f0f',
  messages: {
    text: {
      required: 'Введите имя',
      minLength: 'Введите 3 и более символов',
      maxLength: 'Запрещено вводить более 15 символов'
    },
    email: {
      email: 'Введите корректный email',
      required: 'Введите email'
    },
    tel: {
      required: 'Введите телефон',
      function: 'Здесь должно быть 10 символов без +7'
    },
    // text: {
    //   required: 'Введите Instagram',
    //   minLength: 'Введите 15 и более символов',
    //   maxLength: 'Запрещено вводить более 25 символов'
    // }
  },
  submitHandler: function(thisForm) {
    let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено');
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    thisForm.reset();
  }
})
      //картинка
			fileInput.closest('label').querySelector('span').textContent = 'Прикрепить файл';
		
	});




