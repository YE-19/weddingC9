import p1 from '../assets/p1.jpg';

export const invitationConfig = {
  // Couple details (Youssef & Menna)
  couple: {
    groom: "Youssef",
    groomTitle: "GROOM",
    bride: "Menna",
    brideTitle: "BRIDE",
    coverGroom: "Youssef",
    coverBride: "Menna",
    primary: "Youssef & Menna",
    initials: "Y & M",
    monogram: "YM",
    eventTitle: "THE ENGAGEMENT OF",
    ceremonyHeader: "ENGAGEMENT CEREMONY INFO",
    announcementLine1: "WE JOYFULLY ANNOUNCE",
    announcementLine2: "THE ENGAGEMENT OF OUR CHILDREN",
    partyHeader: "THE ENGAGEMENT PARTY WILL TAKE PLACE AT:",
    quote: "Together with our families, we joyfully invite you to celebrate our engagement.",
  },

  // Date & Time (Sunday, 1 November 2026 at 7:00 PM)
  eventDate: {
    display: "November 1, 2026",
    dayOfWeek: "SUNDAY",
    dayNumber: "1",
    monthName: "NOVEMBER",
    year: "2026",
    time: "7:00 PM",
    welcomeTime: "7:00 PM",
    receptionTime: "7:00 PM",
    targetIso: "2026-11-01T19:00:00",
    monthIndex: 10, // 0-based: November = 10
    highlightDay: 1,
  },

  // Venue details (Diamond Land)
  venue: {
    name: "Diamond Land",
    subtitle: "Diamond Land Venue",
    address: "",
    city: "Egypt",
    googleMapsLink: "https://maps.app.goo.gl/Uvkm4WrHM7CKcy2c9?g_st=aw",
    mapEmbedUrl: "https://maps.google.com/maps?q=Diamond+Land&hl=en&z=15&output=embed",
    image: null,
  },

  // Photos (p1 only)
  gallery: [
    {
      id: 1,
      role: "Couple",
      src: p1,
      title: "Youssef & Menna",
    },
  ],

  // Schedule / Timeline
  timeline: [
    { time: "19:00", title: "Welcome & Gathering" },
    { time: "20:00", title: "Ring Exchange & Ceremony" },
    { time: "21:00", title: "Celebration & Music" },
    { time: "22:30", title: "Photos & Cake" },
  ],
};


