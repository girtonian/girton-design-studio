import type { CaseStudyContent } from '@/lib/types'

export const spicedRealmsFructasiaCaseStudy: CaseStudyContent = {
  sections: [
    {
      title: 'The Hook',
      body: [
        'What happens when you build a fantasy universe where the characters are sentient fruitcakes?',
        'You get "The Spiced Realms of Fructasia"—a world I created from scratch in ten days that spans character design, world-building, game development, and a systematic approach to visual consistency that lets these characters live across any medium without losing their identity.',
        'This project started as a creative experiment and became a full design system. The challenge wasn\'t just making whimsical food mascots look good—it was building infrastructure that could scale.',
      ],
    },
    {
      title: 'Project Overview',
      body: [
        'Fructasia is a fantasy universe populated by sentient fruitcake characters, each belonging to distinct factions with their own cultures, aesthetics, and narrative weight. The visual language draws from 1930s–50s advertising mascots and rubber-hose animation, but treats the food-based anatomy as real material rather than costume or cartoon.',
      ],
    },
    {
      title: 'The Creative Problem',
      body: [
        'I wanted to build something that could work across platforms—games, video content, storyboards, music—without the characters drifting into inconsistency. Anyone who\'s tried generating AI-assisted art knows how quickly visual identity breaks down across batches. My goal was to solve that problem systematically while telling a story worth following.',
      ],
    },
    {
      title: 'Timeline & Process',
      flow: [
        { label: 'Dec 21', description: 'Concept Crystallization' },
        { label: 'Dec 22–24', description: 'Character Architecture' },
        { label: 'Dec 25–27', description: 'The Mascot Bible' },
        { label: 'Dec 28–29', description: 'World Expansion' },
        { label: 'Dec 30–31', description: 'Multi-Platform Implementation' },
      ],
    },
    {
      title: 'December 21st — Concept Crystallization',
      body: [
        'I started with a question: how do you make food mascots feel dignified rather than silly?',
        'The answer was treating them seriously. I developed the core visual principle—edible sentient characters whose anatomy reads as real material, not decoration. This meant no human proportions, no costume logic, no cartoon shortcuts. The fruitcake had to be a character, not wear one.',
        'Early exploration focused on establishing a consistent silhouette language and determining which design elements should stay locked versus which could flex.',
      ],
    },
    {
      title: 'December 22nd–24th — Character Architecture',
      body: [
        'I built out the initial character roster:',
        '• Grand Duke Brambleton — the dignified traditional fruitcake representing old-world authority',
        '• Captain Rummy Nightwave — a rum-soaked seafarer leading the Rum Navy faction',
        '• Sunny Aurelia Crumb — the warm, welcoming face of hospitality',
        '• Sorcha Panforte — a dense, mystical spice-worker',
        '• Pip Pocketloaf — a compact courier built for action',
        'Each character needed a locked identity—cake type, body shape, crumb texture, fruit distribution, face structure, color palette—that could never change regardless of scene or emotion.',
      ],
    },
    {
      title: 'December 25th–27th — The Mascot Bible',
      body: [
        'This was the turning point.',
        'I realized that character sheets weren\'t enough. I needed a full design system—something that could enforce visual canon automatically, whether I was generating a single portrait or a 20-image storyboard batch.',
        'I wrote the Fructasia Mascot Bible: a comprehensive prompt guide that locks identity elements, defines faction overlays, provides emotion and pose packs, and establishes a strict assembly order for any prompt. It includes:',
        '• Global style anchors',
        '• Core mascot description templates',
        '• Faction-specific aesthetic overlays',
        '• Approved emotion and pose ranges',
        '• Consistency fail-safes for drift recovery',
        '• One-page ID sheets for every named character',
        'The document also includes an Art Director Prompt—a master control that makes the AI behave like a style enforcer rather than a free-form generator.',
      ],
      quote: 'Character sheets weren\'t enough. I needed a full design system.',
    },
    {
      title: 'December 28th–29th — World Expansion',
      body: [
        'With characters locked, I expanded into environment and faction design:',
        '• Gilded Crumb Empire — ceremonial architecture, heraldic icing, tradition-heavy',
        '• Rum Navy — weathered ships, barrel accessories, storm-lit seas',
        '• Guild of Spices — ember glows, arcane runes, mystical workshops',
        '• Jeweled Court — sugar-glass elegance, prismatic lighting',
        '• Foragebound Clans — rustic textures, forest settlements',
        '• Borderlands of Remix — experimental, neon-accented, chaotic energy',
        'I developed a modular scene pack system for storyboards, allowing me to generate multi-panel narratives while maintaining full canon compliance.',
      ],
    },
    {
      title: 'December 30th–31st — Multi-Platform Implementation',
      body: [
        'The final push connected everything to practical outputs:',
        '• A top-down action-adventure game featuring Pip Pocketloaf and Captain Rummy Nightwave, built with Phaser 3 and Vite',
        '• Sora 2 video generation prompts for character animations',
        '• Storyboard templates for narrative content',
        '• Supporting music created on Suno',
      ],
    },
    {
      title: 'Challenges & Adaptation',
      body: [
        'Visual Drift — Early batch generation produced characters that looked related but not identical. A "Captain Rummy" in one image might have slightly different proportions or fruit placement than the next. This wasn\'t acceptable for a universe meant to feel cohesive.',
        'The solution was redundancy and reinforcement. I learned to repeat character names every 75–100 tokens, add consistency fail-safes, and use negative prompts aggressively (no human anatomy, no mascot costumes, no anime proportions). The Mascot Bible became the control document that made batch consistency possible.',
      ],
    },
    {
      title: 'Balancing Whimsy and Weight',
      body: [
        'Fruitcake mascots could easily tip into absurdity. I had to find the line where the concept stayed playful but the execution stayed serious. The vintage advertising aesthetic helped—it provided a visual vocabulary that\'s inherently charming but also compositionally disciplined.',
      ],
    },
    {
      title: 'Compressed Timeline',
      body: [
        'Ten days isn\'t much time to build a universe. I had to repeatedly refocus on polishing one character, one environment, one game level before expanding. Depth over breadth became a recurring discipline—and honestly, the tight deadline forced better decisions than I might have made with unlimited time.',
      ],
    },
    {
      title: 'Final Outcome',
      body: [
        'What was submitted:',
        '• 10+ named characters with locked visual identities',
        '• 6 distinct factions with full aesthetic definitions',
        '• A 16-page Mascot Bible with templates, examples, and enforcement prompts',
        '• A modular storyboard system for narrative sequences',
        '• A working game prototype',
        '• Supporting video and music assets',
        'The original goal was a universe that could scale without breaking. The final system does exactly that—any new character, scene, or medium can be added without redesigning what already exists. The characters are recognizable at any distance, in any lighting, in any emotional state.',
      ],
      quote: 'The fruitcakes were the fun part. The real work was everything underneath.',
    },
    {
      title: 'Reflection & Takeaways',
      body: [
        '• Systems beat styles. A strong design system outlasts any single image. The Mascot Bible is more valuable than any individual render because it makes future work predictable.',
        '• Lock identity early. Deciding what can\'t change is more important than deciding what can. Flexibility without foundation creates chaos.',
        '• Constraints are creative. The "no humans, no photorealism, no anime" rules forced me into a visual lane that became distinctive rather than limiting.',
        '• Recognition over novelty. When in doubt, I simplified. A character that\'s immediately readable beats a character that\'s impressively complex but forgettable.',
      ],
    },
    {
      title: 'What This Demonstrates',
      body: [
        'This project shows how I think about design at a systems level—not just making things look good, but building infrastructure that makes consistency achievable at scale. It demonstrates world-building discipline, documentation rigor, and the ability to translate creative vision into practical tools under a tight deadline.',
      ],
    },
    {
      title: 'Project Details',
      body: [
        'Project Duration: December 21st–31st, 2024 (10 days)',
        'Tools: Nano Banana Pro, Phaser 3, Vite, Suno, florafauna.ai, Sora 2',
      ],
    },
  ],
}
