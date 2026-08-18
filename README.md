# Mulenga Corps Website

**Course:** Interactive Web Development (IWD)
**Student Name:** Christopher Mulenga
**SIN:** 2510521860
**Institution:** Information and Communications University (ICU)
**Project:** Mulenga Corps Website
**Inspiration:** Zambia Library, Cultural and Skills Centre for the Visually Impaired (ZLCSCVI), Chilenje, Lusaka

---

## 1. Project Overview

The **Mulenga Corps Website** is a responsive institutional website developed as part of the **Interactive Web Development (IWD)** course at the Information and Communications University (ICU).

The project demonstrates the practical use of **HTML5, CSS3 and Vanilla JavaScript** to create a responsive, accessible and interactive web platform.

The website is inspired by the work and community role of the **Zambia Library, Cultural and Skills Centre for the Visually Impaired (ZLCSCVI)** in Chilenje, Lusaka. The website presents information relating to visual impairment, literacy, accessibility, rehabilitation, skills development, community broadcasting and institutional services.

The project was developed with particular attention to responsive design and accessibility because the subject of the website relates directly to services for people with visual impairments.

---

## 2. Project Objectives

The main objectives of the project are to demonstrate the ability to:

* Design webpages using semantic HTML5.
* Apply CSS3 for visual design and responsive layouts.
* Use JavaScript to create interactive website functionality.
* Develop layouts that work across desktop, tablet and mobile devices.
* Apply basic web accessibility principles.
* Create keyboard-accessible navigation and interactive elements.
* Implement client-side form validation.
* Integrate an external form-processing service.
* Organize a multi-page website using a logical file structure.
* Apply modern web development practices using HTML, CSS and JavaScript.
* Use Git and GitHub for source-code management and project hosting.

---

## 3. Technologies Used

| Technology / Service          | Purpose                                                 |
| ----------------------------- | ------------------------------------------------------- |
| **HTML5**                     | Structure and semantic organization of webpages         |
| **CSS3**                      | Styling, layout, colours, typography and responsiveness |
| **Vanilla JavaScript (ES6+)** | Interactivity and dynamic functionality                 |
| **CSS Grid**                  | Responsive multi-column layouts                         |
| **Flexbox**                   | Navigation and component layouts                        |
| **Intersection Observer API** | Scroll-reveal animations                                |
| **Fetch API**                 | Client-side asynchronous operations                     |
| **Formspree**                 | Processing and receiving contact-form submissions       |
| **Google Fonts**              | Website typography                                      |
| **Git**                       | Version control                                         |
| **GitHub**                    | Repository management and hosting                       |

---

# 4. Website Structure

The website consists of several interconnected pages.

### Home — `index.html`

The homepage serves as the primary entry point to the website.

It contains:

* Site header and navigation.
* Hero section.
* Organizational introduction.
* Impact statistics.
* Department previews.
* Featured work and portfolio content.
* Calls to action.
* Footer.

The homepage presents key organizational statistics represented within the project, including:

* **Year Founded:** 1993
* **Departments:** 8
* **Staff:** 110+
* **Compounds Served:** 6

---

### About Us — `about.html`

The About Us page provides information about the organization's:

* History.
* Background.
* Mission.
* Vision.
* Objectives.
* Milestones.
* Leadership.
* Governance.
* Opportunities for partnerships and support.

The page identifies **Mr. Frederick C. Lungu** as Executive Director within the website's organizational content.

---

### Services — `services.html`

The Services page presents the major operational departments and services represented by the website.

#### Braille Transcription and Library Services

Services represented include:

* Conversion of printed educational materials into Braille.
* Braille preparation of examinations and learning materials.
* Transcription of books and other resources.
* Library services.
* Access to educational and informational materials.

#### Community Radio and Public Broadcasting

Activities represented include:

* Disability-awareness programmes.
* Educational broadcasting.
* Public information programmes.
* Accessibility and inclusion discussions.
* Interactive call-in programmes.
* Community engagement.

#### Rehabilitation and Vocational Skills

Services include:

* Orientation and Mobility (O&M).
* Daily living skills.
* Assistive technology training.
* Adaptive computer skills.
* Vocational skills development.
* Handcraft activities.
* Entrepreneurship preparation.
* Independence and self-reliance programmes.

#### Business Development and Community Outreach

Activities include:

* Institutional partnerships.
* Community engagement.
* Collaboration with government institutions.
* Collaboration with educational institutions.
* Community outreach programmes.
* Public awareness activities.

---

### Articles — `articles.html`

The Articles page provides educational and informational content related to visual impairment, accessibility and community development.

Featured topics include:

1. **The Enduring Power of Braille Literacy**

   * Focuses on Braille literacy, transcription and educational access.

2. **Broadcasting Inclusion**

   * Examines the role of community broadcasting in awareness and social inclusion.

3. **From Training to Independence**

   * Discusses rehabilitation, vocational skills and pathways toward independence.

---

### Portfolio — `portfolio.html`

The Portfolio page provides a visual presentation of selected work, activities and case-study-style content associated with the organization.

It is designed to demonstrate the use of:

* Image galleries.
* Responsive cards.
* Visual hierarchy.
* Interactive image viewing.
* Calls to action.

---

### Contact — `contact.html`

The Contact page provides visitors with ways to communicate with the organization.

It includes:

* Physical address.
* Telephone contacts.
* Email information.
* WhatsApp contact links.
* Contact form.
* Volunteer information.
* Donation information.
* Partnership information.

**Physical Address:**

Plot No. 4225, Chibululu Road, Chilenje, Lusaka, Zambia.

---

# 5. CSS Design System

The primary stylesheet is located at:

```text
assets/css/style.css
```

The stylesheet provides the visual foundation of the entire website.

## Primary Colour

The main brand colour is:

```text
#315B65
```

This deep teal colour is used as the principal visual identity across navigation, headings, buttons, accents and selected interface elements.

## Supporting Colours

| Colour       | Hex Value | Purpose                       |
| ------------ | --------- | ----------------------------- |
| Primary Teal | `#315B65` | Main brand colour             |
| Dark Teal    | `#1E3E45` | Dark backgrounds and emphasis |
| Brown        | `#7A5C3A` | Secondary accent              |
| Dark Brown   | `#4A3828` | Dark secondary accent         |
| Off White    | `#FDF8F3` | Soft background               |
| White        | `#FFFFFF` | Contrast and content areas    |

The colour system is intended to create a professional, calm and institutional appearance.

---

## Typography

The website uses:

**Display font:**

```text
Playfair Display, Georgia, serif
```

**Body font:**

```text
Roboto, sans-serif
```

The display typeface is primarily used for major headings, while the body typeface is used for paragraphs, navigation and interface elements.

---

# 6. Responsive Design

The website is designed to adapt to different screen sizes.

The CSS uses:

* CSS Grid.
* Flexbox.
* Media queries.
* Responsive units.
* `clamp()` for scalable typography.
* Flexible containers.

Major responsive breakpoints include:

| Breakpoint | Function                              |
| ---------- | ------------------------------------- |
| `1024px`   | Medium-screen and tablet adjustments  |
| `900px`    | Grid and component compaction         |
| `760px`    | Mobile navigation and stacked layouts |

On smaller screens, multi-column sections are progressively converted into simpler stacked layouts.

---

# 7. Accessibility

Accessibility is an important aspect of the project because the website is inspired by an institution serving people with visual impairments.

The implementation includes:

* Semantic HTML.
* Keyboard-accessible navigation.
* Skip navigation links.
* Visible keyboard focus indicators.
* Descriptive alternative text for images.
* Responsive typography.
* Clear heading hierarchy.
* Accessible links and buttons.
* Reduced-motion support.
* High-contrast interface elements.
* Screen-reader-friendly structural elements.

The CSS includes:

```css
:focus-visible
```

for keyboard focus indication and:

```css
@media (prefers-reduced-motion: reduce)
```

to accommodate users who prefer reduced animation.

The website also incorporates Braille-inspired visual elements as part of its design language.

---

# 8. JavaScript Functionality

The main JavaScript file is located at:

```text
assets/js/main.js
```

The project uses **Vanilla JavaScript (ES6+)** without a JavaScript framework.

The major JavaScript functions include the following.

### 8.1 Page Load Animations

Elements marked with animation-related data attributes can receive staged entrance effects when the page loads.

### 8.2 Mobile Navigation

JavaScript controls the mobile hamburger menu and navigation drawer.

It handles:

* Opening the menu.
* Closing the menu.
* Menu state.
* Body scroll locking.

### 8.3 Active Navigation

The script examines:

```javascript
window.location.pathname
```

to determine the current webpage and apply an active state to the relevant navigation link.

### 8.4 Smooth Scrolling

Internal links are handled to provide smooth movement to page sections while accounting for the fixed site header.

### 8.5 Scroll Reveal

The project uses the **Intersection Observer API** to detect when elements enter the viewport.

Elements using the `.reveal` class can then receive their corresponding entrance animation.

### 8.6 Animated Counters

Statistics marked with:

```text
[data-counter]
```

are animated from their starting value toward a target value.

### 8.7 Image Lightbox

Images marked with:

```text
[data-lightbox]
```

can be opened in an interactive lightbox.

The lightbox supports:

* Image viewing.
* Previous and next navigation.
* Keyboard navigation.
* Escape-key closing.

### 8.8 Contact Form Validation

JavaScript performs client-side validation of contact form fields before submission.

The form checks fields such as:

* Name.
* Email.
* Subject.
* Message.

---

# 9. Contact Form and Formspree Integration

The contact form uses **Formspree** as the external form-processing service.

Formspree allows the website to submit form information without requiring the project to have its own server-side application or database.

The general workflow is:

```text
Visitor
   ↓
Contact Form
   ↓
Client-side JavaScript Validation
   ↓
Formspree
   ↓
Form Submission Received
   ↓
Configured Recipient / Formspree Dashboard
```

The HTML form is configured with a Formspree submission endpoint.

A simplified example is:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

The actual Formspree endpoint used by the project should remain in the HTML source.

Using Formspree demonstrates the integration of a third-party web service into a static website. This is particularly useful for a GitHub Pages project because GitHub Pages does not provide a traditional server-side form-processing environment.

---

# 10. Interactive Components

The website contains several interactive components implemented through CSS and JavaScript.

These include:

* Mobile navigation menu.
* Active navigation indicators.
* Smooth scrolling.
* Scroll-reveal animations.
* Animated statistics.
* Image lightbox.
* WhatsApp floating button.
* Back-to-top button.
* Interactive contact form.
* Responsive service cards.
* Responsive department grids.

---

# 11. File Structure

The main project structure is organized as follows:

```text
Mulenga-Corps/
│
├── index.html
├── about.html
├── services.html
├── articles.html
├── portfolio.html
├── contact.html
│
├── assets/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│
└── README.md
```

The separation of CSS, JavaScript and image assets keeps the project organized and makes the source code easier to maintain.

---

# 12. HTML, CSS and JavaScript Relationship

The three main technologies work together as follows:

```text
HTML
  │
  │ Provides structure and content
  ↓
CSS
  │
  │ Controls appearance and responsive layout
  ↓
JavaScript
  │
  │ Adds interaction and dynamic behaviour
  ↓
Interactive Web Application
```

HTML provides the structural foundation, CSS controls presentation, and JavaScript provides client-side behaviour.

---

# 13. Academic Relevance

The project demonstrates several concepts covered by the Interactive Web Development course, including:

* HTML document structure.
* Semantic HTML.
* CSS selectors.
* CSS variables.
* Typography.
* Box model.
* Flexbox.
* CSS Grid.
* Responsive design.
* Media queries.
* JavaScript events.
* DOM manipulation.
* Form validation.
* Browser APIs.
* External service integration.
* Accessibility.
* User-interface design.

The project combines these concepts into a practical multi-page website rather than demonstrating them as isolated examples.

---

# 14. Development Approach

The website follows a component-oriented approach in which common interface patterns are reused across multiple pages.

Examples include:

* Shared navigation.
* Shared footer.
* Reusable buttons.
* Reusable cards.
* Common colour variables.
* Common typography rules.
* Reusable responsive grid systems.
* Shared JavaScript functionality.

This approach reduces unnecessary duplication and makes future maintenance easier.

---

# 15. External Services

The project integrates the following external services:

### Formspree

Used for processing contact-form submissions.

### Google Fonts

Used to provide the selected typography for the website.

The website itself remains primarily based on HTML, CSS and Vanilla JavaScript.

---

# 16. Project Author

**Student Name:** Christopher Mulenga
**SIN:** 2510521860
**Course:** Interactive Web Development (IWD)
**Institution:** Information and Communications University (ICU)

---

# 17. Conclusion

The Mulenga Corps Website demonstrates the practical application of Interactive Web Development principles through a responsive, multi-page and accessible institutional website.

The project combines semantic HTML5, CSS3, Vanilla JavaScript and external web services to provide a functional user experience.

Particular attention was given to responsive design and accessibility because the project is inspired by the Zambia Library, Cultural and Skills Centre for the Visually Impaired and its role in providing educational, rehabilitation, skills-development and community services to people with visual impairments.

# 18. Brand Identity and Logo Design

The Mulenga Corps logo and associated brand identity were designed using **Adobe Illustrator**. The original editable logo artwork is maintained as an Adobe Illustrator file and includes multiple logo variations developed for different applications and backgrounds.

The logo design incorporates a distinctive graphic mark representing the visual identity of Mulenga Corps, together with the organizational name and the tagline:

> **MULENGA CORPS**
> **Library • Culture • Skills**

The logo is intended to communicate the organization's connection to literacy, accessible information, cultural development and practical skills.

## 18.1 Logo Variations

The Illustrator artwork contains several variations of the logo, including:

* Primary coloured logo.
* Blue logo variation.
* Brown logo variation.
* Black monochrome logo.
* Light/off-white logo variation.
* Full horizontal logo containing the organizational name and tagline.

The availability of multiple variations allows the identity to remain usable across different backgrounds, documents, digital interfaces and printed materials.

## 18.2 Brand Colours

The colours used in the original logo artwork include:

| Colour         | Hex Value | Application                                     |
| -------------- | --------- | ----------------------------------------------- |
| Logo Blue      | `#0C3D62` | Primary logo/wordmark colour                    |
| Logo Brown     | `#8B5A2B` | Secondary logo and accent colour                |
| Logo Off-White | `#DDD7CC` | Light logo variation and supporting elements    |
| Black          | `#000000` | Monochrome logo                                 |
| White          | `#FFFFFF` | Reversed logo and light-background applications |

The blue and brown combination provides a visual balance between a professional institutional identity and a warmer, more human character.

## 18.3 Website Colour Relationship

The website uses a separate primary interface colour:

```text
#315B65
```

This colour is used throughout the CSS design system for navigation, buttons, headings, backgrounds and other interface elements.

The logo's original blue:

```text
#0C3D62
```

is intentionally documented separately from the website's interface colour:

```text
#315B65
```

This distinction allows the original logo artwork to retain its own identity while the website interface uses a colour optimized for the overall web design system.

## 18.4 Design Software

The logo was created using:

**Adobe Illustrator**

The editable Illustrator artwork serves as the source design from which logo variations can be exported into formats suitable for web and print use, including SVG and other image formats.

Vector-based artwork was used so that the logo can be scaled to different sizes without losing its fundamental shape and clarity.

## 18.5 File Format

The project includes the logo artwork in **SVG/vector format**, allowing the logo to be used at different resolutions while maintaining sharp edges.

The original Adobe Illustrator source file is also retained as the editable master artwork.

Using vector artwork is particularly suitable for:

* Website branding.
* Favicons and interface graphics.
* Business documents.
* Social media graphics.
* Posters and promotional materials.
* Large-format printing.
* Institutional publications.

## 18.6 Design Considerations

The logo and website identity were developed with consistency in mind. The website combines the logo's institutional character with a responsive digital interface built using HTML5, CSS3 and Vanilla JavaScript.

The identity is also aligned with the project's broader focus on:

* Library and information access.
* Braille and accessible literacy.
* Culture.
* Skills development.
* Visual accessibility.
* Community participation.
* Institutional services.
