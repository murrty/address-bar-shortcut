function subredditShortcut( details ) {
	var parser = document.createElement( 'a' );

	parser.href = details.url;

	if ( parser.hostname === 'b8' ) {
		browser.tabs.update(
			{
				url: 'https://8kun.top' + parser.pathname + '/index.html'
			}
		);
	}
}

browser.webNavigation.onBeforeNavigate.addListener(
	subredditShortcut,
	{
		url: [
			{
				urlMatches: '.*'
			}
		]
	}
);
