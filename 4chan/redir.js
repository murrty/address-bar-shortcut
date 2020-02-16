function subredditShortcut( details ) {
	var parser = document.createElement( 'a' );

	parser.href = details.url;

	if ( parser.hostname === 'b' ) {
		browser.tabs.update(
			{
				url: 'https://boards.4chan.org/' + parser.pathname
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
