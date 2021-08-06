function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}
var query = getQueryParams(document.location.search);
var lock = navigator.mozSettings.createLock();
lock.set({'tethering.wifi.enabled': query.state});
lock.set({'tethering.wifi.ip': "192.168.1.1"});
lock.set({'tethering.wifi.prefix': "24"});
lock.set({'tethering.wifi.dhcpserver.startip': "192.168.1.10"});
lock.set({'tethering.wifi.dhcpserver.endip': "192.168.1.30"});
lock.set({'tethering.wifi.ssid': ""+query.wifiname+""});
lock.set({'tethering.wifi.security.type': ""+query.security+""});
lock.set({'tethering.wifi.security.password': ""+query.password+"" });