export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : 'https://sour-enemy.glitch.me/';
}

function getQueryStringParameterByName(name, url) {
  if(!url) url = window.location.href;
  name = name.replace(/[[]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      result = regex.exec(url);
  if(!result) return null;
  if(!result[2]) return '';
  return decodeURIComponent(result[2].replace(/\+/g, " "));
}
