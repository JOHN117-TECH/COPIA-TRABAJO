import { Pattern } from '@/models/products.model'
import { PatternCartItem, ProductCartItem } from '@/models/cart.model';

export function transformProductToCartItem(
  node: ProductCartItem,
  altName: string
): ProductCartItem {
  return {
    __typename: 'ProductNode',
    id: node.id,
    altName: altName,
    code: node.code,
    color: node.color,
    imageThumbSmall: node.imageThumbSmall,
    imageThumbMedium: node.imageThumbMedium,
    imageThumbLarge: node.imageThumbLarge,
    isNew: node.isNew,
    quantity: 1,
  };
}

export function transformPatternToCartItem(pattern: Pattern): PatternCartItem {
  return {
    __typename: 'PatternNode',
    id: pattern.id,
    name: pattern.name,
    imageThumbSmall: pattern.products.edges[0].node.imageThumbSmall, // Asumiendo que siempre hay al menos un producto
    code: pattern.products.edges[0].node.code, // Asumiendo que el primer producto tiene un código
    color: pattern.products.edges[0].node.color, // Asumiendo que el primer producto tiene un color
    altName: pattern.altName,
    slug: generateSlugFromName(pattern.name), // o usar un campo existente si lo tienes
    isNew: pattern.isNew,
    quantity: 1,
    products: {
      __typename: 'ProductNodeConnection',
      edges: pattern.products.edges.map((edge: { node: ProductCartItem }) => ({
        __typename: 'ProductNodeEdge',
        node: {
          __typename: 'ProductNode',
          id: edge.node.id,
          code: edge.node.code,
          color: edge.node.color,
          imageThumbSmall: edge.node.imageThumbSmall,
          imageThumbMedium: edge.node.imageThumbMedium,
          imageThumbLarge: edge.node.imageThumbLarge,
          isNew: edge.node.isNew,
          quantity: 1,
        } as ProductCartItem,
      })),
    },
  };
}

// Si no tienes un campo "slug", puedes generarlo con esta función:
function generateSlugFromName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}
