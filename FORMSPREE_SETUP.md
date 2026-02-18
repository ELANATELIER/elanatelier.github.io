# Receive form submissions in your email (Formspree)

Follow these steps so inquiries from your website are sent to **elanatelier.ea@gmail.com**.

## 1. Create a Formspree account and form

1. Go to **https://formspree.io** and click **Get Started** (or **Sign up**).
2. Sign up with your email (e.g. elanatelier.ea@gmail.com) or Google.
3. In the Formspree dashboard, click **+ New form**.
4. Give it a name (e.g. "Elan Atelier contact") and set the **Email** to **elanatelier.ea@gmail.com** (or leave default).
5. Click **Create form**.

## 2. Copy your form URL

After creating the form, Formspree shows your **form endpoint**. It looks like:

- `https://formspree.io/f/xyznabcq`  
  (the part after `/f/` is your form ID – yours will be different)

Copy the **full URL**.

## 3. Paste the URL into your website

1. Open **index.html** in your project.
2. Find the contact form (search for `id="contact-form"` or `action="#"`).
3. Replace `action="#"` with your Formspree URL.

**Before:**
```html
<form class="contact-form" action="#" method="post" id="contact-form">
```

**After (use your real URL from Formspree):**
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="post" id="contact-form">
```

Save the file.

## 4. Test it

1. Open your website (e.g. double‑click **index.html** or open your live site).
2. Go to the Contact section and fill out the form with a test message.
3. Click **Send inquiry**.
4. Check **elanatelier.ea@gmail.com** – you should receive the submission there (and possibly a Formspree confirmation email).

After this, the “To receive real emails, set up Formspree…” message will no longer appear; the form will send submissions to Formspree and Formspree will email you.

---

**Note:** Formspree free plan has a limit (e.g. 50 submissions per month). For more, see their pricing.
