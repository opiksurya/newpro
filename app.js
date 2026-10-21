// European Content Agency - NewPro Model Interactive Behaviors

document.addEventListener('DOMContentLoaded', () => {
  // 1. Language Toggle (NL / EN)
  const langButtons = document.querySelectorAll('.lang-btn');
  let currentLang = localStorage.getItem('newpro-lang') || 'nl';
  if (currentLang === 'id') {
    currentLang = 'nl';
    localStorage.setItem('newpro-lang', 'nl');
  }

  function updateLanguage(lang) {
    if (lang !== 'nl' && lang !== 'en') lang = 'nl';
    currentLang = lang;
    localStorage.setItem('newpro-lang', lang);

    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    const translatableElements = document.querySelectorAll('[data-nl], [data-en]');
    translatableElements.forEach(el => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    document.documentElement.lang = lang;
  }

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      updateLanguage(selectedLang);
    });
  });

  // 2. Video Portfolio, Talents & Blog Catalog Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterableCards = document.querySelectorAll('.talent-card, .blog-card, .featured-blog-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterCategory = btn.getAttribute('data-filter');

      filterableCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (filterCategory === 'all' || cardCategory === filterCategory) {
          card.style.display = card.classList.contains('featured-blog-card') ? 'grid' : 'flex';
          setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  // 4. Case Study Videos & Talent Data
  const videoCasesData = {
    'case-1': {
      title_nl: 'Navigatie door de Europese Supply Chain Regulering',
      title_en: 'Navigating EU Cross-Border Supply Chain Compliance',
      title_id: 'Navigasi Kepatuhan Rantai Pasok Lintas Negara Uni Eropa',
      client: 'Evoworks B2B Logistics',
      talent_name: 'Lars van de Berg',
      talent_role_nl: 'Vaste Presentator B2B & Finance',
      talent_role_en: 'Dedicated B2B Presenter',
      talent_role_id: 'Presenter Tetap B2B & Regulasi',
      metrics: '📈 +142% Inbound Demo Leads • 94K Views di LinkedIn',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Een complexe EU-richtlijn vertaald naar 75 seconden heldere thought leadership. Evoworks ontving binnen 4 weken meer dan 30 gekwalificeerde enterprise-aanvragen."',
      synopsis_en: '"Translating intricate EU trade compliance into a concise 75-second high-impact explainer. Evoworks generated 30+ qualified enterprise pipeline leads within four weeks."',
      synopsis_id: '"Menerjemahkan regulasi rantai pasok Uni Eropa yang rumit menjadi video thought leadership 75 detik yang lugas. Evoworks berhasil menghasilkan lebih dari 30 prospek enterprise terverifikasi dalam 4 minggu."'
    },
    'case-2': {
      title_nl: 'Waarom Enterprise Buyers Kiezen voor On-Demand Demo\'s',
      title_en: 'Why Modern Enterprise Buyers Demand Video-First Demos',
      title_id: 'Mengapa Pembeli Enterprise Memilih Demo Video Interaktif',
      client: 'CloudScale SaaS EU',
      talent_name: 'Sophie Dubois',
      talent_role_nl: 'SaaS & Tech Host (Meertalig NL/FR/EN)',
      talent_role_en: 'Multilingual SaaS Product Host',
      talent_role_id: 'Host Produk & Demo SaaS Multibahasa',
      metrics: '🎯 4.8x Conversion Rate pada Signup Demo',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      poster: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Sophie presenteert de kernfuncties van de cloudsoftware zonder jargon. De bounce rate daalde met 42% en het aantal demo-aanvragen verviervoudigde."',
      synopsis_en: '"Sophie breaks down technical cloud architecture with clarity. Reduced bounce rate by 42% while quadrupling qualified demo booking rates."',
      synopsis_id: '"Sophie menjelaskan fitur inti arsitektur software cloud tanpa istilah teknis yang rumit. Menurunkan bounce rate landing page sebesar 42% dan melipatgandakan konversi demo."'
    },
    'case-3': {
      title_nl: 'B2B Leadership Talk: Schalen in Circulaire Economie',
      title_en: 'B2B Leadership Series: Scaling Circular Supply Models',
      title_id: 'Serial Kepemimpinan B2B: Ekspansi Model Bisnis Sirkular',
      client: 'Sociuu Media & Enterprise',
      talent_name: 'Bram de Jong',
      talent_role_nl: 'Podcast Host & Executive Interviewer',
      talent_role_en: 'Podcast Host & Executive Interviewer',
      talent_role_id: 'Host Podcast & Pewawancara C-Level',
      metrics: '🎙️ 18.500+ Pendengar Aktif Spotify & YouTube • Top 5',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4',
      poster: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Een diepgaand studio-interview met industrie-experts. Maakte van Sociuu dé autoriteit op het gebied van duurzame toeleveringsketens in Noord-Europa."',
      synopsis_en: '"Deep studio interview series positioning Sociuu as the premier thought authority across Northern Europe\'s corporate sustainability network."',
      synopsis_id: '"Serial wawancara mendalam di studio broadcast bersama para direktur keberlanjutan. Menempatkan Sociuu sebagai referensi otoritas nomor satu di industri."'
    },
    'case-4': {
      title_nl: 'Helderheid in Medische Richtlijnen & ESG Transparantie',
      title_en: 'Simplifying Healthcare Regulations & ESG Standards',
      title_id: 'Menyederhanakan Regulasi Medis & Standar ESG',
      client: 'Nutri-Salud Clinical Health',
      talent_name: 'Emma Becker',
      talent_role_nl: 'Presentatrice MedTech & Storyteller',
      talent_role_en: 'Healthcare & ESG Storyteller',
      talent_role_id: 'Presenter Edukasi Klinis & Storyteller',
      metrics: '🛡️ 98% Stakeholder Trust & Client Engagement',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      poster: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Emma brengt complexe klinische certificeringen menselijk in beeld, waardoor institutionele investeerders direct vertrouwen kregen in de propositie."',
      synopsis_en: '"Emma brings a warm, reassuring human voice to complex medical validations, gaining unanimous trust from institutional healthcare buyers."',
      synopsis_id: '"Emma menyampaikan sertifikasi klinis dan transparansi riset dengan bahasa yang membumi, memenangkan keyakinan dari mitra rumah sakit dan pembeli institusional."'
    },
    'case-5': {
      title_nl: 'Cross-Border B2B Betalingen Zonder Frictie',
      title_en: 'Frictionless Pan-European Cross-Border Payments',
      title_id: 'Transaksi Bisnis Lintas Negara Tanpa Biaya Tersembunyi',
      client: 'PayGlobal Financial',
      talent_name: 'Lucas Meyer',
      talent_role_nl: 'FinTech & AI Explainer',
      talent_role_en: 'FinTech & AI Explainer',
      talent_role_id: 'Presenter FinTech & Sistem Pembayaran',
      metrics: '👁️ 112K Views Organik & 320 Share LinkedIn',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      poster: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Korte, scherpe video die in 48 seconden de verborgen wisselkoerskosten blootlegt. Resulteerde in een virale LinkedIn post met duizenden B2B interacties."',
      synopsis_en: '"Snappy 48-second breakdown revealing hidden FX fees for CFOs. Became a viral LinkedIn post driving direct outbound enterprise meetings."',
      synopsis_id: '"Video edukasi 48 detik yang mengupas tuntas efisiensi konversi mata uang bagi para CFO. Menjadi viral di LinkedIn dan membuka puluhan peluang meeting komersial."'
    },
    'case-6': {
      title_nl: 'Van Start-up tot Industriestandaard: Onze Reis',
      title_en: 'From Niche Startup to Category Leader: The Founder Story',
      title_id: 'Dari Startup Niche Menjadi Pemimpin Kategori',
      client: 'Bad Slipper Media',
      talent_name: 'Chloe Laurent',
      talent_role_nl: 'Brand Storyteller & Host',
      talent_role_en: 'Brand Storyteller & Host',
      talent_role_id: 'Brand Storyteller & Presenter Narasi',
      metrics: '⭐ 3.6x Brand Recall & Rekrutmen Talenta Top',
      video_url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      poster: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
      synopsis_nl: '"Een authentiek kijkje achter de schermen dat potentiële enterprise-klanten en nieuw toptalent overtuigt van de bedrijfscultuur."',
      synopsis_en: '"Authentic cinematic culture piece that convinced enterprise buyers and top-tier hires of the company\'s mission and credibility."',
      synopsis_id: '"Video dokumenter berkelas sinematik mengenai etos kerja dan inovasi tim. Sukses meyakinkan klien enterprise dan menarik kandidat terbaik bergabung."'
    }
  };

  const talentData = {
    'lars': {
      name: 'Lars van de Berg',
      role_nl: 'Corporate B2B & FinTech Presentator',
      role_en: 'Corporate B2B & FinTech Presenter',
      role_id: 'Presenter Korporat B2B & FinTech',
      script_nl: '"Veel Europese organisaties worstelen met complexe B2B-dienstverlening. Vandaag leggen we in 60 seconden uit hoe uw bedrijf compliant en schaalbaar blijft..."',
      script_en: '"Many European enterprises struggle to explain complex B2B services. Today, let us break down how your business stays compliant and scalable across EU markets..."',
      script_id: '"Banyak perusahaan B2B kesulitan menjelaskan layanan mereka yang kompleks. Hari ini, kami rangkum dalam 60 detik bagaimana bisnis Anda tetap patuh regulasi dan terus berkembang..."'
    },
    'sophie': {
      name: 'Sophie Dubois',
      role_nl: 'SaaS & Tech Host (Meertalig NL/EN/FR)',
      role_en: 'SaaS & Tech Host (Multilingual NL/EN/FR)',
      role_id: 'Host SaaS & Teknologi (Multibahasa NL/EN/FR)',
      script_nl: '"Waarom converteren traditionele websites niet meer? Omdat moderne kopers op zoek zijn naar menselijk contact vóórdat ze een demo boeken..."',
      script_en: '"Why do traditional whitepapers fail to convert modern B2B buyers? Because buyers want human proof and real voices before booking a sales demo..."',
      script_id: '"Mengapa dokumen whitepaper tradisional semakin sulit menghasilkan closing? Karena pembeli B2B saat ini mencari bukti nyata dan sosok manusia sebelum memesan jadwal demo..."'
    },
    'bram': {
      name: 'Bram de Jong',
      role_nl: 'Podcast Host & Business Interviewer',
      role_en: 'Podcast Host & Business Interviewer',
      role_id: 'Host Podcast & Pewawancara Bisnis Eksekutif',
      script_nl: '"Welkom bij de B2B Leadership Talks. Vandaag spreken we met de Director of Sustainability over de impact van nieuwe EU-richtlijnen..."',
      script_en: '"Welcome to the European Leadership Series. Today we discuss the strategic transition to circular supply chains with industry leaders..."',
      script_id: '"Selamat datang di B2B Leadership Talks. Hari ini kita berdiskusi bersama Director of Sustainability mengenai dampak regulasi rantai pasok baru bersama para pemimpin industri..."'
    },
    'emma': {
      name: 'Emma Becker',
      role_nl: 'Educatieve Presentatrice & Storyteller',
      role_en: 'Educational Presenter & Healthcare/Storyteller',
      role_id: 'Presenter Edukasi & Storyteller Kesehatan/ESG',
      script_nl: '"Complexe materie hoeft niet saai te zijn. Met heldere visuele verhalen bouwen we dagelijks aan vertrouwen bij uw stakeholders..."',
      script_en: '"Complex regulations don\'t have to sound dull. Clear visual storytelling builds genuine trust with your European clients every single week..."',
      script_id: '"Materi rumit tidak harus terasa membosankan. Melalui visual storytelling yang jernih, kita membangun kepercayaan nyata dengan para pemangku kepentingan setiap minggunya..."'
    }
  };

  // 5. Modal Elements & Video Control
  const modal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalClose');
  const modalVideoPlayer = document.getElementById('modalVideoPlayer');
  const modalCaseClient = document.getElementById('modalCaseClient');
  const modalCaseTitle = document.getElementById('modalCaseTitle');
  const modalTalentName = document.getElementById('modalTalentName');
  const modalTalentRole = document.getElementById('modalTalentRole');
  const modalCaseMetrics = document.getElementById('modalCaseMetrics');
  const modalScriptExcerpt = document.getElementById('modalScriptExcerpt');

  // Triggering from Case Study cards
  const playCaseBtns = document.querySelectorAll('.btn-play-case');
  playCaseBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const caseId = btn.getAttribute('data-case') || 'case-1';
      const c = videoCasesData[caseId] || videoCasesData['case-1'];

      if (modalCaseClient) modalCaseClient.textContent = c.client;
      if (modalCaseTitle) modalCaseTitle.textContent = c[`title_${currentLang}`] || c.title_nl;
      if (modalTalentName) modalTalentName.textContent = c.talent_name;
      if (modalTalentRole) modalTalentRole.textContent = c[`talent_role_${currentLang}`] || c.talent_role_nl;
      if (modalCaseMetrics) modalCaseMetrics.textContent = c.metrics;
      if (modalScriptExcerpt) modalScriptExcerpt.textContent = c[`synopsis_${currentLang}`] || c.synopsis_nl;

      if (modalVideoPlayer) {
        modalVideoPlayer.src = c.video_url;
        modalVideoPlayer.poster = c.poster;
        modalVideoPlayer.load();
        modalVideoPlayer.play().catch(() => {});
      }

      if (modal) modal.classList.add('active');
    });
  });

  // Triggering from Talent cards or Hero
  const previewBtns = document.querySelectorAll('.marquee-card, #heroPlayBtn');
  previewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const talentId = btn.getAttribute('data-talent') || 'lars';
      const info = talentData[talentId] || talentData['lars'];

      if (modalCaseClient) modalCaseClient.textContent = 'AUDISI & PROFIL TALENT';
      if (modalCaseTitle) modalCaseTitle.textContent = info.name;
      if (modalTalentName) modalTalentName.textContent = info.name;
      if (modalTalentRole) modalTalentRole.textContent = info[`role_${currentLang}`] || info.role_nl;
      if (modalCaseMetrics) modalCaseMetrics.textContent = '🎙️ 48kHz Broadcast Master Audio';
      if (modalScriptExcerpt) modalScriptExcerpt.textContent = info[`script_${currentLang}`] || info.script_nl;

      if (modalVideoPlayer) {
        modalVideoPlayer.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
        modalVideoPlayer.poster = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80';
        modalVideoPlayer.load();
        modalVideoPlayer.play().catch(() => {});
      }

      if (modal) modal.classList.add('active');
    });
  });

  function closeModal() {
    if (modal) modal.classList.remove('active');
    if (modalVideoPlayer) {
      modalVideoPlayer.pause();
    }
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // 6. Theme Toggle (Light / Dark mode, defaulting to light)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('newpro-theme') || 'light';

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('newpro-theme', theme);
  }

  setTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'light' ? 'dark' : 'light';
      setTheme(nextTheme);
    });
  }

  // 8. Article Reader Modal (blogs.html)
  const articlesData = {
    'article-featured': {
      title_nl: 'Waarom B2B Video 4x Beter Converteert dan Traditionele Whitepapers',
      title_en: 'Why B2B Video Converts 4x Higher Than Static Whitepapers',
      title_id: 'Mengapa Video B2B Mengonversi 4x Lebih Baik dibanding Dokumen Whitepaper',
      tag_nl: 'HOOFDARTIKEL • VIDEOSTRATEGIE',
      tag_en: 'FEATURED • VIDEO STRATEGY',
      tag_id: 'ARTIKEL UTAMA • STRATEGI VIDEO',
      meta_nl: '⏱️ 5 min leestijd • B2B Thought Leadership • Studio Nijmegen',
      meta_en: '⏱️ 5 min read • B2B Thought Leadership • Studio Nijmegen',
      meta_id: '⏱️ 5 menit baca • Kepemimpinan B2B • Studio Nijmegen',
      img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
      author_name: 'Marijke Jansen',
      author_role_nl: 'Lead Scriptwriter & B2B Content Strategist',
      author_role_en: 'Lead Scriptwriter & B2B Content Strategist',
      author_role_id: 'Kepala Penulis Naskah & Strategi Konten',
      author_avatar: 'assets/team/marijke.jpg',
      content_nl: `
        <p>De tijd dat een B2B-klant een PDF van 25 pagina's downloadt en aandachtig van begin tot eind leest, is definitief voorbij. Zakelijke beslissers staan onder enorme tijdsdruk en worden dagelijks overspoeld met honderden verkoopberichten.</p>
        <blockquote>"Mensen doen zaken met mensen die ze vertrouwen. Video is het enige medium dat binnen 30 seconden tegelijkertijd autoriteit, empathie en vakkennis overbrengt."</blockquote>
        <h3>1. De Drempel van Tekstuele Overdaad</h3>
        <p>Traditionele whitepapers vereisen actieve cognitieve inspanning. Video daarentegen combineert visuele ondersteuning, intonatie en lichaamstaal. Een professionele acteur of directeur die rustig en zelfverzekerd in de camera spreekt, elimineert direct de afstand tussen uw merk en de koper.</p>
        <h3>2. De Psychologie van Visuele Autoriteit</h3>
        <p>Onderzoek toont aan dat 73% van de zakelijke kopers de voorkeur geeft aan korte video's bij het verkennen van nieuwe software of B2B-diensten. De conversie naar een geboekte demo ligt gemiddeld 4 keer hoger wanneer een gepersonaliseerde videoboodschap wordt getoond op de landingspagina of via LinkedIn.</p>
        <h3>3. Hoe U Dit Concreet Implementeert</h3>
        <ul>
          <li><strong>Houd het beknopt:</strong> Focus per video op één specifiek probleem en één concrete oplossing.</li>
          <li><strong>Investeer in studiokwaliteit:</strong> Slecht geluid of onrustige belichting schaadt direct uw merkreputatie.</li>
          <li><strong>Zorg voor een vaste stem:</strong> Herkenning ontstaat door consistentie in gezicht en tone-of-voice.</li>
        </ul>
      `,
      content_en: `
        <p>The era of B2B executives downloading a 25-page PDF whitepaper and reading it word-for-word has officially come to an end. Enterprise buyers are starved for time and bombarded by thousands of outbound sales pitches.</p>
        <blockquote>"People do business with people they trust. Video is the single medium capable of delivering authority, empathy, and technical clarity within 30 seconds."</blockquote>
        <h3>1. The Cognitive Friction of Static Whitepapers</h3>
        <p>Dense whitepapers demand heavy cognitive effort. Video effortlessly fuses visual proof, vocal timbre, and posture. A dedicated on-camera host speaking with warmth and conviction instantly bridges the gap between your brand and the buyer.</p>
        <h3>2. The Science of Visual Authority</h3>
        <p>Data indicates that 73% of enterprise buyers prefer short-form video when evaluating strategic vendors. Conversion rates to sales discovery calls jump 4x when high-caliber video is embedded directly on landing pages and LinkedIn feeds.</p>
      `,
      content_id: `
        <p>Masa di mana para pimpinan eksekutif mengunduh dokumen PDF 25 halaman dan membacanya tuntas telah berakhir. Para pembuat keputusan di perusahaan berada di bawah tekanan waktu tinggi dan menerima ratusan pesan penawaran setiap harinya.</p>
        <blockquote>"Manusia bermitra dengan manusia yang mereka percaya. Video adalah satu-satunya medium yang mampu mentransfer otoritas, empati, dan keahlian teknis dalam waktu 30 detik."</blockquote>
        <h3>1. Hambatan Dokumen Tekstual</h3>
        <p>Membaca dokumen memerlukan konsentrasi tinggi. Sebaliknya, video memadukan bahasa tubuh, artikulasi suara, dan visualisasi. Sosok presenter atau direktur yang berbicara tenang di depan kamera langsung menghapus jarak kaku antara brand dan klien potensial.</p>
      `
    },
    'article-1': {
      title_nl: 'De Kracht van een Vaste Brand Acteur: Continuïteit en Direct Vertrouwen',
      title_en: 'The Power of a Dedicated Brand Actor: Continuity and Trust',
      title_id: 'Kekuatan Memiliki Aktor Brand Tetap: Kontinuitas dan Kepercayaan Instan',
      tag_nl: 'MERKIDENTITEIT',
      tag_en: 'BRAND IDENTITY',
      tag_id: 'IDENTITAS BRAND',
      meta_nl: '⏱️ 4 min leestijd • Talent & Casting',
      meta_en: '⏱️ 4 min read • Talent & Casting',
      meta_id: '⏱️ 4 menit baca • Talent & Casting',
      img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      author_name: 'Lydia Brouwer',
      author_role_nl: 'Head of Talent & Casting Director',
      author_role_en: 'Head of Talent & Casting Director',
      author_role_id: 'Kepala Talent & Casting Director',
      author_avatar: 'assets/team/lydia.jpg',
      content_nl: `
        <p>Wanneer bedrijven met video starten, maken ze vaak één van twee fouten: ze dwingen ongemakkelijke interne medewerkers voor de lens, of ze wisselen bij elke opname van losse freelancer. Beide ondermijnen de merkconsistentie.</p>
        <blockquote>"Een vast merkgezicht creëert binnen 3 maanden dezelfde psychologische herkenning als een bekende nieuwslezer."</blockquote>
        <h3>Waarom Continuïteit Essentieel Is</h3>
        <p>Wanneer uw doelgroep wekelijks dezelfde professionele presentator voorbij ziet komen op LinkedIn, ontstaat een zogeheten 'parasociale relatie'. De kijker heeft het gevoel de spreker persoonlijk te kennen, wat de weerstand bij een eerste verkoopgesprek met meer dan 50% verlaagt.</p>
      `,
      content_en: `
        <p>When businesses start with video production, they often make one of two mistakes: forcing reluctant internal employees on camera, or hiring a different gig freelancer for every shoot. Both fracture brand authority.</p>
        <blockquote>"A dedicated brand actor builds the exact same psychological familiarity within 3 months as a trusted news anchor."</blockquote>
        <h3>Why Continuity Matters</h3>
        <p>Seeing the same articulate face week after week on LinkedIn fosters authentic recognition, dramatically reducing friction during initial commercial sales calls.</p>
      `,
      content_id: `
        <p>Saat perusahaan mulai memproduksi video, mereka kerap melakukan dua kekeliruan: memaksa karyawan internal yang canggung tampil di depan kamera, atau berganti-ganti talenta lepas setiap kali syuting. Keduanya merusak konsistensi merek Anda.</p>
        <blockquote>"Aktor brand tetap membangun kedekatan emosional dan pengenalan merek yang kuat dalam waktu 3 bulan layaknya presenter berita terpercaya."</blockquote>
      `
    },
    'article-2': {
      title_nl: 'Corporate Podcasting in Nederland: Van Idee naar Spotify Autoriteit',
      title_en: 'Corporate Podcasting: Building a Top-Tier Authority Show',
      title_id: 'Podcasting Korporat: Membangun Serial Audio Pemimpin Industri',
      tag_nl: 'STUDIO PODCAST',
      tag_en: 'STUDIO PODCAST',
      tag_id: 'PODCAST STUDIO',
      meta_nl: '⏱️ 6 min leestijd • Zakelijke Audio',
      meta_en: '⏱️ 6 min read • Corporate Audio',
      meta_id: '⏱️ 6 menit baca • Audio Bisnis',
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
      author_name: 'Pepijn van Dijk',
      author_role_nl: 'Oprichter & Creative Director',
      author_role_en: 'Founder & Creative Director',
      author_role_id: 'Pendiri & Creative Director',
      author_avatar: 'assets/team/pepijn.jpg',
      content_nl: `
        <p>Podcasts zijn het krachtigste B2B networking-instrument van dit moment. In plaats van een koude acquisitie-mail stuurt u een uitnodiging als eregast in uw broadcast studio in Nijmegen.</p>
        <blockquote>"9 van de 10 C-level prospects accepteren een podcast-uitnodiging met enthousiasme. Tijdens het uur in de studio ontstaat een diepe commerciële vertrouwensband."</blockquote>
        <p>Bovendien levert één studio podcast-opname van 30 minuten direct materiaal op voor: 1 volledige YouTube aflevering, 4-6 verticale video snippets voor LinkedIn, en 2 diepgaande thought leadership artikelen.</p>
      `,
      content_en: `
        <p>Podcasts are the premier executive networking engine of modern B2B marketing. Rather than a cold outbound sales email, you invite strategic enterprise prospects as esteemed guests in your broadcast studio.</p>
        <blockquote>"9 out of 10 C-level targets eagerly accept a studio podcast invitation, forging deep commercial trust throughout the filming session."</blockquote>
      `,
      content_id: `
        <p>Podcast merupakan instrumen networking eksekutif paling efektif saat ini. Alih-alih mengirim email penawaran dingin, Anda mengundang calon klien strategis sebagai tamu kehormatan di studio broadcast Nijmegen.</p>
      `
    },
    'article-3': {
      title_nl: 'Autocue & Camera Vrees Overwinnen: Praktische Tips voor Directeuren',
      title_en: 'Overcoming Teleprompter Anxiety: Camera Tips for CEOs',
      title_id: 'Menaklukkan Canggung di Depan Kamera: Panduan Praktis untuk Para CEO',
      tag_nl: 'DIRECTIE COACHING',
      tag_en: 'EXECUTIVE COACHING',
      tag_id: 'PELATIHAN EKSEKUTIF',
      meta_nl: '⏱️ 5 min leestijd • Studio Coaching',
      meta_en: '⏱️ 5 min read • Studio Coaching',
      meta_id: '⏱️ 5 menit baca • Pelatihan Kamera',
      img: 'assets/studio.jpg',
      author_name: 'Chris Meijer',
      author_role_nl: 'Studio Director Nijmegen',
      author_role_en: 'Studio Director Nijmegen',
      author_role_id: 'Direktur Studio Nijmegen',
      author_avatar: 'assets/team/chris.jpg',
      content_nl: `
        <p>Veel bestuurders en oprichters zijn inhoudelijk briljant, maar klappen dicht zodra het rode opnamelampje gaat branden. Dit is volkomen normaal en binnen enkele sessies op te lossen.</p>
        <p>In onze studio in Nijmegen werken we met professionele 4K teleprompters en persoonlijke regie. U hoeft geen enkele tekst uit het hoofd te leren; onze regisseur praat u er ontspannen doorheen en we doen net zoveel takes totdat het perfect voelt.</p>
      `,
      content_en: `
        <p>Many founders and directors are intellectually brilliant but freeze the moment the camera tally light turns red. This is entirely natural and easily solved with seasoned guidance.</p>
      `,
      content_id: `
        <p>Banyak pimpinan perusahaan sangat menguasai bisnisnya, namun merasa kaku saat lampu merah kamera menyala. Hal ini sangat wajar dan dapat diatasi dengan bimbingan sutradara studio yang ramah.</p>
      `
    },
    'article-4': {
      title_nl: 'De Formule voor een Converteerbare 60-Seconden B2B LinkedIn Video',
      title_en: 'The Anatomy of a High-Converting 60-Second LinkedIn Video',
      title_id: 'Formula Anatomi Video LinkedIn 60 Detik Berkonversi Tinggi',
      tag_nl: 'LINKEDIN & DISTRIBUTIE',
      tag_en: 'LINKEDIN PLAYBOOK',
      tag_id: 'STRATEGI LINKEDIN',
      meta_nl: '⏱️ 4 min leestijd • Social Video ROI',
      meta_en: '⏱️ 4 min read • Social Video ROI',
      meta_id: '⏱️ 4 menit baca • ROI Video Media Sosial',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      author_name: 'Marijke Jansen',
      author_role_nl: 'Lead Scriptwriter',
      author_role_en: 'Lead Scriptwriter',
      author_role_id: 'Kepala Penulis Naskah',
      author_avatar: 'assets/team/marijke.jpg',
      content_nl: `
        <p>Op LinkedIn beslist de kijker binnen 2,5 seconde of hij doorscrollt of blijft kijken. Een formele introductie met bedrijfslogo is dodelijk voor de retentie.</p>
        <p>De NewPro formule: 1. Hook (0-3s) met een herkenbare frictie, 2. Inzicht (4-35s) met een heldere tegendraadse waarheid, 3. Praktische oplossing (36-50s), en 4. Heldere Call-to-Action (51-60s).</p>
      `,
      content_en: `
        <p>On LinkedIn, executives decide within 2.5 seconds whether to stop or keep scrolling. Corporate logo intro animations immediately kill viewer retention.</p>
      `,
      content_id: `
        <p>Di LinkedIn, penonton menentukan dalam 2,5 detik pertama apakah akan berhenti atau melanjutkan scrolling. Logo animasi di awal justru menurunkan retensi penonton secara drastis.</p>
      `
    },
    'article-5': {
      title_nl: 'Batch Productie in Studio Nijmegen: Waarom Kwartaalopnames 70% Tijd Besparen',
      title_en: 'Quarterly Batch Filming: Saving 70% Production Overhead',
      title_id: 'Produksi Batch Kuartalan: Menghemat 70% Waktu dan Biaya Produksi',
      tag_nl: 'PRODUCTIE & ROI',
      tag_en: 'PRODUCTION & ROI',
      tag_id: 'PRODUKSI & EFISIENSI',
      meta_nl: '⏱️ 5 min leestijd • Proces Optimalisatie',
      meta_en: '⏱️ 5 min read • Process Efficiency',
      meta_id: '⏱️ 5 menit baca • Efisiensi Proses',
      img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      author_name: 'Raoul Verhoeven',
      author_role_nl: 'Head of Post-Production & Motion',
      author_role_en: 'Head of Post-Production & Motion',
      author_role_id: 'Kepala Pasca-Produksi & Motion',
      author_avatar: 'assets/team/raoul.jpg',
      content_nl: `
        <p>Elke week een cameraman inhuren, briefing schrijven en video's editen is een organisatorische nachtmerrie. Het leidt onvermijdelijk tot uitstel en gaten in uw publicatiekalender.</p>
        <p>Met kwartaal batch-productie bereiden we alle scripts vooraf voor. In 1 ontspannen studio-opnamedag filmt de vaste acteur 13 tot 26 video's achter elkaar, waarna ons post-productieteam de montage, motion graphics en ondertitels verzorgt.</p>
      `,
      content_en: `
        <p>Hiring film crews every single week wastes precious organizational bandwidth and causes sporadic publishing gaps.</p>
      `,
      content_id: `
        <p>Menyewa kru kamera setiap minggu menghabiskan waktu manajemen dan menyebabkan jeda publikasi konten yang tidak konsisten.</p>
      `
    },
    'article-6': {
      title_nl: 'Meertalige Video Content voor Europese Expansie: DACH, Benelux & UK',
      title_en: 'Multilingual B2B Video Playbook for DACH, Benelux & UK',
      title_id: 'Strategi Video Multibahasa untuk Ekspansi ke DACH, Benelux & UK',
      tag_nl: 'EUROPESE EXPANSIE',
      tag_en: 'EUROPEAN EXPANSION',
      tag_id: 'EKSPANSI PASAR EROPA',
      meta_nl: '⏱️ 7 min leestijd • Internationale B2B',
      meta_en: '⏱️ 7 min read • Cross-Border B2B',
      meta_id: '⏱️ 7 menit baca • B2B Lintas Negara',
      img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      author_name: 'Pepijn van Dijk',
      author_role_nl: 'Oprichter & Creative Director',
      author_role_en: 'Founder & Creative Director',
      author_role_id: 'Pendiri & Creative Director',
      author_avatar: 'assets/team/pepijn.jpg',
      content_nl: `
        <p>Wie de Duitse of Franse markt wil veroveren met alleen Engelse video's, loopt tegen een glazen plafond aan. Lokale B2B inkopers hechten enorme waarde aan moedertaal en culturele nuances.</p>
        <p>NewPro cast en begeleidt native sprekers die uw boodschap vloeiend in het Duits, Frans of Engels brengen vanuit onze centrale studio in Nijmegen.</p>
      `,
      content_en: `
        <p>Attempting to penetrate German or French enterprise markets solely with English video content limits conversion potential. Local buyers demand native language resonance.</p>
      `,
      content_id: `
        <p>Mencoba berekspansi ke pasar Jerman atau Prancis hanya dengan konten video berbahasa Inggris seringkali terbentur hambatan konversi. Klien lokal sangat mengapresiasi komunikasi dalam bahasa ibu mereka.</p>
      `
    }
  };

  const articleModal = document.getElementById('articleModal');
  const articleModalClose = document.getElementById('articleModalClose');
  const articleModalImg = document.getElementById('articleModalImg');
  const articleModalTag = document.getElementById('articleModalTag');
  const articleModalMeta = document.getElementById('articleModalMeta');
  const articleModalTitle = document.getElementById('articleModalTitle');
  const articleModalAuthorAvatar = document.getElementById('articleModalAuthorAvatar');
  const articleModalAuthorName = document.getElementById('articleModalAuthorName');
  const articleModalAuthorRole = document.getElementById('articleModalAuthorRole');
  const articleModalBody = document.getElementById('articleModalBody');

  const readArticleBtns = document.querySelectorAll('.btn-read-article');
  readArticleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const articleId = btn.getAttribute('data-article') || 'article-featured';
      const a = articlesData[articleId] || articlesData['article-featured'];

      if (articleModalImg) articleModalImg.src = a.img;
      if (articleModalTag) articleModalTag.textContent = a[`tag_${currentLang}`] || a.tag_nl;
      if (articleModalMeta) articleModalMeta.textContent = a[`meta_${currentLang}`] || a.meta_nl;
      if (articleModalTitle) articleModalTitle.textContent = a[`title_${currentLang}`] || a.title_nl;
      if (articleModalAuthorAvatar) articleModalAuthorAvatar.src = a.author_avatar;
      if (articleModalAuthorName) articleModalAuthorName.textContent = a.author_name;
      if (articleModalAuthorRole) articleModalAuthorRole.textContent = a[`author_role_${currentLang}`] || a.author_role_nl;
      if (articleModalBody) articleModalBody.innerHTML = a[`content_${currentLang}`] || a.content_nl;

      if (articleModal) articleModal.classList.add('active');
    });
  });

  function closeArticleModal() {
    if (articleModal) articleModal.classList.remove('active');
  }

  if (articleModalClose) {
    articleModalClose.addEventListener('click', closeArticleModal);
  }

  if (articleModal) {
    articleModal.addEventListener('click', (e) => {
      if (e.target === articleModal) {
        closeArticleModal();
      }
    });
  }

  // Initial trigger to apply saved language
  updateLanguage(currentLang);
});

