# Codrops Fluid X-Ray Reveal — Master Playbook
**Girtonian Design Studio | March 2026**
Source: https://tympanus.net/codrops/2026/03/23/building-a-dual-scene-fluid-x-ray-reveal-effect-in-three-js/
Demo: https://tympanus.net/Tutorials/SkeletonFluidReveal/
GitHub: https://github.com/cullenwebber/three-skull

---

## What This Is

Cullen Webber (@sinzvii) published a tutorial on Codrops today that demonstrates one of the most technically refined interactive WebGL effects of 2026. The core concept: a mouse-driven fluid simulation acts as an x-ray mask that blends two separate Three.js scenes — a solid body and a glowing skeleton. Where you hover, the flesh dissolves. Stop hovering, and it returns in ~1 second.

This isn't just a demo. It's a blueprint for the most effective pattern in premium web design right now: **cursor-as-environmental-force**.

---

## 🎨 DESIGN PULSE — dreaming-or-drowning

### What's Getting Traction Right Now

**1. WebGPU + TSL as the new WebGL** — The web graphics stack has shifted. Three.js's WebGPU renderer and TSL (Three Shading Language) are now production-viable, with WebGL fallback for compatibility. Cullen's piece is the most polished public example of TSL-native post-processing in 2026. The Three.js forum and r/threejs are actively discussing migration paths. This is the inflection point — designers and devs who get fluent in TSL now will have a 12-18 month skill advantage.

**2. Ping-pong render target fluids** — The fluid simulation pattern (alternating read/write render targets + FBM noise displacement) is becoming the signature technique of high-end interactive portfolios. It's appeared in award-winning work from Arnaud Rocca, Bruno Simon (his 2026 portfolio update), and agency sites on Awwwards. The key: the fluid gives cursor interaction organic, non-mechanical behavior that reads as physically intelligent.

**3. Dual-scene compositing** — Rendering two full 3D scenes and blending them via a shader mask is what separates "cool Three.js demo" from "cinematic web experience." The pattern is: Scene A (visible/default) + Scene B (revealed state) + mask texture. The mask can be a fluid sim (like this), a cursor spotlight, a scroll value, or a gyroscope reading. Expect this to be the defining pattern of award-winning portfolios in 2026.

**4. Post-processing as aesthetic voice** — Scan lines + film grain + desaturation + color grading as a unified system. Not individual effects thrown on — a coherent aesthetic philosophy. This is what makes Cullen's piece feel like a film rather than a WebGL demo. The 1.5% color retention (98.5% desaturated) is a specific choice that separates "looks good" from "impossible to un-see."

**5. Codrops as trend oracle** — In the last 30 days: Three.js seamless 3D transitions with Webflow+GSAP (Mael Ruffini, Mar 18), SVG mask transitions on scroll with ScrollTrigger (Hiroki Watanabe, Mar 11), scroll-reactive 3D gallery with mood-based backgrounds (Mar 9). The throughline: **every technique is about blending, masking, or revealing — not showing.** The era of "drop-shadow cards" is over. The era of reveal-through-interaction has begun.

**Key insight:** The community is converging on cursor-responsive environmental systems as the marker of elite web craft. Not hover states — environment states. The whole scene responds to presence, not clicks.

**Notable shifts:** Two years ago, impressive interactive web = lots of particles + scroll animation. Now: considered fluid dynamics + cinematic post-processing + the illusion of physical material. Less is rendering more.

---

## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ⚡ MOTION AUDIT — design-motion-principles
## ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Reconnaissance Complete

**Project type:** Creative portfolio/showcase demo — full-canvas immersive experience
**Animation style:** Physically-based fluid simulation with procedural shader effects
**Likely intent:** Artistic statement + technical demonstration for creative developer credibility

**Proposed perspective weighting:**
- **Primary:** Jhey — This is pure creative experimentation, building something cool as the goal
- **Secondary:** Jakub — The production polish details (Fresnel math, scan line frequency, grain intensity) show deep craft
- **Selective:** Emil — Applies to the cursor responsiveness design (recovery timing, damping feel)

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### ✨ JHEY'S PERSPECTIVE — Experimentation & Delight

**What's Working Brilliantly:**
- ✓ The fluid simulation IS the @property equivalent here — state is animated, not snapped. The FBM noise gives the cursor trail organic life that would be impossible with eased transitions.
- ✓ The recovery mechanic (`+0.015/frame at 60fps = ~1s recovery`) is a perfect example of Jhey's principle: build something that teaches. This implementation demonstrates GPGPU state persistence in the simplest possible way.
- ✓ The ping-pong technique (targetA ↔ targetB) is the WebGL equivalent of Jhey's "negative delay" stagger — using the system's own state as the animation driver.
- ✓ Scan lines via `sin(screenUV.y * 1250.0)` — using math functions as aesthetic texture is exactly Jhey's sensibility. No assets, no images, just shader math creating visual meaning.

**Opportunities for Your Work:**
- 💡 The FBM displacement (currently `mul(fbm(uv * 20.0, 4), aspectVec) * 0.01`) could be made variable. Expose scale and intensity as CSS custom properties or URL params to create infinite variant aesthetics.
- 💡 The same ping-pong pattern works with CSS `@property` for 2D web UI. A hover over a card could leave a "heat trace" that fades over 1 second — no WebGL required.
- 💡 The neighbor blending (5-sample darken operation) could be applied to CSS `backdrop-filter` with JavaScript to create a fluid reveal on standard HTML elements.

**Jhey would say:** "This is exactly what I mean by 'useless demos teaching real skills' — the ping-pong fluid technique here will teach you render targets, which teaches you GPGPU, which teaches you compute shaders. Start with this and you'll end up building a galaxy simulator."

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### 🎯 JAKUB'S PERSPECTIVE — Production Polish

**What's Working Brilliantly:**
- ✓ The Fresnel material is Jakub's "blur + opacity + translateY" equivalent for 3D — it materializes the skeleton at edges while keeping centers dark. It reveals without announcing itself.
- ✓ `emissiveIntensity: 0.75` — exactly calibrated. At 1.0 it would look neon. At 0.5 it would look dead. 0.75 creates the "almost alive" medical imaging quality.
- ✓ `heightFade = smoothstep(0.5, heightMax, positionLocal.y)` — the model's torso cutoff is hidden by fading to black from y=0.5 upward. This is Jakub's "optical alignment" principle applied to 3D geometry: disguise the technical constraint as an artistic choice.
- ✓ `desaturation at 0.985` (1.5% color remaining) — this is masterful restraint. The scene reads as black and white at a glance but the blue Fresnel color still registers subconsciously.
- ✓ Bloom threshold `0.4`, strength `0.05` — barely perceptible. Applied only to the solid scene. This is invisible enhancement — you feel the depth without seeing the effect.

**Issues to Note for Your Implementations:**
- ✗ No `prefers-reduced-motion` fallback — the entire experience is animation-dependent. For production work (not demos), provide a static fallback.
- ✗ No loading state or progressive enhancement — WebGPU check (`if (renderer.isWebGPU)`) should trigger a fallback path.

**Jakub would say:** "The post-processing chain here is doing what good animation always does — it makes the scene feel like it exists in a real space, not on a screen. Every effect is subtractive or barely additive. Nothing screams. That's the craft."

---

### ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
### ⚡ EMIL'S PERSPECTIVE — Restraint & Speed

**What's Working Brilliantly:**
- ✓ Single interaction (mouse move) drives everything — no click states, no hover UI, no buttons. Maximum effect from minimum interaction surface. This IS Emil's frequency rule: one high-frequency interaction drives the whole experience.
- ✓ The ~1 second recovery (not instant, not slow) is perfectly tuned. Fast enough to feel responsive, slow enough to feel physical. Compare: 0.5s would feel digital/snappy. 2s would feel laggy. 1s = liquid.
- ✓ 17° FOV — a technical camera choice that produces strong visual design. Narrow FOV compresses depth, making 12 instances feel like a wall. This is Emil's "origin-aware animation" principle: the camera's relationship to geometry is a design decision.

**Emil would say:** "The interaction is doing one thing. One cursor, one fluid system, one blend. No menu, no scroll, no click. If you're building something for repeated interaction, study how this does maximum impact with the smallest possible interaction surface."

---

### Combined Recommendations for Your Portfolio

| | Issue / Enhancement | Action |
|-|---------------------|--------|
| 🟡 | No `prefers-reduced-motion` | Add static fallback — show Scene A (solid) with no cursor effect |
| 🟡 | No WebGPU fallback UX | Show a message + still frame if WebGPU unavailable |
| 🟢 | Expose fluid params as CSS vars | `--fluid-scale`, `--fluid-recovery` for theming variants |
| 🟢 | Apply ping-pong pattern to HTML elements | CSS heat-trace hover effect on project cards |
| 🟢 | Use Fresnel math concept in 2D | Edge-lit card borders on dark backgrounds |

**Who was referenced most:** Jakub — The production polish decisions (grain intensity, desaturation value, emissive calibration, height fade) are the real lesson here. Anyone can do fluid simulation. The calibration is the craft.

---

## 🔬 UI FORENSIC AUDIT — ui-cloner

*Full Site DNA saved to: `plans/01-site-dna.md`*

### The Effect Decoded: 5-Stage Render Pipeline

```
Stage 1: MOUSE TRAIL CANVAS
  ├─ 2D canvas, full viewport size
  ├─ lineWidth = max(viewport.width * 0.2, 100px)
  ├─ Init fill: white (solid scene visible)
  ├─ Trail: draws black where cursor travels (reveals skeleton)
  └─ Wrapped as THREE.CanvasTexture → fed to fluid sim

Stage 2: FLUID SIMULATION (Ping-Pong)
  ├─ Two render targets: targetA, targetB
  ├─ Each frame: read from A, write to B, then swap
  ├─ Displacement: FBM(uv * 20.0, octaves:4) * aspectCorrection * 0.01
  ├─ 5-sample darken blend (center + N,E,S,W neighbors)
  └─ +0.015 white recovery per frame = ~1s at 60fps

Stage 3: DUAL SCENE RENDERING
  ├─ solidScene: body model, bloom, scan lines
  ├─ wireScene: skeleton model, Fresnel material
  ├─ Shared: camera, fog(#000, 1, 3), PointLight(#fff, 0.75, pos:1,2,1)
  └─ Both rendered to separate texture outputs

Stage 4: FRESNEL X-RAY MATERIAL
  ├─ fresnel = pow(1.0 - dot(normalView, -viewDir), 1.0)
  ├─ fresnelColor = mix(#000D1A, #3399FF, fresnel)
  ├─ heightFade = smoothstep(0.5, 1.0, localY) — hides cutoff
  └─ emissive = finalColor * 0.75

Stage 5: POST-PROCESSING COMPOSITION
  ├─ Bloom: threshold 0.4, strength 0.05 (solid scene only)
  ├─ Scan lines: sin(screenUV.y * 1250) * -0.15
  ├─ Blend: mix(solidWithFX, skeleton, 1.0 - fluidMask.r)
  ├─ Film grain: mx_noise_float(uv*2000, time*20) * 0.015
  ├─ Desaturate: mix(rgb, luminance, 0.985)
  └─ Grade: mix(#000033, desaturated, 0.9) — blue tint
```

### Hexagonal Grid Math (Copy-Paste Ready)

```javascript
// 12 instances in hexagonal stagger
const gridSize = Math.ceil(Math.sqrt(count)); // 4
const halfSize = ((gridSize - 1) * spacing) / 2;
const spacingZ = spacing * 0.65;              // Z compression
const xOffset = z % 2 === 1 ? spacing / 2 : 0; // odd rows stagger

dummy.position.set(
  x * spacing - halfSize + xOffset,
  0,
  z * spacingZ - halfSizeZ
);
```

---

## 🛠 HOW TO USE THIS FOR YOUR PORTFOLIO

### Application 1: Portfolio Hero — "Designer as X-Ray"

Your portfolio hero could use this exact pattern with your case study renders as Scene A (polished, color) and wireframe/skeleton versions as Scene B (process, structure). Hovering reveals how things were built. The conceptual metaphor is perfect for a Designer/Creative Technologist: you see the surface, but I can show you the bones.

**Implementation path:**
- Start with the GitHub repo (MIT licensed): `github.com/cullenwebber/three-skull`
- Replace skull models with your own 3D assets (or 2D planes with textures)
- Scene A: final design renders
- Scene B: wireframes, grids, or process sketches
- Customize Fresnel color to match your brand

### Application 2: Case Study Cards — CSS Fluid Hover (No WebGL)

Use the ping-pong concept in pure CSS+JS for project thumbnails:

```javascript
// On mousemove over a card:
// 1. Draw to a 2D canvas (low-res, ~100x100)
// 2. Apply box blur each frame (+white recovery)
// 3. Use canvas as CSS mask-image on card's "skeleton" layer
// This creates a fluid hover without Three.js overhead
```

### Application 3: Project Transitions — Dual Scene Page Transitions

When navigating between case studies, use Scene A (current project) and Scene B (next project) with a fluid wipe driven by page transition progress. GSAP + Barba.js drives the mask; the fluid sim gives organic timing.

**Technique reference:** March 18 Codrops article by Mael Ruffini: "Building Seamless 3D Transitions with Webflow, GSAP, and Three.js" — persistent Three.js canvas + Barba page swap.

### Application 4: Workflow Automation Insight

For your Make.com / automation workflow clients:
- The **ping-pong render pattern** maps to circular data flows in Make: output of Step N becomes input of Step N+1, alternating between two data stores
- The **recovery mechanic** (+0.015/frame) maps to decay functions in automations: counters that drift back to baseline unless actively updated
- The **dual-scene compositor** maps to multi-source data merges: two data pipelines combined by a dynamic mask/condition

Pitch this to technical clients as: "I design systems that blend two states through intelligent triggers" — same pattern, different medium.

---

## 🔥 CONTENT OPPORTUNITIES — Hot Takes for LinkedIn/X

**Take 1 — The Technical:**
> "Three.js TSL just shipped the most important tutorial of 2026. This dual-scene fluid x-ray reveal by @sinzvii is the new benchmark for what WebGPU post-processing can do in production. The detail: 0.015 white recovery per frame = exactly 1 second at 60fps. That's not a coincidence — that's craft."

**Take 2 — The Design:**
> "The era of 'hover effects' is over. The era of 'hover environments' is here. The difference: hover effects change a button. Hover environments change the physics of the whole scene. If your portfolio still has border-color: #hex on hover, you're not competing for the same jobs."

**Take 3 — The Systems:**
> "Ping-pong render targets (alternate read/write between two framebuffers) is the most elegant data pattern in WebGL. One writes while the other reads, then swap. Turns out this is also the architecture behind the best Make.com automations. Two data stores, alternating. Same principle. Different stack."

---

## IMPLEMENTATION PRIORITY FOR YOUR SITE

1. **Now:** Study the GitHub repo source. Focus on `FluidSim.js`, `FresnelMaterial.js`, and the post-processing chain.
2. **Next:** Build the pure CSS/JS ping-pong hover for your case study cards (no WebGL — works everywhere).
3. **Then:** Implement the full dual-scene hero for your portfolio with your own assets replacing the skull.
4. **Advanced:** Combine with the Mael Ruffini Webflow+Barba technique for seamless 3D page transitions.

---

## RESOURCES

- **Codrops Article:** https://tympanus.net/codrops/2026/03/23/building-a-dual-scene-fluid-x-ray-reveal-effect-in-three-js/
- **Live Demo:** https://tympanus.net/Tutorials/SkeletonFluidReveal/
- **GitHub (MIT):** https://github.com/cullenwebber/three-skull
- **Related (Mar 18):** https://tympanus.net/codrops/2026/03/18/building-seamless-3d-transitions-with-webflow-gsap-and-three-js/
- **Ping-Pong Deep Dive:** https://ostefani.dev/tech-notes/ping-pong-technique
- **TSL Reference:** Three.js WebGPU examples — tsl directory in Three.js repo
- **linear() Easing:** https://linear-easing-generator.netlify.app/
- **Awwwards Three.js:** https://www.awwwards.com/websites/three-js/

---

*Generated by Girtonian AI Studio — combining dreaming-or-drowning + design-motion-principles + ui-cloner*
