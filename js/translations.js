/* ============================================================
   Snape Art Conservation — EN / DE copy
   Edit the strings below to update site content in both languages.
   ============================================================ */

const translations = {
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",

    "header.appointments": "Appointments available",

    // Home
    "home.eyebrow": "Conservation & Restoration Studio",
    "home.title": "Snape Art Conservation",
    "home.lead": "Conservation and restoration studio for paintings and sculptures — from old masters to contemporary works.",
    "home.cta.contact": "Get in touch",
    "home.cta.services": "View services",
    "home.intro.title": "Careful hands, scientific rigour",
    "home.intro.text": "Every object carries its own history. I combine traditional craftsmanship with modern conservation science to stabilise, clean and restore paintings and sculptures — always respecting the integrity of the original work.",
    "home.reel.eyebrow": "Recent Work",
    "home.reel.title": "A closer look at the studio",
    "home.highlights.title": "What I do",
    "home.h1.title": "Structural Conservation",
    "home.h1.text": "Tear mending, lining and support repairs that stabilise a work for the long term.",
    "home.h2.title": "Retouching",
    "home.h2.text": "Careful, reversible in-painting that stays true to the artist's original palette.",
    "home.h3.title": "Technical Analysis",
    "home.h3.text": "Microscopy and pigment analysis to understand material, technique and condition.",
    "home.highlights.link": "See all services",

    // Services
    "services.eyebrow": "What I offer",
    "services.title": "Services",
    "services.intro": "From structural repairs to scientific analysis, every treatment is tailored to the object and its condition.",
    "services.structural.title": "Structural & Support Conservation",
    "services.structural.text": "Tear mending, lining, and repairs to stretchers and supports to stabilise paintings for the long term.",
    "services.retouching.title": "Retouching & Colour Matching",
    "services.retouching.text": "Careful, reversible in-painting to reintegrate losses while remaining true to the artist's original palette.",
    "services.analysis.title": "Technical & Scientific Examination",
    "services.analysis.text": "Microscopy, cross-section and pigment analysis to understand materials, technique and condition before treatment begins.",
    "services.largescale.title": "Large-Scale & Decorative Works",
    "services.largescale.text": "Condition assessment and restoration of large decorative paintings, screens and theatrical scenery.",
    "services.cta.title": "Have a piece that needs attention?",
    "services.cta.text": "Get in touch for a condition assessment and treatment proposal.",
    "services.cta.button": "Request an assessment",

    // About
    "about.eyebrow": "The Conservator",
    "about.title": "About Me",
    "about.p1": "I am a paintings and sculpture conservator-restorer, working with private collections, museums and heritage institutions. My approach combines hands-on treatment with careful technical examination — every intervention is documented, reversible where possible, and guided by respect for the original material and intent of the artist.",
    "about.p2": "I am a proud member of SKR (Schweizerischer Verband für Konservierung und Restaurierung) and VDR (Verband der Restauratoren), and continue to build on years of hands-on experience across conservation studios, private commissions and cultural institutions.",
    "about.cv.title": "Training & Experience",
    "about.cv.note": "Editable — replace the placeholders below with your training, positions and dates.",
    "about.cv.1": "Diploma in Conservation-Restoration — [Institution, Year]",
    "about.cv.2": "[Role], [Studio / Museum name] — [Years]",
    "about.cv.3": "[Role], [Studio / Museum name] — [Years]",
    "about.cv.4": "Member, SKR — Schweizerischer Verband für Konservierung und Restaurierung",
    "about.cv.5": "Member, VDR — Verband der Restauratoren",

    // Contact
    "contact.eyebrow": "Get in touch",
    "contact.title": "Contact Us",
    "contact.intro": "Appointments are available by request.",
    "contact.email.label": "Email",
    "contact.phone.label": "Phone",
    "contact.form.name": "Name",
    "contact.form.email": "E-mail",
    "contact.form.message": "Further information",
    "contact.form.submit": "Send message",
    "contact.form.note": "This opens your email client with your message ready to send.",

    // Footer
    "footer.member": "Proud member of SKR & VDR",
    "footer.rights": "All rights reserved.",
    "footer.tagline": "Conservation & Restoration Studio"
  },

  de: {
    "nav.home": "Startseite",
    "nav.services": "Leistungen",
    "nav.about": "Über mich",
    "nav.contact": "Kontakt",

    "header.appointments": "Termine nach Vereinbarung",

    // Home
    "home.eyebrow": "Atelier für Konservierung & Restaurierung",
    "home.title": "Snape Art Conservation",
    "home.lead": "Atelier für Konservierung und Restaurierung von Gemälden und Skulpturen — von Alten Meistern bis zur Gegenwartskunst.",
    "home.cta.contact": "Kontakt aufnehmen",
    "home.cta.services": "Leistungen ansehen",
    "home.intro.title": "Sorgfältige Hände, wissenschaftliche Präzision",
    "home.intro.text": "Jedes Objekt trägt seine eigene Geschichte in sich. Ich verbinde traditionelles Handwerk mit moderner Restaurierungswissenschaft, um Gemälde und Skulpturen zu stabilisieren, zu reinigen und zu restaurieren — stets mit Respekt vor der Integrität des Originals.",
    "home.reel.eyebrow": "Aktuelle Arbeiten",
    "home.reel.title": "Ein Blick ins Atelier",
    "home.highlights.title": "Mein Angebot",
    "home.h1.title": "Strukturelle Konservierung",
    "home.h1.text": "Rissverklebung, Doublierung und Reparaturen von Bildträgern zur langfristigen Stabilisierung.",
    "home.h2.title": "Retusche",
    "home.h2.text": "Sorgfältige, reversible Retusche, die der ursprünglichen Farbpalette des Künstlers treu bleibt.",
    "home.h3.title": "Technische Analyse",
    "home.h3.text": "Mikroskopie und Pigmentanalyse zum Verständnis von Material, Technik und Zustand.",
    "home.highlights.link": "Alle Leistungen ansehen",

    // Services
    "services.eyebrow": "Mein Angebot",
    "services.title": "Leistungen",
    "services.intro": "Von strukturellen Reparaturen bis zur wissenschaftlichen Analyse — jede Behandlung wird individuell auf das Objekt und seinen Zustand abgestimmt.",
    "services.structural.title": "Strukturelle Konservierung & Bildträger",
    "services.structural.text": "Rissverklebung, Doublierung sowie Reparaturen von Keilrahmen und Bildträgern zur langfristigen Stabilisierung von Gemälden.",
    "services.retouching.title": "Retusche & Farbabstimmung",
    "services.retouching.text": "Sorgfältige, reversible Retusche zur Integration von Fehlstellen unter Beibehaltung der ursprünglichen Farbpalette des Künstlers.",
    "services.analysis.title": "Technische & wissenschaftliche Untersuchung",
    "services.analysis.text": "Mikroskopie, Querschliff- und Pigmentanalyse zur Untersuchung von Material, Technik und Zustand vor Beginn der Behandlung.",
    "services.largescale.title": "Großformatige & dekorative Objekte",
    "services.largescale.text": "Zustandserfassung und Restaurierung von großformatigen dekorativen Gemälden, Wandschirmen und Theaterkulissen.",
    "services.cta.title": "Haben Sie ein Objekt, das Aufmerksamkeit braucht?",
    "services.cta.text": "Kontaktieren Sie mich für eine Zustandsbewertung und einen Behandlungsvorschlag.",
    "services.cta.button": "Bewertung anfragen",

    // About
    "about.eyebrow": "Die Restauratorin",
    "about.title": "Über mich",
    "about.p1": "Ich bin Konservatorin-Restauratorin für Gemälde und Skulpturen und arbeite mit privaten Sammlungen, Museen und Kulturinstitutionen zusammen. Mein Ansatz verbindet praktische Behandlung mit sorgfältiger technischer Untersuchung — jeder Eingriff wird dokumentiert, wo möglich reversibel durchgeführt und orientiert sich stets am Respekt vor dem Originalmaterial und der Intention der Künstlerin oder des Künstlers.",
    "about.p2": "Ich bin stolzes Mitglied des SKR (Schweizerischer Verband für Konservierung und Restaurierung) und des VDR (Verband der Restauratoren) und baue kontinuierlich auf langjährige praktische Erfahrung in Restaurierungsateliers, bei privaten Aufträgen und in Kulturinstitutionen auf.",
    "about.cv.title": "Ausbildung & Erfahrung",
    "about.cv.note": "Bearbeitbar — ersetzen Sie die Platzhalter unten mit Ihrer Ausbildung, Ihren Positionen und Daten.",
    "about.cv.1": "Diplom in Konservierung-Restaurierung — [Institution, Jahr]",
    "about.cv.2": "[Position], [Atelier / Museum] — [Jahre]",
    "about.cv.3": "[Position], [Atelier / Museum] — [Jahre]",
    "about.cv.4": "Mitglied, SKR — Schweizerischer Verband für Konservierung und Restaurierung",
    "about.cv.5": "Mitglied, VDR — Verband der Restauratoren",

    // Contact
    "contact.eyebrow": "Kontakt",
    "contact.title": "Kontaktieren Sie uns",
    "contact.intro": "Termine sind auf Anfrage möglich.",
    "contact.email.label": "E-Mail",
    "contact.phone.label": "Telefon",
    "contact.form.name": "Name",
    "contact.form.email": "E-Mail",
    "contact.form.message": "Weitere Informationen",
    "contact.form.submit": "Nachricht senden",
    "contact.form.note": "Dadurch öffnet sich Ihr E-Mail-Programm mit der versandbereiten Nachricht.",

    // Footer
    "footer.member": "Stolzes Mitglied von SKR & VDR",
    "footer.rights": "Alle Rechte vorbehalten.",
    "footer.tagline": "Atelier für Konservierung & Restaurierung"
  }
};
