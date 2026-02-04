export const COLORS = {
  // Backgrounds
  background: '#0F172A', // Slate 900
  card: '#1E293B', // Slate 800
  cardBorder: '#334155', // Slate 700
  
  // Primary / Accents
  primary: '#8B5CF6', // Violet 500
  secondary: '#3B82F6', // Blue 500
  accent: '#F472B6', // Pink 400
  
  // Text
  text: '#F8FAFC', // Slate 50
  textSecondary: '#94A3B8', // Slate 400
  textMuted: '#64748B', // Slate 500
  
  // States
  success: '#22C55E', // Green 500
  warning: '#EAB308', // Yellow 500
  error: '#EF4444', // Red 500
  locked: '#475569', // Slate 600

  // Gradients
  gradientPrimary: ['#8B5CF6', '#3B82F6'] as const,
  gradientLocked: ['#334155', '#1E293B'] as const,
  gradientSuccess: ['#22C55E', '#16A34A'] as const,
};

export const SPACING = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const RADIUS = {
  s: 8,
  m: 16,
  l: 24,
  full: 9999,
};
