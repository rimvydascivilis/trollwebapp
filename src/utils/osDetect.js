export default function getOperatingSystem(window) {
    let operatingSystem = 'Not known';
    let appVersion = window.navigator.appVersion;

    if (appVersion.indexOf('Windows NT 10') !== -1) { operatingSystem = 'Windows 10'; }
    else if (appVersion.indexOf('Windows NT 11') !== -1) { operatingSystem = 'Windows 11'; }
    else if (appVersion.indexOf('Mac') !== -1) { operatingSystem = 'Mac'; }
    else if (appVersion.indexOf('Linux') !== -1) {
        operatingSystem = 'Linux'
        if (appVersion.indexOf('Android') !== -1) { operatingSystem = 'Android' }
    }
    else if (appVersion.indexOf('Android') !== -1) { operatingSystem = 'Android'; }
    return operatingSystem;
}