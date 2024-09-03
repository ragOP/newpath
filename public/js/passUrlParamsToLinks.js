function passUrlParamsToLinks() {
  const links = document.querySelectorAll('a');
  const urlSearchParams = new URLSearchParams(window.location.search);
  links.forEach(link => {
    if(link != undefined){

      // Create a new URL object using the link's href
      const url = new URL(link.href);
      urlSearchParams.forEach((value, key) => {
        url.searchParams.set(key, value);
      });
      link.href = url.toString();
        
    }
    
  });
}
passUrlParamsToLinks();