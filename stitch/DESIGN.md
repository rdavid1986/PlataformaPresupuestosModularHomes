# Design System Specification: Industrial Precision & Tonal Depth

## 1. Overview & Creative North Star
### Creative North Star: "The Machined Blueprint"
This design system rejects the "web-template" aesthetic in favor of a look that feels engineered, structured, and authoritative. Inspired by architectural blueprints and heavy-machinery dashboards, the system prioritizes clarity and functional beauty.

We achieve a "High-End Editorial" feel for B2B logistics by utilizing **intentional asymmetry**—offsetting large display typography against rigid, grid-locked data components. We break the monotony of standard SaaS dashboards by using high-contrast tonal shifts and "metallic" layering, ensuring that the platform feels like a professional tool specifically calibrated for industrial factories and modular home builders.

---

## 2. Colors
The palette is rooted in deep, atmospheric charcoals and slate grays, punctuated by a high-visibility **Safety Orange** (`#ff6b00`) for primary actions.

- **Primary & Accent:** Use `primary` (`#ffb693`) and `primary_container` (`#ff6b00`) for high-priority CTA states. Use `secondary` (`#b7c8e1`) as a "steel" accent to represent cold hardware and technicality.
- **The "No-Line" Rule:** Visual separation is never achieved through 1px borders. Instead, sectioning must be defined by shifts in background tokens. For example, a `surface_container_low` section should sit against a `surface` background. The change in hex value provides the boundary, mimicking how different metal parts meet in a physical machine.
- **Surface Hierarchy & Nesting:** Treat the UI as a series of machined plates.
    - **Foundation:** `surface` (#131313)
    - **Mid-Tier (Sections):** `surface_container` (#201f1f)
    - **High-Tier (Active Cards/Modals):** `surface_container_highest` (#353534)
- **The "Glass & Gradient" Rule:** For floating navigation or high-end status overlays, use semi-transparent `surface_variant` with a 12px backdrop blur. For primary CTAs, apply a subtle linear gradient from `primary_container` to `on_primary_fixed_variant` at a 135-degree angle to give the button a "forged" metallic soul.

---

## 3. Typography
The system employs a dual-typeface strategy to balance technical data with high-end editorial authority.

- **Display & Headlines (Space Grotesk):** This typeface is our "engineering signature." Its wide apertures and geometric forms feel modern and precision-milled. Use `display-lg` for dashboard summaries to create a bold, "Blueprint Title" effect.
- **Body & Labels (Inter):** Inter is the workhorse. Its neutral, high-legibility profile is used for all functional data, budget tables, and offer details.
- **Hierarchy as Identity:** By pairing a large `display-md` headline in `on_surface` with a much smaller, all-caps `label-md` in `on_surface_variant`, we create an "Editorial Technicality" that feels premium and intentional rather than cluttered.

---

## 4. Elevation & Depth
In this system, elevation is an optical effect created through color density and light simulation, not floating shadows.

- **The Layering Principle:** Avoid `z-index` shadows for standard UI. Stack `surface_container_lowest` (#0e0e0e) for recessed areas (like input fields) and `surface_container_high` (#2a2a2a) for elevated areas (like active offer cards).
- **Ambient Shadows:** Only use shadows for "Temporary Overlays" (e.g., dropdowns). Shadows must be `on_surface` color at 6% opacity with a 40px blur—simulating soft, ambient light in a factory setting.
- **The "Ghost Border" Fallback:** If high-density data requires containment, use a "Ghost Border": `outline_variant` (#5a4136) at 15% opacity. This provides a "machine-etched" look without the visual noise of a solid line.
- **Glassmorphism:** Use `surface_bright` (#393939) at 70% opacity with a 20px blur for global headers. This allows the high-contrast orange of primary buttons to glow subtly behind the header as the user scrolls.

---

## 5. Components

### Buttons & Chips
- **Primary Action:** Solid `primary_container` (#ff6b00) with `on_primary` (#561f00) text. **Radius: 0px (Sharp)**. This conveys a sense of industrial finality.
- **Secondary Action:** Ghost style using the `outline` token at 20% opacity.
- **Chips:** `secondary_container` background with `on_secondary_container` text. Use for status (e.g., "In Production," "Offer Sent").

### Input Fields & Controls
- **Text Inputs:** Use `surface_container_lowest` for the field background to create a "punched-out" effect. Label typography must be `label-sm` in `on_surface_variant`.
- **Checkboxes/Radios:** Sharp 0px corners. Use `primary` for the selected state. No rounded corners allowed; every corner must be a perfect 90-degree angle to match the "Industrial" theme.

### Cards & Lists
- **The "Forced Margin" Rule:** Forbid the use of divider lines. Separate budget line items using `8px` of vertical white space or a subtle flip between `surface_container` and `surface_container_low`.
- **Data Grids:** High-density text should use `Roboto Mono` (if available as a secondary technical font) or `Inter` at `body-sm` for a tabular, "Machine Readout" feel.

### Contextual Components
- **The "Status Bar":** A full-width `surface_container_highest` bar at the top of cards, using `primary` for active status indicators.
- **Metric Gauges:** Use `tertiary` (#b9c8de) to represent "Steel" progress bars for budget consumption.

---

## 6. Do's and Don'ts

### Do
- **Do** use `0px` border-radius for everything. Sharpness is our primary brand signal.
- **Do** use extreme contrast in typography sizing (e.g., pairing 44px headlines with 11px labels).
- **Do** lean into the "Safety Orange" for critical paths only. Overuse will diminish its "Industrial Warning" impact.
- **Do** utilize `outline_variant` at low opacity to create "etched" containers for complex budget tables.

### Don't
- **Don't** use rounded corners (`border-radius > 0`). This breaks the industrial architectural metaphor.
- **Don't** use standard "drop shadows" (black at 20% opacity). They feel like "cheap web" and undermine the metallic, tonal depth.
- **Don't** use 1px solid borders to separate sections. Use background color shifts.
- **Don't** use bright "Success Green." Use the `tertiary` (Steel Blue) or `secondary` (Slate) for positive states to maintain the professional, muted industrial palette.