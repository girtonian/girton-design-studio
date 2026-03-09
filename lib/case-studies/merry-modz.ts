import type { CaseStudyContent } from '@/lib/types'

export const merryModzCaseStudy: CaseStudyContent = {
  sections: [
    {
      quote:
        '10,000 3D characters for a Web3 project at the height of the space — the real challenge wasn\'t the art. It was building a visual system that could scale to 10,000 variations without losing identity.',
    },
    {
      title: 'Overview',
      body: [
        'November 2021. NFTs are at the center of the culture conversation. Impact Theory Studios — Tom Bilyeu\'s media company — decides to enter the space with something ambitious: not a simple generative PFP project, but a multi-platform narrative franchise built around Christmas mythology.',
        'The project involved a rare triangle of collaborators: Tom Bilyeu (exec and IP visionary), Francisco "HerreraBox" Herrera (legendary artist, Forbes-recognized among top creative Mexicans worldwide, 20+ years of experience), and me as the designer responsible for UX, visual systems, and cross-platform design.',
        'HerreraBox created over 500 hand-drawn character pieces. A team of 50+ artists and 3D specialists then transformed those 2D designs into movie-grade 3D renders — the raw material for the generative system.',
      ],
    },
    {
      title: 'What Merry Modz Is',
      body: [
        'A 10,000-character 3D generative NFT collection, narrative-driven, Christmas-themed — and built for the long game.',
        'The premise: Christmas mythology reimagined. Not the Hallmark version. A story with real stakes, real characters, real conflict.',
        'The protagonist is SnoBo — a snowman who believes he cannot change, who accidentally imprisons Santa in ice, and who has to assemble a team of misfits to save Christmas.',
        '• SnoBo — the protagonist, imperfect and driven to grow',
        '• Bark — the loyal companion',
        '• Katarina — the fierce strategist',
        '• Kip — the engineering elf',
        '• Krampus — the villain (introduced 2022 via burn mechanic)',
        'The franchise tagline: "Grab Life By The Snowballz."',
      ],
    },
    {
      title: 'The Design Problem',
      body: [
        'How do you maintain identity across 10,000 variations?',
        'Generative NFT collections at the time had a standard failure mode: thousands of technically distinct outputs that looked and felt interchangeable. The trait combinations multiplied, but the characters blurred into each other.',
        'Merry Modz couldn\'t afford that. This was a franchise with lore, characters, and multi-platform ambitions. Each Mod needed to feel like a specific someone — not a randomized output.',
        'Traits had to do narrative work. The accessory system, color palettes, character expressions, and seasonal variations weren\'t just visual attributes — they were story signals. A Merry Mod with a specific combination of traits implies a personality.',
      ],
      quote: 'The system had to be flexible enough for 10,000 outputs but intentional enough that each one held character.',
    },
    {
      title: 'The Multi-Platform Problem',
      body: [
        'Merry Modz was never just a collection. The characters had to work across six+ contexts — each asking something different of the visual identity.',
      ],
      beforeAfter: {
        before: [
          'OpenSea: collectible asset (thumbnail scale)',
          'Discord: membership signal (PFP)',
          'Kyzen game: playable 3D avatar',
          'Animated short: film character',
        ],
        after: [
          'Visual identity legible at thumbnail scale',
          'Character fidelity that survives full resolution',
          'Rigging-ready 3D renders for game/animation',
          'Emotional clarity at every scale and context',
        ],
      },
    },
    {
      title: 'The Bark Decorating Experience',
      body: [
        'One of the more unusual design challenges was the Bark Decorating Experience — a wallet-aware, personalized digital ornament system delivered to holders annually.',
        'The idea: rather than giving everyone the same seasonal content, the system reads each holder\'s wallet and delivers a personalized package of virtual ornaments based on what they own. Different characters, different trait combinations, different holding history — different experience.',
        'This was early in the Web3 UX design canon. The systems that make it possible are complex — wallet connectivity, on-chain data reading, dynamic content delivery — but the user experience had to feel effortless. Personalized. Like Christmas morning, not a blockchain transaction.',
      ],
    },
    {
      title: 'The Krampus Mechanic',
      body: [
        'In 2022, Krampus was introduced as the franchise\'s villain. Rather than simply adding Krampus to the generative collection, Impact Theory designed a burn-and-trade mechanic: holders could transform existing characters through a specific interaction.',
        'When a user burns a token, it\'s gone. The design had to communicate the stakes clearly without creating unnecessary anxiety, make the reward feel commensurate with the sacrifice, and maintain trust across a transaction that can\'t be undone.',
        'The Krampus minting experience was one of several seasonal activations designed to keep the community engaged across the year, not just at mint.',
      ],
      quote: 'Irreversibility is the UX problem Web3 invented and the industry hadn\'t fully figured out. Designing it responsibly required judgment.',
    },
    {
      title: 'Dark Forest Run',
      body: [
        'The centerpiece of the 2023 Merry Modz season was Dark Forest Run — a full video game built in Unreal Engine 5, gated to Merry Modz holders and Kyzen item holders.',
        'Players guide SnoBo through the dark forest, training to become a Snowman Warrior alongside Kip, the engineering elf. The visual language drew directly from HerreraBox\'s work: a dark navy and deep crimson color scheme that departed entirely from the franchise\'s warmer Christmas palette — signaling that Dark Forest Run was a chapter set in a different, more dangerous world.',
        'The game included multiple modes: the main campaign and Snowball Sniper, a competitive mode. The UX carried Merry Modz conventions into a new context — inventory management through a Loop Paused modal, leaderboard screens, countdown timers — all maintaining visual coherence with the broader franchise system.',
        'Dark Forest Run also created exclusive in-game content: limited-edition MM Snow Blasters, designed by HerreraBox, available only within Project Kyzen — another link in the cross-platform chain.',
      ],
    },
    {
      title: 'Reflections',
      body: [
        'The NFT space collapsed faster than most people predicted. Projects that built for the long game — with genuine narrative IP, real artistic investment, and cross-platform expansion — survived better than those that didn\'t. Merry Modz was in that category.',
        'But knowing what the space became, I\'d have designed even more defensively for platform independence. The strongest version of the Merry Modz franchise is the one where the IP works whether or not Web3 is the delivery mechanism — and the characters are strong enough to carry that.',
        'HerreraBox\'s work is. SnoBo is a real character. That\'s the foundation that holds.',
      ],
    },
    {
      title: 'Outcome',
      body: [
        'Merry Modz launched November 2021 on OpenSea with 10,000 characters. Multi-season expansion through 2023.',
      ],
      flow: [
        { label: 'Nov 2021', description: 'Launch on OpenSea — 10,000 characters' },
        { label: 'Dec 2022', description: 'Eyes of Fire animated short released' },
        { label: '2022', description: 'Krampus burn-and-trade mechanic + Bark Decorator' },
        { label: '2023', description: 'Merry Memory Modz (matching card game) + Dark Forest Run (UE5)' },
        { label: '2023–2024', description: 'Bruce Lee avatar crossover with Project Kyzen' },
      ],
    },
    {
      title: 'What This Demonstrates',
      body: [
        '• System design at generative scale — designing a trait system that produces 10,000 distinct characters without losing narrative coherence is rules-based design, and the rules have to hold under thousands of edge cases',
        '• Multi-platform visual language — characters that work across six+ contexts require systems thinking about identity and legibility across very different environments',
        '• High-stakes Web3 UX — burn mechanics, wallet connectivity, irreversible transactions, designed responsibly at the height of the space\'s growth',
      ],
    },
  ],
}
