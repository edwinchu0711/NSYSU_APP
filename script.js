// 開啟視窗
function openModal() {
    document.getElementById("downloadModal").style.display = "block";
    // 防止背景捲動
    document.body.style.overflow = "hidden";
}

// 關閉視窗
function closeModal() {
    document.getElementById("downloadModal").style.display = "none";
    document.body.style.overflow = "auto";
}

// 監聽勾選框
function toggleDownloadBtn() {
    const isChecked = document.getElementById("agreeCheckbox").checked;
    const btn = document.getElementById("realDownloadBtn");
    
    if (isChecked) {
        btn.disabled = false;
        btn.classList.remove("disabled");
    } else {
        btn.disabled = true;
        btn.classList.add("disabled");
    }
}

// 點擊外部關閉
window.onclick = function(event) {
    const modal = document.getElementById("downloadModal");
    if (event.target == modal) {
        closeModal();
    }
}

// 下載執行
function startDownload() {
    // 這裡換成你實際的檔案網址
    window.location.href = "NSYSU_v3.1.0.apk";
}