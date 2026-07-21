# Contributing to oshelpdesk

Thank you for your interest in improving this osTicket theme.

## How to contribute

1. **Fork** the repository.
2. **Create** a feature branch: `git checkout -b feature/my-change`.
3. **Commit** your changes with clear, conventional messages.
4. **Push** to your fork and open a Pull Request.

## Development setup

```bash
git clone https://github.com/OneByJorah/oshelpdesk.git
cd oshelpdesk
./deploy.sh ./osticket   # local osTicket copy for manual testing
```

Open `preview/index.html` or `preview/staff-preview.html` in a browser to inspect the theme without a full osTicket install.

## Code standards

- Keep CSS visual-only; do not change layout classes that osTicket's JavaScript measures.
- Prefer CSS custom properties in `theme/css/helpdesk-tokens.css` for colors and spacing.
- Test both client portal and staff panel previews after changes.
- Update docs when adding new configuration knobs.

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Questions?

Email [info@jorahone.com](mailto:info@jorahone.com).
