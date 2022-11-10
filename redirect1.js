const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.index; // "some_value"
  if(params.index == null) {
    value = 1; 
  }
  document.getElementById("loading").innerHTML = "Loading: " + value; 
  document.body.style.backgroundColor = Math.random(); 
setTimeout(() => {
    window.location.href = "https://gmoyer.github.io/csci1000-website/redirect/index.html?index=" + (parseInt(value)+1);
}, 10);