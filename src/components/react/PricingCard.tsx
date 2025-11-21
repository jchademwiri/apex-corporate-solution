import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export default function PricingCard({ title, price, description, features, highlighted = false }: PricingCardProps) {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-primary shadow-lg scale-105 relative z-10' : ''}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
          Most Popular
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3 text-sm">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center">
              <Check className="mr-2 h-4 w-4 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant={highlighted ? "default" : "outline"}>
          Choose Plan
        </Button>
      </CardFooter>
    </Card>
  );
}
