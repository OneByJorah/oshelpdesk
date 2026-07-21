# osTickets Helpdesk System

## Design System
- Primary: `#FFB300` (dark amber)
- Background: `#0d0d0c` (near-black)
- Font: JetBrains Mono

## Purpose
Modernized osTickets helpdesk implementation with contemporary toolchain practices.

## Setup
1. Clone repo: `git clone https://github.com/OneByJorah/oshelpdesk.git`
2. Install dependencies: `uv venv --no-sandbox && pip install -r requirements.txt`
3. Configure environment: Copy `.env.example` → `.env` and adjust values
4. Start app: `uv run python index.py`

## Development Workflow
- Use `uv` for virtual environments
- All scripts in `scripts/` directory
- pytest with xdist for parallel testing: `pytest -n auto`
- CI pipeline: GitHub Actions on push to main