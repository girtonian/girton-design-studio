AUDIT_MODE: high-fidelity

---

# SITE DNA — Skeleton Fluid Reveal
**URL:** https://tympanus.net/Tutorials/SkeletonFluidReveal/
**Author:** Cullen Webber (@sinzvii) | cullenwebber.com
**Published:** March 23, 2026 — Codrops
**GitHub:** https://github.com/cullenwebber/three-skull

---

## SITE DNA

---

### 1.1 — MACRO PAGE ARCHITECTURE

```
PAGE ARCHITECTURE: Skeleton Fluid Reveal
Total viewport sections: 1 (full-canvas immersive experience)
╔══════════════════════════════════════════════════════╗
║  SECTION 1: FULL-CANVAS WEBGPU EXPERIENCE  HEIGHT: 100vh  ║
║  BG: solid #000000 (deep black)                      ║
║  LAYOUT: full-bleed canvas, no margins               ║
╚══════════════════════════════════════════════════════╝
```

This is a single-scene immersive demo. The entire viewport is a `<canvas>` element rendering a Three.js/WebGPU scene. All UI is minimal/decorative — Codrops navigation bar floating on top.

---

### 1.2 — DESIGN TOKENS

```
DESIGN TOKENS
─────────────────────────────────────────────────────
PALETTE:
  Deep Black "Void":        #000000 / rgb(0,0,0)      → scene background, fog, canvas fill
  Electric Blue "X-Ray":    vec3(0.2, 0.6, 1.0)       → Fresnel material core color (#3399FF approx)
  Deep Ocean Tint "Shadow": vec3(0.0, 0.05, 0.1)       → coreColor for Fresnel (#000D1A approx)
  Blue-Black "Grade":       vec3(0.0, 0.0, 0.2)        → lowContrast color grade base (#000033)
  White "Trail":            #FFFFFF                    → mouse trail canvas fill

TYPOGRAPHY SCALE:
  The demo itself contains no typography. Codrops nav uses their standard type.

SPACING GRID: N/A — canvas-based, no CSS layout grid
BORDER RADIUS: N/A
SHADOW SYSTEM: N/A — depth handled by Three.js fog + Fresnel shading
TEXTURE: Film grain via mx_noise_float, animated (time.mul(20.0)), intensity 0.015
─────────────────────────────────────────────────────
```

---

### 1.3 — SECTION BLUEPRINT: THE CANVAS SCENE

**COMPOSITION MAP: Full Viewport**
```
Element count: 12 instanced model copies (hexagonal grid) + fluid simulation overlay

CENTER:    12× InstancedMesh copies arranged in hexagonal stagger grid
           Spacing: uniform (Z compressed to 0.65× scale for depth)
           Layout: gridSize = ceil(sqrt(12)) = 4 columns
                   Every odd row offset by spacing/2 on X axis

HEXAGONAL GRID MATH:
  halfSize = ((gridSize - 1) * spacing) / 2
  spacingZ  = spacing * 0.65
  xOffset   = z % 2 === 1 ? spacing / 2 : 0

SCENE A (Solid): Human body models, solid material, bloom + scan lines applied
SCENE B (Skeleton): X-ray skeleton with Fresnel glow material

AMBIENT:
  Fog:    THREE.Fog(0x000000, near:1, far:3) — aggressive near clip
  Light:  PointLight(#FFFFFF, intensity:0.75) at position (1, 2, 1)
  Env:    RoomEnvironment via PMREM, environmentIntensity: 0.1
  Grade:  mix(vec3(0.0, 0.0, 0.2), desaturated, 0.9) — blue tint
  Grain:  mx_noise_float(screenUV * 2000, time * 20) * 0.015
  Desat:  mix(rgb, luminance, 0.985) — almost fully desaturated (1.5% color remains)
```

---

### 1.4 — SCROLL & ENTRANCE ANIMATION AUDIT

```
ANIMATION: Mouse Trail → Fluid Sim → Scene Blend
Trigger: mousemove (continuous), reverts on cursor stop
Library: Three.js TSL / WebGPU
RENDER PIPELINE:
  Stage 1: 2D Canvas mouse trail
    - Brush: lineWidth = max(width * 0.2, 100px) — large soft brush
    - Fill: ctx.fillStyle = "white" on init
    - Trail: black (reveals skeleton) fades to white (restores solid) at +0.015/frame
    - At 60fps: ~1 second full recovery cycle

  Stage 2: Ping-pong fluid simulation
    - targetA / targetB alternate each frame
    - Filter: LinearFilter on both axes
    - Displacement: FBM (Fractional Brownian Motion) noise, 4 octaves
    - Displacement scale: mul(fbm(uv * 20.0, 4), aspectVec) * 0.01
    - Aspect correction: width < height → vec2(1.0, 1/aspect) else vec2(aspect, 1.0)
    - Neighbor blending: 5 samples (center + NESW), darken blend operation
    - Recovery: add(combined, vec3(0.015)) per frame

  Stage 3: Scene compositing
    fluidMask = 1.0 - fluidMaskNode.sample(screenUV).r
    blended = mix(bloomWithScanLines, wireColor, fluidMask)

ANIMATION: Camera Follow
Trigger: mousemove (damped)
FOV: 17° (narrow — creates wall-like depth compression)
Behavior: cursor drives camera with easing, fixed focal point

ANIMATION: Scan Lines
Type: procedural, every frame
Formula: sin(screenUV.y * 1250.0) → clamp(-1, 0) * -0.15 → subtracted
Effect: dark horizontal bands at 1250 frequency (fine CRT scanline pattern)
```

---

### 1.5 — MICRO-INTERACTION CATALOG

```
INTERACTION: Mouse Hover / Move
  Effect: Fluid reveal — skeleton bleeds through solid
  Recovery: ~1 second after cursor stops
  Camera: Follows cursor with damped easing (stiffness inferred ~200, damping ~30)

INTERACTION: Cursor Stillness
  Effect: Solid scene gradually restores over ~1s
  Mechanism: +0.015 white per frame in ping-pong buffer
```

---

### 1.6 — FRESNEL MATERIAL DEEP-DIVE

```
STATE MACHINE: Skeleton Fresnel Material
Type: View-dependent shader (per-fragment, no state changes)
FORMULA:
  fresnel = pow(1.0 - dot(normalView, -positionViewDirection), 1.0)
  coreColor = vec3(0.0, 0.05, 0.1)           // near-black deep teal
  fresnelColor = mix(coreColor, color, fresnel) // blue at edges, dark at center
  heightFade = smoothstep(0.5, heightMax, positionLocal.y)
  finalColor = fresnelColor * heightFade       // fades bottom half to black
  emissive = finalColor * 0.75               // self-illuminating

PARAMETERS:
  color = vec3(0.2, 0.6, 1.0)  // ~#3399FF
  emissiveIntensity = 0.75
  roughness = 1.0
  metalness = 0
  heightMax = 1.0
```

---

### 1.7 — SCROLL CHOREOGRAPHY MAP

```
SCROLL CHOREOGRAPHY MAP
─────────────────────────────────────────────────────────────────────
Scroll %  │ Viewport Position    │ Event
─────────────────────────────────────────────────────────────────────
0%        │ Page load            │ WebGPU init, DRACO model load
0%        │ Canvas ready         │ Hexagonal grid renders, camera idle
continuous│ mousemove anywhere   │ Trail → fluid → x-ray blend
─────────────────────────────────────────────────────────────────────
SCROLL BEHAVIORS: None — single-screen demo
PARALLAX: None
NAV: Static Codrops header
```

---

### 1.8 — TECHNICAL STACK

```
TECHNICAL STACK
  Renderer:   Three.js WebGPU (WebGL fallback branch on GitHub)
  Shading:    TSL (Three Shading Language) — node-based shader system
  Animation:  Three.js built-in render loop (requestAnimationFrame)
  Scroll:     None
  Build:      Vite
  Compression: DRACO (.glb model loading)
  Utilities:  maath (easing utilities)
  Post-FX:    RenderPipeline (Three.js built-in post-processing)
  Env:        RoomEnvironment + PMREM generator
  UI Lib:     None (pure canvas)
```

---

### 1.9 — MOTION PHILOSOPHY + COPY VOICE

```
MOTION PHILOSOPHY:
The Skeleton Fluid Reveal operates on a single, profound motion metaphor: the cursor
as x-ray scanner. Where you look, reality dissolves. Stop looking, and the flesh
returns. Motion here is not decorative — it IS the concept. The fluid simulation
gives the reveal organic, unpredictable life: rather than a hard mask following the
cursor exactly, the effect breathes, spreads, and fades like dye in water. The
17° FOV choice compresses the grid into a wall of bodies, reinforcing the medical/
anatomical framing. What would be lost without animation? Everything — this piece
IS the animation. The Fresnel shader, scan lines, and film grain work as a unified
aesthetic system suggesting vintage medical imaging technology, and this aesthetic
consistency elevates the technical demonstration into a coherent artistic statement.

COPY VOICE PATTERN:
  Tone:          Clinical / Technical — tutorial is precise, zero fluff
  Sentence form: Full sentences with exact technical terminology
  Key device:    Step-by-step process decomposition (pipeline stages 1→5)
  Example pattern: "The trail smoothly interpolates cursor position and wraps in a
                    CanvasTexture for shader sampling."
```
