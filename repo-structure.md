realtime-ai-ops-platform/
├── apps/
│   ├── web/                     # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/             # App Router
│   │   │   ├── components/      # UI générique (shadcn)
│   │   │   ├── features/        # Features métier (items, auth, realtime)
│   │   │   ├── lib/             # fetchers, auth, queryClient
│   │   │   ├── types/
│   │   │   └── styles/
│   │   └── package.json
│   │
│   ├── api/                     # Backend Fastify
│   │   ├── src/
│   │   │   ├── modules/         # Domain-driven (items, users, auth)
│   │   │   ├── plugins/         # Fastify plugins (db, auth)
│   │   │   ├── routes/
│   │   │   ├── schemas/         # Zod / JSON schemas
│   │   │   ├── index.ts
│   │   │   └── server.ts
│   │   └── package.json
│
├── infra/
│   ├── docker/
│   ├── terraform/
│   ├── k8s/
│   └── helm/
│
├── packages/
│   ├── shared-types/            # Types partagés frontend/backend
│   └── event-schemas/           # Kafka events
│
├── .cursor/                     # IA agents (IMPORTANT)
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── README.md
