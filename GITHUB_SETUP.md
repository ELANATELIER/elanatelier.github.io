# Elan Atelier URL + Your Name on Other Repos

## What you want

1. **Elan Atelier website URL** → Show **elanatelier** only (e.g. `elanatelier.github.io`), not your personal username.
2. **Other repos you work on** → When you commit, they see **Pushpinder Kaur** (your name), not "Elan Atelier" or a username.

---

## How to do it

### Part 1: Your name on other repos (commits show "Pushpinder Kaur")

**On your computer (once):**

```powershell
git config --global user.name "Pushpinder Kaur"
git config --global user.email "your-email@example.com"
```

Use the **same email** you use for your GitHub account so commits link to your profile.

**On GitHub (profile):**

1. Go to **github.com** → your profile picture → **Settings** → **Profile** (or **Public profile**).
2. Set **Name** to **Pushpinder Kaur**.
3. Leave your **username** as **pushpinderkaur9852** (do not change it to elanatelier).

Result: In repos you don’t own, your commits will show **Pushpinder Kaur** and link to your profile (pushpinderkaur9852). Nobody sees "Elan Atelier" or elanatelier as your identity there.

---

### Part 2: Elan Atelier site URL with "elanatelier" only (no personal username)

**Do not** change your personal GitHub username to elanatelier — that would make "elanatelier" appear everywhere, including on other repos.

**Do this instead:** use a **GitHub Organization** named **elanatelier**, then **transfer your existing repo** into it. No need to create a new repo or re-upload code.

**Steps:**

1. **Create an organization**
   - Go to **github.com** → your profile picture (top right) → **Your organizations** → **Create organization** (or go to github.com/organizations/plan).
   - Choose **Free**.
   - **Organization name:** `elanatelier` (this will be in the URL).
   - Contact email: yours. Finish creation.

2. **Transfer your existing Elan Atelier repo into the org**
   - Open your **existing** repo (e.g. **pushpinderkaur9852/ELANATELIER** or **pushpinderkaur9852/elanatelier**).
   - Go to **Settings** → scroll to **Danger Zone** → **Transfer ownership**.
   - In "New owner", type **elanatelier** (your new organization).
   - Type the repo name to confirm, then click **I understand, transfer this repository**.
   - GitHub will redirect the old URL to the new one (e.g. **elanatelier/ELANATELIER**). Your code, history, and branches stay as they are.

3. **Update your local git remote** (after transfer)
   - On your computer, in the ElanAtelier folder:
   - `git remote set-url origin https://github.com/elanatelier/REPO_NAME.git`
   - (Replace **REPO_NAME** with the actual repo name, e.g. **ELANATELIER** or **elanatelier**.)

4. **Turn on GitHub Pages** (if not already on)
   - In the repo (now under **elanatelier**): **Settings** → **Pages** → Source: **Deploy from a branch** → Branch: **main** → **/ (root)** → Save.

5. **Update your site’s canonical URL**
   - In **index.html**, set the canonical and `og:url` to your new URL, e.g.:
     - **https://elanatelier.github.io** (if the repo name is **elanatelier.github.io**), or
     - **https://elanatelier.github.io/ELANATELIER/** (if the repo name is **ELANATELIER**).

Result: The Elan Atelier site URL uses **elanatelier** only. Your existing repo is just moved under the org — no re-import or new repo needed. Your personal account (pushpinderkaur9852) and your name (Pushpinder Kaur) stay the same everywhere else.

---

## Summary

| Goal | What to do |
|------|------------|
| Other repos see **Pushpinder Kaur** on commits | `git config --global user.name "Pushpinder Kaur"` and set **Name** on GitHub profile to Pushpinder Kaur. Keep username pushpinderkaur9852. |
| Elan Atelier URL shows **elanatelier** only | Create **Organization** “elanatelier”, put the site repo there (elanatelier.github.io or ELANATELIER), enable Pages. Do **not** rename your personal account to elanatelier. |
