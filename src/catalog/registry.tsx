import type { ComponentType } from "react";
import { AccentButton } from "../components/AccentButton";
import { BadgeStack } from "../components/BadgeStack";
import { PromoCard } from "../components/PromoCard";

import AccentButtonSource from "../components/AccentButton.tsx?raw";
import BadgeStackSource from "../components/BadgeStack.tsx?raw";
import PromoCardSource from "../components/PromoCard.tsx?raw";

export type PreviewConfig = {
  component: ComponentType<any>;
  props: Record<string, unknown>;
  sourceCode: string;
};

export const previewRegistry: Record<string, PreviewConfig> = {
  AccentButton: {
    component: AccentButton,
    props: {
      label: "Add to cart",
      hint: "Ships in 2 days",
    },
    sourceCode: AccentButtonSource,
  },
  PromoCard: {
    component: PromoCard,
    props: {
      title: "Soft Landing Pack",
      description: "Organize your brand blocks into a single, cozy flow.",
      ctaLabel: "Explore",
    },
    sourceCode: PromoCardSource,
  },
  BadgeStack: {
    component: BadgeStack,
    props: {
      labels: ["Beta", "New", "Popular"],
    },
    sourceCode: BadgeStackSource,
  },
};
