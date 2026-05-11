/* ============================================================
   wa-article.js — WhatsApp Design Injector for Article Pages
   Injects: WA Nav, Floating Button Bar, Sticky Bottom CTA
   ============================================================ */

(function () {
  const WA_NUMBER = '85292528833';
  const WA_HREF = 'https://wa.me/' + WA_NUMBER;

  /* ---- NAV ---- */
  const nav = document.createElement('div');
  nav.id = 'wa-nav';
  nav.innerHTML = `
    <a class="wa-nav__left" href="/">
      <img class="wa-nav__avatar" src="/jeff-demo.jpg" alt="梁愈德 Jeff Leung" width="40" height="40">
      <div class="wa-nav__info">
        <span class="wa-nav__name">梁愈德 Jeff Leung</span>
        <span class="wa-nav__sub">中原地產 · S-514216 · +852-9252-8833</span>
      </div>
    </a>
    <div class="wa-nav__right">
      <a class="wa-nav__wa-btn" href="${WA_HREF}" target="_blank" rel="noopener" aria-label="WhatsApp 聯絡">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  `;
  document.body.prepend(nav);

  /* ---- FLOATING BUTTON BAR ---- */
  const fabBar = document.createElement('div');
  fabBar.id = 'wa-fab-bar';
  fabBar.innerHTML = `
    <a class="float-btn" href="https://www.youtube.com/@jeffleung2131" target="_blank" rel="noopener">
      <div class="float-btn__icon float-btn__icon--yt"><svg viewBox="0 0 24 24" width="14" height="14" fill="#fff"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></div>
      <span class="float-btn__label">YouTube</span>
    </a>
    <a class="float-btn" href="https://hk.centanet.com/findproperty/agent-detail/Jeff-Leung_39184/info" target="_blank" rel="noopener">
      <div class="float-btn__icon float-btn__icon--ct">中原</div>
      <span class="float-btn__label">中原代理<br>檔案</span>
    </a>
    <a class="float-btn" href="/about.html">
      <div class="float-btn__icon float-btn__icon--me"><svg viewBox="0 0 24 24" width="14" height="14" fill="#fff"><path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/></svg></div>
      <span class="float-btn__label">關於我</span>
    </a>
    <a class="float-btn" href="/info.html">
      <div class="float-btn__icon float-btn__icon--srch"><svg viewBox="0 0 24 24" width="14" height="14" fill="#fff"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg></div>
      <span class="float-btn__label">搜尋或<br>瀏覽文章</span>
    </a>
  `;
  document.body.appendChild(fabBar);

  /* ---- STICKY BOTTOM CTA ---- */
  const stickyCta = document.createElement('div');
  stickyCta.id = 'wa-sticky-cta';
  stickyCta.innerHTML = `
    <img src="/jeff-demo.jpg" alt="梁愈德 Jeff Leung" width="40" height="40">
    <div class="wa-cta__text">
      <div class="wa-cta__name">梁愈德 Jeff Leung</div>
      <div class="wa-cta__sub">中原地產 · S-514216 · +852-9252-8833</div>
    </div>
    <a class="wa-cta__btn" href="${WA_HREF}" target="_blank" rel="noopener">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp 查詢
    </a>
  `;
  document.body.appendChild(stickyCta);
})();
