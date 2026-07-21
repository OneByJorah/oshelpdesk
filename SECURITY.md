# Security Policy

## Supported versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅ Yes    |
| Older   | ❌ No     |

## Reporting a vulnerability

If you discover a security issue, please report it responsibly:

1. **Do NOT** open a public GitHub issue.
2. Email **info@jorahone.com** with a clear description, affected files, steps to reproduce, and potential impact.
3. Include a suggested fix or patch if you have one.

## Response timeline

- **Acknowledgment**: within 48 hours
- **Initial assessment**: within 1 week
- **Fix release**: depends on severity, typically within 2 weeks

## Best practices

- Never commit secrets, passwords, or API keys.
- Use environment variables for configuration.
- Keep dependencies up to date.
- Verify that `deploy.sh` backups (`.bak` files) do not expose sensitive data.

## Scope

This policy covers the theme, installer, and documentation in this repository only. For issues in osTicket itself, please report them to the upstream osTicket maintainers.
