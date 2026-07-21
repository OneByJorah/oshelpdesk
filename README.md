# osTicket Help Desk Theme

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A navy/gold helpdesk theme for [osTicket](https://github.com/osTicket/osTicket) 1.18.x covering both the client portal and the staff panel. It is mobile-responsive, supports dark mode, and is LDAP/AD-compatible because it is pure CSS/JS — it never touches authentication logic.

## What this repo is (and isn't)

**This repo is a theme + installer, not a fork of osTicket.** It does not contain osTicket source code. osTicket is a separate GPL-2.0-licensed open-source project maintained at [github.com/osTicket/osTicket](https://github.com/osTicket/osTicket). Keeping them separate means:

1. You can pull osTicket security patches directly from upstream instead of waiting on this repo.
2. This repo stays small and reviewable — it is clearly a customization layer, not a partial copy of a larger codebase.

`deploy.sh` downloads the official osTicket release for you and applies the theme automatically.

## Quick start

```bash
git clone https://github.com/OneByJorah/oshelpdesk.git
cd oshelpdesk
./deploy.sh /var/www/osticket   # or omit path to install to ./osticket
```

The script will:
1. Clone the official osTicket source at a pinned release tag.
2. Copy `theme/css`, `theme/js`, and `theme/assets` into the right osTicket paths.
3. Auto-patch `include/client/header.inc.php` and `include/staff/header.inc.php` with the theme links (idempotent — safe to re-run).
4. Set correct file permissions.

Then complete osTicket's normal web installer (database, admin account, etc.) and configure your LDAP/AD plugin as usual. This script only touches the theme layer.

## Repository structure

```
deploy.sh              <- run this; downloads osTicket + applies theme
theme/
  css/                 <- helpdesk-tokens.css, helpdesk-client-portal.css, helpdesk-staff-panel.css
  js/                  <- helpdesk-client-portal.js, helpdesk-staff-panel.js
  assets/              <- logo placeholder + instructions for the real logo
install/
  CLIENT_INJECTION.md  <- manual injection steps if deploy.sh cannot find a header file
  STAFF_INJECTION.md   <- same, for the staff panel
preview/
  index.html           <- browser preview, linked directly to the real theme files
  staff-preview.html
```

## Manual fallback

If `deploy.sh` cannot find your header files (some installs customize `include/client/` or `include/staff/`), follow the manual steps in `install/CLIENT_INJECTION.md` / `install/STAFF_INJECTION.md` instead. The result is identical.

## Troubleshooting

1. Open browser DevTools → Network tab → hard refresh → filter for `helpdesk`. Confirm the CSS/JS files are requested (200, not 404/403).
2. If 404: your web root path differs from what `deploy.sh` installed to, or the `<link>` `href` paths need adjustment for your URL structure.
3. If 200 but no visual change: clear browser cache, or append `?v=2` to the CSS URLs to force a fresh copy.
4. If staff-panel functionality breaks (drag-resize, AJAX thread loading): restore the `.bak` files `deploy.sh` creates next to each header file, then report what broke.

## Environment variables

| Variable | Default | Description |
|----------|---------|-------------|
| `OSTICKET_TAG` | `v1.18.2` | osTicket release tag to clone |

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Bug reports and improvements are welcome.

## Security

See [SECURITY.md](SECURITY.md) for responsible disclosure.

## License

The theme files in this repo (`theme/`, `deploy.sh`, docs) are MIT licensed — see [LICENSE](LICENSE). osTicket itself, once downloaded by `deploy.sh`, remains under its own GPL-2.0 license from the upstream project.

## Contact

Questions? Reach out at [info@jorahone.com](mailto:info@jorahone.com).
