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
   PDF MODAL (AÇILIR PENCERE VE GOOGLE VIEWER) SİSTEMİ
========================================== */

function openPDF(pdfUrl, titleText) {
    const modal = document.getElementById('pdfViewer');
    const title = document.getElementById('pdfTitle');
    const body = document.getElementById('pdfBody');

    // Başlığı ayarla
    title.innerHTML = titleText;
    
    // 1. Adım: Sitenin anlık canlı linkini (URL) otomatik olarak bulur ve PDF adıyla birleştirir.
    const fullPdfUrl = new URL(pdfUrl, window.location.href).href;

    // 2. Adım: Bu tam linki Google Docs Viewer'a gönderir (Böylece indirme engellenir, direkt okunur)
    const googleViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(fullPdfUrl)}&embedded=true`;

    // 3. Adım: Google'ın hazırladığı güvenli okuyucuyu bizim penceremizin içine yerleştirir
    body.innerHTML = `<iframe src="${googleViewerUrl}" style="width: 100%; height: 100%; border: none; border-radius: 8px;"></iframe>`;

    // Modalı görünür yap
    modal.style.display = "block";
}

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
