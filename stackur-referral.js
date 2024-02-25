let htmlToAppend = `<style>
body {
    width: 100%;
    height: 100%;
    background-size: contain;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    padding: 20px;
    background-color: white;
}

.image {
    min-height: 100px;
    min-width: 100px;
    max-width: 100%;
    max-height: 100%;
}

.logo {
    min-height: 10px;
    max-height: 100px;
    min-width: 20px;
    max-width: 200px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<body onclick="getReferral()">
<div class="center">
    <img src="stackur.avif" alt="" class="image">
</div>

<h3 class="center">Get our app on</h3>

<div class="center">
    <img src="ios.webp" alt="iOS" class="logo" style="padding-inline: 10px;">

    <img src="android.webp" alt="Android" class="logo" style="padding-inline: 10px;">
</div>
</body>` ;

function onClick(id, code) {
    // var url = window.location.href;
    // var code = '';

    // var match = url.match(/[?&]code=([^&]+)/);
    // if (match !== null) {
    //     code = match[1];
    // } else {
    //     console.log('ID parameter not found');
    // }

    var elementId = document.getElementById(id)

    if (elementId) {
        elementId.addEventListener('click', function (event) {
            event.preventDefault();

            if (code) {
                let url = `https://stackur.app.link/hERM8gOumHb?code=${code}&source=${window.parent.location.href}`;
                window.open(url, '_blank');
            } else {
                console.log('Code not found')
            }
        });
    }
}

function createTemplate(id) {
    var elementId = document.getElementById(id);
    if (elementId) {
        elementId.innerHTML += htmlToAppend;
    }
}