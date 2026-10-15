export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/#about', label: 'About' },
  { to: '/#services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/#process', label: 'Process' },
  { to: '/#reviews', label: 'Reviews' },
  { to: '/#faq', label: 'FAQ' },
]

export const portfolioCategories = [
  {
    id: 'screens',
    label: 'Screens',
    copy: 'Starting, BRB, ending, and overlay screens for stream.',
  },
  {
    id: 'banners',
    label: 'Banners',
    copy: 'Channel headers and launch banners built to read at a glance.',
  },
  {
    id: 'chibi-models',
    label: 'Chibi Models',
    copy: 'Soft 3D and Live2D chibi avatars, ready to rig.',
  },
  {
    id: 'emotes',
    label: 'Emotes',
    copy: 'Twitch and Discord emote sets with a clear silhouette.',
  },
  {
    id: 'female-vt',
    label: 'Female VT',
    copy: 'Full female VTuber models, outfits, and expressions.',
  },
  {
    id: 'illustration',
    label: 'Illustration',
    copy: 'Key visuals, splash art, and merch-ready character pieces.',
  },
  {
    id: 'male-vt',
    label: 'Male VT',
    copy: 'Male VTuber designs built for tracking and long streams.',
  },
  {
    id: 'pfp',
    label: 'PFP',
    copy: 'Profile icons that stay readable as a tiny circle.',
  },
  {
    id: 'reference-sheet',
    label: 'Reference Sheet',
    copy: 'Turnarounds, color keys, and outfit notes for production.',
  },
]

export const portfolioItems = [
  {
    id: 'screens-nichi-starting',
    category: 'screens',
    title: 'Nichi · Starting Soon',
    image: '/portfolio/nichi-starting-soon.jpg',
    cover: true,
    featured: true,
  },
  {
    id: 'screens-nichi-ending',
    category: 'screens',
    title: 'Nichi · Ending Soon',
    image: '/portfolio/nichi-ending-soon.jpg',
    cover: true,
  },
  {
    id: 'screens-fleet-starting',
    category: 'screens',
    title: 'Fleet · Starting Soon',
    image: '/portfolio/fleet-starting-soon.jpg',
    cover: true,
    featured: true,
  },
  {
    id: 'screens-fleet-brb',
    category: 'screens',
    title: 'Fleet · Be Right Back',
    image: '/portfolio/fleet-brb.jpg',
    cover: true,
  },
  {
    id: 'screens-fleet-ending',
    category: 'screens',
    title: 'Fleet · Ending Soon',
    image: '/portfolio/fleet-ending-soon.jpg',
    cover: true,
  },
  {
    id: 'banners-hellfin',
    category: 'banners',
    title: 'Hellfin',
    image: '/portfolio/banner-hellfin.jpg',
    wide: true,
    featured: true,
  },
  {
    id: 'banners-falcon',
    category: 'banners',
    title: 'Falcon',
    image: '/portfolio/banner-falcon.jpg',
    wide: true,
  },
  {
    id: 'banners-avenged',
    category: 'banners',
    title: 'Avenged',
    image: '/portfolio/banner-avenged.jpg',
    wide: true,
  },
  {
    id: 'banners-taosvt',
    category: 'banners',
    title: 'TaosVT',
    image: '/portfolio/banner-taosvt.jpg',
    wide: true,
    featured: true,
  },
  {
    id: 'banners-crimson',
    category: 'banners',
    title: 'Crimson',
    image: '/portfolio/banner-crimson.jpg',
    wide: true,
  },
  {
    id: 'banners-plushie',
    category: 'banners',
    title: 'Plushie Poppet',
    image: '/portfolio/banner-plushie-poppet.jpg',
    wide: true,
  },
  {
    id: 'chibi-goober',
    category: 'chibi-models',
    title: 'Goober',
    image: '/portfolio/chibi-goober.png',
    portrait: true,
    featured: true,
  },
  {
    id: 'chibi-adventurer',
    category: 'chibi-models',
    title: 'Adventurer',
    image: '/portfolio/chibi-adventurer.png',
    portrait: true,
  },
  {
    id: 'chibi-demonette',
    category: 'chibi-models',
    title: 'Demonette',
    image: '/portfolio/chibi-demonette.png',
    portrait: true,
  },
  {
    id: 'chibi-lilac',
    category: 'chibi-models',
    title: 'Lilac',
    image: '/portfolio/chibi-lilac.png',
    portrait: true,
  },
  {
    id: 'chibi-arcain-sid',
    category: 'chibi-models',
    title: 'Arcain Sid',
    image: '/portfolio/chibi-arcain-sid.png',
    portrait: true,
  },
  {
    id: 'emotes-red',
    category: 'emotes',
    title: 'Redline Pack',
    image: '/portfolio/emotes-redline.jpg',
    square: true,
    featured: true,
  },
  {
    id: 'emotes-elf',
    category: 'emotes',
    title: 'Elf Twitch Set',
    image: '/portfolio/emotes-elf.jpg',
    square: true,
  },
  {
    id: 'emotes-catboy',
    category: 'emotes',
    title: 'Catboy + Bits',
    image: '/portfolio/emotes-catboy.jpg',
    square: true,
  },
  {
    id: 'emotes-hoodie',
    category: 'emotes',
    title: 'Hoodie Twitch Set',
    image: '/portfolio/emotes-hoodie.jpg',
    square: true,
  },
  {
    id: 'emotes-raid',
    category: 'emotes',
    title: 'Raid & Bonk Set',
    image: '/portfolio/emotes-raid.jpg',
    square: true,
  },
  {
    id: 'emotes-1x',
    category: 'emotes',
    title: '1x Emote',
    image: '/portfolio/emotes-1x.jpg',
    square: true,
  },
  {
    id: 'female-crimson',
    category: 'female-vt',
    title: 'Crimson',
    image: '/portfolio/vt-crimson.png',
    portrait: true,
    ink: true,
    featured: true,
  },
  {
    id: 'female-bellhorn',
    category: 'female-vt',
    title: 'Bellhorn',
    image: '/portfolio/vt-bellhorn.png',
    portrait: true,
    ink: true,
  },
  {
    id: 'female-plushie',
    category: 'female-vt',
    title: 'Plushie Poppet',
    image: '/portfolio/vt-plushie-poppet.png',
    portrait: true,
  },
  {
    id: 'female-mothlight',
    category: 'female-vt',
    title: 'Mothlight',
    image: '/portfolio/vt-mothlight.png',
    portrait: true,
  },
  {
    id: 'female-apollaa',
    category: 'female-vt',
    title: 'Apollaa',
    image: '/portfolio/vt-apollaa.png',
    portrait: true,
  },
  {
    id: 'illust-island',
    category: 'illustration',
    title: 'Island Drift',
    image: '/portfolio/illust-island.jpg',
    cover: true,
    featured: true,
  },
  {
    id: 'illust-deepcar',
    category: 'illustration',
    title: 'Deep Car',
    image: '/portfolio/illust-deep-car.jpg',
    cover: true,
  },
  {
    id: 'illust-torii',
    category: 'illustration',
    title: 'Torii Flame',
    image: '/portfolio/illust-torii.jpg',
    cover: true,
  },
  {
    id: 'illust-throne',
    category: 'illustration',
    title: 'Throne Guitar',
    image: '/portfolio/illust-throne.jpg',
    cover: true,
  },
  {
    id: 'illust-arabian',
    category: 'illustration',
    title: 'Moonwatch',
    image: '/portfolio/illust-moonwatch.jpg',
    cover: true,
  },
  {
    id: 'illust-teashop',
    category: 'illustration',
    title: 'Jasmine Dragoon Tea Shop',
    image: '/portfolio/illust-tea-shop.jpg',
    cover: true,
  },
  {
    id: 'male-fallen',
    category: 'male-vt',
    title: 'Fallen Halo',
    image: '/portfolio/vt-fallen.png',
    portrait: true,
    featured: true,
  },
  {
    id: 'male-ember',
    category: 'male-vt',
    title: 'Ember',
    image: '/portfolio/vt-ember.png',
    portrait: true,
  },
  {
    id: 'male-conductor',
    category: 'male-vt',
    title: 'Conductor',
    image: '/portfolio/vt-conductor.png',
    portrait: true,
  },
  {
    id: 'male-orbit',
    category: 'male-vt',
    title: 'Orbit',
    image: '/portfolio/vt-orbit.png',
    portrait: true,
    ink: true,
  },
  {
    id: 'male-catboy',
    category: 'male-vt',
    title: 'Cat Track',
    image: '/portfolio/vt-catboy.png',
    portrait: true,
  },
  {
    id: 'male-peacock',
    category: 'male-vt',
    title: 'Peacock',
    image: '/portfolio/vt-peacock.png',
    portrait: true,
  },
  {
    id: 'male-redblade',
    category: 'male-vt',
    title: 'Redblade',
    image: '/portfolio/vt-redblade.png',
    portrait: true,
  },
  {
    id: 'male-dino',
    category: 'male-vt',
    title: 'Dino Sprout',
    image: '/portfolio/vt-dino.png',
    portrait: true,
  },
  {
    id: 'pfp-ember',
    category: 'pfp',
    title: 'Ember',
    image: '/portfolio/pfp-ember.jpg',
    square: true,
    featured: true,
  },
  {
    id: 'pfp-conductor',
    category: 'pfp',
    title: 'Conductor',
    image: '/portfolio/pfp-conductor.jpg',
    square: true,
  },
  {
    id: 'pfp-nightglass',
    category: 'pfp',
    title: 'Nightglass',
    image: '/portfolio/pfp-nightglass.jpg',
    square: true,
    ink: true,
  },
  {
    id: 'pfp-catboy',
    category: 'pfp',
    title: 'Cat Fedora',
    image: '/portfolio/pfp-catboy.jpg',
    square: true,
  },
  {
    id: 'pfp-turtleneck',
    category: 'pfp',
    title: 'Turtleneck',
    image: '/portfolio/pfp-turtleneck.jpg',
    square: true,
  },
  {
    id: 'pfp-bellhorn',
    category: 'pfp',
    title: 'Bellhorn',
    image: '/portfolio/pfp-bellhorn.jpg',
    square: true,
  },
  {
    id: 'pfp-heart',
    category: 'pfp',
    title: 'Heart Hands',
    image: '/portfolio/pfp-heart.jpg',
    square: true,
  },
  {
    id: 'ref-ember',
    category: 'reference-sheet',
    title: 'Ember · Ref Sheet',
    image: '/portfolio/ref-ember.jpg',
    square: true,
    featured: true,
  },
  {
    id: 'ref-conductor',
    category: 'reference-sheet',
    title: 'Conductor · Ref Sheet',
    image: '/portfolio/ref-conductor.jpg',
    square: true,
  },
]

export const stats = [
  {
    title: 'VTuber Craft',
    copy: 'Live2D, 3D, and stream-ready models built for performance and personality.',
  },
  {
    title: 'Custom Design',
    copy: 'Original characters, branding, and illustration systems made only for you.',
  },
  {
    title: 'Motion First',
    copy: 'Animation, overlays, and looping graphics that feel alive on stream.',
  },
  {
    title: 'Direct Revisions',
    copy: 'Clear milestones from sketch to finish, with transparent feedback at every stage.',
  },
]

export const services = [
  {
    tag: '01',
    title: 'VTuber Models',
    copy: 'Expressive Live2D and 3D avatars with clean topology, charming faces, and performance-ready rigs.',
    points: ['Live2D cutouts', '3D chibi & full models', 'Physics & expressions'],
  },
  {
    tag: '02',
    title: 'Character Design',
    copy: 'Signature looks, outfits, and lore-ready silhouettes that make a creator instantly recognizable.',
    points: ['Concept sheets', 'Outfit variants', 'Reference packs'],
  },
  {
    tag: '03',
    title: 'Animation',
    copy: 'Character loops, intro sequences, and cinematic motion that give your persona a pulse.',
    points: ['Idle & emote loops', 'Intro / outro films', 'Rig polish'],
  },
  {
    tag: '04',
    title: 'Motion Graphics',
    copy: 'Stream overlays, alerts, stingers, and brand motion that feel premium without looking noisy.',
    points: ['Overlay systems', 'Alerts & stingers', 'Logo motion'],
  },
  {
    tag: '05',
    title: 'Stream Branding',
    copy: 'Panels, screens, thumbnails, and a visual language that stays consistent across every platform.',
    points: ['Screens & panels', 'Thumbnail kits', 'Social assets'],
  },
  {
    tag: '06',
    title: 'Illustration',
    copy: 'High-finish character art, key visuals, and merch-ready pieces for launches and collabs.',
    points: ['Key visuals', 'Merch art', 'Splash illustrations'],
  },
]

export const getCategory = (id) => portfolioCategories.find((category) => category.id === id)

export const featuredWorks = portfolioItems.filter((item) => item.featured)

export const steps = [
  {
    n: '01',
    title: 'Brief',
    copy: 'Share the vibe, references, and how your character should feel on stream.',
  },
  {
    n: '02',
    title: 'Concept',
    copy: 'Silhouettes, color stories, and expression tests until the persona clicks.',
  },
  {
    n: '03',
    title: 'Craft',
    copy: 'Final art, model build, and clean layers prepared for animation or rigging.',
  },
  {
    n: '04',
    title: 'Motion',
    copy: 'Physics, loops, overlays, and polish so everything moves with intention.',
  },
  {
    n: '05',
    title: 'Deliver',
    copy: 'Export packs, usage notes, and revision space so you launch with confidence.',
  },
]

export const reviews = [
  {
    name: 'Luna Vex',
    role: 'Independent VTuber',
    quote:
      'Allyse built a model that actually feels like me. The face tracking is soft, the outfit reads on camera, and the motion pack made launch day effortless.',
  },
  {
    name: 'Northwave Studio',
    role: 'Talent agency',
    quote:
      'Clean communication, gorgeous design, and animation that doesn’t fight the stream. Our talent looked premium from the first overlay.',
  },
  {
    name: 'Kite',
    role: 'Twitch partner',
    quote:
      'The branding and alerts feel custom, not templated. People still ask who made the intro weeks later.',
  },
]

export const faqs = [
  {
    q: 'What kind of commissions do you take?',
    a: 'VTuber models, character design, animation, motion graphics, and full stream branding. If it helps a persona look and move like themselves, it is in scope.',
  },
  {
    q: 'Do you work in both Live2D and 3D?',
    a: 'Yes. Allyse builds Live2D cutouts and 3D models, including chibi avatars like the signature pink hoodie look, plus the motion that brings them online.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most character and branding packages land in 3–8 weeks depending on complexity, revisions, and whether animation or a full overlay system is included.',
  },
  {
    q: 'Can I request a commercial license?',
    a: 'Yes. Streaming, VODs, merch, and agency use can be licensed. Commercial terms are written into the brief before work starts.',
  },
  {
    q: 'How do revisions work?',
    a: 'Each milestone includes a revision window. Feedback is collected in one pass so the design stays sharp and the timeline stays honest.',
  },
]

export const marquee = [
  'VTuber Models',
  'Live2D',
  '3D Characters',
  'Animation',
  'Motion Graphics',
  'Stream Overlays',
  'Character Design',
  'Illustration',
  'Brand Systems',
  'Rigs & Physics',
]
