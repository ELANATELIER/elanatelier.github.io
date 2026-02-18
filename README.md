# Elan Atelier — Party Décor & Event Backdrops

A single-page business website for **Elan Atelier**, a party decoration and event backdrops business. White and beige theme with sections: About, Services, Packages, and Contact (including a form that can send inquiries to your business email).

## Quick start

1. Open `index.html` in your browser (double-click or right-click → Open with → your browser).
2. Or run a local server: `npx serve .` then visit the URL shown (e.g. http://localhost:3000).

No build step or dependencies required.

## What’s included

- **Hero** — Tagline and “Get a quote” call-to-action.
- **About** — Company info for your party decoration business.
- **Services** — Custom Backdrops, Full Event Styling, Balloon & Florals, Setup & Teardown.
- **Packages** — Essential, Premium, and Full Event tiers (edit names and features in `index.html`).
- **Contact** — Your email, phone, and location plus an inquiry form.

## Receiving form submissions on your business email

The contact form can send inquiries directly to your email using **Formspree** (free tier: 50 submissions/month).

1. Go to [formspree.io](https://formspree.io) and sign up (or log in).
2. Click **New form**, name it (e.g. “Elan Atelier inquiries”), and set the email where you want to receive messages.
3. Copy your form endpoint (e.g. `https://formspree.io/f/xyznabcq`).
4. In `index.html`, find the contact form and replace `action="#"` with your Formspree URL:

   ```html
   <form class="contact-form" action="https://formspree.io/f/yourformid" method="post" id="contact-form">
   ```

5. Save and upload your site. When someone submits the form, you’ll get an email with their name, email, phone, event type, date, and message.

Until you set the form `action` to your Formspree URL, the form will show a “thank you” message without sending an email.

## Customizing

- **Contact details**: In `index.html`, update the email, phone, and location in the Contact section.
- **Copy**: Edit hero tagline, About text, service descriptions, and package names/features in `index.html`.
- **Colors**: In `styles.css`, the `:root` variables control the white/beige theme (`--bg`, `--bg-soft`, `--surface`, `--accent`, etc.).
- **Packages**: Change package names, bullet points, and add prices in the Packages section of `index.html` if you like.

## File structure

```
ElanAtelier/
├── index.html    # Page structure and content
├── styles.css    # White & beige theme, layout
├── script.js     # Header scroll, mobile menu, form behavior
└── README.md     # This file
```

You can host this folder on any static host (Netlify, Vercel, GitHub Pages, etc.).
