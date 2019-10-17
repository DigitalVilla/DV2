var template = `
<section class="section" data-anchor="404">
    <div class="Error container-fluid">
        <div id="page-bg"
            style="background-image: url(&quot;/static/nebula-lg-b0c4a963ef705920d8c4f2278e3aefa0.jpg&quot;);"></div>
       <div class="header noSelect"><img class="main-logo" src="/static/logo_DV-76f98a33f812b957c59deb02bbf67a62.png" alt="DV">
            <h1>Digital Villa | Media Agency, Web Design, Software Development, Graphic design, Website</h1>
            <div class="title"><span>Digital Villa</span></div>
            <h2 class="main">You have landed In a black hole!<div class="breaks">&nbsp;</div> Get back in Orbit with a real Browser:</h2>
            <a class="ie-btn" href="https://www.mozilla.org/firefox/new/">Firefox</a>
            <a class="ie-btn" href="https://www.google.com/chrome/">Chrome</a>
            <h3>Don't miss out. IExplorer is not longer supported by <a href="https://www.microsoft.com/en-us/microsoft-365/windows/end-of-ie-support">Microsoft</a> </h3>
        </div>
    </div>
</section>
`;

export default (function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
    {
        alert("IE");
            document.body.innerHTML = template;
            // document.getElementById('___gatsby').innerHTML = template;


    } else // If another browser, return 0
    {
        console.log('Not IE');
        setTimeout(() => {
            //   document.getElementById('___gatsby').innerHTML = template;
        }, 100);

    }

    return false;
})();