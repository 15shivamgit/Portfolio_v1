# Contact form

The form in `src/pages/Contact.jsx` posts directly from the browser to Web3Forms, which emails the message to the address registered for the key.

## Setup

1. Get an access key from [web3forms.com](https://web3forms.com).
2. For local work, copy `.env.example` to `.env` and set `VITE_WEB3FORMS_KEY`.
3. For the live site, add the same variable in Vercel under Settings, Environment Variables, then redeploy. Vite reads it at build time, so existing deployments do not change.

The key is visible in the site's JavaScript. Web3Forms designs these keys for client-side use. If a key is abused, generate a new one and repeat steps 2 and 3.

## How it behaves

| Situation | What the visitor sees |
|---|---|
| Sending | Spinner on the button |
| API confirms success | "Message sent", confetti, form cleared, then back to idle after 5 seconds |
| API or network failure | Error with the email address. Typed text stays. |
| Key missing from the build | "The form isn't connected yet", with the email address |
| Honeypot field filled | Nothing is sent, and no message is shown |

## Testing

Web3Forms rejects headless browsers and server-side calls. In testing, a headless browser and `curl` were both refused, and a visible browser succeeded (D-016).

- **Automated tests:** mock `https://api.web3forms.com/submit`.
- **Real delivery:** use a normal, visible browser and check the inbox.

Real tests send real email, so keep them few.

## Troubleshooting

| Symptom | Check |
|---|---|
| "Isn't connected yet" on the live site | The variable is missing in Vercel, or there has been no redeploy since it was added |
| "That didn't go through" | Open the browser console and network tab. Check the Web3Forms status and the plan's limits. |
| Sent, but no email arrives | Check spam, and the email registered on the Web3Forms key |
