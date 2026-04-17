# DevOps Learning Hub

A full-stack Python (Flask) + HTML/CSS/JS application covering DevOps end-to-end:
basics → CI/CD → containers → orchestration → IaC → monitoring → cloud → security,
with video notes, personal notes, progress tracking, a certification quiz, and a
recommended certification roadmap.

## Run locally

```bash
python -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Open http://127.0.0.1:5000

## Project layout

```
devops_app/
├── app.py                # Flask routes + SQLite
├── requirements.txt
├── data/
│   ├── topics.json       # Curriculum + curated YouTube videos
│   ├── certifications.json
│   └── quiz.json
├── templates/            # Jinja2 HTML templates
│   ├── base.html
│   ├── index.html
│   ├── topics.html
│   ├── topic.html
│   ├── certifications.html
│   ├── quiz.html
│   └── roadmap.html
└── static/
    ├── css/style.css
    └── js/main.js
```

## Features

- 12 DevOps topics from beginner to advanced
- Embedded YouTube tutorial videos per topic
- Personal note taking (saved to SQLite)
- Mark topics as completed (progress tracking)
- 10-question quiz that recommends a certification based on your score
- Curated certification list (AWS, Azure, GCP, Kubernetes, Docker, HashiCorp, Linux Foundation)
- Visual learning roadmap
