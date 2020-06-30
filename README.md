# SwanseaWindsurfSite

TODO:
Style update:
    Club info
        Where can I join
    competition results
    sardinia 18
    session sign up
    sign up complete
sardinia 19
Update text
Gallery
Admin account
Anon feedback

Style update completed:
    Index - Library
    swa events - Library
    meet the committee - Top trumps

For all pages:

<!DOCTYPE html>
<html lang="en">
    <head>
    	<title>SWA Events</title>
    	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<link rel="stylesheet" type="text/css" href="static/style.css">
    	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
        <link rel="manifest" href="/favicon/site.webmanifest">
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5">
        <link rel="shortcut icon" href="/favicon/favicon.ico">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="/favicon/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <meta charset="UTF-8">
    </head>
    
    <body>
    	<div class="header"><h1>Swansea University<br>Windsurfing Club</h1></div>
		<div id="navigation-div"></div>

    ******************************************************************************************************************************
                CONTENT
    ******************************************************************************************************************************
	    <div class="footer"></div>
		<script>//Load parts of the page
			$("#navigation-div").load("./shared_files/navigation.html");
			$(".footer").load("./shared_files/footer.html");
		</script>
		<script>//Makes the navbar sticky, and minimises in mobile on scroll
			
			window.onscroll = function() {stickyNav()};
			
			//Finds the offset of the content part of the page
			var navdiv = document.getElementById("navigation-div");
			var	threshold = navdiv.offsetTop;
			const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
			const mobileMode = 850;
			//Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
			//Also minimises the navbar on scroll 
			function stickyNav() {
				navdiv = document.getElementById("navigation-div");
				if (window.pageYOffset >= threshold) {
					navdiv.classList.add("sticky");
				} else {
					navdiv.classList.remove("sticky");
				}
				if (vw < mobileMode) {
					var navlist = document.getElementById("navlist");
					navlist.style.display = "none";
				}
			}
		</script>
		<script>//Makes mobile navbar button work
			function displayNav() {
				var navlist = document.getElementById("navlist");
				if (navlist.style.display === "block") {
					navlist.style.display = "none";
				} else {
					navlist.style.display = "block";
				}
			}
		</script>
    </body>
</html>
