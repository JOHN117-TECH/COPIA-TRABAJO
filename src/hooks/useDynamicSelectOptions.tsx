import { useGetMarketsQuery } from "@/graphql/markets/queries/getMarkets.generated";
import GetCurrentInstance from "./useGetCurrentInstance";
import { useCompanyTypesQueryQuery } from "@/graphql/auth/signup/queries/companyTypesQuery.generated";

export function useDynamicSelectOptions() {
  const instanceId = GetCurrentInstance();

  const { data: companyTypesData } = useCompanyTypesQueryQuery({
    variables: {
      instanceIds: instanceId
    },
  });

  const { data: marketsData } = useGetMarketsQuery({
    variables: {
      instanceIds: instanceId,
      saleable: true
    },
  });

  const companyTypesOptions = companyTypesData?.companyTypes?.edges?.map(ct => ({
    value: String(ct?.node?.id),
    label: ct?.node?.name,
  })) ?? [];
  
  const marketOptions = marketsData?.markets?.edges?.map(edge => ({
    value: String(edge?.node?.id),
    label: edge?.node?.name,
  })) ?? [];

  const optionsMap: Record<string, { value: string; label: string }[]> = {
    //@ts-ignore
    companyTypeId: companyTypesOptions,
    //@ts-ignore
    market: marketOptions,
  };

  return optionsMap;
}
