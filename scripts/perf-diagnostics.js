// Credit: Tim Kadlec: https://www.twitch.tv/videos/1066237948

// First get the diagnostic CSS
let url = ;
let css;

fetch(url)
  .then(function(repsonse){
    response.text().then(function(text){
      css = text;
      fetched();
    })
})

// Then inject the styles
function fetched() {
  let style = document.createElement('style');
  style.type = 'text/css';
  document.head.append(style);
}
