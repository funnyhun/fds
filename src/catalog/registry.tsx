import type { ComponentType } from "react";
import { AccentButton } from "../components/AccentButton";
import { BadgeStack } from "../components/BadgeStack";
import { PromoCard } from "../components/PromoCard";

export type PreviewConfig = {
  component: ComponentType<any>;
  props: Record<string, unknown>;
};

export const previewRegistry: Record<string, PreviewConfig> = {
  AccentButton: {
    component: AccentButton,
    props: {
      label: "Add to cart",
      hint: "Ships in 2 days",
    },
  },
  PromoCard: {
    component: PromoCard,
    props: {
      title: "Soft Landing Pack",
      description: "Organize your brand blocks into a single, cozy flow.",
      ctaLabel: "Explore",
    },
  },
  BadgeStack: {
    component: BadgeStack,
    props: {
      labels: ["Beta", "New", "Popular"],
    },
  },
};
