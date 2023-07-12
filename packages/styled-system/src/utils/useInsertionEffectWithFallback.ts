import { useEffect, useInsertionEffect } from "react";

// TODO name isomorphic here also?
export const useInsertionEffectWithFallback = typeof window !== "undefined" ? useInsertionEffect : useEffect;
