# PlantPulse
Designed and built a responsive static dashboard that turns fictional factory output, quality and downtime data into operational summaries. Used vanilla JavaScript to render production-line data and created an explainable, rule-based quality alert with evidence and limitations shown in the interface. Deployed as a static site on Netlify.

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
