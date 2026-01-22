# BMAD Agents TODO - Crisis Investigation Platform

**Project Timeline:** 1 month (4 weeks)  
**Current Status:** Brainstorming complete ✅  
**Next Phase:** PRD Creation → Technical Specification → Development

---

## 📅 Roadmap d'Utilisation des Outils BMAD

### ✅ Phase 0: Discovery (TERMINÉ)
- [x] **Analyst Agent** — Brainstorming session
  - Résultat: `_bmad-output/analysis/brainstorming-session-2026-01-21.md`
  - 100+ idées générées
  - Produit défini: Crisis Investigation & Collaboration Platform
  - Roadmap 1 mois validée

---

### 🔜 Phase 1: Documentation & Spécification (MAINTENANT)

#### [ ] 1. PRD Agent (Product Requirements Document)
**Commande:** `/bmad/bmm/agents/product-manager` (ou équivalent PRD agent)

**Objectif:** Transformer le brainstorming en PRD structuré

**Livrables attendus:**
- User stories par rôle (Admin, Operator, Viewer)
- Acceptance criteria pour chaque feature MVP
- User flows (investigation journey)
- API contracts (REST + WebSocket)
- Success metrics

**Utiliser comme input:**
- `_bmad-output/analysis/brainstorming-session-2026-01-21.md`
- `README.md`

**Output attendu:**
- `_bmad-output/planning-artifacts/prd-crisis-platform.md`

**Priorité:** 🔥 URGENT — Faire avant de coder!

---

#### [ ] 2. Tech Spec Agent (Technical Specification)
**Commande:** `/bmad/bmm/agents/architect` ou Tech Spec agent

**Objectif:** Architecture détaillée + Kafka design

**Livrables attendus:**
- Architecture diagrams (C4 model ou équivalent)
- Kafka topic design complet:
  - `incidents.lifecycle` (schema, partitions, retention)
  - `investigation.actions` (schema, partitions, retention)
  - `system.telemetry` (schema, partitions, retention)
  - `ai.insights` (schema, partitions, retention)
- Event schemas (TypeScript interfaces)
- API contracts (OpenAPI/Swagger)
- Database schema (PostgreSQL + JSONB)
- WebSocket protocol specification
- Sequence diagrams (create card, concurrent edit, Kafka sync)

**Utiliser comme input:**
- PRD (de l'étape 1)
- Brainstorming session
- `README.md`

**Output attendu:**
- `_bmad-output/planning-artifacts/tech-spec-architecture.md`
- `_bmad-output/planning-artifacts/kafka-design.md`
- `_bmad-output/planning-artifacts/event-schemas.ts`

**Priorité:** 🔥 URGENT — Critique pour Week 2 (Kafka)

---

### 🏗️ Phase 2: Week 1 Development (Canvas + WebSocket)

#### [ ] 3. Architecture Review Agent (Week 1 Pre-Flight)
**Commande:** Review agent / Architect agent

**Objectif:** Valider design Week 1 avant implémentation

**Questions à poser:**
- Canvas dual-view architecture solide?
- WebSocket patterns bien définis?
- TanStack Query setup optimal?
- Component structure logique?

**Timing:** Avant de coder Week 1

**Output attendu:**
- Architecture review notes
- Recommended adjustments

**Priorité:** ⚠️ IMPORTANT — Prévient les refactors Week 2

---

### ⚙️ Phase 3: Week 2 Development (Kafka Integration)

#### [ ] 4. Kafka Architecture Review
**Commande:** Architect/Tech review agent

**Objectif:** Valider Kafka integration design

**Questions à poser:**
- Topic partitioning correct?
- Consumer group strategy sound?
- Event schemas well-defined?
- Idempotency handled?
- Error handling robust?

**Timing:** Mi-Week 2 (après Kafka setup, avant consumer implementation)

**Output attendu:**
- Kafka architecture validation
- Potential issues flagged
- Best practices confirmed

**Priorité:** 🔥 CRITIQUE — Kafka est le risque majeur

---

### 🧪 Phase 4: Week 3 Development (AI + Features)

#### [ ] 5. Testing Strategy Agent
**Commande:** QA/Testing strategy agent

**Objectif:** Comprehensive test plan

**Livrables attendus:**
- Unit test scenarios (event idempotency, card logic)
- Integration test plan:
  - WebSocket + Kafka sync
  - Concurrent edits
  - Event replay
  - AI suggestion flow
- E2E test scenarios (Playwright):
  - Complete crisis investigation (2 users)
  - Canvas collaboration
  - Card invalidation
- Kafka-specific tests:
  - Consumer offset management
  - Event replay consistency
  - Idempotency verification
- Performance test scenarios (50 cards, 10 users)

**Timing:** Début Week 3

**Output attendu:**
- `_bmad-output/planning-artifacts/testing-strategy.md`
- Test scenario checklists

**Priorité:** ⚠️ IMPORTANT — Prépare Week 4 deployment

---

### 📚 Phase 5: Week 4 (Documentation + Deployment)

#### [ ] 6. Documentation Agent
**Commande:** Documentation/technical writer agent

**Objectif:** Professional-grade documentation

**Livrables attendus:**
- **API Documentation:**
  - OpenAPI/Swagger spec
  - WebSocket protocol doc
  - Event schema reference
- **Architecture Decision Records (ADRs):**
  - ADR-001: Why Kafka over Redis Streams
  - ADR-002: Partial Event Sourcing Strategy
  - ADR-003: Dual-Channel Pattern (WebSocket + Kafka)
  - ADR-004: Optimistic UI with Rollback
  - ADR-005: AI Integration Approach
- **Setup Guides:**
  - Local development setup (< 5 steps)
  - Kafka setup guide
  - Environment variables reference
  - Troubleshooting common issues
- **Deployment Runbook:**
  - Vercel deployment steps
  - Railway/Render backend setup
  - Database migration guide
  - Monitoring setup

**Timing:** Week 4

**Output attendu:**
- `docs/api/` (API documentation)
- `docs/adr/` (Architecture Decision Records)
- `docs/setup.md` (Setup guide)
- `docs/deployment.md` (Deployment runbook)

**Priorité:** ⚠️ IMPORTANT — Critical for interviews

---

#### [ ] 7. Deployment Review Agent
**Commande:** DevOps/deployment review agent

**Objectif:** Production readiness check

**Questions à valider:**
- All secrets managed properly?
- Error tracking setup (Sentry)?
- Health checks configured?
- Database migrations safe?
- Rollback strategy defined?
- Monitoring in place?
- Performance acceptable?
- Security basics covered?

**Timing:** Avant final deployment

**Output attendu:**
- Deployment readiness checklist
- Issues to fix before going live

**Priorité:** 🔥 CRITIQUE — Évite les deployment disasters

---

## 📊 Progress Tracking

| Phase | Agent | Status | Output Location | Notes |
|-------|-------|--------|-----------------|-------|
| 0 | Analyst | ✅ Complete | `_bmad-output/analysis/brainstorming-session-2026-01-21.md` | 100+ ideas generated |
| 1 | PRD | 🔜 Next | `_bmad-output/planning-artifacts/prd-crisis-platform.md` | Do NOW |
| 1 | Tech Spec | 🔜 Next | `_bmad-output/planning-artifacts/tech-spec-*.md` | Do NOW |
| 2 | Arch Review (W1) | ⏳ Pending | Notes | Before Week 1 coding |
| 3 | Kafka Review (W2) | ⏳ Pending | Notes | Mid-Week 2 |
| 4 | Testing Strategy | ⏳ Pending | `_bmad-output/planning-artifacts/testing-strategy.md` | Start of Week 3 |
| 5 | Documentation | ⏳ Pending | `docs/` | Week 4 |
| 5 | Deployment Review | ⏳ Pending | Checklist | Before deployment |

---

## 🎯 Next Actions

### Immediate (Today/Tomorrow):
1. [ ] Launch PRD Agent with brainstorming session as input
2. [ ] Launch Tech Spec Agent for Kafka architecture design
3. [ ] Review generated PRD + Tech Spec
4. [ ] Adjust based on feedback

### This Week (Before Week 1):
1. [ ] Complete PRD + Tech Spec
2. [ ] Architecture review (Week 1 design)
3. [ ] Setup GitHub project board with tasks from PRD
4. [ ] Prepare development environment

### Week 1:
1. [ ] Use Cursor agents (Frontend, Backend) for development
2. [ ] Checkpoint: Architecture review mid-week

### Week 2:
1. [ ] Use Kafka Expert agent extensively
2. [ ] Kafka architecture review mid-week
3. [ ] Event sourcing validation

### Week 3:
1. [ ] Launch Testing Strategy agent
2. [ ] Implement test scenarios
3. [ ] AI integration testing

### Week 4:
1. [ ] Launch Documentation agent
2. [ ] Generate ADRs
3. [ ] Deployment review
4. [ ] Deploy!

---

## 💡 Tips for Using BMAD Agents

1. **Always provide context:**
   - Reference brainstorming session
   - Reference README.md
   - Reference previous outputs

2. **Iterate on outputs:**
   - Review generated docs
   - Request refinements
   - Ask clarifying questions

3. **Save all outputs:**
   - Use `_bmad-output/` structure
   - Version control everything
   - Reference in later agent sessions

4. **Connect the dots:**
   - PRD → Tech Spec → Tests → Docs
   - Each builds on previous
   - Maintain traceability

---

**Status:** 🟢 Ready to proceed with PRD Agent  
**Last Updated:** 2026-01-21  
**Next Milestone:** PRD + Tech Spec completion
