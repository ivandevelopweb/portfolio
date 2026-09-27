---
name: Ivan Portfolio
description: A quiet, dark visual system for business-focused web development work.
colors:
  primary: "#9aafff"
  primary-hover: "#b5c4ff"
  primary-ink: "#0c101a"
  neutral-bg: "#090a0c"
  neutral-surface: "#101216"
  neutral-surface-raised: "#14171d"
  neutral-text: "#f1f2f4"
  neutral-muted: "#b0b4bd"
  neutral-quiet: "#848a96"
  neutral-line: "#292d35"
  neutral-line-strong: "#373c47"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(54px, 5.5vw, 76px)"
    fontWeight: 700
    lineHeight: 1.04
    letterSpacing: "-0.065em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(34px, 4.5vw, 57px)"
    fontWeight: 650
    lineHeight: 1.11
    letterSpacing: "-0.055em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(26px, 3vw, 36px)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-0.05em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  field:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  navigation:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.2
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.045em"
rounded:
  sm: "7px"
  md: "11px"
spacing:
  container: "1220px"
  gutter: "clamp(20px, 4vw, 38px)"
  section: "clamp(88px, 10vw, 144px)"
  section-mobile: "82px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-ink}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
    height: "50px"
  button-secondary:
    backgroundColor: "rgba(12, 13, 16, 0.62)"
    textColor: "{colors.neutral-text}"
    typography: "{typography.button}"
    rounded: "{rounded.sm}"
    padding: "0 18px"
    height: "50px"
  text-field:
    backgroundColor: "rgba(14, 16, 20, 0.88)"
    textColor: "{colors.neutral-text}"
    typography: "{typography.field}"
    rounded: "{rounded.sm}"
    padding: "11px 13px"
    height: "48px"
  navigation-link:
    backgroundColor: "transparent"
    textColor: "{colors.neutral-muted}"
    typography: "{typography.navigation}"
    height: "42px"
  project-frame:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    size: "100% width"
---
# Design System: Ivan Portfolio

## Overview

**Creative North Star: "The Quiet Technical Partner"**

The visual system gives business owners a calm, capable first impression. Near-black surfaces, precise sans-serif typography, and clear project proof create a technical character without resorting to spectacle. The interface stays direct and legible so the offer, real work, and contact paths carry the weight.

A very faint perspective grid is the recurring background signature. Fine dividers, open space, restrained corners, and large project imagery keep that motif behind the content. The portrait supplies a natural human counterpoint to the measured layout.

**Key Characteristics:**

- Near-black surfaces and cool-white type.
- One muted periwinkle accent for actions, focus, and small markers.
- Manrope typography, fine separators, restrained corners, and large real project imagery.
- A low-contrast perspective grid that remains behind text and screenshots.

## Colors

The palette is nearly monochrome: charcoal, cool gray, and off-white carry most of the interface, while the periwinkle accent identifies priority actions and keyboard focus.

### Primary

- **Muted Periwinkle** (#9aafff): Primary actions, focus outlines, selection, and concise section markers.
- **Pale Periwinkle** (#b5c4ff): Hover and highlighted-link state.
- **Deep Ink** (#0c101a): Text placed on the primary accent.

### Neutral

- **Near-Black Canvas** (#090a0c): Page background and sticky header.
- **Graphite Surface** (#101216): Image and form surfaces.
- **Raised Graphite** (#14171d): Secondary tonal surface.
- **Cool White** (#f1f2f4): Main headings and high-priority text.
- **Slate Gray** (#b0b4bd): Body copy and supporting text.
- **Quiet Slate** (#848a96): Captions, labels, and secondary metadata.
- **Hairline Slate** (#292d35): Fine separators and image frames.
- **Strong Slate Border** (#373c47): Interactive control borders.

### Named Rules

**The One Accent Rule.** Keep the cool blue accent scarce and purposeful; let project images and copy remain the main visual proof.

## Typography

**Display Font:** Manrope (with sans-serif fallback)

**Body Font:** Manrope (with sans-serif fallback)
**Label/Mono Font:** Manrope; labels are not set in a separate mono face.

**Character:** Manrope is compact and assertive in large headings, then calm and open in paragraph text. Tight negative tracking gives headlines their crisp shape; body copy keeps a relaxed line height for easy reading.

### Hierarchy

- **Display** (700, clamp(54px, 5.5vw, 76px), 1.04): Main hero proposition, with tight negative tracking.
- **Headline** (650, clamp(34px, 4.5vw, 57px), 1.11): Section headings and the about/contact statements.
- **Title** (650, clamp(26px, 3vw, 36px), 1.15): Project and supporting section titles.
- **Body** (400, 16px, 1.65): Default reading text; body copy narrows to roughly 59–62ch where observed.
- **Label** (700, 10–13px, modest tracking): Navigation, metadata, captions, and form labels; uppercase is reserved for short project captions and section metadata.

## Layout

The desktop canvas uses a centered 1220px maximum container and responsive side gutters. Major sections share a generous vertical rhythm; thin top borders mark transitions without enclosing every content block in a card.

The hero pairs its message and primary project preview in two columns. Project case studies use large image frames and alternating image/text order. Services are presented as horizontal rows; process steps stay compact. At 820px and below, the header gains an in-flow mobile menu, the hero and contact layout stack, and the process becomes a single column. At 620px and below, section spacing tightens to 82px and project content stacks; at 420px, the two hero actions become full-width rows.

The background grid spans the page at very low contrast. Its 96px by 82px line rhythm and perspective sit behind content; preserve that depth cue without using it as a content texture.

### Named Rules

**The Content-First Grid Rule.** The perspective grid is a quiet page-wide signature; text and project screenshots must remain more noticeable than its lines.

## Elevation & Depth

The system is flat by default. Depth comes from three restrained charcoal surfaces, thin borders, and the scale of real screenshots rather than shadows or glow. The language menu is the one compact floating panel and uses a soft, bounded shadow.

### Shadow Vocabulary

- **Language menu** (0 14px 36px rgba(0, 0, 0, 0.34)): Separates the open locale menu from the header.

## Shapes

Controls use gently softened corners (7px); project screenshot frames use a slightly wider radius (11px). Hairline borders define controls and image frames. Keep the overall geometry crisp: no giant rounded panels, capsules, or ornamental clipping.

## Components

### Buttons

Confident and direct, with one clear filled action and one quiet outlined alternative.

- **Shape:** Gently softened corners (7px), 50px minimum height, and 18px horizontal padding.
- **Primary:** Periwinkle fill with deep ink text; hover lightens the fill and lifts the control by 1px.
- **Secondary:** Dark translucent fill, strong slate border, and cool-white text; hover shifts its border and text to the accent.
- **Hover / Focus:** State transitions use 180ms ease-out timing. Keyboard focus uses a 2px accent outline with a 4px offset.

### Cards / Containers

Project frames use a graphite fill, one-pixel slate border, and 11px corners. Large screenshots preserve a 1.58 aspect ratio and align to the top of their source image. Hover scales the image only slightly (1.015); the frame stays crisp and the source image remains unobscured.

### Inputs / Fields

Text fields use a dark translucent fill, a strong slate stroke, and 7px corners. Inputs are at least 48px high with 11px by 13px internal padding; text areas start at 124px and resize vertically. Focus changes the border to the accent and the fill to near-black blue. Labels remain visible above their fields.

### Navigation

The sticky header is 76px high on wide screens, then adapts to 70px tablet and 66px phone minimum heights. Desktop links stay quiet until hover or current-section state. The locale control is compact and bordered. Below 820px, the menu opens in the document flow and pushes the page down instead of covering the hero.

## Do's and Don'ts

### Do:

- **Do** use the accent for one clear action, keyboard focus, and limited markers.
- **Do** preserve the faint perspective grid across the page with content visually in front.
- **Do** give real project screenshots generous space and alternate their alignment for rhythm.
- **Do** retain readable contrast, visible focus, reduced-motion support, and comfortable mobile spacing.
- **Do** keep locale and contact controls clear in all three language variants.

### Don't:

- **Don't** introduce neon cyan, several competing bright accents, glow-heavy controls, or decorative particles.
- **Don't** use gradient headlines, a custom cursor, a typing effect, or a noisy animated background.
- **Don't** let the grid compete with text or screenshots.
- **Don't** add fake ratings, outcome figures, testimonials, or invented experience claims.
- **Don't** turn every section into a rounded card or pill badge.
