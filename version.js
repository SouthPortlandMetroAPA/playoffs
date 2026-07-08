/* ════════════════════════════════════════════════════════════════════════
   Playoffs — single global version constant.
   Deploy sequence (canonical, per reference_deploy.md — push FIRST):
     1. Bump APP_VERSION below
     2. git push, then poll the served version.js until it shows the new value
     3. UPDATE apa_core.apps SET version='X.X' WHERE app_name='Playoffs';
   DB-first ordering strands open tabs on apps with auto-updaters; this app
   has no updater today (see task: port the canonical updater), but the
   order is kept canonical so muscle memory stays consistent fleet-wide.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '2.6';
