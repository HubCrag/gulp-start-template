export function isWebp() {
    function testWebp(callback) {
        let webp = new Image();
        webp.onload = webp.onerror = function () {
            console.log(webp.height);
            callback(webp.height == 2);
        };
        webp.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAIAAQAcJaQAA3AA/v3AgAA=';
    }

    testWebp(function (support) {
        let className = support === true ? 'webp' : 'no-webp';
        document.documentElement.classList.add(className);
    });
}
