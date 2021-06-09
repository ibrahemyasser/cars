const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
var count = 0;

//Show input error message
function ShowError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "input-box-error";
  const small = formControl.querySelector("small");
	small.innerText = message;
	count++;
}

//Show input success
function ShowSuccess(input) {
  const formControl = input.parentElement;
	formControl.className = "input-box-success";
}

function CheckRequired(inputErr) {
  inputErr.forEach(function (input) {
	if (input.value.trim() === "") {
	  ShowError(input, `${getFieldName(input)} is required`);
	} else {
	  ShowSuccess(input);
	}
  });
}

function CheckPassword(input) {
  if (password.value.length !== 8) {
	ShowError(input, `${getFieldName(input)} must be 8 characters`);
  }
  if (/[a-zA-Z]/.test(password.value.substring(0, 1)) != true) {
	ShowError(input, `${getFieldName(input)}  must start letter`);
  }
  if (
	password.value.substring(0, 1) !==
	password.value.substring(0, 1).toUpperCase()
  ) {
	ShowError(
	  input,
	  `${getFieldName(input)}  must start with Upper case letter`
	);
  }
  if (/\d/.test(password.value) != true) {
	ShowError(
	  input,
	  `${getFieldName(input)}  must include at least one number`
	);
  }
  if (
	/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password.value) !=
	true
  ) {
	ShowError(
	  input,
	  `${getFieldName(
		input
	  )}  must include at least one special charactar`
	);
  }
  if (/\s/.test(password.value) == true) {
	ShowError(input, `${getFieldName(input)}  can not contain spaces`);
  }
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

form.addEventListener('submit', (e) => {
count = 0;
  CheckRequired([password]);
  CheckPassword(password);
  	if (count !== 0) {
		e.preventDefault();
	}
});
