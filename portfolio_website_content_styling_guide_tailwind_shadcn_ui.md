# Portfolio Website – Content + Styling Guide (Tailwind + shadcn/ui)

This guide gives you **exact page content**, layout structure, and **Tailwind + shadcn/ui styling direction** for a clean, modern developer portfolio.

Target: Backend / Systems / API developer profile (Python, C++, Rust).

---

## 1. Home (Hero Section)

### Content

**Headline (H1)**
> Aditya Dey

**Sub‑headline**
> Backend & Systems Developer

**Value statement**
> I build scalable APIs, backend services, and system‑level solutions using Python, C++, and Rust. Focused on clean architecture, performance, and real‑world problem solving.

**Primary CTA**
> View Projects

**Secondary CTA**
> Contact Me

---

### Layout

Two column layout:
- Left: Text + buttons
- Right: Minimal illustration or abstract code graphic

---

### Tailwind Styling

Container:
```
max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center
```

Heading:
```
text-4xl md:text-6xl font-bold tracking-tight
```

Sub heading:
```
text-xl text-muted-foreground mt-4
```

Paragraph:
```
mt-6 text-lg text-gray-400 max-w-xl
```

Buttons (shadcn/ui Button):
```
<Button size="lg">View Projects</Button>
<Button variant="outline" size="lg">Contact Me</Button>
```

---

## 2. About Page / Section

### Content

**Title**
> About Me

**Paragraph 1**
> I am a backend-focused software developer with experience building APIs, data-driven services, and internal tools. My work revolves around writing reliable code, designing clean interfaces, and optimizing systems for maintainability and performance.

**Paragraph 2**
> I primarily work with Python for backend development, C++ for data structures and performance-critical logic, and Rust for modern systems programming. I also have hands-on experience with Docker, AWS, relational databases, and REST architecture.

**Paragraph 3**
> My goal is to grow as a strong engineer capable of designing complex systems while keeping solutions simple and efficient.

---

### Layout

Centered text block with max width

---

### Tailwind Styling

Section wrapper:
```
max-w-4xl mx-auto px-6 py-20
```

Title:
```
text-3xl font-semibold mb-6
```

Paragraph:
```
text-gray-400 leading-relaxed mb-4
```

Optional card wrapper (shadcn Card):
```
<Card>
  <CardContent className="p-8" />
</Card>
```

---

## 3. Skills / Tech Stack

### Content

Categories:

**Languages**
- Python
- C++
- Rust

**Backend**
- FastAPI
- Flask
- REST APIs

**Databases**
- MySQL
- PostgreSQL

**DevOps / Tools**
- Docker
- AWS
- Git
- Linux

---

### Layout

Grid of cards (2–4 columns)

---

### Tailwind Styling

Grid:
```
grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6
```

Skill card (shadcn Card):
```
<Card>
 <CardHeader>
  <CardTitle>Languages</CardTitle>
 </CardHeader>
 <CardContent>
  <ul className="space-y-2 text-gray-400">
   <li>Python</li>
   <li>C++</li>
   <li>Rust</li>
  </ul>
 </CardContent>
</Card>
```

---

## 4. Projects Page

### Content Structure (for each project)

**Project Name**

**One line summary**
> API service for processing and validating financial transactions

**Description**
> Designed and implemented a REST backend using FastAPI to handle high-volume requests, integrated MySQL for persistent storage, and added Docker-based deployment for portability.

**Tech stack**
> Python, FastAPI, MySQL, Docker

**Links**
> GitHub | Live Demo (if any)

---

### Layout

Card grid with hover effect

---

### Tailwind Styling

Project grid:
```
grid grid-cols-1 md:grid-cols-2 gap-8
```

Project card:
```
<Card className="transition hover:shadow-xl hover:-translate-y-1">
```

Project title:
```
text-xl font-semibold
```

Tech stack tags:
```
<Badge variant="secondary">FastAPI</Badge>
```

Buttons:
```
<Button variant="outline" size="sm">GitHub</Button>
```

---

## 5. Resume Page

### Content

Button:
> Download Resume (PDF)

Sections displayed:
- Experience
- Education
- Key Skills

---

### Layout

Vertical timeline or simple sectioned layout

---

### Tailwind Styling

Resume button:
```
<Button size="lg">Download Resume</Button>
```

Section headings:
```
text-xl font-semibold mt-8 mb-2
```

Timeline block:
```
border-l border-gray-700 pl-6
```

---

## 6. Contact Page

### Content

Headline:
> Let’s Build Something

Text:
> Feel free to reach out for backend development roles, collaborations, or technical discussions.

Email:
> adey9217x@gmail.com

Links:
> GitHub | LinkedIn

---

### Layout

Centered form or simple contact info block

---

### Tailwind Styling

Form container:
```
max-w-xl mx-auto space-y-6
```

Input (shadcn Input):
```
<Input placeholder="Your email" />
```

Textarea:
```
<Textarea placeholder="Message" />
```

Submit button:
```
<Button className="w-full">Send Message</Button>
```

---

## Global Design System

### Colors

Dark theme recommended:

```
background: #0b0e14
card: #111827
primary: #6366f1 (indigo)
text: #e5e7eb
muted: #9ca3af
```

### Fonts

```
font-sans (Inter)
```

### Spacing

Use:

```
py-20 for sections
space-y-6 for vertical spacing
gap-6 or gap-8 for grids
```

### Animations

```
transition-all duration-200 ease-in-out
hover:-translate-y-1
hover:shadow-xl
```

---

## Recommended Pages Folder Structure

```
/
  home
  about
  skills
  projects
  resume
  contact
```

---

## If you want next

I can provide:

✅ Full Next.js + shadcn + Tailwind starter layout
✅ Project card React components
✅ Figma layout reference
✅ Color theme variants
✅ SEO meta tags setup

Just tell me what stack you prefer:
- Next.js or React + Vite
- Dark or light theme
- Single page or multi-page

And I’ll generate the full structure.

