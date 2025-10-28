# Nando's India Design System

## 🎨 Color Palette

### Brand Colors (Primary)

#### Nando's Red
- **Primary**: `#D6001C` - Signature Nando's Red (from logo)
- **Usage**: Primary CTAs, logo, important highlights
- **Variations**:
  - Light: `#FF3347`
  - Dark: `#AD0016`
  - Hover: `#850011`

#### Flame Orange
- **Primary**: `#FF6B35` - PERi-PERi Fire
- **Usage**: Secondary CTAs, heat indicators, accents
- **Variations**:
  - Light: `#FFA787`
  - Dark: `#CC3700`

#### Warm Yellow
- **Primary**: `#FDB913` - Heat Level Indicator
- **Usage**: Highlights, badges, special offers
- **Variations**:
  - Light: `#FFE7A5`
  - Dark: `#B38000`

#### Charcoal
- **Primary**: `#1A1A1A` - Deep Black (from logo and footer)
- **Usage**: Text, backgrounds (dark mode), footer
- **Variations**:
  - Medium: `#3D3D3D`
  - Light: `#5E5E5E`

#### Cream
- **Primary**: `#FFF8F0` - Warm Background
- **Usage**: Backgrounds, cards, warmth
- **Variations**:
  - Light: `#FFFEFB`
  - Medium: `#FFE8D2`

---

## 🌓 Theme Modes

### Light Mode
- **Background**: White `#FFFFFF`
- **Foreground**: Charcoal `#1A1A1A`
- **Card**: White `#FFFFFF`
- **Border**: Light Gray `#E8E8E8`
- **Muted**: Off-White `#F5F5F5`

### Dark Mode
- **Background**: Deep Black `#0A0A0A`
- **Foreground**: Off-White `#F5F5F5`
- **Card**: Charcoal `#1A1A1A`
- **Border**: Dark Gray `#2D2D2D`
- **Muted**: Dark Gray `#1E1E1E`

---

## 🔥 Gradients

### Fire Gradient (Primary)
```css
background: linear-gradient(135deg, #D6001C 0%, #FF6B35 50%, #FDB913 100%);
```
**Usage**: Hero sections, CTAs, highlights

### Fire Gradient Reverse
```css
background: linear-gradient(135deg, #FDB913 0%, #FF6B35 50%, #D6001C 100%);
```
**Usage**: Alternative gradient for variety

### Dark Gradient
```css
background: linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%);
```
**Usage**: Dark mode backgrounds, footers

---

## ✨ Effects & Shadows

### Glow Effects
- **Red Glow**: `box-shadow: 0 0 20px rgba(214, 0, 28, 0.4)`
- **Orange Glow**: `box-shadow: 0 0 20px rgba(255, 107, 53, 0.4)`
- **Yellow Glow**: `box-shadow: 0 0 20px rgba(253, 185, 19, 0.4)`

### Hover States
- **Lift**: `transform: translateY(-8px)` with shadow
- **Glow**: Enhanced glow on hover
- **Scale**: `transform: scale(1.05)`

---

## 📐 Typography

### Font Families
- **Sans**: Inter (Body text)
- **Display**: Poppins (Headings, emphasis)

### Font Sizes
- **Hero**: 60px - 96px
- **H1**: 48px - 72px
- **H2**: 36px - 48px
- **H3**: 30px - 36px
- **H4**: 24px - 30px
- **Body**: 16px - 18px
- **Small**: 14px

---

## 🎬 Animations

### Standard Animations
- **Fade In**: 0.6s ease-out
- **Fade Up**: 0.6s ease-out
- **Slide In**: 0.4s ease-out
- **Scale Up**: 0.3s ease-out

### Continuous Animations
- **Float**: 3s ease-in-out infinite
- **Pulse Glow**: 2s ease-in-out infinite
- **Shimmer**: 2s linear infinite

---

## 🧩 Component Patterns

### Buttons
- **Primary**: Fire gradient with white text
- **Secondary**: Orange solid with white text
- **Outline**: Border with brand red, transparent background
- **Ghost**: Transparent with hover effect

### Cards
- **Elevated**: White/Dark with shadow
- **Glass**: Semi-transparent with blur
- **Hover**: Lift + Glow effect

### Inputs
- **Border**: Light gray / Dark gray
- **Focus**: Brand red ring
- **Error**: Red border and text
- **Success**: Green border and text

---

## 🎯 Usage Guidelines

### Do's ✅
- Use fire gradient for primary CTAs
- Use charcoal for dark mode backgrounds
- Use cream for warm, inviting sections
- Maintain contrast ratios (WCAG AA minimum)
- Use animations sparingly for impact
- Keep brand red consistent with logo

### Don'ts ❌
- Don't use more than 3 colors in one section
- Don't overuse animations (causes distraction)
- Don't use light text on light backgrounds
- Don't modify brand red hex value
- Don't use gradients on small text
- Don't forget dark mode support

---

## 📱 Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px - 1280px
- **Large Desktop**: > 1280px

---

## ♿ Accessibility

### Contrast Ratios
- **Text**: Minimum 4.5:1
- **Large Text**: Minimum 3:1
- **Interactive Elements**: Minimum 3:1

### Focus States
- Visible focus indicators
- Keyboard navigation support
- Screen reader friendly

### Motion
- Respect `prefers-reduced-motion`
- Provide alternatives to animations

---

**Version**: 1.0.0
**Last Updated**: 2025-10-28
**Maintained By**: Nando's India Design Team
