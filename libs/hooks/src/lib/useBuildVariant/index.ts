import { BuildVariantContext } from '@deriv-com/providers';
import { useContext, useMemo } from 'react';

export function useBuildVariant() {
  const { buildVariant } = useContext(BuildVariantContext);

  const variants = useMemo(() => {
    return {
      buildVariant,
      isEu: buildVariant === 'eu',
      isHk: buildVariant === 'hk',
      isGolden: buildVariant === 'gold',
      isRow: buildVariant === 'row',
    };
  }, [buildVariant]);
  return variants;
}

export default useBuildVariant;
