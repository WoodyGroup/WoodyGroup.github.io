/**
 * people.js — Lab members database
 *
 * To add or update a member:
 *   1. Find the right section (faculty / phd_students / postdocs / alumni).
 *   2. Copy a person object and fill in the fields.
 *   3. Save — people.html renders automatically from this file.
 *
 * Fields:
 *   name     — string, required
 *   initials — 2-letter string for avatar fallback, required
 *   photo    — (optional) relative path to a photo, e.g. "assets/images/people/woody.jpg"
 *              Upload your photo to the assets/images/people/ folder, then set this field.
 *              Supported formats: jpg, jpeg, png, webp.
 *              Recommended size: 400×400 px (square). The page will crop to square automatically.
 *              Leave as "" or omit to show initials instead.
 *   role     — string displayed under name, required
 *   bio      — string, short paragraph (leave "" if not yet written)
 *   links    — array of { label, url }
 *              common labels: "Website", "Email", "Google Scholar", "LinkedIn", "GitHub"
 */

const PEOPLE = {

  faculty: [
    {
      name: "Shixiang (Woody) Zhu",
      initials: "WZ",
      photo: "",   // e.g. "assets/images/people/woody.jpg"
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
      photo: "",   // e.g. "assets/images/people/wei-gu.jpg"
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
      photo: "",   // e.g. "assets/images/people/wenbin-zhou.jpg"
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
      photo: "",   // e.g. "assets/images/people/shuyi-chen.jpg"
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
      photo: "",   // e.g. "assets/images/people/minxing-zheng.jpg"
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
      photo: "",   // e.g. "assets/images/people/jane-doe.jpg"
      role: "PhD 2025 → Postdoc at MIT",
      bio: "",
      links: [
        { label: "Website", url: "https://example.com" }
      ]
    }
    */
  ]

};
