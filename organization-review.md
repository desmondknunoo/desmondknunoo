# Organizations to review for the logo strip

Reviewed the current project source, README and planning documents, portfolio data, unused portfolio component, and the images in `public/images` on 2026-10-26. The owner approved rows 1–38, then removed rows 1, 5–6, 22–24, 27–29, 31–36 and 38. The strip now represents 44 confirmed organizations and brands, including the subsequently supplied Antrak Express, InnoCode, InnoKit, and Meshery logos; education/credential rows 39–42 remain unapproved.

The strip now contains 44 confirmed organizations and brands: 44 transparent PNG logos, with no text placeholders remaining. Achendo and Apex & Over use owner-provided PNGs. Pageline Concepts uses the cleaned and upscaled owner-provided PNG. Galaxy International School uses the owner's added transparent PNG. Meshery uses the owner's PNG with edge residue cleaned and is separated from Layer5. EPP Books Services has regenerated lettering and a curved slogan, retaining the original photographic emblem. DKT uses the owner-provided JPEG converted to transparent PNG. The Juste Foundation uses the cleaned owner-supplied PNG, and United Nations has been replaced by United Nations Volunteers. Logo asset status is recorded in `public/logos/README.md` and `public/logos/sources.json`.

## Employers, ventures, and contribution organizations

Source: `src/app/about/page.tsx` and `README.md`, unless otherwise noted.

| # | Organization | Context in the project | Decision |
| --- | --- | --- | --- |
| 1 | Infinity STEM & The Infinity STEM Foundation | Lead Coordinator; also a work entry in `src/lib/work.ts`. Shown as one entry, per the owner’s approved list. | Ignore |
| 2 | Achendo | Founder and CEO; brand and motion portfolio entry. | Include |
| 3 | Joos | Contract multidisciplinary designer. | Include |
| 4 | Pageline Concepts | Contract 3D designer. | Include |
| 5 | Sodium Brand Solutions | Contract 3D designer; also pictured in `public/images/sbsImage.jpg`. | Ignore |
| 6 | HarTert Technologies Limited | Senior Web Developer. | Ignore |
| 7 | Apex & Over Ltd. | Android Developer and Product Manager. | Include |
| 8 | Layer5 | UX design and open-source contributions to Meshery. Meshery is the related project name. | Include |
| 9 | BlueVyne | Contract designer. | Include |
| 10 | EPP Books Services Ltd. | Publishing intern and publishing assistant/supervisor. | Include |
| 11 | University of Ghana | Internship. | Include |

## Brands and organizations named in work delivered through other organizations

Source: role descriptions in `src/app/about/page.tsx`. These references describe work for brands, sometimes through an agency or volunteer organization; they do not establish direct employment with the brand.

| # | Organization or brand | Context in the project | Decision |
| --- | --- | --- | --- |
| 12 | Access Bank | Design work through Pageline Concepts. | Include |
| 13 | Old Mutual | Design work through Pageline Concepts. | Include |
| 14 | Vidya Book Stores | Design work through Pageline Concepts. | Include |
| 15 | Enterprise Group | Design work through Sodium Brand Solutions. | Include |
| 16 | Sanlam | Design work through Sodium Brand Solutions. | Include |
| 17 | Synlab | Design work through Sodium Brand Solutions. | Include |
| 18 | DKT | Design work through Sodium Brand Solutions. | Include |
| 19 | Mastercard | Design work through BlueVyne. | Include |
| 20 | Kimo | Design work through BlueVyne; The owner confirmed inclusion; a transparent logo is still needed. | Include |
| 21 | VW Trucks and Buses | Design work through BlueVyne. | Include |
| 22 | ASSAS | Burundi nonprofit for which software UI/UX was designed through UN Volunteers. | Ignore |
| 23 | SmartSale | Website and marketing designs through HarTert; also an entry in `src/components/portfolio-section.tsx`. The owner confirmed inclusion of this product brand. | Ignore |

## Schools, event partners, and community organizations

Source: `src/app/about/page.tsx` and `src/app/social-media/page.tsx`.

| # | Organization | Context in the project | Decision |
| --- | --- | --- | --- |
| 24 | Sensel School, Taifa | STEM sessions coordinated through The Juste Foundation. | Ignore |
| 25 | Eclectic Love | Teens in AI mentorship/hackathon. | Include |
| 26 | KGL Foundation | Sponsor of the Emerging Technologies Bootcamp. | Include |
| 27 | Google / Google Accra AI Community Centre | Cohort visit and a listed partner on the social media page. Removed from the logo strip at the owner's request. | Ignore |
| 28 | InovTech STEM Center | KODE VR activities during the community-centre visit. | Ignore |
| 29 | STEMAIDE | AI sessions during the community-centre visit. | Ignore |
| 30 | Galaxy International School | Judging at its Science & Makers' Fair / STEAM Competition. | Include |

## Names visible only in older portfolio images

These names were originally found in visual references. The owner retained Closeup and removed the other seven entries from the strip.

| # | Organization or brand | Evidence | Decision |
| --- | --- | --- | --- |
| 31 | Africa Work Space (styled “africa work. space.”) | `public/images/awsImage.jpg`; this is not an Amazon Web Services logo. | Ignore |
| 32 | Break The Fast (BTF) | Packaging in `public/images/btfImage.jpg`. | Ignore |
| 33 | Hormnes Global Engineering & Construction Ltd | `public/images/hormnesImage.jpg`; spelling follows the visible logo. | Ignore |
| 34 | Ranxbrand | Website in `public/images/ranxbrandImage.jpg`. | Ignore |
| 35 | Ocan | Water bottle branding in `public/images/ocanImage.jpg`. | Ignore |
| 36 | Lamugin Hausa Beer | Packaging in `public/images/lamuginImage.jpg`. | Ignore |
| 37 | Closeup | Advertising artwork in `public/images/closeupImage.jpg`. | Include |
| 38 | 1GHALON | Mobile product branding in `public/images/1ghalonImage.jpg`. The owner confirmed inclusion of this product brand. | Ignore |

## Education and credentials

These appear as education or certification references, rather than work relationships.

| # | Organization | Evidence | Decision |
| --- | --- | --- | --- |
| 39 | Kwame Nkrumah University of Science and Technology (KNUST) | Degree and Entrepreneurship Clinic certificate. | Pending |
| 40 | Pope John Senior High School and Minor Seminary | Secondary education. | Pending |
| 41 | International MUN (IMUN) | Conference credential. | Pending |
| 42 | HarvardX / edX | Course credentials; confirm which identity, if any, should be shown. | Pending |

## Naming decisions and other references

- The strip now uses **United Nations Volunteers** and its specific logo, as requested. The generic UN logo has been removed.
- The requested strip name is **Innova Labs Ltd**; the existing About page and README use **Innova Labs Ghana**. Those records have not been changed by this task.
- **Ghana Robotics Competition** is an event name in the project. Its organizing organization is not identified in the project, so no organizer has been inferred.
- Product/project names also found: **Kampuze, U4nor, Abakosem, Fudrin, Fudrin Business, NSS Unofficial, iSee/Focal, The Orange Offline Publishing Dictionary, A-Chroma, Zero Schools Under Trees,** and **WhatsApp Status Saver**. They have not been treated as separate organizations.
- Technical tools, hardware suppliers, model providers, social networks, hosting providers, and framework dependencies are named throughout the project. Examples include **NVIDIA, Arduino, Raspberry Pi, Google Scratch, Autodesk, Wokwi, PictoBlox, PicoBricks, Firefly, Unitree, Elephant Robotics, Meta, Hiwonder, LEGO, Hugging Face, Kaggle, TensorFlow, PyTorch, Ghana NLP, Moremi, Replit, Lovable, Open Code, Ollama, LM Studio, Bolt.dev, Figma, Asana, WordPress, GitHub, LinkedIn, Behance, Vercel,** and **OpenAI/Codex**. These mentions alone do not describe professional relationships, so they have not been proposed as work logos. The Google community-centre visit is listed separately in row 27.

## Newly confirmed collaboration

Coral Reef Innovation Africa was added at the owner’s request using the supplied official transparent PNG. The owner confirmed they have just started working with the organization. No role or start date has been inferred.

## Owner-added local logos

Antrak Express Ltd, InnoCode, and InnoKit were included at the owner's explicit request using their supplied artwork. Antrak's exterior white fringe was cleaned. InnoCode was converted from SVG to transparent PNG. InnoCode and InnoKit are placed apart. No employer status or role has been inferred for these brands.

Kimo now uses `kimo-logo-2020-1.png`. Friends of NICU and Vixcrown Handmade Craft were added from the owner’s new transparent PNGs. These two entries follow the smaller organizations at the end of the strip. Access Bank’s dimensions were refreshed to match the owner-updated PNG.
