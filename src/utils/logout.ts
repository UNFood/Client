import cookie from "js-cookie";

export default function logout() {
  cookie.remove("user-token");
  window.location.href = "/";
}
