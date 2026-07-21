# VIDE OIT Help Desk Theme

Navy/gold VIDE-branded theme for osTicket 1.18.x — client portal +
staff panel, mobile-responsive, dark mode, LDAP-compatible (theme is
CSS/JS only, doesn't touch auth).

## What this repo is (and isn't)

**This repo is a theme + installer, not a fork of osTicket.** It does
not contain osTicket's own source code. osTicket is a separate,
GPL-2.0-licensed open-source project maintained at
[github.com/osTicket/osTicket](https://github.com/osTicket/osTicket) —
this repo intentionally does not vendor a copy of it, for two reasons:

1. You get security patches/updates from upstream osTicket by pulling
   their releases directly, instead of this repo going stale.
2. Keeps this repo small, reviewable, and clearly "VIDE's customization
   layer" rather than a confusing partial copy of someone else's large
   codebase.

`deploy.sh` downloads the real osTicket source for you and applies
this theme automatically — see below.

## Quick start

```bash
git clone <this-repo-url> vide-helpdesk-theme
cd vide-helpdesk-theme
./deploy.sh /var/www/osticket      # or omit the path to install to ./osticket
```

This will:
1. Clone the official osTicket source (pinned to a known-good release tag)
2. Copy `theme/css`, `theme/js`, `theme/assets` into the right osTicket paths
3. Auto-patch `include/client/header.inc.php` and
   `include/staff/header.inc.php` to load the theme (idempotent —
   safe to re-run, won't double-inject)
4. Set correct file permissions

Then finish osTicket's own web installer (DB connection, admin
account, etc. — that part is unchanged, this script only handles
the theme layer) and configure your LDAP/AD auth plugin as usual.

## Repo structure

```
deploy.sh              <- run this; downloads osTicket + applies theme
theme/
  css/                 <- vide-tokens.css, vide-client-portal.css, vide-staff-panel.css
  js/                  <- vide-client-portal.js, vide-staff-panel.js
  assets/              <- logo placeholder + instructions for the real VIDE logo
install/
  CLIENT_INJECTION.md  <- manual injection steps (fallback if deploy.sh can't
                           find the header file, e.g. on a customized install)
  STAFF_INJECTION.md   <- same, for the staff panel
preview/
  index.html           <- open in a browser to preview client portal + staff
                           panel, linked directly to the real theme/css files
```

## If deploy.sh can't find your header files

Some installs customize `include/client/` or `include/staff/`. If the
script reports it couldn't find a header file, follow the manual steps
in `install/CLIENT_INJECTION.md` / `install/STAFF_INJECTION.md` instead
— same end result, just by hand.

## Troubleshooting "theme isn't showing up"

1. Browser DevTools → Network tab → hard refresh → filter for `vide` —
   confirm the CSS/JS files are actually being requested (200, not 404/403).
2. If 404: your web root path doesn't match what `deploy.sh` installed
   to, or the `<link>` href paths need adjusting for your URL structure.
3. If 200 but no visual change: browser cache — hard refresh again, or
   append `?v=2` to the CSS URLs to force a fresh copy.
4. If the staff panel breaks any functionality (drag-resize, AJAX
   thread loading): restore from the `.bak` files `deploy.sh` created
   next to each header file, then report back what broke.

## License

The theme files in this repo (`theme/`, `deploy.sh`, docs) are MIT
licensed — see `LICENSE`. osTicket itself, once downloaded by
`deploy.sh`, remains under its own GPL-2.0 license from the upstream
project.
