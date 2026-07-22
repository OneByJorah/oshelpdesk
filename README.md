# oshelpdesk

Navy/gold helpdesk theme for osTicket 1.18.x — mobile-responsive, dark mode, LDAP/AD-compatible.

![status](https://img.shields.io/badge/status-active-FFB300?style=flat-square)
![language](https://img.shields.io/badge/css+javascript-0d0d0c?style=flat-square)
![license](https://img.shields.io/badge/license-MIT-FFB300?style=flat-square)

## Overview

oshelpdesk is a navy/gold helpdesk theme for osTicket 1.18.x that covers both the client portal and staff panel. It is mobile-responsive, supports dark mode, and is LDAP/AD-compatible because it is pure CSS/JS — it never touches authentication logic. This is a theme + installer, not a fork of osTicket.

## Features

- Navy/gold branded theme for osTicket client portal and staff panel
- Mobile-responsive design
- Dark mode support
- LDAP/AD-compatible (pure CSS/JS, no auth changes)
- One-command deploy script — downloads osTicket and applies theme automatically
- Idempotent installer — safe to re-run
- Does not contain osTicket source code (separate GPL-2.0 project)

## What This Is (and Isn't)

This repo is a theme + installer, not a fork of osTicket. It does not contain osTicket source code. osTicket is a separate GPL-2.0-licensed open-source project maintained at [github.com/osTicket/osTicket](https://github.com/osTicket/osTicket).

## Installation

```bash
git clone https://github.com/OneByJorah/oshelpdesk.git
cd oshelpdesk

./deploy.sh /var/www/osticket   # or omit path for ./osticket
```

The script will:
1. Clone official osTicket source at a pinned release tag
2. Copy theme CSS, JS, and assets into osTicket paths
3. Auto-patch header includes with theme links (idempotent)
4. Set correct file permissions

Then complete osTicket's web installer (database, admin account) and configure your LDAP/AD plugin.

## Repository Structure

```
deploy.sh              # Downloads osTicket + applies theme
theme/
  css/                 # helpdesk-tokens.css, client portal, staff panel
  js/                  # Client portal and staff panel JS
  assets/              # Logo and static assets
install/               # osTicket installer patches
preview/               # Theme preview screenshots
```

## License

MIT — see [LICENSE](LICENSE).

---
Part of the JorahOne / J1 ecosystem — themed osTicket for MSP helpdesk operations.
