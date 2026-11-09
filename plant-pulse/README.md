# Plant Pulse

A beginner-friendly portfolio project: a production insights dashboard for a fictional South African vehicle plant. It uses plain HTML, CSS and JavaScript, so there is no build step, API key, database or paid service. The folder can be deployed directly to Netlify.

> **Portfolio honesty:** This is an independent learning project. It is not affiliated with BMW Group, does not use BMW data, and does not represent a live factory system. All names and metrics are fictional.

## What it demonstrates

- Turning operational data into readable metrics and a production chart.
- Rendering a table of line status from a JavaScript data array.
- A transparent, rule-based “insight” that shows the evidence and threshold behind its alert.
- Responsive layout, accessible dialog controls, and basic interactions.
- Clear communication of what the demo can and cannot conclude.

## How to explore it

Open `index.html` in a browser. Hover the bars to see the hourly output. Use “How did we spot this?” to see the alert calculation. The sidebar links scroll to the line table and insight card.

## How the insight works

The demo compares a fictional Line 2 reject rate before and after a shift handover: 2.1% before and 5.4% after. The difference is 3.3 percentage points. A simple rule flags a change greater than 2 percentage points. This is explainable logic, not a trained machine-learning model. It does not prove that the handover caused the change; a human should investigate other explanations.

## Run locally

No install is needed. Double-click `index.html`, or serve this folder with any static web server. For example, from this folder run `python -m http.server 8000` and visit `http://localhost:8000`.

## Deploy to Netlify

1. Create a GitHub repository and upload the contents of this folder.
2. In Netlify, choose **Add new site → Import an existing project**, then connect the repository.
3. Leave the build command blank and set the publish directory to `.` (the repository root).
4. Deploy. Netlify serves `index.html` as the home page.

You can also use Netlify Drop to publish the folder without GitHub. For future updates, a connected GitHub repository is easier to maintain.

## A good first code tour

1. In `app.js`, change one of the fictional line objects and refresh the page.
2. Change `hourlyOutput` and observe the chart bars update.
3. Find the insight threshold text in `index.html`, then change the before/after sample rates and update the calculation and explanation together.
4. Open `styles.css` and change the accent color in `:root`.

## Portfolio description

**Plant Pulse — Production Insights Dashboard**  
Designed and built a responsive static dashboard that turns fictional factory output, quality and downtime data into operational summaries. Used vanilla JavaScript to render production-line data and created an explainable, rule-based quality alert with evidence and limitations shown in the interface. Deployed as a static site on Netlify.

### Explain it in an interview

“I built a small production dashboard to practise making operational data easier to act on. It displays output, efficiency and quality, and flags a sample quality change around a shift handover. I chose a simple rule so the alert is easy to inspect and explain. The data is fictional, and the alert points to something to investigate rather than claiming cause and effect. I used HTML, CSS and JavaScript and deployed the static site on Netlify.”

## Ideas for a second version

- Import a CSV file instead of keeping the sample data in `app.js`.
- Add a date filter and a line selector.
- Add a small chart that compares reject rates by shift.
- If experimenting with a real AI API later, keep its key on a server-side function (never in front-end JavaScript) and label generated suggestions clearly.

## Programme context

The BMW Group SA Graduate Programme 2027 advert lists technology, data and analytics, engineering, operations and supply-chain related fields, and calls out analytical thinking, collaboration, communication and initiative. This project can be tailored to his degree area; it is a portfolio example, not an application requirement. The advert gives a closing date of **13 November 2026**. Check the official [BMW Group job listing](https://jobs.bmwgroup.com/job/BMW-Group-SA-Graduate-Programme-2027/199689-en_US) for current application details.
