# Jody Mohamed — Personal Portfolio

A creative editorial portfolio for documenting Jody Mohamed’s learning journey across technology, STEM, cybersecurity, innovation, youth leadership, and languages.

## Edit the portfolio

The site content is intentionally separated from the visual design:

- `src/data/profile.js` — name, introduction, links, and quote
- `src/data/projects.js` — project cards and evidence links
- `src/data/experiences.js` — timeline entries and participation status
- `src/data/achievements.js` — milestone records
- `src/data/certificates.js` — certificate details and file paths
- `src/data/skills.js` — technical skills, personal skills, interests, and languages

Add a new item by copying the shape of an existing item in the matching file. Empty links are shown as “to be added” so the portfolio never presents placeholder contact details as real information.

## Certificate files

Place certificate PDFs or images inside `public/certificates/`, then reference them from `src/data/certificates.js` with a path beginning with `/certificates/`.

## GitHub Pages

The included GitHub Actions workflow builds and publishes the `dist` folder whenever changes are pushed to the `main` branch. In the repository settings, choose **GitHub Actions** as the Pages source.

## Local development

Install dependencies with `npm install`, then use the project’s normal Vite development workflow. A production build can be checked with `npm run build`.
