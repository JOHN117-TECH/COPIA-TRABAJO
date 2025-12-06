import { useMemo } from "react";

export function useFormattedProducts(products?: any[] | null) {
  const formattedProducts = useMemo(() => {
    return (products ?? []).map((p) => ({
      __typename: "PatternNodeEdge",
      node: {
        __typename: "PatternNode",
        id: p?.node?.id ?? "",
        name: p?.node?.name ?? "",
        altName: p?.node?.altName ?? "",
        slug: p?.node?.slug ?? "",
        imageThumbSmall: p?.node?.imageThumbSmall ?? "",
        isNew: p?.node?.isNew ?? false,
        products: {
          __typename: "ProductNodeConnection",
          totalCount: p?.node?.products?.totalCount ?? 0,
          edges: (p?.node?.products?.edges ?? []).map((e: any) => ({
            __typename: "ProductNodeEdge",
            node: {
              __typename: "ProductNode",
              id: e?.node?.id ?? "",
              code: e?.node?.code ?? "",
              color: e?.node?.color ?? "",
              predominantColors: e?.node?.predominantColors ?? [],
              imageThumbSmall: e?.node?.imageThumbSmall ?? "",
              isNew: e?.node?.isNew ?? false,
            },
          })),
        },
      },
      isReference: true,
    }));
  }, [products]);

  return formattedProducts;
}
