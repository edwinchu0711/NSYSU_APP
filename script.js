function toggleDownloadBtn() {
    const isChecked = document.getElementById("agreeCheckbox").checked;
    const btn = document.getElementById("realDownloadBtn");
    btn.disabled = !isChecked;
}

function startDownload() {
    window.location.href = "NSYSU_v3.1.0.apk";
}

/**
 * 控制主按鈕的啟用狀態
 */
function toggleDownloadBtn() {
    const isChecked = document.getElementById("agreeCheckbox").checked;
    const btn = document.getElementById("realDownloadBtn");
    btn.disabled = !isChecked;
    
    // 如果使用者取消勾選，隱藏版本列表
    if (!isChecked) {
        document.getElementById("versionSection").style.display = "none";
    }
}

/**
 * 顯示版本列表並捲動至該區塊
 */
function showVersionList() {
    const versionSection = document.getElementById("versionSection");
    versionSection.style.display = "block";
    
    // 平滑捲動到列表位置
    versionSection.scrollIntoView({ behavior: 'smooth' });
}