var a = prompt("Enter Your Hotspot name");
var b = prompt("Enter Your Hotspot password");
document.getElementById("name").innerHTML = a;
document.getElementById("pass").innerHTML = b;

var lock = navigator.mozSettings.createLock();
lock.set({'tethering.wifi.enabled': true});
lock.set({'tethering.wifi.ip': "192.168.1.1"});
lock.set({'tethering.wifi.prefix': "24"});
lock.set({'tethering.wifi.dhcpserver.startip': "192.168.1.10"});
lock.set({'tethering.wifi.dhcpserver.endip': "192.168.1.30"});
lock.set({'tethering.wifi.ssid': a});
lock.set({'tethering.wifi.security.type': "wpa2-psk"});
lock.set({'tethering.wifi.security.password': b});