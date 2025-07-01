
function checkPassword() {
  const password = document.getElementById('password').value;
  if (password === "NUWAMANYA2002") {
    alert("Access granted!");
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect password!");
  }
  return false;
}
