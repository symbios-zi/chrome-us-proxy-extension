function FindProxyForURL(url, host) {
	proxy = 'PROXY 5.101.70.206:8000';
	
	if ((/(^([\w\.-]+\.)?(semyanich-semena))/).test(host)) {
		return proxy;
	}
	return 'DIRECT';
}
