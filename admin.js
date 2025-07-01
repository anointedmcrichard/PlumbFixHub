
const password = prompt("Enter admin password:");
if (password !== "NUWAMANYA2002") {
  alert("Access Denied");
  document.body.innerHTML = "<h1>403 - Forbidden</h1>";
}
