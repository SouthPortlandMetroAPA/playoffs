/* ════════════════════════════════════════════════════════════════════════
   Playoffs — single global version constant.
   Deploy sequence:
     1. UPDATE apa_core.apps SET version='X.X' WHERE app_name='Playoffs';
     2. Bump APP_VERSION below to match
     3. git push
   Bumping #1 first prevents reload-loops on open tabs.
   ════════════════════════════════════════════════════════════════════════ */
window.APP_VERSION = '2.1';
