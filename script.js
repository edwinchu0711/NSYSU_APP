function toggleDownloadBtn() {
    const isChecked = document.getElementById("agreeCheckbox").checked;
    const btn = document.getElementById("realDownloadBtn");
    btn.disabled = !isChecked;
}

function startDownload() {
    window.location.href = "NSYSU_v3.1.0.apk";
}