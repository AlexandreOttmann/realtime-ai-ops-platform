# 🚨 Crisis Investigation & Collaboration Platform

> **An event-driven, real-time collaborative platform for DevOps/SRE teams to investigate and resolve production incidents with AI assistance.** Built to demonstrate **senior-level engineering decisions** across **event-driven architecture**, **real-time systems**, **AI integration**, and **pragmatic scope management**.

This project is intentionally designed as a **CV-grade showcase** completed in **1 month** with **AI agent assistance**.  
Every technology is introduced for a **clear architectural reason**, at the moment where it becomes **necessary**, not fashionable.

---

## 🎯 Project Vision

### The Problem

During production incidents (2am outages, critical bugs), DevOps/SRE teams face three compounding challenges:

1. **Visibility Gap** — "Where is the problem?" takes too long to answer
2. **Coordination Chaos** — Multiple engineers investigate in parallel, duplicating work
3. **Decision Paralysis** — Stress impairs judgment, slows resolution

Existing tools focus on **alerting** (PagerDuty) or **metrics** (Datadog), but lack intelligent **investigation support** and **collaborative problem-solving**.

### The Solution

A **Crisis Investigation & Collaboration Platform** that treats incident response as a collaborative detective process:

* **Shared Investigation Canvas** — Real-time collaborative workspace with dual views (timeline + spatial)
* **AI Crisis Assistant** — Learns from past incidents, suggests patterns, prevents future crises
* **Event-Sourced Architecture** — Perfect audit trail via Kafka, replay investigations for learning
* **Stress-Aware UX** — Reduces cognitive load with intelligent visibility and non-intrusive AI

**Not just another incident tool** — this is a **collaborative thinking space** backed by event-driven architecture and preventive AI.

---

## 🧠 Architectural Principles

* **Progressive complexity** → no premature abstractions
* **Clear boundaries** between rendering, orchestration, and domain logic
* **Event-driven only when coordination requires it**
* **AI as an augmentation layer**, never as a source of truth
* **Production-grade patterns**, even in a personal project

---

## 🧩 Core Features

### MVP (1-Month Deliverable)

#### **Shared Investigation Canvas**
* **Dual-View Interface:**
  * Timeline View — Chronological history of issues, investigations, and attempts
  * Spatial View — Collaborative canvas where cards converge toward solution
* **5 Card Types:**
  * Symptom Cards (errors, metrics, anomalies)
  * Hypothesis Cards (proposed explanations)
  * Action Cards (solutions attempted)
  * Solution Cards (confirmed fixes)
  * AI Insight Cards (AI-generated suggestions)
* **Visual Linking** — Draw connections between symptoms, hypotheses, and solutions
* **Invalidation System** — Mark failed attempts without deletion (preserves learning)

#### **Real-Time Collaboration**
* WebSocket-powered multi-user editing
* Optimistic UI with Kafka confirmation
* Permission model: active investigators can modify, others read-only
* Last-write-wins conflict resolution with visual feedback

#### **Event Sourcing via Kafka**
* All canvas actions stored as immutable events
* Event replay capability ("what did the canvas look like at 2:30am?")
* Perfect audit trail for post-mortems
* AI learns from historical event streams
* Topics: `incidents.lifecycle`, `investigation.actions`, `system.telemetry`, `ai.insights`

#### **AI Crisis Assistant**
* Pattern detection from past incidents
* Proactive suggestions during investigation
* "AI Detective" mode: cross-references symptoms with history
* Non-intrusive alerts (suggestive, not alarming)
* Learns from your organization's specific crisis patterns

#### **Crisis Visibility Dashboard**
* Deployment timeline (focus on "breakable logic" changes)
* Error logs (client + server) with metrics correlation
* User/system journey reconstruction
* Recent changes tracker

### Future State (Documented, Not Implemented)

* Advanced AI prevention (predictive anomaly detection before crisis)
* Integrations (Slack, PagerDuty, Sentry, GitHub, Vercel)
* RBAC expansion & team management
* On-call rotation & burnout tracking
* Post-crisis knowledge base with pattern library
* Multi-region deployment
* Observability stack (Prometheus, Grafana)

---

## 🏗️ High-Level Architecture

```
Crisis Investigators (DevOps/SRE Team)
  ↓ HTTPS / WebSocket
Next.js App (React, App Router)
  ↕ TanStack Query (cache + optimistic updates)
Fastify API (Node.js + WebSocket Server)
  ↕ Kafka (Event Streaming - Source of Truth)
      ├─ incidents.lifecycle
      ├─ investigation.actions (canvas events)
      ├─ system.telemetry
      └─ ai.insights
  ↕ Consumer Groups
      ├─ WebSocket Broadcaster (real-time UX)
      ├─ AI Analysis (pattern detection)
      ├─ Audit Logger (compliance)
      └─ Metrics Aggregator
  ↔ PostgreSQL + JSONB (projections, user data)
  ↔ Redis (cache, session)
  ↔ OpenAI API (AI suggestions)

Infra (MVP)
  Docker Compose (local development)
  Vercel (Frontend deployment)
  Railway/Render (Backend + Kafka)
  
Infra (Future)
  Kubernetes (EKS)
  Multi-region
  Prometheus + Grafana
```

**Key Pattern:**  
WebSocket = Fast Lane (immediate UX feedback)  
Kafka = Durable Path (source of truth + async processing)

---

## 🧠 Technology Choices & Rationale

### ⚛️ Next.js (App Router)

**Role**: Rendering & delivery

**Why**:

* Server-Side Rendering & streaming
* Clear separation between server and client components
* Industry standard for modern React

**Explicit non-goals**:

* Managing async data lifecycles
* Handling realtime cache evolution

> Next.js renders data — it does not orchestrate how data changes over time.

---

### 🔄 TanStack Query

**Role**: Client-side async state orchestrator

**Why**:

* Cache normalization & invalidation
* Optimistic updates & rollback
* Background refetch & retry strategies
* Seamless integration with WebSockets & events

**Key design decision**:

> Next.js handles *where* data comes from, TanStack Query handles *how it evolves*.

This separation is critical for collaborative, realtime systems.

---

### 🎨 shadcn/ui + Tailwind

**Why**:

* Fully composable & unopinionated
* Direct access to markup
* Accessibility via Radix
* Perfect fit for modern Next.js apps

Avoids the rigidity of heavy UI frameworks while remaining production-ready.

---

### 🧩 Backend — Fastify (Node.js)

**Why**:

* High performance, low overhead
* Excellent plugin system
* Native WebSocket support
* Easy Kafka & Redis integration

The backend intentionally starts as a **modular monolith**, with clear boundaries allowing future extraction.

---

### 🔐 Authentication — AWS Cognito

**Why**:

* OAuth2 / JWT / refresh tokens
* Enterprise-grade identity management
* Simple Fastify integration

Auth is introduced **after core flows exist**, avoiding early complexity.

---

### 🔄 Event-Driven Layer — Kafka

**Why Kafka (not Redis Streams or simpler alternatives)**:

Crisis investigation events are **high-value artifacts** that justify production-grade infrastructure:

* **Durability** → Crisis events must never be lost (regulatory, learning, liability)
* **Multiple Consumers** → Real-time UI, AI analysis, audit logs, metrics—all independent
* **Event Replay** → AI learns from past crises, perfect post-mortems, temporal queries
* **Horizontal Scaling** → During major incidents, partition load across consumers
* **Production Patterns** → Demonstrates senior-level understanding of event-driven architecture

**Redis Streams would be simpler, but doesn't demonstrate architectural judgment at scale.**

**Kafka Integration Strategy:**
* Week 1: Build with in-memory events (validate UX first)
* Week 2: Migrate to Kafka (AI-assisted setup)
* Pattern: Kafka = source of truth, WebSocket = delivery mechanism

This approach shows **pragmatism** (incremental adoption) and **judgment** (knowing WHEN Kafka is worth the complexity).

---

### 🗄️ Data Layer — PostgreSQL

**Why**:

* Clear relational modeling
* Easy local development
* Aurora-compatible for production

Avoids early cloud lock-in while remaining realistic.

---

### 🤖 AI Layer

**Purpose**:

* Summarize event streams
* Detect anomalies
* Suggest prioritization
* Provide internal ChatOps assistant

**Key rule**:

> AI consumes events — it never owns business logic.

This ensures determinism, debuggability, and trust.

---

### 📈 Observability

* **Sentry** → frontend & backend error tracking
* **Prometheus + Grafana** → metrics & system health
* **Structured logs** → debugging & audits

Observability is treated as a **first-class feature**.

---

## 🗺️ 1-Month Development Roadmap

**Strategy:** MVP Phases + AI Agent Acceleration

### Week 1: Foundation + Real-Time Collaboration ✅

**Deliverable:** Demo-able collaborative canvas

* Next.js + Fastify + WebSocket setup
* Dual-view canvas UI (timeline + spatial)
* 5 card types with CRUD operations
* Real-time multi-user collaboration
* In-memory event store (Kafka comes Week 2)
* AI development agents configured

**Success Metric:** 2+ users can collaborate on canvas in real-time

---

### Week 2: Kafka Integration (AI-Assisted) 🔥

**Deliverable:** Event-driven architecture visible

* Kafka + Zookeeper via Docker Compose
* Event migration: in-memory → Kafka topics
* Producer/Consumer implementation
* Event sourcing for canvas actions
* WebSocket + Kafka sync (dual-channel pattern)
* Event replay capability

**AI Agent Role:** "Kafka Expert" generates config, writes producers/consumers, developer reviews and learns

**Success Metric:** Canvas state fully reconstructable from Kafka event stream

---

### Week 3: AI Layer + Features 🧠

**Deliverable:** Complete functional showcase

* OpenAI API integration
* Pattern detection (rule-based initially)
* AI card auto-generation
* Historical incident correlation
* Crisis visibility dashboard (deployments, errors, metrics)
* UX polish (animations, loading states, error handling)

**Success Metric:** AI successfully suggests patterns from simulated past incidents

---

### Week 4: Documentation + Deploy + "Future State" 📄

**Deliverable:** Portfolio-ready project

* README architectural deep-dive
* Architecture diagrams (Excalidraw/Mermaid)
* "Future State" documentation:
  * Scaling to 1000 users
  * Multi-region strategy
  * Advanced AI roadmap (ML models)
  * Integration ecosystem (Slack, PagerDuty, etc.)
* Production deployment (Vercel + Railway/Render)
* 2-3 minute demo video
* Code quality review

**Success Metric:** Project impresses in <60 seconds, every tech decision defensible

---

### Future Milestones (Documented, Not Implemented)

#### Phase 2: Integrations & Intelligence
* Slack notifications, GitHub tracking, PagerDuty sync
* Advanced AI: ML-based anomaly detection
* Predictive crisis prevention

#### Phase 3: Team & Scale
* RBAC expansion, team management
* On-call rotation automation
* Multi-region deployment
* Load testing & chaos engineering

#### Phase 4: Observability & Hardening
* Prometheus + Grafana
* Sentry integration
* Performance optimization
* Security audit

---

## 🤖 Parallel Development with AI Agents

The repository is structured to enable **parallel work by multiple AI agents**:

* **Architect Agent** → boundaries & trade-offs
* **Frontend Agent** → UI, performance, UX
* **Backend Agent** → domain logic, APIs
* **Infra Agent** → Docker, K8s, CI/CD
* **AI Agent** → prompts, pipelines, evaluation
* **QA Agent** → edge cases, resilience

Tools: Cursor, Claude Code, Copilot, ChatGPT

---

## 📌 What This Project Demonstrates

### Technical Depth
* **Event-Driven Architecture** — Kafka as event backbone, proper topic design, consumer groups
* **Real-Time Systems** — WebSocket + Kafka dual-channel pattern, optimistic UI, conflict resolution
* **Event Sourcing** — Partial application (canvas only), event replay, temporal queries
* **AI Integration** — Pattern detection, preventive alerts, learning from historical data
* **Modern React** — Next.js App Router, TanStack Query, optimistic updates, server/client separation

### Engineering Judgment
* **When to use Kafka** — Justified by domain requirements (high-value events, multiple consumers, replay)
* **Incremental complexity** — Week 1 in-memory → Week 2 Kafka (validate first, then scale)
* **Scope management** — MVP + "Future State" docs (shows scaling thinking without over-building)
* **Explicit trade-offs** — Table of decisions with alternatives considered

### Learning Agility
* **Kafka from zero to production** — Learning a complex technology in 2 weeks with AI assistance
* **AI-assisted development** — Using AI agents to accelerate without bypassing understanding
* **Pragmatic approach** — 1-month timeline with realistic deliverable + clear roadmap

### Interview Narrative
* **Clear problem statement** — Crisis investigation, not generic "ops platform"
* **Defensible architecture** — Every choice has a "why"
* **Production thinking** — Even for personal project, patterns are production-grade
* **Meta-story** — "How I built this" is as valuable as "what I built"

---

---

## 🎯 Strategic Approach

This project balances **ambition** with **realism**:

### The Learning Goal
Master **Kafka** (event streaming) in a real-world context, not tutorial-land. Kafka is ubiquitous in senior engineering roles but has a steep learning curve—building a crisis platform provides legitimate justification for its complexity.

### The Timeline Constraint  
**1 month, full-time** — Aggressive but achievable with:
* **AI agent assistance** (Kafka expert, architecture advisor, code generation)
* **Incremental delivery** (always have something demo-able)
* **Scope discipline** (MVP + documented "Future State")

### The CV Narrative
Not "I learned Kafka in a tutorial," but:
> "I designed and built a Crisis Investigation Platform to learn Kafka in a realistic architectural context. I justified every technology choice, delivered a functional MVP in 1 month with AI assistance, and documented how it would scale to production."

**That story resonates in senior engineering interviews.**

---

## 🧠 TL;DR

> This project is not about **stacking technologies** — it's about **knowing when and why to use them**, and having the **judgment** to build incrementally while **thinking** at scale.

**The decision-making process is the real deliverable.**

---

## 📚 Related Documentation

* **[Brainstorming Session Report](_bmad-output/analysis/brainstorming-session-2026-01-21.md)** — Complete product discovery, 100+ ideas, technical decisions
* **[Architecture Decision Records](docs/adr/)** — (Coming Week 4) Detailed reasoning for each major choice

---

**Built with:** Next.js, Fastify, Kafka, PostgreSQL, WebSockets, TanStack Query, OpenAI  
**Timeline:** 1 month (Jan 2026)  
**Approach:** AI-assisted development with human oversight  
**License:** MIT
