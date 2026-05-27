/**
 * people.js — Lab members database
 *
 * To add or update a member:
 *   1. Find the right section (faculty / phd_students / postdocs / alumni).
 *   2. Copy a person object and fill in the fields.
 *   3. Save — people.html renders automatically from this file.
 *
 * Fields:
 *   name    — string, required
 *   initials — 2-letter string for avatar, required
 *   role    — string displayed under name, required
 *   bio     — string, short paragraph (leave "" if not yet written)
 *   links   — array of { label, url }
 *             common labels: "Website", "Email", "Google Scholar", "LinkedIn", "GitHub"
 */

const PEOPLE = {

  faculty: [
    {
      name: "Shixiang (Woody) Zhu",
      initials: "WZ",
      role: "Assistant Professor, Carnegie Mellon University",
      bio: "Woody's research focuses on decision-focused machine learning, robust optimization, and their applications to energy systems and high-stakes decision-making. He joined Carnegie Mellon University as an Assistant Professor in 2024.",
      links: [
        { label: "Website", url: "https://www.andrew.cmu.edu/user/shixianz/" },
        { label: "Email",   url: "mailto:shixianz@andrew.cmu.edu" }
      ]
    }
  ],

  postdocs: [
    {
      name: "Wei Gu",
      initials: "WG",
      role: "Postdoctoral Researcher",
      bio: "",
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/wei-gu-524341154" }
      ]
    }
  ],

  phd_students: [
    {
      name: "Wenbin Zhou",
      initials: "WZ",
      role: "PhD Student",
      bio: "",
      links: [
        { label: "Website",        url: "https://wbzhou2001.github.io/" },
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=4W-7bJgAAAAJ&hl=en" }
      ]
    },
    {
      name: "Shuyi Chen",
      initials: "SC",
      role: "PhD Student",
      bio: "",
      links: [
        { label: "Website",        url: "https://shuyiryanchen.github.io/" },
        { label: "Google Scholar", url: "https://scholar.google.com/citations?user=culGbtkAAAAJ&hl=en" }
      ]
    },
    {
      name: "Minxing Zheng",
      initials: "MZ",
      role: "PhD Student",
      bio: "",
      links: [
        { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=f8xblKQAAAAJ&view_op=list_works&sortby=pubdate" }
      ]
    }
  ],

  alumni: [
    /* Example entry — remove this comment and add real alumni when needed:
    {
      name: "Jane Doe",
      initials: "JD",
      role: "PhD 2025 → Postdoc at MIT",
      bio: "",
      links: [
        { label: "Website", url: "https://example.com" }
      ]
    }
    */
  ]

};
