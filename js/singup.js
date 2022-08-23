const submit = document.getElementById("submit");
const fName = document.getElementById("fName");
const fnError = document.getElementById("fnError");
const lName = document.getElementById("lName");
const lnError = document.getElementById("lnError");
const email = document.getElementById("email");
const emError = document.getElementById("emError");
const confEmail = document.getElementById("confEmail");
const ceError = document.getElementById("ceError");
const password = document.getElementById("password");
const passError = document.getElementById("passError");
const check = document.getElementById('check') ;
const checkError = document.getElementById('checkError') ;


submit.onclick = function (e) {
  if (fName.value.length == 0) {
    fnError.innerHTML = "الاسم الشخصي إجباري ";
  } else {
    fnError.innerHTML = "";
  }
  if (lName.value.length == 0) {
    lnError.innerHTML = "الاسم العائلي إجباري ";
  } else {
    lnError.innerHTML = "";
  }
  if (!email.value.trim().toLowerCase().includes("@")) {
    emError.innerHTML = "أدخل بريدا إلكتونيا صالحا ";
  } else {
    emError.innerHTML = "";
  }
  if (
    confEmail.value.trim().toLowerCase() !== email.value.trim().toLowerCase()
  ) {
    ceError.innerHTML = "البريد الإلكتروني غير مطابق ";
  } else {
    ceError.innerHTML = "";
  }
  if (
    password.value.length < 5 ||
    password.value.length > 20 ||
    password.value === "123456789"
  ) {
    passError.innerHTML = "أعد اختيار كلمة المرور ";
  } else {
    passError.innerHTML = "";
  }

  if (!check.checked) {
    checkError.innerHTML = 'يجب أن توافق على بيان الخصوصية ' ;
  } else {
    checkError.innerHTML = '' ;
  }

  if (
    fnError.innerHTML !== "" ||
    lnError.innerHTML !== "" ||
    emError.innerHTML !== "" ||
    ceError.innerHTML !== "" ||
    passError.innerHTML !== "" ||
    checkError.innerHTML !== ''
  ) {
    e.preventDefault();
  }
};
