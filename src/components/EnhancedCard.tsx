import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface EnhancedCardProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'premium' | 'glass' | 'hover';
  interactive?: boolean;
  glow?: boolean;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className,
  variant = 'default',
  interactive = false,
  glow = false
}) => {
  const variants = {
    default: "card-gradient shadow-card hover:shadow-card-hover",
    premium: "card-premium",
    glass: "glass-ukraine",
    hover: "interactive-hover"
  };

  return (
    <Card 
      className={cn(
        "transition-smooth",
        variants[variant],
        interactive && "interactive-hover",
        glow && "animate-glow",
        className
      )}
    >
      {children}
    </Card>
  );
};

interface PremiumCardSectionProps {
  icon?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  accent?: 'primary' | 'secondary' | 'premium';
}

export const PremiumCardSection: React.FC<PremiumCardSectionProps> = ({
  icon,
  title,
  description,
  children,
  accent = 'primary'
}) => {
  const accentColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    premium: "text-premium"
  };

  return (
    <EnhancedCard variant="premium" interactive>
      <CardHeader>
        {icon && (
          <div className="text-4xl mb-2 animate-float">
            {icon}
          </div>
        )}
        <CardTitle className={cn("text-xl font-montserrat", accentColors[accent])}>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {children && (
        <CardContent>
          {children}
        </CardContent>
      )}
    </EnhancedCard>
  );
};

export { Card, CardContent, CardDescription, CardHeader, CardTitle };