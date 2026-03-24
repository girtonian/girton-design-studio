import type { CaseStudyContent } from '@/lib/types'

export const kyzenCaseStudy: CaseStudyContent = {
  sections: [
    {
      quote:
        'Game design teaches you that every screen is a contract — break it once and you lose the player forever.',
    },
    {
      title: 'Overview',
      body: [
        'Impact Theory Studios is Tom Bilyeu\'s media company — best known for the Impact Theory podcast, which has reached hundreds of millions of people. In 2022, Bilyeu made his most ambitious bet: building a video game from scratch.',
        'Project Kyzen is a fast-paced third-person battle arena drawing from Fortnite and Fall Guys, but with a distinctly philosophical edge. The premise: competitive gameplay as a vehicle for real-world empowerment. Players don\'t just win — they grow.',
        'I spent nearly three years as the UX designer on this project — from early wireframes through final design, across game UI, avatar systems, store design, brand systems, and marketing.',
      ],
    },
    {
      title: 'What the Game Is',
      body: [
        'A third-person battle arena built around four Mini Battle Arenas (MiBAs): Energy Arena, Color Control, Golden Ball, and Duel — each demanding different strategies and team dynamics.',
        'The game sits at an unusual intersection: competitive like Fortnite, accessible like Fall Guys, philosophically-driven like nothing else in the genre.',
        'Player progression isn\'t just mechanical. The game uses a K.OS mission system — quests layered over combat that push players toward personal development, not just leaderboard rank.',
        '• Avatar customization is central to the experience',
        '• Bruce Lee collaboration — "Ion and Bruce Lee" bundle in Vogue\'s Vault',
        '• Merry Modz NFT integration: 10,000 characters as playable avatars',
        '• Community Corner: user-created maps accessible via map codes',
      ],
    },
    {
      title: 'Speed and Legibility Under Stress',
      body: [
        'The HUD had to communicate in the periphery of attention. The final design places the 2:31 round timer at top center with team scores flanking it, health/stamina bars at bottom-left, and ability coin slots at bottom-right — all designed to be readable while the player\'s focus is entirely on the arena.',
        'Respawn screens use a large heart icon with a countdown and achievement notifications that don\'t interrupt gameplay flow.',
      ],
      quote: 'In games, a 50ms delay in haptic response feels broken. That sensitivity never leaves you.',
    },
    {
      title: 'Emote System as Social Expression',
      body: [
        'The radial emote wheel — 8 slots arranged in a circle, with the selected emote highlighted in cyan — had to be fast to access and read at a glance.',
        'Two design states: default (all dim) and selected (one highlighted with name). Classic game UX problem, solved with care for the social experience.',
      ],
    },
    {
      title: 'Avatar Customization & the Photobooth Flow',
      body: [
        'Avatar customization spans: base body type, face (skin, hair, features), head items, body items, legs & feet, and back items — all culminating in a Photobooth step where players select a pose and background before previewing their avatar.',
        'Then they name it, mint it, and it enters their lineup. The flow had to feel effortless across 7+ steps while introducing Web3 mechanics (minting) without friction.',
      ],
    },
    {
      title: 'Onboarding into Web3 Complexity',
      body: [
        'The game layered blockchain mechanics over combat mechanics over social mechanics. The Phase 1 user flow maps the full loop: Start → Connect Wallet → Avatar creation → Lobby → Game Mode → Arena → HUD → K.OS Missions → Win/Lose → XP → Return to Lobby, with Store, Guild, and Settings branches.',
        'Teaching all of this to a new player required layered disclosure — showing just enough, at exactly the right moment.',
      ],
    },
    {
      title: "Vogue's Vault — The In-Game Store",
      body: [
        'Vogue\'s Vault handles Featured Bundles (hero items like the Bruce Lee collaboration), cosmetic categories (Tops, Feet, Back Items), and the K.OINS virtual currency.',
        '• 1,000 K.OINS / $7.99',
        '• 2,800 K.OINS / $19.99 (12% bonus)',
        '• 5,000 K.OINS / $32.99 (21% bonus)',
        '• 13,500 K.OINS / $69.99 (54% bonus)',
        'Item cards use a distinctive diamond/rhombus orientation with color-coded rarity tiers (grey, green, blue, purple, red, gold, cyan). The checkout flow handles both traditional payment and IMX/ETH crypto transactions.',
      ],
    },
    {
      title: 'The Web3 Marketplace',
      body: [
        'Beyond the store, Kyzen had a peer-to-peer marketplace for items and avatars — with distinct flows for listing items for sale, unminting avatars, removing listings, updating sale orders, and the buyer path.',
        'Every step involved irreversible or high-stakes action. The design had to communicate stakes without inducing anxiety.',
      ],
      quote: 'Designing irreversible transactions responsibly, at the height of the Web3 space\'s growth, required a standard of clarity that most digital products don\'t face.',
    },
    {
      title: 'Process & Brand System',
      body: [
        'Phase 3.7 covered the complete game — from low-fidelity wireframe flows (player profile, avatar stats, achievements, leaderboards, inventory, mint screens, guild system, battle pass) to high-fidelity final designs (HUD, game mode selection, avatar select, metagame hub, store, K.OINS purchase, marketplace, onboarding, map designer).',
        'The metagame hub — "GIRTONIAN" — unified the experience: player profile with character showcase, Weekly Challenges, party formation, Notifications panel, Friends Search, and Recent Players, all on a Japanese temple-inspired backdrop with cloud vistas.',
      ],
      flow: [
        { label: 'Wireframes', description: 'Full game flow from profile to guild to inventory' },
        { label: 'High Fidelity', description: 'HUD, store, avatar select, metagame hub' },
        { label: 'Brand System', description: 'Logo, color (blue/red/gold/purple), Druk + The Future' },
        { label: 'Marketing', description: 'External-facing visual language' },
      ],
    },
    {
      title: 'Map Designer Tool',
      body: [
        'A custom internal tool built to support level and arena design workflows — an island-based terrain editor with floating geometry, an asset panel, and multiple map templates (Energy, Combat, Flat, Landscape, Cave).',
        'This is tooling for the team itself, not the player — a different kind of design problem where the users are level designers and the output is the game itself.',
      ],
    },
    {
      title: 'What I Learned',
      body: [
        '• Feedback latency matters everywhere. In games, a 50ms delay feels broken. That sensitivity makes you a better product designer.',
        '• Players are critics in real time. There\'s no asynchronous review cycle. The design has to earn its place in every frame.',
        '• Systems thinking at scale. A game is a design system that runs itself. Every decision interacts with dozens of others.',
        '• Web3 UX requires honesty. Irreversible transactions and real monetary value demand a standard of clarity that most digital products don\'t face.',
      ],
    },
    {
      title: 'Outcome',
      body: [
        'Project Kyzen launched publicly with Mini Battle Arenas in August 2024. The Bruce Lee avatar collaboration drew significant press coverage across gaming and Web3 outlets. The Merry Modz integration created a live cross-platform narrative.',
      ],
      flow: [
        { label: 'Jan 2022', description: 'UX work begins — wireframes and system architecture' },
        { label: '2022–2024', description: 'Full game design: HUD, store, avatars, marketplace, brand' },
        { label: 'Aug 2024', description: 'Public launch with Mini Battle Arenas' },
        { label: '2024', description: 'Bruce Lee collaboration and Merry Modz NFT integration live' },
      ],
    },
    {
      title: 'What This Demonstrates',
      body: [
        '• System design at generative scale — an avatar system accommodating 10,000 Merry Modz characters while maintaining UX legibility',
        '• Multi-surface visual language — game UI, store, metagame hub, marketing, internal tooling, and brand guidelines, all one coherent system',
        '• High-stakes Web3 UX — mint mechanics, peer-to-peer marketplace, IMX/ETH transactions, and irreversible actions designed responsibly',
        '• Internal tooling — the Map Designer Tool is a product within the product, a different kind of UX problem where users are level designers',
      ],
    },
  ],
}
