# Mobile Navigation Menu Staggering Animation

This document explains how the staggering slide-and-fade animation for the mobile navigation menu is implemented in this project.

---

## 1. Core Concepts

The animation utilizes three main CSS transition principles:
1. **Vertical Collapse/Expand**: The menu container smoothly expands and collapses by transitioning its `max-height`.
2. **Translation & Fade-in**: Individual menu items start offset to the left and fully transparent, then slide rightward to their final positions while fading in.
3. **Staggered Delay**: A sequential delay is dynamically calculated for each menu item based on its list index, creating a flowing, premium cascade effect instead of all items appearing at once.

---

## 2. Implementation Walkthrough

The animation is defined in React and styled using Tailwind CSS classes combined with inline `style` variables in [components/site-header.tsx](file:///c:/Users/ADMIN/Projects/Praxis%20Consulting/components/site-header.tsx).

### A. The Container Transition
The menu wrapper expands from `max-height: 0` to `max-height: 24rem` (`max-h-96`) when opened:
```tsx
<div
  className={cn(
    "lg:hidden overflow-hidden transition-all duration-300 bg-navy/95 backdrop-blur-lg",
    open ? "max-h-96" : "max-h-0"
  )}
>
  ...
</div>
```
- `transition-all duration-300`: Smoothly animates the height changes over 300ms.
- `overflow-hidden`: Hides children when the container is collapsed.

### B. Individual Item Transitions
Each link has a transition applied to its opacity and translation properties:
```tsx
className={cn(
  "text-white/80 hover:text-gold py-2.5 text-sm transition-all duration-300",
  open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
)}
```
- **When closed (`!open`)**: Items have `opacity-0` and are pushed left by `-translate-x-3` (`-12px`).
- **When opened (`open`)**: Items transition to `opacity-100` and reset their horizontal position (`translate-x-0`).

### C. The Staggering Effect (Dynamic Delays)
To trigger the cascading entry effect, each link is assigned a custom `transitionDelay` inline style based on its index in the array:
```tsx
style={{ transitionDelay: `${index * 70}ms` }}
```
- The 1st item (index `0`) begins transitioning immediately (`0ms` delay).
- The 2nd item (index `1`) waits `70ms` before starting its transition.
- The 3rd item (index `2`) waits `140ms`, and so on.
- The CTA button at the end is delayed by `${navLinks.length * 70}ms`.

---

## 3. Full Component Reference Code

Here is a simplified code snippet of the menu loop:

```tsx
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Values", href: "/#values" },
  { label: "Founder", href: "/#founder" },
  { label: "Contact", href: "/#contact" },
];

// Inside render...
<div className="px-4 py-4 flex flex-col gap-1">
  {navLinks.map((link, index) => (
    <Link
      key={link.href}
      href={link.href}
      onClick={() => setOpen(false)}
      className={cn(
        "text-white/80 hover:text-gold py-2.5 text-sm transition-all duration-300",
        open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
      )}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {link.label}
    </Link>
  ))}
  <Link
    href="/#contact"
    onClick={() => setOpen(false)}
    className={cn(
      "mt-2 inline-flex justify-center items-center rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-navy transition-all duration-300",
      open ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
    )}
    style={{ transitionDelay: `${navLinks.length * 70}ms` }}
  >
    Get in touch
  </Link>
</div>
```
This is a lightweight, performant pure CSS approach that does not require heavy animation libraries like Framer Motion.
