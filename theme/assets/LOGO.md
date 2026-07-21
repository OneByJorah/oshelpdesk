# Logo

Drop your official osHelpDesk logo (PNG or SVG, transparent background,
~200x60px works well) at:

```
images/ohd/ohd-logo.png
```

Then in `include/client/header.inc.php` (client) and
`include/staff/header.inc.php` (staff), find the `<img>` tag for the
site logo and point its `src` at that path, e.g.:

```php
<img src="<?php echo ROOT_PATH; ?>images/ohd/ohd-logo.png" alt="osHelpDesk" class="logo">
```

The theme CSS already sizes `.logo` / `img.logo` to fit the header
(`max-height: 40px` client, `36px` staff) — no extra CSS needed once
you swap the file in.

If you send the actual logo file and your official hex codes,
`ohd-tokens.css` can be regenerated to match exactly instead of the
placeholder palette.
