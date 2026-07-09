# Checklist de Implementacion

- [ ] Inicializar proyecto Next.js (App Router, TypeScript) con Tailwind CSS.
- [ ] Anadir shadcn/ui y componentes base (button, card, table, dialog, input, badge).
- [ ] Instalar y configurar Prisma (SQLite por defecto), definir `schema.prisma` (User, Tenant, Environment, Job).
- [ ] Crear `lib/prisma.ts` (singleton) y correr `prisma migrate dev`.
- [ ] Configurar NextAuth (Credentials) contra `User`, middleware que proteja todas las rutas salvo `/login`.
- [ ] Escribir `prisma/seed.ts` que cree el usuario `admin` (`admin123` hasheado) y lo enganche a `package.json#prisma.seed`.
- [ ] Implementar `lib/crypto.ts` (AES-256-GCM) para encriptar/desencriptar `tokenCipher`.
- [ ] Implementar `lib/server/monacoRunner.ts` (spawn de `monaco deploy` / `monaco download`, streaming de stdout/stderr).
- [ ] Implementar `lib/server/gitRunner.ts` (`simple-git`: ensureRepo, commit, log, diff) sobre carpetas locales.
- [ ] Implementar `lib/server/worker.ts`: loop singleton que procesa Jobs `PENDING`, respeta el lock por Environment, actualiza `Job.output`/`status` y dispara el commit Git correspondiente.
- [ ] Crear API Routes: `tenants` (CRUD), `environments` (CRUD + encriptar token al crear), `environments/:id/jobs` (crear Job), `jobs/:id` (detalle), `jobs/:id/stream` (SSE).
- [ ] Construir pagina de login.
- [ ] Construir dashboard: lista de Tenants -> Entornos (vista tipo arbol).
- [ ] Construir pagina de detalle de Environment: botones Deploy/Backup, estado actual (IDLE/RUNNING), historial de Jobs, visor de log en vivo (SSE), historial de commits Git con diff.
- [ ] Escribir `.env.example` (DATABASE_URL, NEXTAUTH_SECRET, ENCRYPTION_KEY, MONACO_BIN_PATH, DATA_DIR) y README con instrucciones de instalacion local vs servidor.
- [ ] Verificar build (`npm run build`) y smoke test manual (login, crear tenant/environment, correr un backup contra un entorno de prueba).
