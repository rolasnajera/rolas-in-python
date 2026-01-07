# Rolas in Python

A Docusaurus-based learning platform for mastering Python, featuring fundamentals and interview preparation.

## Getting Started

To run the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Project Structure

- `docs/`: Contains modules (Fundamentals, Interview Prep).
- `blog/`: Contains blog posts.
- `solutions/`: Mirrors `docs/` with Python solution files.
- `src/`: Custom React pages and CSS.
- `docusaurus.config.ts`: Main site configuration.

## Deployment

This project is configured to deploy to GitHub Pages automatically via GitHub Actions on push to the `main` branch.
See `.github/workflows/deploy.yml` for details.
