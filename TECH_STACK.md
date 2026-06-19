# Africa Healing Network Tech Stack

## Application

- **Architecture:** Static single-page website
- **HTML:** Semantic HTML5 in `index.html`
- **Styling:** Custom responsive CSS in `styles.css`
- **Client-side logic:** Vanilla JavaScript in `script.js`
- **Icons:** Font Awesome 6.4.0, loaded from cdnjs
- **Media:** Local JPG, JPEG, PNG, WebP, and GIF assets stored in the project
- **Build step:** None required
- **Package manager:** None required for the production website

## Website Features

- Responsive desktop and mobile layouts
- Searchable spiritual-service catalogue with image results
- Client-side shopping cart and total calculation
- Payment-method selection and payment instructions
- WhatsApp deep links with prefilled cart and receipt messages
- Telephone and external social/contact links

## Hosting And Deployment

- **Hosting provider:** Vercel
- **Vercel account:** `jjingohenry@gmail.com`
- **Vercel team:** `jjingohenry-s-projects`
- **Vercel project:** `africahealingnetwork`
- **Production domain:** `https://africahealingnetwork.com`
- **SSL/TLS:** Managed automatically by Vercel
- **Deployment type:** Static production deployment through the Vercel CLI

## Source Control

- **Version control:** Git
- **Repository host:** GitHub
- **Repository name:** `africahealingnetwork`
- **GitHub owner:** `jjingohenry-ops`
- **Previous GitHub owner:** `dylansoG`
- **Repository URL:** `https://github.com/jjingohenry-ops/africahealingnetwork`

The local clone uses the transferred repository as its `origin`:

```bash
git remote set-url origin https://github.com/jjingohenry-ops/africahealingnetwork.git
```

## External Services

- **WhatsApp:** `https://api.whatsapp.com/send` links for enquiries and receipts
- **Font Awesome:** Icon font delivered through cdnjs
- **DNS:** Custom domain points to Vercel
- **Payment options shown:** RIA, Western Union, Sendwave, MoneyGram, Remitly, Taptap, and PayPal

## Project Files

- `index.html` - page structure and content
- `styles.css` - visual design and responsive layout
- `script.js` - search, cart, payment, and WhatsApp behavior
- `assets/services/` - service and payment images
- `PHOTO-2026-04-24-17-01-25.jpg` - primary brand image
- `.vercel/project.json` - local Vercel project link
- `netlify.toml` - legacy hosting configuration; Vercel is the active host
