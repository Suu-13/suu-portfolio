(function () {
  const S = SITE, page = document.body.dataset.page;
  const nav = [["home","index.html","Home"],["about","about.html","About"],["experience","experience.html","Experience"],
               ["projects","projects.html","Projects"],["research","research.html","Research"],["education","education.html","Education"],["contact","contact.html","Contact"]];
  const chips = a => a.map(x => `<span class="chip">${x}</span>`).join("");
  const li = a => a.map(x => `<li>${x}</li>`).join("");
  const avatar = () => S.photo ? `<img class="avatar" src="${S.photo}" alt="${S.name}">` : `<div class="avatar">${S.initials}</div>`;
  const ICON = {
    mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 8 6 8-6"/></svg>`,
    linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>`,
    github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.76 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>`
  };
  const head = (t, s) => `<header class="ph"><h1>${t}</h1><p>${s}</p></header>`;

  const views = {
    home: () => `
      <section class="hero" id="hero">
        <i class="blob b1"></i><i class="blob b2"></i>
        <div class="hero-text">
          <p class="role"><span id="typed">${S.roles[0]}</span><i class="caret"></i></p>
          <h1 class="grad">${S.headline}</h1>
          <p class="lead">${S.intro}</p>
          <div class="btns">
            <a class="btn" href="projects.html">See my projects</a>
            ${S.resume ? `<a class="btn ghost" href="${S.resume}">View resume</a>` : `<a class="btn ghost" href="contact.html">Get in touch</a>`}
          </div>
        </div>
        <div class="stage">
          <aside class="id-card" data-tilt>${avatar()}<h2>${S.name}</h2><p>${S.role}</p></aside>
          ${S.skills.slice(0, 4).map((k, i) => `<span class="sticker s${i + 1}">${k}</span>`).join("")}
        </div>
      </section>

      <section class="stats rv">${[[S.projects.length, "Projects"], [S.skills.length, "Skills and interests"], [S.research.reduce((n, r) => n + r.papers.length, 0), "Papers reviewed"], [S.experience.length, "Roles"], [S.education.length, "Qualifications"]]
        .map(x => `<div class="stat"><b data-count="${x[0]}">0</b><span>${x[1]}</span></div>`).join("")}</section>

      <div class="marquee rv" aria-hidden="true"><div>${chips(S.skills)}<span class="dup">${chips(S.skills)}</span></div></div>

      <section class="rv"><h2 class="sh">Explore my portfolio</h2><div class="tiles">
        ${[["about", "✨", "About me", "What I study and what I'm curious about."],
           ["experience", "🌸", "Experience", "Where I've worked and what I did."],
           ["projects", "💻", "Projects", "Data and AI work I've built."],
           ["research", "🔬", "Research", "Papers I've read and what I learned."],
           ["education", "🎓", "Education", "My studies and qualifications."],
           ["contact", "💌", "Contact", "Say hello and start a conversation."]]
          .map(t => `<a class="tile t-${t[0]}" data-tilt href="${t[0]}.html"><span class="ic">${t[1]}</span><h3>${t[2]}</h3><p>${t[3]}</p><span class="go">Open</span></a>`).join("")}
      </div></section>

      <section class="rv">
        <div class="row"><h2 class="sh">Featured projects</h2>
          <div class="arrows"><button class="ar" data-dir="-1" aria-label="Previous projects">&lsaquo;</button><button class="ar" data-dir="1" aria-label="Next projects">&rsaquo;</button></div></div>
        <div class="rail">${S.projects.map(p => `<article class="card pc" data-tilt><div class="prj-badges"><span class="yr">${p.year}</span><span class="st ${p.status === "Ongoing" ? "going" : "done"}">${p.status}</span></div><h3>${p.title}</h3><p>${p.desc}</p><div class="chips">${chips(p.tags)}</div>
          ${p.link ? `<a class="btn small" href="${p.link}" target="_blank" rel="noopener">View project</a>` : ""}</article>`).join("")}</div>
      </section>

      <section class="rv"><h2 class="sh">My journey</h2>
        <div class="tabs" role="tablist"><button role="tab" data-tab="education" aria-selected="true">Education</button><button role="tab" data-tab="experience" aria-selected="false">Experience</button></div>
        <div id="jp" class="card"></div>
      </section>

      <section class="cta rv"><h2>Let's create something beautiful.</h2>
        <p>Open to opportunities, collaboration and questions about data and AI.</p>
        <a class="btn" href="mailto:${S.email}">Say hello</a></section>`,

    about: () => head("About me", "Who I am, what I love, and what I can do.") + `
      <section class="ab">
        <h2 class="sh gl">A little about me</h2>
        <div class="card sum">
        ${S.photo
  ? `<div class="sum-photo"><img src="${S.photo}" alt="${S.name}"><div class="sum-cap"><b>${S.name}</b><span>${S.role}</span></div></div>`
  : `<div class="sum-id">${avatar()}<p class="sum-name">${S.name}</p><p class="sum-role">${S.role}</p></div>`}
          <div class="sum-body">${[["🌸", "Who I am", S.summary.who], ["💻", "What I'm doing", S.summary.doing], ["✨", "What I can do", S.summary.can]]
            .map(r => `<div class="sum-row"><span class="sum-ic">${r[0]}</span><div><h3>${r[1]}</h3><p>${r[2]}</p></div></div>`).join("")}</div>
        </div>
      </section>

      <section class="ab">
        <h2 class="sh gl">Things I'm curious about</h2>
        <div class="ints">${S.interests.map((x, i) => `<div class="int i${i % 4}"><span class="int-ic">${x.icon}</span><b>${x.title}</b><em>${x.note}</em></div>`).join("")}</div>
      </section>

      <section class="ab">
        <h2 class="sh gl">Technical skills</h2>
        <div class="tgrid">${S.techSkills.map(g => `<article class="card tg"><span class="ic">${g.icon}</span><h3>${g.group}</h3><div class="chips">${chips(g.skills)}</div></article>`).join("")}</div>
        <h2 class="sh gl" style="margin-top:44px">Soft skills</h2>
        <div class="softs">${S.softSkills.map(x => `<div class="soft"><span class="soft-ic">${x.icon}</span><h3>${x.title}</h3><p>${x.proof}</p></div>`).join("")}</div>
      </section>`,

    experience: () => head("Professional Experience", "Where I've worked and what I did. Select a card to show or hide its details.") +
      `<ol class="xl">${S.experience.map((e, i) => `
        <li class="xi"><article class="card xc">
          <div class="xhead"><h3>${e.role}</h3><span class="dpill">${e.dates}</span></div>
          <p class="xorg">${e.org}</p>
          <p class="xloc"><span aria-hidden="true">📍</span> ${e.location}</p>
          <details class="xdet"${i === 0 ? " open" : ""}>
            <summary><span class="chev" aria-hidden="true"></span><span class="s-show">Click to show details</span><span class="s-hide">Click to hide details</span></summary>
            <ul>${e.points.map(x => `<li><b>${x.label}:</b> ${x.text}</li>`).join("")}</ul>
          </details>
        </article></li>`).join("")}</ol>`,

    education: () => head("Education", "My studies and qualifications.") +
      `<ol class="xl">${S.education.map(e => `
        <li class="xi"><article class="card xc">
          <div class="xhead"><h3>${e.degree}</h3><span class="dpill">${e.dates}</span></div>
          <p class="xorg">${e.school}</p>
          <p class="estat"><span class="st ${e.status === "Completed" ? "done" : "going"}">${e.status}</span></p>
          <p class="enote">${e.note}</p>
        </article></li>`).join("")}</ol>`,

    research: () => head("Research & Paper Reviews", "Papers I have read, grouped by theme. Open a card to see the full list.") +
      `<div class="grid rgrid">${S.research.map(r => `
        <article class="card rc"><span class="ic">${r.icon}</span><h3>${r.title}</h3><p class="meta">${r.meta}</p><p>${r.desc}</p>
          <div class="chips">${chips(r.tags)}</div>
          <details class="papers"><summary>Papers read (${r.papers.length})</summary><ul>${li(r.papers)}</ul></details></article>`).join("")}</div>`,

   
    projects: () => head("Projects", "Data and AI work I've built. Open a card to see the full details.") +
      `<div class="grid pgrid">${S.projects.map(p => `
        <article class="card prj">
          <div class="prj-top"><span class="ic">${p.icon}</span>
            <div class="prj-badges"><span class="yr">${p.year}</span><span class="st ${p.status === "Ongoing" ? "going" : "done"}">${p.status}</span></div></div>
          <h3>${p.title}</h3>
          <p class="meta">${p.type}${p.dates ? ` · ${p.dates}` : ""}</p>
          <p>${p.overview}</p>
          ${p.link ? `<a class="btn small" href="${p.link}" target="_blank" rel="noopener">View project</a>`: ""}
          <details class="papers prj-sum"><summary>Project details</summary>
            ${p.sections.map(x => `<div class="prj-sec"><h4>${x.heading}</h4>${x.text ? `<p>${x.text}</p>` : ""}${x.bullets ? `<ul>${li(x.bullets)}</ul>` : ""}${x.chips ? `<div class="chips">${chips(x.chips)}</div>` : ""}${x.soon ? `<p class="soon">${x.soon}</p>` : ""}</div>`).join("")}
          </details>
        </article>`).join("")}</div>`,

    contact: () => head("Let's connect", "Say hello, ask a question or talk about data and AI. I'd love to hear from you.") + `
      <p class="avail"><i></i>Open to opportunities and collaboration</p>
      <div class="cgrid">
        <article class="card cc" data-tilt>
          <span class="cic">${ICON.mail}</span><h3>Email</h3><p class="cval">${S.email}</p>
          <div class="btns"><a class="btn small" href="mailto:${S.email}">Write an email</a><button class="btn small ghost" type="button" data-copy="${S.email}">Copy address</button></div>
        </article>
        ${S.links.map(l => `<a class="card cc link" data-tilt href="${l.url}" target="_blank" rel="noopener">
          <span class="cic">${ICON[l.label.toLowerCase()] || ICON.mail}</span><h3>${l.label}</h3><p class="cval">${l.handle || l.url}</p><p>${l.note || ""}</p><span class="go">Open ${l.label}</span></a>`).join("")}
      </div>
      <section class="card msg">
        <h2 class="sh">Send me a message</h2>
        <p class="msg-note">Fill this in and your email app will open with the message ready to send.</p>
        <form id="mf" class="mf">
          <label>Your name<input name="name" required autocomplete="name" placeholder="Your name"></label>
          <label>Subject<input name="subject" required placeholder="What is this about?"></label>
          <label class="wide">Message<textarea name="message" rows="5" required placeholder="Write your message here"></textarea></label>
          <button class="btn" type="submit">Open in my email app</button>
        </form>
      </section>`
  };

  const label = (nav.find(n => n[0] === page) || nav[0])[2];
  if (page !== "home") document.title = `${label} | ${S.name}`;

  document.body.insertAdjacentHTML("afterbegin", `
    <nav class="nav" aria-label="Main">
      <a class="logo" href="index.html" aria-label="${S.name}, home">${S.photo ? `<img class="badge" src="${S.photo}" alt="${S.name}">` : `<span class="badge">${S.initials}</span>`}</a>
      <ul>${nav.map(n => `<li><a href="${n[1]}"${n[0] === page ? ' aria-current="page"' : ""}>${n[2]}</a></li>`).join("")}</ul>
    </nav>
    <main class="wrap">${(views[page] || views.home)()}</main>
    <footer class="foot"><p>&copy; ${new Date().getFullYear()} ${S.name}</p>
      <p>${S.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}<a href="mailto:${S.email}">Email</a></p></footer>`);

  /* ---------- interactions ---------- */
  const fine = matchMedia("(hover: hover)").matches, calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const countUp = el => {
    const n = +el.dataset.count; if (calm || !n) { el.textContent = n; return; }
    let t0; const step = t => { t0 = t0 || t; const p = Math.min((t - t0) / 900, 1);
      el.textContent = Math.round(n * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in"); io.unobserve(e.target); e.target.querySelectorAll("[data-count]").forEach(countUp);
  }), { threshold: .15 });
  document.querySelectorAll(".rv").forEach(el => calm ? el.classList.add("in") : io.observe(el));
  if (calm) document.querySelectorAll("[data-count]").forEach(countUp);

  const ty = document.getElementById("typed");
  if (ty && !calm) { let i = 0, j = 0, del = false;
    const tick = () => { const w = S.roles[i]; ty.textContent = w.slice(0, j);
      if (!del && j === w.length) { del = true; return setTimeout(tick, 1600); }
      if (del && j === 0) { del = false; i = (i + 1) % S.roles.length; }
      j += del ? -1 : 1; setTimeout(tick, del ? 35 : 70); };
    tick(); }

  const hero = document.getElementById("hero");
  if (hero && fine && !calm) hero.addEventListener("pointermove", e => { const r = hero.getBoundingClientRect();
    hero.style.setProperty("--mx", ((e.clientX - r.left) / r.width - .5).toFixed(2));
    hero.style.setProperty("--my", ((e.clientY - r.top) / r.height - .5).toFixed(2)); });

  if (fine && !calm) document.querySelectorAll("[data-tilt]").forEach(el => {
    el.addEventListener("pointermove", e => { const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`; });
    el.addEventListener("pointerleave", () => el.style.transform = "");
  });

  document.querySelectorAll(".ar").forEach(b => b.addEventListener("click", () =>
    document.querySelector(".rail").scrollBy({ left: b.dataset.dir * 300, behavior: "smooth" })));

  const jp = document.getElementById("jp");
  if (jp) { const show = k => {
      jp.innerHTML = `<ul class="jl">${S[k].map(x => `<li><b>${x.degree || x.role}</b><span>${x.school || x.org}</span><em>${x.dates}</em></li>`).join("")}</ul>`;
      document.querySelectorAll("[data-tab]").forEach(t => t.setAttribute("aria-selected", t.dataset.tab === k)); };
    document.querySelectorAll("[data-tab]").forEach(t => t.addEventListener("click", () => show(t.dataset.tab)));
    show("education"); }

  document.querySelectorAll("[data-copy]").forEach(b => b.addEventListener("click", async () => {
    const t = b.dataset.copy, old = b.textContent;
    try { await navigator.clipboard.writeText(t); }
    catch (_) { const x = document.createElement("textarea"); x.value = t; document.body.appendChild(x); x.select(); try { document.execCommand("copy"); } catch (__) {} x.remove(); }
    b.textContent = "Copied \u2713"; setTimeout(() => b.textContent = old, 2000);
  }));

  const mf = document.getElementById("mf");
  if (mf) mf.addEventListener("submit", e => { e.preventDefault(); const f = new FormData(mf);
    const body = `${f.get("message")}\n\nFrom: ${f.get("name")}`;
    location.href = `mailto:${S.email}?subject=${encodeURIComponent(f.get("subject"))}&body=${encodeURIComponent(body)}`; });

  document.addEventListener("pointerdown", e => {
    if (calm || !e.target.closest(".btn,.tile,.chip,.ar")) return;
    for (let i = 0; i < 8; i++) { const s = document.createElement("span"); s.className = "spark"; s.textContent = "✦";
      s.style.cssText = `left:${e.clientX}px;top:${e.clientY}px`; document.body.appendChild(s);
      const a = i / 8 * 6.28, d = 40 + Math.random() * 30;
      s.animate([{ transform: "translate(-50%,-50%) scale(1)", opacity: 1 },
                 { transform: `translate(calc(-50% + ${Math.cos(a) * d}px),calc(-50% + ${Math.sin(a) * d}px)) scale(.3)`, opacity: 0 }],
                { duration: 650, easing: "ease-out" }).onfinish = () => s.remove(); }
  });
})();