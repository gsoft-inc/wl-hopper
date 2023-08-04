import { useEffect, useInsertionEffect } from "react";

export const useInsertionEffectWithFallback = typeof window !== "undefined" ? useInsertionEffect : useEffect;
