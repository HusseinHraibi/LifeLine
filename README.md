# Lifeline

Your Blood Donation and Health Companion in Lebanon.

Lifeline is a React frontend for browsing blood requests, filtering by blood type, adding a request, and checking potential red blood cell compatibility.

Developed by Hussein Hraibi for CSCI426 Advanced Web Programming, Phase 1, at LIU Beirut.

## Pages

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Introduction and links to the main features |
| About | `/about` | Lifeline's purpose |
| Features | `/features` | Overview of the available features |
| Contact | `/contact` | Contact form with validation |
| Blood Requests | `/requests` | Requests, filtering, add-request form, and compatibility checker |

## Features

- Shared navbar and footer on all five pages.
- Responsive layouts using plain CSS and media queries.
- Request cards showing blood type, hospital, location, and units needed.
- Exact blood-type filtering, request count, and an empty-results message.
- A form that checks required fields and positive whole-number units.
- New requests appear first and display "Your request" instead of a donation button.
- An inline checker for potential ABO/Rh red blood cell compatibility.
- Contact form validation with on-screen feedback.
- Locally stored Source Sans 3 fonts.

## Technologies

React, JavaScript (JSX), React Router DOM 6, HTML, plain CSS, Create React App, and Git.

The code uses functional components, props, `useState`, named event handlers, object-based form state, `.map()`, and `.filter()`.

## Setup

Install Node.js and npm first. Development was checked with Node.js 24.22.0 and npm 11.19.1 on Windows.

Open a terminal in the folder containing this README and `package.json`. In the current workspace, that folder is `CSCI426-Project1/lifeline`.

Install dependencies from the lockfile:

```sh
npm ci
```

Start the development server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000), or the address printed in the terminal if another port is selected. Stop the server with Ctrl+C.

On Windows PowerShell, use `npm.cmd` instead of `npm` if script execution is blocked.

Create a production build:

```sh
npm run build
```

The generated website files are written to `build/`. No environment variables or backend setup are required.

## Project structure

```text
public/                 HTML entry file, browser title, and favicon
src/
  assets/fonts/         Local fonts and their license
  components/           Navbar, footer, request cards, and forms
  data/                 Local requests and compatibility lookup
  pages/                Home, About, Features, Contact, Requests
  styles/               Component and page styles
  App.js                Routes and shared layout
  index.js              React entry point
  index.css             Fonts and global styles
```

## Frontend scope

Hospital names refer to real institutions, but the listed requests and unit quantities are fictional. Their inclusion does not indicate a partnership or an actual hospital request. The initial records are in Beirut; the request form accepts other locations in Lebanon.

Added requests exist only in the Requests page's React state. Leaving that page or reloading resets them. The "Your request" label applies to entries created during that visit; there are no accounts or identity checks.

The compatibility checker provides general red blood cell ABO/Rh information. It does not assess donation eligibility, book donations, or replace hospital screening and cross-matching. Plasma and platelet rules are different.

The contact form validates input but does not send email or store messages. There is no backend, database, authentication, or external data API.

## Screenshots

### Home

![Lifeline Home page](docs/screenshots/home.png)

### Add a blood request

![Form for adding a blood request](docs/screenshots/request-form.png)

### Blood requests

![Blood request list with filter and donation buttons](docs/screenshots/requests.png)

### Contact

![Contact form](docs/screenshots/contact.png)

## Deployment

Not deployed yet. Add the verified live URL here after publishing.

The build command is `npm run build` and the output directory is `build`. If the repository contains the parent workspace folder, set the hosting root directory to `lifeline`.

React Router uses browser paths. Configure the host to serve `index.html` for routes such as `/requests` and `/contact`, then verify that refreshing those addresses works.

## Credits

- [Source Sans 3 by Adobe](https://github.com/adobe-fonts/source-sans), under the SIL Open Font License 1.1. License included in `src/assets/fonts/LICENSE.md`.
- [American Society of Hematology: Blood Safety and Matching](https://www.hematology.org/Resources/Patients/Blood-Basics/Blood-Banking-and-Donation/Blood-Safety-and-Matching), used for the red blood cell compatibility lookup.
- Hospital references: [American University of Beirut](https://www.aub.edu.lb/), [Hotel-Dieu de France](https://www.hdf.usj.edu.lb/en/contact-us), and [Saint George Hospital](https://www.stgeorgehospital.org/).
- Initialized with Create React App, following the React approaches summarized in the CSCI426 classroom material. No pre-built website template was used.
- The letter favicon is an SVG created for Lifeline.

## Solo contribution

Hussein Hraibi is the sole student contributor. The final contribution statement and report should describe the completed work and acknowledge assistance according to course rules.
