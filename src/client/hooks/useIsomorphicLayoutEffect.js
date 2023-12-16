import { useEffect, useLayoutEffect } from "react";

const useIsomorphicLayoutEffect = __SERVER__ ? useEffect : useLayoutEffect;

export default useIsomorphicLayoutEffect;
