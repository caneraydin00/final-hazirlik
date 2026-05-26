/**
 * Ana menü ile tablolar arası sayfa yenilenmeden geçiş yapmayı sağlar.
 */
function switchView(viewId) {
    const views = document.querySelectorAll('.app-view');
    views.forEach(view => {
        view.classList.remove('active-view');
    });

    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active-view');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Ders Yol Haritaları içindeki sekmeleri değiştirir.
 */
function switchTab(event, tabId) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

/* ==========================================
   PDF MODAL (AÇILIR PENCERE VE IFRAME) SİSTEMİ
========================================== */

/**
 * İndirmeyi engelleyip PDF'i site içinde otomatik açar.
 * @param {string} pdfUrl - PDF dosyasının tam adı (örn: Algorithmic_Mastery.pdf)
 * @param {string} titleText - Pencerenin üstünde yazacak başlık
 */
function openPDF(pdfUrl, titleText) {
    const modal = document.getElementById('pdfViewer');
    const title = document.getElementById('pdfTitle');
    const body = document.getElementById('pdfBody');

    // Başlığı ayarla
    title.innerHTML = titleText;
    
    // iframe etiketiyle PDF'i indirime sokmadan sayfanın içine göm (embed)
    // #toolbar=0 parametresi bazı tarayıcılarda üst menüyü gizleyerek daha temiz görünüm sağlar
    body.innerHTML = `<iframe src="${pdfUrl}#toolbar=0" type="application/pdf"></iframe>`;

    // Modalı görünür yap
    modal.style.display = "block";
}

/**
 * Modalı kapatır ve arka planda çalışan iframe'i temizler.
 */
function closePDF() {
    document.getElementById('pdfViewer').style.display = "none";
    // İçeriği temizle ki kapatıldığında arka planda açık kalmasın
    document.getElementById('pdfBody').innerHTML = ""; 
}

// Kullanıcı pencerenin dışındaki siyah alana tıklarsa da kapat
window.onclick = function(event) {
    const modal = document.getElementById('pdfViewer');
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('pdfBody').innerHTML = ""; 
    }
}
