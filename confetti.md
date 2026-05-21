# Confetti configuration

This project uses the canvas-confetti package to celebrate a successful contact form submission in the contact section.

## Package

- canvas-confetti (imported as `confetti`)
- sonner (toast notification that accompanies the confetti)

## Trigger

The confetti fires after the contact form submission completes and the success state is set.

## Colors

The burst uses Praxis brand colors:

- Navy: #0b1f3a
- Gold: #c9a34e
- Gold Soft: #e2c884
- Teal: #2ca6a4

## Burst configuration

Primary burst:

- particleCount: 140
- spread: 90
- startVelocity: 45
- origin: { y: 0.6 }
- colors: brand palette
- zIndex: 9999

Follow-up stream (for 900ms):

- Two side bursts per animation frame
- particleCount: 5 (per side)
- angle: 60 and 120
- spread: 55
- startVelocity: 55
- origin: { x: 0, y: 0.8 } and { x: 1, y: 0.8 }
- colors: brand palette
- zIndex: 9999

## Location

The configuration lives in components/contact-section.tsx inside the `fireConfetti` function.
