# Project Kyzen — Case Study
### Game UX / Product Design · Impact Theory Studios · Jan 2022 – Sep 2024

---

## The Frame

> "Game design teaches you that every screen is a contract — break it once and you lose the player forever."

---

## The Context

Impact Theory Studios is Tom Bilyeu's media company — best known for the Impact Theory podcast, which has reached hundreds of millions of people. In 2022, Bilyeu made his most ambitious bet: building a video game from scratch.

Project Kyzen is a fast-paced third-person battle arena, drawing from Fortnite and Fall Guys, but with a distinctly philosophical edge. The premise: competitive gameplay as a vehicle for real-world empowerment. Players don't just win — they grow.

I spent nearly three years as the UX designer on this project — from early wireframes through final design, across game UI, avatar systems, store design, brand systems, and marketing.

---

## What the Game Is

**A third-person battle arena built around four Mini Battle Arenas (MiBAs):** Energy Arena, Color Control, Golden Ball, and Duel — each demanding different strategies and team dynamics.

The game sits at an unusual intersection:
- Competitive like Fortnite
- Accessible like Fall Guys
- Philosophically-driven like nothing else in the genre

Player progression isn't just mechanical. The game uses a K.OS mission system — quests layered over combat that push players toward personal development, not just leaderboard rank.

**Avatar customization is central to the experience.** Project Kyzen launched with a custom Bruce Lee avatar — designed in collaboration with the Bruce Lee estate, sold as a featured "Jin and Bruce Lee" bundle in Vogue's Vault (the in-game store) — as a signal of the game's ambitions: characters aren't just skins, they're expressions of aspiration.

The Merry Modz integration extended this further: 10,000 Merry Modz NFT characters became playable avatars in Kyzen, linking a Web3 narrative franchise directly to the game's character ecosystem.

---

## The UX Problems That Made This Hard

Game UX is different from product UX in ways that are hard to overstate:

**Speed and legibility under stress.** The HUD had to communicate in the periphery of attention. The final design places the 2:31 round timer at top center with team scores flanking it, health/stamina bars at bottom-left, and ability coin slots at bottom-right — all designed to be readable while the player's focus is entirely on the arena. Respawn screens use a large heart icon with a countdown and achievement notifications that don't interrupt gameplay flow.

**Emote system as social expression.** The radial emote wheel — 8 slots arranged in a circle, with the selected emote ("Alfonzo Freshness") highlighted in cyan — had to be fast to access and read at a glance. Two design states: default (all dim) and selected (one highlighted with name). Classic game UX problem, solved with care for the social experience.

**Customization depth vs. discoverability.** Avatar customization spans: base body type, face (skin, hair, features), head items (hats, glasses, earrings), body items (tops, gloves, accessories), legs & feet, and back items — all culminating in a **Photobooth** step where players select a pose and background before previewing their avatar. Then they name it, mint it, and it enters their line-up. The flow had to feel effortless across 7+ steps.

**Onboarding into Web3 complexity.** The game layered blockchain mechanics over combat mechanics over social mechanics. The Phase 1 user flow (documented in FigJam) maps the full loop: Start → Connect Wallet → Avatar creation branch → Lobby → Game Mode → Arena → HUD → K.OS Missions → Win/Lose → XP → Return to Lobby, with Store, Guild, and Settings branches. Teaching all of this to a new player required layered disclosure — showing just enough, at exactly the right moment.

**The store as a design system.** Vogue's Vault — the Kyzen Store — handles Featured Bundles (hero items like the Bruce Lee collaboration), cosmetic categories (Tops, Feet, Back Items), and the K.OINS virtual currency (1,000 K.OINS/$7.99, 2,800/$19.99 with 12% bonus, 5,000/$32.99 with 21% bonus, 13,500/$69.99 with 54% bonus). Item cards use a distinctive diamond/rhombus orientation with color-coded rarity tiers (grey, green, blue, purple, red, gold, cyan). The checkout flow handles both traditional payment and IMX/ETH crypto transactions.

**The marketplace as a Web3 UX problem.** Beyond the store, Kyzen had a peer-to-peer marketplace for items and avatars — with distinct flows for listing items for sale (quantity + price), unminting avatars (returning items to inventory), removing listings, updating sale orders, and the buyer path (browse → select → transfer IMX/ETH → transaction success/fail → item moves to inventory). Every step involved irreversible or high-stakes action. The design had to communicate stakes without inducing anxiety.

**Community Corner and user-generated content.** The final game mode selection screen includes a Community Corner — a browser for user-created maps, accessible by entering a map code. This added a UGC layer on top of the 4 MiBAs, requiring design for both content creation (the Map Designer Tool) and content discovery (the Community Corner browse interface).

---

## Process

**Phase 3.7: Wireframes → Final Design.** The Figma work covered the complete game — from low-fidelity wireframe flows (player profile, avatar stats, achievements, leaderboards, inventory, mint screens, guild system, battle pass, account settings, social/friends, progress pass purchase flow) to high-fidelity final designs (HUD, game mode selection, avatar select, metagame hub, store, K.OINS purchase, marketplace, onboarding, map designer).

**The metagame hub** ("GIRTONIAN" — my own profile in the game) unified the experience: player profile with character showcase, Weekly Challenges, party formation, Notifications panel, Friends Search, and Recent Players, all on a consistent Japanese temple-inspired backdrop with cloud vistas.

**Cross-project visual system.** The Kyzen brand system (documented in full brand guidelines) uses:
- Logo: KYZEN wordmark + custom K symbol, with secondary sigil icons for each game mode
- Primary: #4F8CE2 (blue), plus red, gold (#F5C519), purple
- Typography: Druk (bold display) + The Future (clean futuristic body)
- Tone of Voice: Innovative, Forward / Engaging, Dynamic / Community, Motivation / Relentless, Winning / Balance + Beyond

**Map Designer Tool.** A custom internal tool built to support level and arena design workflows — an island-based terrain editor with floating geometry, an asset panel, and multiple map templates (Energy, Combat, Flat, Landscape, Cave). This is tooling for the team itself, not the player — a different kind of design problem.

**Marketing and brand.** Beyond game UI, I built out Kyzen's marketing visual language — how the game presents itself externally. Marketing design for a game is a different problem from UI design: it's about promise before experience.

---

## What I Learned

Three years of game UX changes how you think about every interface you touch:

**Feedback latency matters everywhere.** In games, a 50ms delay in haptic response feels broken. That sensitivity — to response time, to microinteraction polish — never leaves you. It makes you a better product designer.

**Players are critics in real time.** There's no asynchronous review cycle in games. Users are forming opinions at 60fps. The design has to earn its place in every frame.

**Systems thinking at scale.** A game is a design system that runs itself. Every design decision interacts with dozens of others. Building Project Kyzen trained a kind of thinking that's rare: how to design not just screens, but the logic that connects them.

**Web3 UX requires honesty.** Irreversible transactions, real monetary value, burn mechanics — these demand a standard of clarity that most digital products don't face. Designing the marketplace, the K.OINS purchase flow, and the mint/unmint system required thinking hard about what "informed consent" actually means in a UI.

---

## Outcome

Project Kyzen launched publicly with Mini Battle Arenas in August 2024. The Bruce Lee avatar collaboration drew significant press coverage across gaming and Web3 outlets. The Merry Modz integration created a live cross-platform narrative — one of the more unusual design challenges in the project's history.

**Duration:** January 2022 – September 2024
**Brand colors:** #4F8CE2 · Red · Gold (#F5C519) · Purple
**Typefaces:** Druk · The Future
**Platform:** PC (Windows), Web3-enabled
**Virtual currency:** K.OINS
**Store:** Vogue's Vault
**Game modes:** Energy Arena · Color Control · Golden Ball · Duel

---

## What This Demonstrates

**System design at generative scale.** An avatar system that accommodates 10,000 Merry Modz characters while maintaining UX legibility is a different problem from designing a single product. It's identity-preserving systems design.

**Multi-surface visual language.** Game UI, store UI, metagame hub, marketing materials, internal tooling, brand guidelines, Web3 marketplace — all one project, one coherent system.

**High-stakes Web3 UX.** Mint mechanics, peer-to-peer marketplace, IMX/ETH transactions, irreversible actions — these are UX problems the industry hadn't fully figured out. Designing them responsibly, at the height of the space's growth, required judgment.

**Internal tooling.** The Map Designer Tool is a product within the product — a different kind of UX problem, where the users are level designers and the output is the game itself.

---

## Visual Notes for the Case Study Page

*[Insert: Phase 3.7 wireframe overview — showing the breadth of the system from profile to inventory to guild]*
*[Insert: Final HUD design — 2:31 timer, health bars, ability coins, in the lush arena environment]*
*[Insert: Avatar Select — GIRTONIAN profile with Bruce Lee avatar in black kung fu outfit]*
*[Insert: Game mode selection — Energy Arena, Color Control, Golden Ball, Duel with character art and bamboo frame]*
*[Insert: Vogue's Vault store — Jin and Bruce Lee featured bundle + K.OINS purchase tiers]*
*[Insert: Emote wheel — "Alfonzo Freshness" radial selector, default and selected states]*
*[Insert: Map Designer Tool — floating island terrain editor with asset panel]*
*[Insert: Phase 1 User Flow FigJam — complete game loop diagram]*
*[Insert: Brand guidelines page — logo system, color palette, Druk + The Future type, tone of voice]*
*[Insert: Merry Modz avatar integration — showing character fidelity across contexts]*

---

*UX Design · Impact Theory Studios · Project Kyzen · 2022–2024*
*Tags: Game UX · Product Design · Avatar Systems · Design Systems · Web3 · Brand · Figma · Internal Tooling*
