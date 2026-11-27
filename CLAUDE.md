# Portfolio — instrucciones para Claude

## Commits y PRs
- No añadas líneas `Co-Authored-By`, `Claude-Session` ni "Generated with Claude Code" en commits ni en PRs.
- Haz los commits con el autor `mateogdr <mateogdr.upm@gmail.com>` (en sesiones en la nube, ejecuta antes `git config user.name "mateogdr"` y `git config user.email "mateogdr.upm@gmail.com"`).

## Build local
- `npm run build` necesita `RESEND_API_KEY`; en local usa una falsa: `RESEND_API_KEY=re_dummy npm run build`.
- El contenido del portfolio está en `lib/data.ts`.
