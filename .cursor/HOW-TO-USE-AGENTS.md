# Guide d'Utilisation des Agents Cursor

**Project:** Crisis Investigation & Collaboration Platform  
**Timeline:** 1 mois (4 semaines)

---

## 🎯 Comment Référencer les Agents de Manière Optimale

### Méthode 1: Référence Directe dans le Chat

**Syntaxe:** `@nom-du-fichier.md`

**Exemples:**
```
@architect-agent.md review my Kafka topic design
@backend-domain.md help me implement the Investigation entity
@frontend-agent.md create the TimelineView component following best practices
@kafka-expert-agent.md explain why I'm getting consumer offset errors
```

**Avantages:**
- L'agent charge automatiquement son contexte complet
- Connaît ses responsabilités et règles
- Comprend le projet (Crisis Investigation Platform)
- Sait quelle semaine on est (Week 1/2/3/4)

---

### Méthode 2: Référence Multiple pour Coordination

**Quand:** Une tâche implique plusieurs domaines

**Exemples:**
```
@architect-agent.md @backend-domain.md 
Design the event sourcing architecture for canvas persistence

@frontend-agent.md @backend-domain.md 
Implement optimistic UI for card creation with Kafka confirmation

@kafka-expert-agent.md @infra-devops.md 
Setup Kafka in Docker Compose with proper persistence
```

**Avantages:**
- Les agents collaborent
- Boundaries claires entre domaines
- Cohérence architecturale

---

### Méthode 3: Référence avec Context Additionnel

**Quand:** L'agent doit considérer d'autres fichiers

**Exemples:**
```
@frontend-agent.md using @.cursor/skills/vercel-react-best-practices/SKILL.md
Create the Canvas component with Server/Client component split

@frontend-agent.md following @.cursor/skills/web-design-guidelines/SKILL.md
Review the Card components for accessibility compliance

@backend-domain.md referencing @README.md
Implement the Incident entity with proper business rules
```

**Avantages:**
- Agent suit les guidelines spécifiques
- Cohérence avec les skills définis
- Best practices appliquées

---

## 📋 Agents Disponibles et Leurs Cas d'Usage

### 1. **@architect-agent.md** 🏗️

**Quand l'utiliser:**
- Décisions architecturales (Kafka vs Redis, event sourcing patterns)
- Validation de designs
- Trade-offs entre options
- Questions de boundaries (frontend/backend/AI)
- Reviews de propositions d'autres agents

**Exemples de questions:**
```
@architect-agent.md 
Should I use Kafka topics per investigation or single topic with partitioning?

@architect-agent.md 
Review this event sourcing design for canvas. Is it overkill?

@architect-agent.md 
When should I introduce Redis cache? Week 2 or Week 3?
```

---

### 2. **@backend-domain.md** ⚙️

**Quand l'utiliser:**
- Implémentation domain logic (Incident, Card, Investigation)
- Design d'APIs REST + WebSocket
- Schemas TypeScript
- Kafka producers/consumers
- Business rules

**Exemples de questions:**
```
@backend-domain.md 
Implement the Card entity with invalidation logic

@backend-domain.md 
Create the WebSocket event handlers for real-time canvas updates

@backend-domain.md 
Design the Kafka event schema for investigation.actions topic
```

**Semaine spécifique:**
```
@backend-domain.md [Week 2]
Help me migrate from in-memory events to Kafka producers
```

---

### 3. **@frontend-agent.md** 🎨

**Quand l'utiliser:**
- Composants React
- TanStack Query patterns
- WebSocket integration côté client
- UX/UI implementation
- Optimistic updates
- Performance optimization

**Exemples de questions:**
```
@frontend-agent.md using @.cursor/skills/vercel-react-best-practices/SKILL.md
Create the SpatialView canvas component with drag & drop

@frontend-agent.md 
Implement optimistic card creation with TanStack Query

@frontend-agent.md following @.cursor/skills/web-design-guidelines/SKILL.md
Review the Card components for accessibility (keyboard nav, ARIA labels)
```

**IMPORTANT:** Toujours référencer les skills quand pertinent!

---

### 4. **@kafka-expert-agent.md** 🔥

**Quand l'utiliser:**
- Setup Kafka (Week 2 critique!)
- Topic configuration
- Producer/Consumer implementation
- Debugging offset/partition issues
- Event sourcing patterns
- Idempotency

**Exemples de questions:**
```
@kafka-expert-agent.md 
Generate Docker Compose config for Kafka + Zookeeper

@kafka-expert-agent.md 
Explain why partitioning by investigationId is important

@kafka-expert-agent.md 
My consumer is processing duplicate events. How to handle idempotency?

@kafka-expert-agent.md 
Implement event replay to rebuild canvas state from Kafka
```

**Philosophie:** Cet agent ENSEIGNE, pas juste génère du code. Toujours demander le "WHY".

---

### 5. **@infra-devops.md** 🐳

**Quand l'utiliser:**
- Docker Compose
- Environment setup
- Deployment (Vercel, Railway, Render)
- CI/CD
- Local dev optimization

**Exemples de questions:**
```
@infra-devops.md 
Setup docker-compose.yml with Postgres, Kafka, Redis

@infra-devops.md [Week 4]
Create deployment guide for Vercel (frontend) + Railway (backend)

@infra-devops.md 
My Kafka container keeps crashing on restart. Fix persistence.
```

---

### 6. **@qa-agent.md** 🧪

**Quand l'utiliser:**
- Edge cases identification
- Test scenarios
- Concurrent edit conflicts
- Kafka failure modes
- Performance testing
- Security review

**Exemples de questions:**
```
@qa-agent.md 
What are the critical edge cases for concurrent card editing?

@qa-agent.md 
Generate test scenarios for Kafka outage during active investigation

@qa-agent.md [Week 4]
Review security: XSS in card content, auth bypass possibilities
```

---

### 7. **@ai-agent.md** 🤖

**Quand l'utiliser:**
- AI suggestion logic (Week 3)
- Pattern detection algorithms
- OpenAI API integration
- Confidence scoring
- Feedback loops

**Exemples de questions:**
```
@ai-agent.md 
Implement rule-based pattern matching for crisis types

@ai-agent.md 
Create the AIInsightCard component with confidence display

@ai-agent.md 
How should I handle OpenAI API failures gracefully?
```

---

## 🔄 Workflow Typique par Semaine

### **Week 1: Canvas + WebSocket**

```bash
# Architecture validation
@architect-agent.md Review Week 1 design: dual-view canvas + WebSocket

# Frontend development
@frontend-agent.md using @.cursor/skills/vercel-react-best-practices/SKILL.md
Create TimelineView and SpatialView components

@frontend-agent.md 
Implement TanStack Query with optimistic updates for cards

# Backend development
@backend-domain.md 
Create REST API endpoints for cards CRUD

@backend-domain.md 
Implement WebSocket server for real-time updates

# Infrastructure
@infra-devops.md 
Setup docker-compose.yml with PostgreSQL

# Testing
@qa-agent.md 
What edge cases should I test for concurrent WebSocket updates?
```

---

### **Week 2: Kafka Integration**

```bash
# Kafka setup (CRITIQUE!)
@kafka-expert-agent.md 
Generate complete Kafka Docker Compose config

@kafka-expert-agent.md 
Design topics: incidents.lifecycle, investigation.actions, etc.

# Architecture review
@architect-agent.md @kafka-expert-agent.md
Review event sourcing design for canvas

# Backend migration
@backend-domain.md 
Migrate from in-memory events to Kafka producers

@kafka-expert-agent.md 
Implement consumer groups: WebSocket broadcast, AI analysis, audit

# Infrastructure
@infra-devops.md @kafka-expert-agent.md
Add Kafka + Zookeeper to docker-compose, ensure persistence

# Testing
@qa-agent.md 
Generate Kafka-specific test scenarios: idempotency, event replay
```

---

### **Week 3: AI + Features**

```bash
# AI implementation
@ai-agent.md 
Implement rule-based pattern detection

@ai-agent.md @backend-domain.md
Create OpenAI API integration with error handling

# Frontend polish
@frontend-agent.md following @.cursor/skills/web-design-guidelines/SKILL.md
Implement loading states, error boundaries, animations

# Dashboard
@backend-domain.md 
Create crisis visibility endpoints (deployments, errors, metrics)

# Testing
@qa-agent.md 
Test AI suggestion quality, false positives, error cases
```

---

### **Week 4: Documentation + Deployment**

```bash
# Deployment prep
@infra-devops.md 
Create deployment guide for Vercel + Railway

@architect-agent.md 
Final architecture review before deployment

# Security
@qa-agent.md 
Security review: XSS, auth, input validation

# Performance
@frontend-agent.md 
Optimize canvas performance for 50+ cards
```

---

## 💡 Best Practices

### ✅ DO:

1. **Toujours spécifier la semaine** quand pertinent:
   ```
   @backend-domain.md [Week 2]
   ```

2. **Référencer les skills pour frontend**:
   ```
   @frontend-agent.md using @.cursor/skills/vercel-react-best-practices/SKILL.md
   ```

3. **Demander des reviews croisés**:
   ```
   @architect-agent.md @backend-domain.md
   Review this Kafka producer implementation
   ```

4. **Demander le "WHY" au Kafka Expert**:
   ```
   @kafka-expert-agent.md 
   Why partition by investigationId? Explain the reasoning.
   ```

5. **Contextualiser avec @README.md**:
   ```
   @architect-agent.md referencing @README.md
   Does this align with our architectural principles?
   ```

### ❌ DON'T:

1. **Ne pas ignorer les guidelines**:
   ```
   ❌ @frontend-agent.md create component
   ✅ @frontend-agent.md using @.cursor/skills/vercel-react-best-practices/SKILL.md create component
   ```

2. **Ne pas mélanger les responsabilités**:
   ```
   ❌ @frontend-agent.md create Kafka producer
   ✅ @backend-domain.md create Kafka producer
   ```

3. **Ne pas oublier les reviews Week 2**:
   ```
   ❌ Implement Kafka sans review
   ✅ @kafka-expert-agent.md @architect-agent.md review design THEN implement
   ```

4. **Ne pas négliger QA**:
   ```
   ❌ Code sans edge cases
   ✅ @qa-agent.md what edge cases? THEN code
   ```

---

## 🎯 Quick Reference

| Tâche | Agent(s) | Skills/Context |
|-------|----------|----------------|
| Architecture decision | `@architect-agent.md` | `@README.md` |
| REST API | `@backend-domain.md` | - |
| WebSocket logic | `@backend-domain.md` | - |
| React component | `@frontend-agent.md` | `@.cursor/skills/vercel-react-best-practices/` |
| UX/Accessibility | `@frontend-agent.md` | `@.cursor/skills/web-design-guidelines/` |
| Kafka setup | `@kafka-expert-agent.md` | - |
| Docker Compose | `@infra-devops.md` | - |
| Deployment | `@infra-devops.md` | - |
| Testing | `@qa-agent.md` | - |
| AI features | `@ai-agent.md` | - |
| Edge cases | `@qa-agent.md` | - |

---

**Last Updated:** 2026-01-21  
**Project Status:** Post-brainstorming, ready for Week 1
