import { client } from "@/lib/apolloClient";
import { DocumentNode } from "graphql";

export async function postDynamicForm<T = any>(
  variables: Record<string, any>,
  mutationQuery: DocumentNode
): Promise<{ data?: T; error?: string, success?: boolean }> {
  try {
    console.log({variables});
    const { data } = await client.mutate<T>({
      mutation: mutationQuery,
      variables,
    });

    return { data: data! };
  } catch (error: any) {
    return {
      error: error?.message ?? "Unknown error",
      success: false,
    };
  }
}
