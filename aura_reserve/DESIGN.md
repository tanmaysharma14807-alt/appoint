# Design System Specification: High-End Editorial Salon Experience

## 1. Overview & Creative North Star: "The Modern Atelier"
This design system moves away from the rigid, boxed-in nature of standard booking platforms and toward the feel of a high-end fashion editorial. The Creative North Star is **"The Modern Atelier"**—an aesthetic that balances the structural precision of a luxury salon with the fluid, organic calm of a spa.

To achieve this, the system rejects standard UI boundaries. Instead of using lines to contain content, we use **Intentional Asymmetry** and **Tonal Layering**. Imagery should overlap container edges, and typography should vary drastically in scale to create a sense of curated "white space" that feels expensive rather than empty.

---

### 2. Colors & Surface Philosophy
The palette is rooted in a high-contrast foundation of deep obsidian and crisp alabaster, punctuated by a sophisticated, non-metallic Gold (`primary`).

*   **Primary (#735C00 / #D4AF37):** Used sparingly as a "high-fashion" accent. It should feel like jewelry on a black dress—prevalent enough to notice, but never overwhelming.
*   **The "No-Line" Rule:** 1px solid borders are strictly prohibited for sectioning. Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section sitting on a `surface` background creates a soft, sophisticated edge without the "cheapness" of a stroke.
*   **Surface Hierarchy & Nesting:** Treat the UI as physical layers of fine paper. 
    *   **Level 0:** `surface` (#FCF9F8) – The base canvas.
    *   **Level 1:** `surface-container-low` (#F6F3F2) – Secondary content areas.
    *   **Level 2:** `surface-container-lowest` (#FFFFFF) – High-priority interactive cards.
*   **The Glass & Gradient Rule:** To move beyond flat design, use Glassmorphism for floating navigation or quick-action bars. Apply a `surface` color at 70% opacity with a 20px backdrop-blur. For hero sections, use a subtle radial gradient transitioning from `primary_container` (#D4AF37) to `primary` (#735C00) at low opacity to add "soul" to the background.

---

### 3. Typography: The Editorial Voice
We pair the authoritative elegance of **Noto Serif** with the functional, modern clarity of **Manrope**.

*   **Display & Headlines (Noto Serif):** Used for service names and brand statements. Use `display-lg` (3.5rem) for hero titles. The high contrast between thick and thin strokes in the serif conveys a "Vogue-esque" luxury.
*   **Body & Titles (Manrope):** Used for navigation, descriptions, and booking details. Manrope’s geometric nature ensures the interface feels "efficient" and "modern."
*   **Hierarchy Note:** Always lead with a large Serif headline. Follow immediately with a `label-md` in all-caps with 0.1rem letter spacing to create a professional, architectural look.

---

### 4. Elevation & Depth
Depth in this system is a whisper, not a shout.

*   **The Layering Principle:** Avoid shadows for static content. Place a `surface-container-lowest` card on a `surface-container-low` background. This "tonal lift" creates a more premium feel than a drop shadow.
*   **Ambient Shadows:** When a card must "float" (e.g., a booking confirmation modal), use an ultra-diffused shadow: `offset-y: 20px, blur: 40px, color: rgba(28, 27, 27, 0.06)`. This mimics soft, overhead gallery lighting.
*   **The "Ghost Border" Fallback:** If a divider is required for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% opaque lines.
*   **Large Radii:** All interactive containers must use a minimum corner radius of `DEFAULT` (1rem / 16px). Hero images and primary cards should use `lg` (2rem / 32px) to reinforce the "Calm" brand personality.

---

### 5. Components & Interface Elements

*   **Buttons:**
    *   **Primary:** Solid `primary` (#735C00) with `on_primary` text. Use `full` (9999px) rounding for a modern "pill" look.
    *   **Secondary:** `surface-container-highest` background with `primary` text. No border.
*   **Input Fields:** Use a "Minimalist Float" style. No containing box; only a 1px `outline-variant` bottom border that transitions to `primary` (2px) on focus. Labels should use `label-sm` and remain visible.
*   **Cards (Service/Stylist):** Forbid the use of divider lines. Use `spacing-8` (2.75rem) of vertical white space to separate content blocks. Imagery should take up 60% of the card area, featuring high-fashion photography.
*   **Selection Chips:** Use `secondary_container` for the unselected state and `primary` for the selected state. Ensure `md` (1.5rem) rounding to maintain the soft aesthetic.
*   **Booking Calendar:** Instead of a grid of boxes, use a "Floating Date" layout. Dates are suspended on the `surface`, with the "Selected" date indicated by a large, soft `primary_fixed` circle behind the number.

---

### 6. Do’s and Don’ts

#### Do:
*   **Embrace the Overlap:** Allow high-quality PNGs of salon products or models to slightly overlap the edge of a text container.
*   **Use White Space as a Feature:** If a screen feels "empty," don't add more elements. Increase the font size of the `display-lg` headline.
*   **Prioritize Imagery:** Use only high-contrast, professional photography. The UI is the frame; the imagery is the art.

#### Don’t:
*   **Don't use pure black (#000000) for text:** Use `on_surface` (#1C1B1B) to maintain a softer, more "ink-on-paper" feel.
*   **Don't use standard icons:** Use ultra-thin (1pt or 1.5pt) line icons. Avoid filled icons unless they represent a "Selected" state.
*   **No "Boxy" Buttons:** Avoid small, rectangular buttons. Everything should feel soft, rounded, and approachable.
*   **Never use 100% width dividers:** If you must use a line, let it breathe with `spacing-10` padding on either side so it doesn't touch the container edges.