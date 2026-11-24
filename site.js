const REAL_SITE = "https://www.langbacka.se";

const POSTS = [
  {
    id: "rattade-stammohandlingar",
    date: "2026-11-19",
    cat: "Stämma och styrelse",
    title: "Rättade stämmohandlingar finns i Boendeportalen",
    summary: "Styrelsens förslag om motionerna hade förväxlats och budgetjämförelsen var förskjuten. Nya versioner är publicerade.",
    body: [
      "I handlingarna till föreningsstämman hade det blivit några fel. Styrelsens yttranden och förslag till beslut om motionerna hade förväxlats. Raderna i jämförelsebudgeten från föregående år var förskjutna, och noten för planerat underhåll var felaktigt summerad.",
      "Felen är rättade och nya versioner av handlingarna finns i Boendeportalen.",
      "Med vänlig hälsning, ekonomiansvarig i styrelsen"
    ]
  },
  {
    id: "container-hamtas",
    date: "2026-11-10",
    cat: "Avfall",
    title: "Containern för trädgårdsavfall hämtas 23 november",
    summary: "Lämna trädgårdsavfallet innan dess.",
    body: ["Containrarna för trädgårdsavfall vid Lillmyra och Långbacka tas bort 23 november. Lämna ditt trädgårdsavfall innan dess."]
  },
  {
    id: "tv-tele2",
    date: "2026-11-05",
    cat: "TV och bredband",
    title: "Fel på TV från Tele2? Felanmäl direkt till Tele2",
    summary: "Varje hushåll anmäler själv. Samfälligheten har också ett ärende öppet för hela området.",
    body: [
      "Har du fel på tv-utsändningen från Tele2 felanmäler du det direkt till Tele2 på telefon 90 222. Varje hushåll behöver anmäla själv.",
      "Samfälligheten har också anmält felet och har ett ärende öppet för hela området.",
      "På Tele2:s webbsida under Drift & Felsök kan du se driftstatus för din adress."
    ]
  },
  {
    id: "diverse-tillagg",
    date: "2026-09-10",
    cat: "Ekonomi",
    title: "Därför står ”Diverse tillägg engångsbelopp” på avin",
    summary: "Fasta IMD-kostnader debiteras dubbelt tills vi är i fas. Frågor till ekonomi@langbacka.se.",
    body: [
      "Under 2026 har vi infört individuell mätning (IMD) av värme, varmvatten och kallvatten. Den ersätter den gamla schablonavgiften, där alla betalade lika mycket varje månad och det räknades av en gång om året.",
      "Av momsskäl behöver vi redovisa de fasta kostnaderna för el, värme, kall- och varmvatten separat från de rörliga. De fasta kostnaderna för alla IMD-tjänster står därför på en egen rad.",
      "På fakturan för september saknades de fasta kostnaderna. För att komma i fas debiteras den fasta kostnaden dubbelt tills vi är i fas. Därför finns det dubbla rader.",
      "Vi beklagar den otydliga formuleringen på avin och ser tillsammans med HSB över vad raden ska heta framöver. Har du frågor om din avi, mejla ekonomi@langbacka.se."
    ]
  },
  {
    id: "vattenlacka-lbv",
    date: "2026-10-05",
    cat: "Viktigt",
    alert: true,
    title: "Akut: vattnet stängs av för Långbackavägen 2–62",
    short: "Vattnet stängs av för Långbackavägen 2–62",
    summary: "GFM lagar en akut vattenläcka. Vi meddelar när vattnet är tillbaka.",
    body: [
      "Det har uppstått en akut vattenläcka som GFM åtgärdar så snart som möjligt. Vattnet behöver stängas av under arbetet.",
      "Berör Långbackavägen 2–62. Vi meddelar här och via mejl när vattnet är tillbaka."
    ]
  },
  {
    id: "aktivitetsplan-invigd",
    date: "2026-08-24",
    cat: "Gemenskap",
    title: "Aktivitetsplanen invigd med femkamp och korvgrillning",
    summary: "Trots en regnskur kom grannar i alla åldrar från Långbacka- och Lillmyravägen.",
    body: [
      "Trots en rejäl regnskur runt 14.30 deltog medlemmar i alla åldrar från både Långbacka- och Lillmyravägen i invigningen av aktivitetsplanen.",
      "Aktivitetsytan mellan område 8 och 9 har fått basketkorgar och snart nya målburar. Här finns plats för bollspel, skateboard, cykling och skridskoåkning efter säsong. Grillplatsen intill rustas också upp."
    ]
  },
  {
    id: "motionsdags",
    date: "2026-08-14",
    cat: "Stämma och styrelse",
    title: "Skicka in en motion till årsstämman",
    summary: "Har du idéer om förbättringar i området? En motion är vägen dit.",
    body: ["Har du idéer om förbättringar i samfälligheten? Då kan en motion till årsstämman vara ett sätt att förverkliga dem. Skicka din motion till styrelsen@langbacka.se."]
  },
  {
    id: "farthinder",
    date: "2026-06-19",
    cat: "Underhåll",
    title: "Farthinder sätts upp vid lekplatser med skymd sikt",
    summary: "Monteras av områdeskontakterna. Max 5–7 km/h i hela området.",
    body: [
      "Vi har sett över reglerna för placering och skyltning av farthinder och renoverat eller kasserat trasig utrustning. Resultatet är att vi prioriterar farthinder vid lekplatser med skymd sikt.",
      "Det är vårt gemensamma ansvar att inte köra i området mer än nödvändigt och att hålla låg hastighet, max 5–7 km/h oavsett fordon.",
      "Områdeskontakterna monterar farthindren med start vecka 26."
    ]
  },
  {
    id: "container-utstalld",
    date: "2026-03-22",
    cat: "Avfall",
    title: "Container för trädgårdsavfall står vid Lillmyra och Långbacka",
    summary: "Containrar är beställda till båda miljörummen.",
    body: ["Containrar för trädgårdsavfall är beställda och ställs ut vid miljörummen på Lillmyra och Långbacka."]
  },
  {
    id: "tele2-hd",
    date: "2026-03-15",
    cat: "TV och bredband",
    title: "Alla tv-kanaler sänds i HD från 15 april",
    summary: "De flesta tv-apparater sålda efter 2008 klarar det utan ny utrustning.",
    body: [
      "Från 15 april sänder Tele2 alla tv-kanaler i HD-kvalitet.",
      "Har du en tv som kan visa digital-tv behöver du ingen ny utrustning. Nästan alla tv-modeller som sålts sedan 2008 har en inbyggd DVB-C-mottagare."
    ]
  }
].sort((a, b) => b.date.localeCompare(a.date));

const EVENTS = [{ date: "2026-12-09", title: "Styrelsemöte" }];

const MONTHS = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
const parts = (iso) => { const [y, m, d] = iso.split("-").map(Number); return { y, m, d }; };
const longDate = (iso) => { const { y, m, d } = parts(iso); return `${d} ${MONTHS[m - 1]} ${y}`; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const catClass = (cat) => (cat === "Viktigt" ? "cat viktigt" : "cat");

const ICONS = {
  warn: '<path d="M12 3 2 20h20L12 3z"/><path d="M12 10v4M12 17h.01"/>',
  cal: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4h6v3H9zM9 13l2 2 4-4"/>',
  house: '<path d="M3 11 12 4l9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  hall: '<path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/>',
  gym: '<path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12"/>',
  bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
  tv: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M8 21h8M9 2l3 4 3-4"/>',
  ball: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  drop: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>'
};
const icon = (name) => `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]}</svg>`;

const NAV = [
  { href: "nyheter.html", label: "Nyheter", page: "nyheter" },
  { href: "lokaler.html", label: "Lokaler", page: "lokaler" },
  { href: "information.html", label: "Information", page: "information" },
  { href: `${REAL_SITE}/trivsel-och-ordningsregler/`, label: "Regler", page: "regler" },
  { href: "kontakt.html", label: "Kontakt", page: "kontakt" }
];

function renderChrome() {
  const page = document.body.dataset.page;
  const nav = NAV.map((n) => `<a href="${n.href}"${n.page === page ? ' aria-current="page"' : ""}>${n.label}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip" href="#main">Hoppa till innehållet</a>
    <div class="proto" role="note"><div class="wrap"><b>Prototyp</b><span>Förslag till ny hemsida, inte den riktiga sajten.</span><a href="${REAL_SITE}">Gå till langbacka.se</a></div></div>
    <header class="site-header"><div class="wrap">
      <a class="brand" href="index.html"><b>Långbacka<span class="brand-long"> Samfällighet</span></b><small>225 hushåll i Bomhus, Gävle</small></a>
      <nav class="nav" id="nav" aria-label="Huvudmeny">${nav}</nav>
      <a class="btn" href="portal.html">${icon("lock")}<span class="login-label-long">Logga in i Boendeportalen</span><span class="login-label-short">Logga in</span></a>
      <button class="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="Meny">${icon("menu")}</button>
    </div></header>`);

  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer"><div class="wrap">
      <div class="foot-grid">
        <div><h2>Kontakta oss</h2><ul>
          <li>Styrelsen: styrelsen@langbacka.se</li>
          <li>Avier och ekonomi: ekonomi@langbacka.se</li>
          <li><a href="${REAL_SITE}/omradeskontakter/" class="ext">Hitta din områdeskontakt</a></li>
        </ul></div>
        <div><h2>Genvägar</h2><ul>
          <li><a href="portal.html">Felanmälan</a></li>
          <li><a href="lokaler.html">Boka lokal</a></li>
          <li><a href="prenumerera.html">Få nyheter på mejl</a></li>
          <li><a href="${REAL_SITE}/agarbyte/" class="ext">Ägarbyte</a></li>
        </ul></div>
        <div><h2>Följ oss</h2><ul>
          <li><a href="https://www.facebook.com/groups/langbacka/" class="ext">Facebookgruppen</a></li>
          <li><a href="nyheter.html">Alla nyheter</a></li>
        </ul></div>
      </div>
      <div class="foot-buy"><span>Ska du köpa hus här, eller är du mäklare?</span><a class="btn" href="bo-i-langbacka.html">Bo i Långbacka</a></div>
    </div></footer>`);

  const burger = document.querySelector(".burger");
  const navEl = document.getElementById("nav");
  burger.addEventListener("click", () => {
    const open = navEl.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
    burger.innerHTML = icon(open ? "close" : "menu");
  });
}

function newsItem(p) {
  const { d, m } = parts(p.date);
  return `<li><a class="item" href="nyhet.html?id=${p.id}">
    <div class="date"><b>${d}</b>${MONTHS[m - 1]}</div>
    <div><span class="${catClass(p.cat)}">${esc(p.cat)}</span><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p></div>
  </a></li>`;
}

function storageGet(key) { try { return sessionStorage.getItem(key); } catch { return null; } }
function storageSet(key, value) { try { sessionStorage.setItem(key, value); } catch { /* private mode */ } }

function initHome() {
  const alertPost = POSTS.find((p) => p.alert);
  const slot = document.getElementById("alert-slot");
  if (alertPost && storageGet("alert-closed") !== alertPost.id) {
    slot.innerHTML = `<div class="alert" role="status"><span class="tag">Akut</span>
      <div class="txt"><b>${esc(alertPost.short)}.</b> ${esc(alertPost.summary)} <a href="nyhet.html?id=${alertPost.id}">Läs mer</a>
      <small>Exempel: så här visas ett akut meddelande medan det gäller.</small></div>
      <button type="button" aria-label="Stäng meddelandet">${icon("close")}</button></div>`;
    slot.querySelector("button").addEventListener("click", () => { storageSet("alert-closed", alertPost.id); slot.innerHTML = ""; });
  }
  document.getElementById("latest").innerHTML = POSTS.filter((p) => !p.alert).slice(0, 5).map(newsItem).join("");
  document.getElementById("events").innerHTML = EVENTS.map((e) => {
    const { d, m } = parts(e.date);
    return `<div class="event"><span>${MONTHS[m - 1]}<b>${d}</b></span>${esc(e.title)}</div>`;
  }).join("");
}

function initNews() {
  const cats = ["Alla", ...new Set(POSTS.map((p) => p.cat))];
  const filters = document.getElementById("filters");
  const list = document.getElementById("all-news");
  let current = new URLSearchParams(location.search).get("kategori") || "Alla";
  if (!cats.includes(current)) current = "Alla";

  const draw = () => {
    filters.innerHTML = cats.map((c) => `<button type="button" aria-pressed="${c === current}">${esc(c)}</button>`).join("");
    const shown = POSTS.filter((p) => current === "Alla" || p.cat === current);
    list.innerHTML = shown.map(newsItem).join("");
    document.getElementById("count").textContent = `${shown.length} ${shown.length === 1 ? "nyhet" : "nyheter"}`;
  };
  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    current = btn.textContent;
    history.replaceState(null, "", current === "Alla" ? "nyheter.html" : `nyheter.html?kategori=${encodeURIComponent(current)}`);
    draw();
  });
  draw();
}

function initArticle() {
  const id = new URLSearchParams(location.search).get("id");
  const post = POSTS.find((p) => p.id === id);
  const el = document.getElementById("article");
  if (!post) {
    el.innerHTML = `<h1>Nyheten finns inte</h1><p>Den kan ha flyttats eller tagits bort. <a href="nyheter.html">Se alla nyheter</a>.</p>`;
    return;
  }
  document.title = `${post.title} – Långbacka Samfällighet`;
  const others = POSTS.filter((p) => p.id !== post.id && !p.alert).slice(0, 3);
  el.innerHTML = `
    <p class="crumbs"><a href="nyheter.html">Nyheter</a> / <a href="nyheter.html?kategori=${encodeURIComponent(post.cat)}">${esc(post.cat)}</a></p>
    <h1>${esc(post.title)}</h1>
    <div class="meta"><span class="${catClass(post.cat)}">${esc(post.cat)}</span><span>Publicerad ${longDate(post.date)}</span></div>
    <div class="body">${post.body.map((t) => `<p>${esc(t)}</p>`).join("")}</div>
    <div class="note-box"><b>Vill du få nyheter som den här på mejl?</b><p>Välj själv vad du vill få. Du kan avsluta när som helst.</p><a class="btn ghost" href="prenumerera.html" style="justify-self:start">${icon("mail")}Få nyheter på mejl</a></div>
    <div><div class="sec-h"><h2>Fler nyheter</h2><a href="nyheter.html">Alla nyheter →</a></div><ul class="news">${others.map(newsItem).join("")}</ul></div>`;
}

function initSubscribe() {
  const form = document.getElementById("sub-form");
  const done = document.getElementById("sub-done");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email.value.trim();
    const err = document.getElementById("email-err");
    const chosen = [...form.querySelectorAll('input[name="val"]:checked')].map((i) => i.dataset.label);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { err.textContent = "Skriv en e-postadress, till exempel namn@exempel.se."; form.email.focus(); return; }
    err.textContent = "";
    if (!chosen.length) { err.textContent = "Välj minst en sorts nyheter."; return; }
    form.hidden = true;
    done.hidden = false;
    done.innerHTML = `<h2>Bekräfta i din mejl</h2>
      <p>Vi har skickat ett mejl till <b>${esc(email)}</b>. Klicka på länken i mejlet för att börja få:</p>
      <ul>${chosen.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      <p class="fine">I prototypen skickas inget mejl på riktigt. Varje mejl har länkar för att ändra val eller avsluta.</p>
      <a href="index.html">Tillbaka till startsidan</a>`;
    done.focus();
  });
}

function initPortal() {
  const to = new URLSearchParams(location.search).get("till");
  const label = { felanmalan: "Felanmälan", boka: "Boka lokal" }[to];
  if (label) document.getElementById("portal-target").textContent = `Du var på väg till ${label}. `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  const init = { home: initHome, nyheter: initNews, nyhet: initArticle, prenumerera: initSubscribe, portal: initPortal }[document.body.dataset.page];
  if (init) init();
});
