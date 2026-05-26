/**
 * Ana menü ile tablolar arası sayfa yenilenmeden geçiş yapmayı sağlar.
 * @param {string} viewId - Gösterilmek istenen ekranın div ID'si
 */
function switchView(viewId) {
    // Tüm uygulama ekranlarını seç
    const views = document.querySelectorAll('.app-view');
    
    // Tüm ekranlardan active-view sınıfını kaldırıp gizle
    views.forEach(view => {
        view.classList.remove('active-view');
    });

    // İstenilen ekrana active-view sınıfını ekleyerek görünür yap
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active-view');
        // Sayfanın en üstüne yumuşak bir şekilde kaydır
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Ders Yol Haritaları içindeki sekmeleri (matematik, fizik vb.) değiştirir.
 */
function switchTab(event, tabId) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Tüm tab butonlarından active sınıfını kaldır
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Tıklanan butona active sınıfı ekle ve ilgili içeriği göster
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}
/**
 * Ana menü ile tablolar arası sayfa yenilenmeden geçiş yapmayı sağlar.
 * @param {string} viewId - Gösterilmek istenen ekranın div ID'si
 */
function switchView(viewId) {
    // Tüm uygulama ekranlarını seç
    const views = document.querySelectorAll('.app-view');
    
    // Tüm ekranlardan active-view sınıfını kaldırıp gizle
    views.forEach(view => {
        view.classList.remove('active-view');
    });

    // İstenilen ekrana active-view sınıfını ekleyerek görünür yap
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.add('active-view');
        // Sayfanın en üstüne yumuşak bir şekilde kaydır (Mobilde çok işe yarar)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

/**
 * Ders Yol Haritaları içindeki sekmeleri (matematik, fizik vb.) değiştirir.
 */
function switchTab(event, tabId) {
    // Tüm tab içeriklerini gizle
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Tüm tab butonlarından active sınıfını kaldır
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Tıklanan butona active sınıfı ekle ve ilgili içeriği göster
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}