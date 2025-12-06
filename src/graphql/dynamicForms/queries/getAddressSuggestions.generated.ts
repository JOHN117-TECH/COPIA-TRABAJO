import * as Types from '../../generated/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  /**
   * The `Time` scalar type represents a Time value as
   * specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Time: { input: any; output: any; }
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: { input: any; output: any; }
};

export type AbrasionResistanceIiiTestNode = Node & {
  __typename?: 'AbrasionResistanceIIITestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  conditions: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type AbrasionResistanceIiTestNode = Node & {
  __typename?: 'AbrasionResistanceIITestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  conditions: Scalars['String']['output'];
  conditionsIi?: Maybe<Scalars['String']['output']>;
  conditionsIii?: Maybe<Scalars['String']['output']>;
  conditionsIv?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  resultIi?: Maybe<Scalars['String']['output']>;
  resultIii?: Maybe<Scalars['String']['output']>;
  resultIv?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AbrasionResistanceITestNode = Node & {
  __typename?: 'AbrasionResistanceITestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  conditions: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  showLogo: Scalars['Boolean']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type AbrasionResistanceIvTestNode = Node & {
  __typename?: 'AbrasionResistanceIVTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  conditions: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type AcceleratedAgeingTestNode = Node & {
  __typename?: 'AcceleratedAgeingTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  conditions: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type AcceleratedLightAgingBendingTestNode = Node & {
  __typename?: 'AcceleratedLightAgingBendingTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  warp: Scalars['String']['output'];
};

export type AcceleratedLightAgingTearingStrengthTestNode = Node & {
  __typename?: 'AcceleratedLightAgingTearingStrengthTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  warp: Scalars['String']['output'];
};

export type AcceleratedLightAgingTestNode = Node & {
  __typename?: 'AcceleratedLightAgingTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  meterMethod?: Maybe<Scalars['String']['output']>;
  meterResult: Scalars['String']['output'];
  quvMethod?: Maybe<Scalars['String']['output']>;
  quvResult: Scalars['String']['output'];
  showLogo: Scalars['Boolean']['output'];
  xenotestMethod?: Maybe<Scalars['String']['output']>;
  xenotestResult: Scalars['String']['output'];
};

export type AddSectorsToPattern = {
  __typename?: 'AddSectorsToPattern';
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type AddToCartInput = {
  cartId?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['ID']['input'];
  patternId?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['Int']['input'];
  unitPrice: Scalars['Int']['input'];
};

export type AddToCartPayload = {
  __typename?: 'AddToCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  item?: Maybe<ItemNode>;
};

export type AdditionalTestsNode = Node & {
  __typename?: 'AdditionalTestsNode';
  abrasionResistanceIIITest?: Maybe<AbrasionResistanceIiiTestNode>;
  abrasionResistanceIITest?: Maybe<AbrasionResistanceIiTestNode>;
  abrasionResistanceITest?: Maybe<AbrasionResistanceITestNode>;
  abrasionResistanceIVTest?: Maybe<AbrasionResistanceIvTestNode>;
  acceleratedAgeingTest?: Maybe<AcceleratedAgeingTestNode>;
  acceleratedLightAgingBendingTest?: Maybe<AcceleratedLightAgingBendingTestNode>;
  acceleratedLightAgingTearingStrengthTest?: Maybe<AcceleratedLightAgingTearingStrengthTestNode>;
  acceleratedLightAgingTest?: Maybe<AcceleratedLightAgingTestNode>;
  adhesionTest?: Maybe<AdhesionTestNode>;
  blockingTest?: Maybe<BlockingTestNode>;
  castorChairContinuousUseTest?: Maybe<CastorChairContinuousUseTestNode>;
  coldCrackTest?: Maybe<ColdCrackTestNode>;
  crockingResistanceIITest?: Maybe<CrockingResistanceIiTestNode>;
  crockingResistanceITest?: Maybe<CrockingResistanceITestNode>;
  dimensionalStabilityHeatTest?: Maybe<DimensionalStabilityHeatTestNode>;
  dimensionalStabilityHumidityTest?: Maybe<DimensionalStabilityHumidityTestNode>;
  dimensionalStabilityWaterTest?: Maybe<DimensionalStabilityWaterTestNode>;
  elongationAtBreakTest?: Maybe<ElongationAtBreakTestNode>;
  elongationIITest?: Maybe<ElongationIiTestNode>;
  elongationITest?: Maybe<ElongationITestNode>;
  flexResistanceIiTest?: Maybe<FlexResistanceIiTestNode>;
  flexResistanceTest?: Maybe<FlexResistanceTestNode>;
  flooringClassificationTest?: Maybe<FlooringClassificationTestNode>;
  hardnessTest?: Maybe<HardnessTestNode>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lossOnHeatingTest?: Maybe<LossOnHeatingTestNode>;
  odourTest?: Maybe<OdourTestNode>;
  pattern: PatternNode;
  /** This file must be a PDF */
  pdf: Scalars['String']['output'];
  residualIndentationTest?: Maybe<ResidualIndentationTestNode>;
  resistanceToChemicalsTest?: Maybe<ResistanceToChemicalsTestNode>;
  seamFatigueTest?: Maybe<SeamFatigueTestNode>;
  seamStrengthTest?: Maybe<SeamStrengthTestNode>;
  setTest?: Maybe<SetTestNode>;
  slipResistanceOfFlooringTest?: Maybe<SlipResistanceOfFlooringTestNode>;
  stitchingStrengthTest?: Maybe<StitchingStrengthTestNode>;
  stretchTest?: Maybe<StretchTestNode>;
  tearStrengthTest?: Maybe<TearStrengthTestNode>;
  tearStrengthTongueMethodTest?: Maybe<TearStrengthTongueMethodTestNode>;
  tearStrengthTrapezoidMethodTest?: Maybe<TearStrengthTrapezoidMethodTestNode>;
  tensileStrengthTest?: Maybe<TensileStrengthTestNode>;
  thermalConductivityTest?: Maybe<ThermalConductivityTestNode>;
  thicknessOfWearLayerTest?: Maybe<ThicknessOfWearLayerTestNode>;
  volatilityTest?: Maybe<VolatilityTestNode>;
};

export type AdditionalTestsNodeConnection = {
  __typename?: 'AdditionalTestsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<AdditionalTestsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `AdditionalTestsNode` and its cursor. */
export type AdditionalTestsNodeEdge = {
  __typename?: 'AdditionalTestsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<AdditionalTestsNode>;
};

export type AdhesionTestNode = Node & {
  __typename?: 'AdhesionTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type AnonimalSampleObjectType = {
  code?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  stock?: InputMaybe<Scalars['String']['input']>;
};

export type ApplyCvToJobInput = {
  acceptTerms?: InputMaybe<Scalars['Boolean']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  country: Scalars['ID']['input'];
  cv: Scalars['String']['input'];
  department?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  job?: InputMaybe<Scalars['ID']['input']>;
  lastname: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ApplyCvToJobPayload = {
  __typename?: 'ApplyCVToJobPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type ApproveProject = {
  __typename?: 'ApproveProject';
  project?: Maybe<PromotedProjectNode>;
  success?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserNode>;
};

export type BackingNode = Node & {
  __typename?: 'BackingNode';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pattern: PatternNode;
  pinholes?: Maybe<Scalars['String']['output']>;
  pinholesMethod?: Maybe<Scalars['String']['output']>;
  pinholesResult?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
  weightMethod?: Maybe<GeneralWeightMethod>;
  weightResult?: Maybe<Scalars['String']['output']>;
  weightUnit?: Maybe<GeneralWeightUnit>;
};

export type BackingNodeConnection = {
  __typename?: 'BackingNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BackingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BackingNode` and its cursor. */
export type BackingNodeEdge = {
  __typename?: 'BackingNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BackingNode>;
};

export type BannerItemNode = Node & {
  __typename?: 'BannerItemNode';
  active: Scalars['Boolean']['output'];
  altText?: Maybe<Scalars['String']['output']>;
  backgroundImage?: Maybe<Scalars['String']['output']>;
  backgroundImageUrl?: Maybe<Scalars['String']['output']>;
  buttonText?: Maybe<Scalars['String']['output']>;
  buttonUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobcompanywebsiteSet: JobCompanyWebsiteNodeConnection;
  order: Scalars['Int']['output'];
  showButton: Scalars['Boolean']['output'];
  sloganImg?: Maybe<Scalars['String']['output']>;
  sloganImgUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  type: BannerItemType;
  updatedAt: Scalars['DateTime']['output'];
  urlDesktop?: Maybe<Scalars['String']['output']>;
  urlMobile?: Maybe<Scalars['String']['output']>;
  websitehomeSet: WebsiteHomeNodeConnection;
};


export type BannerItemNodeJobcompanywebsiteSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type BannerItemNodeWebsitehomeSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type BannerItemNodeConnection = {
  __typename?: 'BannerItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BannerItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `BannerItemNode` and its cursor. */
export type BannerItemNodeEdge = {
  __typename?: 'BannerItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BannerItemNode>;
};

/** An enumeration. */
export enum BannerItemType {
  /** Image */
  Image = 'IMAGE',
  /** Video */
  Video = 'VIDEO'
}

export type BlockingTestNode = Node & {
  __typename?: 'BlockingTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
};

export type BlogCategoryNode = Node & {
  __typename?: 'BlogCategoryNode';
  altCover?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  posts: PostNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type BlogCategoryNodePostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type BlogCategoryNodeConnection = {
  __typename?: 'BlogCategoryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BlogCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BlogCategoryNode` and its cursor. */
export type BlogCategoryNodeEdge = {
  __typename?: 'BlogCategoryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BlogCategoryNode>;
};

/** An enumeration. */
export enum BrandBrandType {
  /** Coating */
  Coating = 'COATING',
  /** Support */
  Support = 'SUPPORT'
}

export type BrandNode = Node & {
  __typename?: 'BrandNode';
  backing: BackingNodeConnection;
  brandType?: Maybe<BrandBrandType>;
  content?: Maybe<Scalars['String']['output']>;
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  externalLink?: Maybe<Scalars['String']['output']>;
  externalLinkCa?: Maybe<Scalars['String']['output']>;
  externalLinkDe?: Maybe<Scalars['String']['output']>;
  externalLinkEn?: Maybe<Scalars['String']['output']>;
  externalLinkEs?: Maybe<Scalars['String']['output']>;
  externalLinkFr?: Maybe<Scalars['String']['output']>;
  externalLinkIt?: Maybe<Scalars['String']['output']>;
  externalLinkPl?: Maybe<Scalars['String']['output']>;
  externalLinkUk?: Maybe<Scalars['String']['output']>;
  generalPattern: GeneralNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Ideal size: 1280px x 900px */
  image?: Maybe<Scalars['String']['output']>;
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  instances: InstanceNodeConnection;
  isVisible: Scalars['Boolean']['output'];
  /** Ideal size: 300px x 100px, extension mut be .png or .svg */
  logo?: Maybe<Scalars['String']['output']>;
  logoSmall?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  patternsBrands: PatternNodeConnection;
  /** Ideal size: 300px x 100px, extension mut be .png or .svg */
  reverseLogo?: Maybe<Scalars['String']['output']>;
  reverseLogoSmall?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


export type BrandNodeBackingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandNodeGeneralPatternArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type BrandNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type BrandNodePatternsBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type BrandNodeConnection = {
  __typename?: 'BrandNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BrandNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `BrandNode` and its cursor. */
export type BrandNodeEdge = {
  __typename?: 'BrandNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BrandNode>;
};

export type BusinessHourNode = Node & {
  __typename?: 'BusinessHourNode';
  endDay?: Maybe<Scalars['String']['output']>;
  endHour: Scalars['Time']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  startDay?: Maybe<Scalars['String']['output']>;
  startHour: Scalars['Time']['output'];
  store: StoreNode;
};

export type BusinessHourNodeConnection = {
  __typename?: 'BusinessHourNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BusinessHourNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `BusinessHourNode` and its cursor. */
export type BusinessHourNodeEdge = {
  __typename?: 'BusinessHourNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<BusinessHourNode>;
};

export type CardOfColorsNode = Node & {
  __typename?: 'CardOfColorsNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pattern?: Maybe<PatternNode>;
  text: Scalars['String']['output'];
  textCa?: Maybe<Scalars['String']['output']>;
  textDe?: Maybe<Scalars['String']['output']>;
  textEn?: Maybe<Scalars['String']['output']>;
  textEs?: Maybe<Scalars['String']['output']>;
  textFr?: Maybe<Scalars['String']['output']>;
  textIt?: Maybe<Scalars['String']['output']>;
  textPl?: Maybe<Scalars['String']['output']>;
  textUk?: Maybe<Scalars['String']['output']>;
};

export type CardOfColorsNodeConnection = {
  __typename?: 'CardOfColorsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CardOfColorsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CardOfColorsNode` and its cursor. */
export type CardOfColorsNodeEdge = {
  __typename?: 'CardOfColorsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CardOfColorsNode>;
};

export type CarouselMutation = {
  __typename?: 'CarouselMutation';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type CarouselNode = Node & {
  __typename?: 'CarouselNode';
  /** If it is active it will be shown in the api */
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** field corresponding to the testimony */
  description?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionCa?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionDe?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionEn?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionEs?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionFr?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionIt?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionPl?: Maybe<Scalars['String']['output']>;
  /** field corresponding to the testimony */
  descriptionUk?: Maybe<Scalars['String']['output']>;
  domains: DomainNodesConnection;
  /** Testimonial html tag */
  htmlTag?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  jobInstance?: Maybe<JobCompanyNode>;
  order: Scalars['Int']['output'];
  /** Title of the testimony */
  title: Scalars['String']['output'];
};


export type CarouselNodeDomainsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CarouselNodeConnection = {
  __typename?: 'CarouselNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CarouselNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CarouselNode` and its cursor. */
export type CarouselNodeEdge = {
  __typename?: 'CarouselNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CarouselNode>;
};

export type CartNode = Node & {
  __typename?: 'CartNode';
  checkedOut: Scalars['Boolean']['output'];
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  items: ItemNodeConnection;
};


export type CartNodeItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CartNodeConnection = {
  __typename?: 'CartNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CartNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `CartNode` and its cursor. */
export type CartNodeEdge = {
  __typename?: 'CartNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CartNode>;
};

export type CastorChairContinuousUseTestNode = Node & {
  __typename?: 'CastorChairContinuousUseTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  showLogo: Scalars['Boolean']['output'];
};

export type CatalogueNode = Node & {
  __typename?: 'CatalogueNode';
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pattern: PatternNode;
  user: UserNode;
};

export type CatalogueNodeConnection = {
  __typename?: 'CatalogueNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CatalogueNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CatalogueNode` and its cursor. */
export type CatalogueNodeEdge = {
  __typename?: 'CatalogueNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CatalogueNode>;
};

export type CertificateMutation = {
  __typename?: 'CertificateMutation';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type CertificateNode = Node & {
  __typename?: 'CertificateNode';
  /** If it is active it will be shown in the api */
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  domains: DomainNodesConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageThumb?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  jobCompany: JobCompanyNodeConnection;
  /** Field to specify the order of the certificate */
  order?: Maybe<Scalars['Int']['output']>;
  /** Field corresponding to the name of the certificate */
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CertificateNodeDomainsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CertificateNodeJobCompanyArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type CertificateNodeConnection = {
  __typename?: 'CertificateNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CertificateNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CertificateNode` and its cursor. */
export type CertificateNodeEdge = {
  __typename?: 'CertificateNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CertificateNode>;
};

export type CheckOutCartInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cartId: Scalars['String']['input'];
  cityId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Int']['input']>;
};

export type CheckOutCartPayload = {
  __typename?: 'CheckOutCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ChoiceFacetCountType = {
  __typename?: 'ChoiceFacetCountType';
  count: Scalars['Int']['output'];
  label?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type CityNode = Node & {
  __typename?: 'CityNode';
  alternateNames?: Maybe<Scalars['String']['output']>;
  city: ServiceContactNodeConnection;
  cityModel: DownloadLogNodeConnection;
  contacts: ContactNodeConnection;
  country: CountryNode;
  displayName: Scalars['String']['output'];
  featureCode?: Maybe<Scalars['String']['output']>;
  geonameId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobApplications: JobApplicationNodeConnection;
  jobpositionSet: JobPositionNodeConnection;
  latitude?: Maybe<Scalars['Float']['output']>;
  longitude?: Maybe<Scalars['Float']['output']>;
  medicalfilmsolutionSet: MedicalFilmSolutionNodeConnection;
  name: Scalars['String']['output'];
  nameAscii: Scalars['String']['output'];
  offices: OfficeNodeConnection;
  population?: Maybe<Scalars['Int']['output']>;
  profiles: ProfileNodeConnection;
  promotedprojectSet: PromotedProjectNodeConnection;
  region?: Maybe<RegionNode>;
  samplescontact: SampleContactNodeConnection;
  searchNames: Scalars['String']['output'];
  shippingAddresses: Array<ShippingAddressNode>;
  slug: Scalars['String']['output'];
  stores: StoreNodeConnection;
  timezone?: Maybe<Scalars['String']['output']>;
  vacancies: VacantNodeConnection;
};


export type CityNodeCityArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CityNodeCityModelArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  downloader?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CityNodeContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CityNodeJobApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  vacant?: InputMaybe<Scalars['ID']['input']>;
};


export type CityNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};


export type CityNodeMedicalfilmsolutionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CityNodeOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  business_Icontains?: InputMaybe<Scalars['String']['input']>;
  business_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type CityNodeProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CityNodePromotedprojectSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CityNodeSamplescontactArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CityNodeStoresArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  patterns?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type CityNodeVacanciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type CityNodeConnection = {
  __typename?: 'CityNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CityNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CityNode` and its cursor. */
export type CityNodeEdge = {
  __typename?: 'CityNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CityNode>;
};

export type ClaimReasonNode = Node & {
  __typename?: 'ClaimReasonNode';
  claim?: Maybe<GlobalDataNode>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** ('embossing', 'gloss', 'print') */
  others?: Maybe<Scalars['String']['output']>;
  reasons?: Maybe<ClaimReasonReasons>;
};

export type ClaimReasonNodeConnection = {
  __typename?: 'ClaimReasonNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ClaimReasonNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ClaimReasonNode` and its cursor. */
export type ClaimReasonNodeEdge = {
  __typename?: 'ClaimReasonNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ClaimReasonNode>;
};

/** An enumeration. */
export enum ClaimReasonReasons {
  /** color difference */
  ColorDifference = 'COLOR_DIFFERENCE',
  /** color fading */
  ColorFading = 'COLOR_FADING',
  /** differences in dimensions */
  DifferencesInDimensions = 'DIFFERENCES_IN_DIMENSIONS',
  /** differences in hand */
  DifferencesInHand = 'DIFFERENCES_IN_HAND',
  /** facial defects */
  FacialDefects = 'FACIAL_DEFECTS',
  /** material resistance */
  MaterialResistance = 'MATERIAL_RESISTANCE',
  /** others */
  Others = 'OTHERS',
  /** pleats */
  Pleats = 'PLEATS',
  /** staining */
  Staining = 'STAINING',
  /** surface deterioration */
  SurfaceDeterioration = 'SURFACE_DETERIORATION',
  /** visual defects */
  VisualDefects = 'VISUAL_DEFECTS'
}

/** An enumeration. */
export enum ClaimStatus {
  /** done */
  Done = 'DONE',
  /** open */
  Open = 'OPEN',
  /** progress */
  Progress = 'PROGRESS'
}

export type ColdCrackTestNode = Node & {
  __typename?: 'ColdCrackTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  temperature: Scalars['String']['output'];
};

export type ColorDifferenceNode = Node & {
  __typename?: 'ColorDifferenceNode';
  claim?: Maybe<GlobalDataNode>;
  colorDifferenceDescription?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type ColourFadingNode = Node & {
  __typename?: 'ColourFadingNode';
  claim?: Maybe<GlobalDataNode>;
  cleaningAgentsUsed?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  protectProductCushions?: Maybe<ColourFadingProtectProductCushions>;
  surfaceContact?: Maybe<Scalars['String']['output']>;
};

export type ColourFadingNodeConnection = {
  __typename?: 'ColourFadingNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ColourFadingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ColourFadingNode` and its cursor. */
export type ColourFadingNodeEdge = {
  __typename?: 'ColourFadingNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ColourFadingNode>;
};

/** An enumeration. */
export enum ColourFadingProtectProductCushions {
  /** cover */
  Cover = 'COVER',
  /** outside not protection */
  OutsideNotProtection = 'OUTSIDE_NOT_PROTECTION',
  /** stored inside */
  StoredInside = 'STORED_INSIDE'
}

export type CommercialMemberNode = Node & {
  __typename?: 'CommercialMemberNode';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  photo?: Maybe<Scalars['String']['output']>;
  teams: CommercialTeamNodeConnection;
  updatedAt: Scalars['DateTime']['output'];
  whatsapp?: Maybe<Scalars['String']['output']>;
};


export type CommercialMemberNodeTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  members_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type CommercialMemberNodeConnection = {
  __typename?: 'CommercialMemberNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommercialMemberNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CommercialMemberNode` and its cursor. */
export type CommercialMemberNodeEdge = {
  __typename?: 'CommercialMemberNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CommercialMemberNode>;
};

export type CommercialTeamNode = Node & {
  __typename?: 'CommercialTeamNode';
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  members: CommercialMemberNodeConnection;
  title: Scalars['String']['output'];
};


export type CommercialTeamNodeMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
  whatsapp_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type CommercialTeamNodeConnection = {
  __typename?: 'CommercialTeamNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CommercialTeamNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CommercialTeamNode` and its cursor. */
export type CommercialTeamNodeEdge = {
  __typename?: 'CommercialTeamNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CommercialTeamNode>;
};

export type CompanyTypeNode = Node & {
  __typename?: 'CompanyTypeNode';
  companyType: ServiceContactNodeConnection;
  contactSet: ContactNodeConnection;
  formproposalSet: FormProposalNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  profileSet: ProfileNodeConnection;
  samplecontactSet: SampleContactNodeConnection;
};


export type CompanyTypeNodeCompanyTypeArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CompanyTypeNodeContactSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CompanyTypeNodeFormproposalSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompanyTypeNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CompanyTypeNodeProfileSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CompanyTypeNodeSamplecontactSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CompanyTypeNodeConnection = {
  __typename?: 'CompanyTypeNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CompanyTypeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CompanyTypeNode` and its cursor. */
export type CompanyTypeNodeEdge = {
  __typename?: 'CompanyTypeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CompanyTypeNode>;
};

export type ContactFormFieldNode = Node & {
  __typename?: 'ContactFormFieldNode';
  /** Campo del que depende (debe ser un checkbox del mismo formulario). */
  dependents: ContactFormFieldNodeConnection;
  /** Campo del que depende (debe ser un checkbox del mismo formulario). */
  dependsOn?: Maybe<ContactFormFieldNode>;
  /** Valor del checkbox que habilita este campo. */
  dependsValue: Scalars['Boolean']['output'];
  fieldType: FormFieldFieldType;
  form: ContactFormNode;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  /** Clave única, p.ej. 'email' o 'telefono' */
  name: Scalars['String']['output'];
  options?: Maybe<ContactFormFieldOptionNodeConnection>;
  /** Orden de aparición */
  order: Scalars['Int']['output'];
  placeholder: Scalars['String']['output'];
  required: Scalars['Boolean']['output'];
  width: FormFieldWidth;
};


export type ContactFormFieldNodeDependentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ContactFormFieldNodeOptionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactFormFieldNodeConnection = {
  __typename?: 'ContactFormFieldNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContactFormFieldNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ContactFormFieldNode` and its cursor. */
export type ContactFormFieldNodeEdge = {
  __typename?: 'ContactFormFieldNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContactFormFieldNode>;
};

export type ContactFormFieldOptionNode = Node & {
  __typename?: 'ContactFormFieldOptionNode';
  field: ContactFormFieldNode;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  value: Scalars['String']['output'];
};

export type ContactFormFieldOptionNodeConnection = {
  __typename?: 'ContactFormFieldOptionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContactFormFieldOptionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ContactFormFieldOptionNode` and its cursor. */
export type ContactFormFieldOptionNodeEdge = {
  __typename?: 'ContactFormFieldOptionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContactFormFieldOptionNode>;
};

export type ContactFormNode = Node & {
  __typename?: 'ContactFormNode';
  active: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  fields?: Maybe<ContactFormFieldNodeConnection>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};


export type ContactFormNodeFieldsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ContactFormNodeConnection = {
  __typename?: 'ContactFormNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContactFormNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ContactFormNode` and its cursor. */
export type ContactFormNodeEdge = {
  __typename?: 'ContactFormNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContactFormNode>;
};

export type ContactNode = Node & {
  __typename?: 'ContactNode';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<CityNode>;
  cityLabel?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyTypeInstance?: Maybe<CompanyTypeNode>;
  created: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  lastName?: Maybe<Scalars['String']['output']>;
  marketWebUsa?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<PatternNode>;
  phone: Scalars['String']['output'];
  sector?: Maybe<SectorNode>;
  source?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ContactNodeConnection = {
  __typename?: 'ContactNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ContactNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ContactNode` and its cursor. */
export type ContactNodeEdge = {
  __typename?: 'ContactNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ContactNode>;
};

export type ControlabApproveTestsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comments: Scalars['String']['input'];
  requestId: Scalars['String']['input'];
};

export type ControlabApproveTestsPayload = {
  __typename?: 'ControlabApproveTestsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type CountryNode = Node & {
  __typename?: 'CountryNode';
  alternateNames?: Maybe<Scalars['String']['output']>;
  citySet: CityNodeConnection;
  code2?: Maybe<Scalars['String']['output']>;
  code3?: Maybe<Scalars['String']['output']>;
  continent?: Maybe<Scalars['String']['output']>;
  formproposalSet: FormProposalNodeConnection;
  geonameId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameAscii: Scalars['String']['output'];
  offices?: Maybe<OfficeNodeConnection>;
  phone?: Maybe<Scalars['String']['output']>;
  projects: ProjectNodeConnection;
  promotedprojectSet: PromotedProjectNodeConnection;
  regionSet: RegionNodeConnection;
  slug: Scalars['String']['output'];
  tld: Scalars['String']['output'];
};


export type CountryNodeCitySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasVacancies?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['ID']['input']>;
};


export type CountryNodeFormproposalSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type CountryNodeOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  business_Icontains?: InputMaybe<Scalars['String']['input']>;
  business_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type CountryNodeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['ID']['input']>;
  sector_Market_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type CountryNodePromotedprojectSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type CountryNodeRegionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alternateNames?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Icontains?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Istartswith?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};

export type CountryNodeConnection = {
  __typename?: 'CountryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CountryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CountryNode` and its cursor. */
export type CountryNodeEdge = {
  __typename?: 'CountryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CountryNode>;
};

export type CreateCatalogueInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patternSlug: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateCataloguePayload = {
  __typename?: 'CreateCataloguePayload';
  catalogue?: Maybe<CatalogueNode>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateClaimInput = {
  adequateProductResistance?: InputMaybe<Scalars['String']['input']>;
  application?: InputMaybe<Array<Scalars['String']['input']>>;
  batch: Scalars['String']['input'];
  cleaningAgentsUsed?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colorDifferenceDescription?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  conditions: Scalars['String']['input'];
  conditionsOfMaterial?: InputMaybe<Scalars['String']['input']>;
  customerNumber: Scalars['String']['input'];
  date: Scalars['Date']['input'];
  dateOfMaterialInstalled?: InputMaybe<Scalars['Date']['input']>;
  dateOfMaterialTransformed?: InputMaybe<Scalars['Date']['input']>;
  dateOfPurchase?: InputMaybe<Scalars['Date']['input']>;
  defect?: InputMaybe<Scalars['String']['input']>;
  describeApplicationMaterial?: InputMaybe<Scalars['String']['input']>;
  describeConditionsOfMaterial?: InputMaybe<Scalars['String']['input']>;
  describeProcessUsed?: InputMaybe<Scalars['String']['input']>;
  describeTheDifference?: InputMaybe<Scalars['String']['input']>;
  describeWhereMarksAre?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  foldsInMaterial?: InputMaybe<Scalars['String']['input']>;
  fullName: Scalars['String']['input'];
  howAffectsDifference?: InputMaybe<Scalars['String']['input']>;
  howCompareMaterial?: InputMaybe<Scalars['String']['input']>;
  howDetectDifference?: InputMaybe<Scalars['String']['input']>;
  howDetectedNonConformity?: InputMaybe<Scalars['String']['input']>;
  howItTransforms?: InputMaybe<Scalars['String']['input']>;
  howMeasuredMaterial?: InputMaybe<Scalars['String']['input']>;
  ifOtherDescription?: InputMaybe<Scalars['String']['input']>;
  indicateDifference?: InputMaybe<Scalars['String']['input']>;
  installedIn?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  knowTheInstructions?: InputMaybe<Scalars['Boolean']['input']>;
  knowTheRecomendations?: InputMaybe<Scalars['Boolean']['input']>;
  marksOnDelivery?: InputMaybe<Scalars['Boolean']['input']>;
  materialIsCoated?: InputMaybe<Scalars['Boolean']['input']>;
  materialIsMarked?: InputMaybe<Scalars['Boolean']['input']>;
  otherColor?: InputMaybe<Scalars['String']['input']>;
  otherProduct?: InputMaybe<Scalars['String']['input']>;
  others?: InputMaybe<Scalars['String']['input']>;
  placeWhereIsInstalled?: InputMaybe<Scalars['String']['input']>;
  productId?: InputMaybe<Scalars['ID']['input']>;
  productText?: InputMaybe<Scalars['String']['input']>;
  protectProductCushions?: InputMaybe<Scalars['String']['input']>;
  protectTheProduct?: InputMaybe<Scalars['String']['input']>;
  quantity: Scalars['String']['input'];
  reasons: Scalars['String']['input'];
  suggestedInstructions?: InputMaybe<Scalars['Boolean']['input']>;
  surfaceContact?: InputMaybe<Scalars['String']['input']>;
  theMaterialContaminated?: InputMaybe<Scalars['String']['input']>;
  typeOfStain?: InputMaybe<Scalars['String']['input']>;
  typeVisualDifference?: InputMaybe<Scalars['String']['input']>;
  uploadedZip: Scalars['String']['input'];
  visualDefectsHowDetectDifference?: InputMaybe<Scalars['String']['input']>;
  whenDetectDifference?: InputMaybe<Scalars['String']['input']>;
  whereMarksAre?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  whichProductUse?: InputMaybe<Scalars['String']['input']>;
};

export type CreateClaimPayload = {
  __typename?: 'CreateClaimPayload';
  claim?: Maybe<GlobalDataNode>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateCommentForProject = {
  __typename?: 'CreateCommentForProject';
  commentId?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateContactHubSpotInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['ID']['input']>;
  cityLabel?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  marketWebUsa?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  patternSlug?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  regionId?: InputMaybe<Scalars['String']['input']>;
  sectorId?: InputMaybe<Scalars['ID']['input']>;
  source: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateContactHubSpotPayload = {
  __typename?: 'CreateContactHubSpotPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contact?: Maybe<ContactNode>;
};

export type CreateDownloadLogInput = {
  cityId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  instance: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  marketWebUsa?: InputMaybe<Scalars['String']['input']>;
  patternId: Scalars['String']['input'];
  resourceType: Scalars['String']['input'];
  resourceUrl: Scalars['String']['input'];
  sector?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateDownloadLogPayload = {
  __typename?: 'CreateDownloadLogPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  downloadLog?: Maybe<DownloadLogNode>;
};

export type CreateEmailSubscriber = {
  __typename?: 'CreateEmailSubscriber';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type CreateFormProposalInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyTypePk?: InputMaybe<Scalars['ID']['input']>;
  countryCode?: InputMaybe<Scalars['String']['input']>;
  countryPk?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  positionArea?: InputMaybe<Scalars['String']['input']>;
  sectorPk?: InputMaybe<Scalars['ID']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type CreateFormProposalPayload = {
  __typename?: 'CreateFormProposalPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  formProposal?: Maybe<FormProposalNode>;
};

export type CreateJobApplication = {
  __typename?: 'CreateJobApplication';
  jobApplication?: Maybe<JobApplicationNode>;
};

export type CreatePdfHtmlInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  html: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreatePdfHtmlPayload = {
  __typename?: 'CreatePDFHtmlPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
};

export type CreateProfileInput = {
  address: Scalars['String']['input'];
  cityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyType: Scalars['ID']['input'];
  phone: Scalars['String']['input'];
  position: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  zipCode: Scalars['Int']['input'];
};

export type CreateProfilePayload = {
  __typename?: 'CreateProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<ProfileNode>;
};

export type CreateProviderMutation = {
  __typename?: 'CreateProviderMutation';
  ok?: Maybe<Scalars['Boolean']['output']>;
  provider?: Maybe<ProviderNode>;
};

export type CreateQuotationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patternSlug: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateQuotationPayload = {
  __typename?: 'CreateQuotationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  quotation?: Maybe<QuotationNode>;
};

export type CreateSampleContactInput = {
  address: Scalars['String']['input'];
  cityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyName: Scalars['String']['input'];
  companyType: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
  marketWebUsa?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  patternSlug: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  position: Scalars['String']['input'];
  source: Scalars['String']['input'];
  zipCode: Scalars['String']['input'];
};

export type CreateSampleContactPayload = {
  __typename?: 'CreateSampleContactPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  sampleContact?: Maybe<SampleContactNode>;
};

export type CreateSampleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  productIds: Array<InputMaybe<Scalars['ID']['input']>>;
  userId: Scalars['ID']['input'];
};

export type CreateSamplePayload = {
  __typename?: 'CreateSamplePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  sample?: Maybe<SampleNode>;
};

export type CreateServiceContactInput = {
  cityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  patternSlug?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  sectorId?: InputMaybe<Scalars['ID']['input']>;
  serviceSlug?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CreateServiceContactPayload = {
  __typename?: 'CreateServiceContactPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  contactService?: Maybe<ServiceContactNode>;
};

export type CreateShippingAddress = {
  __typename?: 'CreateShippingAddress';
  shippingAddress?: Maybe<ShippingAddressNode>;
};

export type CreateUserAddressInput = {
  addressInfo?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['ID']['input'];
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  placeId: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
};

export type CreateUserAddressPayload = {
  __typename?: 'CreateUserAddressPayload';
  address?: Maybe<UserAddressNode>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
};

export type CreateUserForNewWeb = {
  __typename?: 'CreateUserForNewWeb';
  ok?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['ID']['output']>;
};

export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserNode>;
};

export type CreateWishlist = {
  __typename?: 'CreateWishlist';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type CrockingResistanceIiTestNode = Node & {
  __typename?: 'CrockingResistanceIITestNode';
  additionalTest: AdditionalTestsNode;
  dry?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CrockingResistanceITestRange>;
  wet?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum CrockingResistanceITestDry {
  /** 1 */
  A_1 = 'A_1',
  /** 1/2 */
  A_1_2 = 'A_1_2',
  /** 2 */
  A_2 = 'A_2',
  /** 2/3 */
  A_2_3 = 'A_2_3',
  /** 3 */
  A_3 = 'A_3',
  /** 3/4 */
  A_3_4 = 'A_3_4',
  /** 4 */
  A_4 = 'A_4',
  /** 4/5 */
  A_4_5 = 'A_4_5',
  /** 5 */
  A_5 = 'A_5',
  /** 5 - 4/5 */
  A_5_4_5 = 'A_5_4_5',
  /** Excellent */
  Excelente = 'EXCELENTE',
  /** Good */
  Good = 'GOOD',
  /** Poor */
  Poor = 'POOR'
}

export type CrockingResistanceITestNode = Node & {
  __typename?: 'CrockingResistanceITestNode';
  additionalTest: AdditionalTestsNode;
  dry?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CrockingResistanceITestRange>;
  wet?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum CrockingResistanceITestRange {
  /** Ave. */
  Ave = 'AVE_',
  /** --------- */
  A = 'A_',
  /** Max. */
  Max = 'MAX_',
  /** Min. */
  Min = 'MIN_',
  /** Min. - Max. */
  MinMax = 'MIN_MAX'
}

/** An enumeration. */
export enum CrockingResistanceITestWet {
  /** 1 */
  A_1 = 'A_1',
  /** 1/2 */
  A_1_2 = 'A_1_2',
  /** 2 */
  A_2 = 'A_2',
  /** 2/3 */
  A_2_3 = 'A_2_3',
  /** 3 */
  A_3 = 'A_3',
  /** 3/4 */
  A_3_4 = 'A_3_4',
  /** 4 */
  A_4 = 'A_4',
  /** 4/5 */
  A_4_5 = 'A_4_5',
  /** 5 */
  A_5 = 'A_5',
  /** 5 - 4/5 */
  A_5_4_5 = 'A_5_4_5',
  /** Excellent */
  Excelente = 'EXCELENTE',
  /** Good */
  Good = 'GOOD',
  /** Poor */
  Poor = 'POOR'
}

/** An enumeration. */
export enum CurrentConditionConditions {
  /** installed */
  Installed = 'INSTALLED',
  /** original */
  Original = 'ORIGINAL',
  /** transformed */
  Transformed = 'TRANSFORMED'
}

/** An enumeration. */
export enum CurrentConditionConditionsOfMaterial {
  /** glued */
  Glued = 'GLUED',
  /** injected */
  Injected = 'INJECTED',
  /** laminated(flame) */
  LaminatedFlame = 'LAMINATED_FLAME_',
  /** laminated(glue,hotmelt) */
  LaminatedGlueHotmelt = 'LAMINATED_GLUE_HOTMELT_',
  /** other */
  Other = 'OTHER',
  /** stapled */
  Stapled = 'STAPLED',
  /** streched */
  Streched = 'STRECHED',
  /** thermoformed */
  Thermoformed = 'THERMOFORMED',
  /** upholstered */
  Upholstered = 'UPHOLSTERED',
  /** Welded/Quilted */
  WeldedQuilted = 'WELDED_QUILTED'
}

/** An enumeration. */
export enum CurrentConditionInstalledIn {
  /** indoor */
  Indoor = 'INDOOR',
  /** outdoor */
  Outdoor = 'OUTDOOR'
}

export type CurrentConditionNode = Node & {
  __typename?: 'CurrentConditionNode';
  /** Application of material */
  application?: Maybe<Array<Scalars['String']['output']>>;
  /** Para mas informacion clic en el lapiz */
  claimSet: GlobalDataNodeConnection;
  conditions?: Maybe<CurrentConditionConditions>;
  conditionsOfMaterial?: Maybe<CurrentConditionConditionsOfMaterial>;
  dateOfMaterialInstalled?: Maybe<Scalars['Date']['output']>;
  dateOfMaterialTransformed?: Maybe<Scalars['Date']['output']>;
  dateOfPurchase?: Maybe<Scalars['Date']['output']>;
  describeApplicationMaterial?: Maybe<Scalars['String']['output']>;
  describeConditionsOfMaterial?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  installedIn?: Maybe<CurrentConditionInstalledIn>;
  placeWhereIsInstalled?: Maybe<Scalars['String']['output']>;
  whenDetectDifference?: Maybe<CurrentConditionWhenDetectDifference>;
};


export type CurrentConditionNodeClaimSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  claimReason?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type CurrentConditionNodeConnection = {
  __typename?: 'CurrentConditionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<CurrentConditionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `CurrentConditionNode` and its cursor. */
export type CurrentConditionNodeEdge = {
  __typename?: 'CurrentConditionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<CurrentConditionNode>;
};

/** An enumeration. */
export enum CurrentConditionWhenDetectDifference {
  /** after material is processed/transformed */
  AfterMaterialIsProcessedTransformed = 'AFTER_MATERIAL_IS_PROCESSED_TRANSFORMED',
  /** before material is processed/transformed */
  BeforeMaterialIsProcessedTransformed = 'BEFORE_MATERIAL_IS_PROCESSED_TRANSFORMED'
}

export type DeleteProjectComment = {
  __typename?: 'DeleteProjectComment';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteShippingAddress = {
  __typename?: 'DeleteShippingAddress';
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteWishlist = {
  __typename?: 'DeleteWishlist';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteWishlistItem = {
  __typename?: 'DeleteWishlistItem';
  deletedCount?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum DifferencesInHandDescribeTheDifference {
  /** softer hand */
  SofterHand = 'SOFTER_HAND',
  /** stiffer hand */
  StifferHand = 'STIFFER_HAND'
}

export type DifferencesInHandNode = Node & {
  __typename?: 'DifferencesInHandNode';
  claim?: Maybe<GlobalDataNode>;
  describeTheDifference?: Maybe<DifferencesInHandDescribeTheDifference>;
  howAffectsDifference?: Maybe<Scalars['String']['output']>;
  howDetectDifference?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type DifferencesInHandNodeConnection = {
  __typename?: 'DifferencesInHandNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DifferencesInHandNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DifferencesInHandNode` and its cursor. */
export type DifferencesInHandNodeEdge = {
  __typename?: 'DifferencesInHandNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DifferencesInHandNode>;
};

export type DifferencesInMaterialDimensionsNode = Node & {
  __typename?: 'DifferencesInMaterialDimensionsNode';
  claim?: Maybe<GlobalDataNode>;
  howMeasuredMaterial?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  indicateDifference?: Maybe<Scalars['String']['output']>;
};

export type DifferencesInMaterialDimensionsNodeConnection = {
  __typename?: 'DifferencesInMaterialDimensionsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DifferencesInMaterialDimensionsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DifferencesInMaterialDimensionsNode` and its cursor. */
export type DifferencesInMaterialDimensionsNodeEdge = {
  __typename?: 'DifferencesInMaterialDimensionsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DifferencesInMaterialDimensionsNode>;
};

export type DimensionalStabilityHeatTestNode = Node & {
  __typename?: 'DimensionalStabilityHeatTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  showLogo: Scalars['Boolean']['output'];
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type DimensionalStabilityHumidityTestNode = Node & {
  __typename?: 'DimensionalStabilityHumidityTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type DimensionalStabilityWaterTestNode = Node & {
  __typename?: 'DimensionalStabilityWaterTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type DisapproveOracleDataInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comments?: InputMaybe<Scalars['String']['input']>;
  fieldName: Scalars['String']['input'];
  requestId: Scalars['ID']['input'];
};

export type DisapproveOracleDataPayload = {
  __typename?: 'DisapproveOracleDataPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** Debugging information for the current query. */
export type DjangoDebug = {
  __typename?: 'DjangoDebug';
  /** Executed SQL queries for this API query. */
  sql?: Maybe<Array<Maybe<DjangoDebugSql>>>;
};

/** Represents a single database query made to a Django managed DB. */
export type DjangoDebugSql = {
  __typename?: 'DjangoDebugSQL';
  /** The Django database alias (e.g. 'default'). */
  alias: Scalars['String']['output'];
  /** Duration of this database query in seconds. */
  duration: Scalars['Float']['output'];
  /** Postgres connection encoding if available. */
  encoding?: Maybe<Scalars['String']['output']>;
  /** Whether this database query was a SELECT. */
  isSelect: Scalars['Boolean']['output'];
  /** Whether this database query took more than 10 seconds. */
  isSlow: Scalars['Boolean']['output'];
  /** Postgres isolation level if available. */
  isoLevel?: Maybe<Scalars['String']['output']>;
  /** JSON encoded database query parameters. */
  params: Scalars['String']['output'];
  /** The raw SQL of this query, without params. */
  rawSql: Scalars['String']['output'];
  /** The actual SQL sent to this database. */
  sql?: Maybe<Scalars['String']['output']>;
  /** Start time of this database query. */
  startTime: Scalars['Float']['output'];
  /** Stop time of this database query. */
  stopTime: Scalars['Float']['output'];
  /** Postgres transaction ID if available. */
  transId?: Maybe<Scalars['String']['output']>;
  /** Postgres transaction status if available. */
  transStatus?: Maybe<Scalars['String']['output']>;
  /** The type of database being used (e.g. postrgesql, mysql, sqlite). */
  vendor: Scalars['String']['output'];
};

export type DocumentCategoryNode = Node & {
  __typename?: 'DocumentCategoryNode';
  description: Scalars['String']['output'];
  documents: DocumentNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  listingImage: Scalars['String']['output'];
  listingImageThumbSmall?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};


export type DocumentCategoryNodeDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  newCategory?: InputMaybe<Scalars['String']['input']>;
  newCategory_Icontains?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentCategoryNodeConnection = {
  __typename?: 'DocumentCategoryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentCategoryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DocumentCategoryNode` and its cursor. */
export type DocumentCategoryNodeEdge = {
  __typename?: 'DocumentCategoryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DocumentCategoryNode>;
};

/** An enumeration. */
export enum DocumentNewCategory {
  /** Certifications */
  Certifications = 'CERTIFICATIONS',
  /** Informative resources */
  InfomativeResources = 'INFOMATIVE_RESOURCES',
  /** Polices and warranties */
  PolicesAndWarranties = 'POLICES_AND_WARRANTIES',
  /** Product guides and recommendations */
  ProductGuidesAndRecommendations = 'PRODUCT_GUIDES_AND_RECOMMENDATIONS'
}

export type DocumentNode = Node & {
  __typename?: 'DocumentNode';
  category: DocumentCategoryNode;
  description: Scalars['String']['output'];
  file?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  name: Scalars['String']['output'];
  /** Categorization New web */
  newCategory?: Maybe<DocumentNewCategory>;
};


export type DocumentNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type DocumentNodeConnection = {
  __typename?: 'DocumentNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DocumentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `DocumentNode` and its cursor. */
export type DocumentNodeEdge = {
  __typename?: 'DocumentNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DocumentNode>;
};

export type DomainMutation = {
  __typename?: 'DomainMutation';
  message?: Maybe<Scalars['String']['output']>;
  ok?: Maybe<Scalars['Boolean']['output']>;
};

export type DomainNodes = Node & {
  __typename?: 'DomainNodes';
  Carousels: CarouselNodeConnection;
  /** If it is active it will be shown in the api */
  active: Scalars['Boolean']['output'];
  certificates: CertificateNodeConnection;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  url: Scalars['String']['output'];
};


export type DomainNodesCarouselsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type DomainNodesCertificatesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type DomainNodesConnection = {
  __typename?: 'DomainNodesConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DomainNodesEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `DomainNodes` and its cursor. */
export type DomainNodesEdge = {
  __typename?: 'DomainNodesEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DomainNodes>;
};

export type DownloadLogNode = Node & {
  __typename?: 'DownloadLogNode';
  city?: Maybe<CityNode>;
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  pattern: PatternNode;
  resourceType: DownloadLogResourceType;
  resourceUrl: Scalars['String']['output'];
  source?: Maybe<Scalars['String']['output']>;
};

export type DownloadLogNodeConnection = {
  __typename?: 'DownloadLogNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DownloadLogNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `DownloadLogNode` and its cursor. */
export type DownloadLogNodeEdge = {
  __typename?: 'DownloadLogNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<DownloadLogNode>;
};

/** An enumeration. */
export enum DownloadLogResourceType {
  /** Approved cleaners */
  ApprovedCleaners = 'APPROVED_CLEANERS',
  /** Clean & cleaning */
  CareCleaning = 'CARE_CLEANING',
  /** Digital catalogue */
  DigitalCatalogue = 'DIGITAL_CATALOGUE',
  /** Product detail */
  ProductDetail = 'PRODUCT_DETAIL',
  /** Specs sheet */
  SpecsSheet = 'SPECS_SHEET',
  /** Zipped images */
  ZippedImages = 'ZIPPED_IMAGES'
}

export type DownloadResult = {
  __typename?: 'DownloadResult';
  status: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type EcoSectionNode = Node & {
  __typename?: 'EcoSectionNode';
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Ideal size: 1200px x 500px */
  image: Scalars['String']['output'];
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  titleCa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titlePl?: Maybe<Scalars['String']['output']>;
  titleUk?: Maybe<Scalars['String']['output']>;
};

export type EcoSectionNodeConnection = {
  __typename?: 'EcoSectionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EcoSectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `EcoSectionNode` and its cursor. */
export type EcoSectionNodeEdge = {
  __typename?: 'EcoSectionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<EcoSectionNode>;
};

export type ElongationAtBreakTestNode = Node & {
  __typename?: 'ElongationAtBreakTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type ElongationIiTestNode = Node & {
  __typename?: 'ElongationIITestNode';
  additionalTest: AdditionalTestsNode;
  at?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type ElongationITestNode = Node & {
  __typename?: 'ElongationITestNode';
  additionalTest: AdditionalTestsNode;
  at?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type EmailAvailabilityType = {
  __typename?: 'EmailAvailabilityType';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailSubscriberType = {
  __typename?: 'EmailSubscriberType';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  lastName: Scalars['String']['output'];
};

export type EmbossingType = {
  __typename?: 'EmbossingType';
  embossing: GeneralNodeConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};


export type EmbossingTypeEmbossingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type EpdNode = Node & {
  __typename?: 'EpdNode';
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  patterns: PatternNodeConnection;
};


export type EpdNodePatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type EpdNodeConnection = {
  __typename?: 'EpdNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<EpdNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `EpdNode` and its cursor. */
export type EpdNodeEdge = {
  __typename?: 'EpdNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<EpdNode>;
};

export type FaqNode = Node & {
  __typename?: 'FAQNode';
  answer: Scalars['String']['output'];
  answerCa?: Maybe<Scalars['String']['output']>;
  answerDe?: Maybe<Scalars['String']['output']>;
  answerEn?: Maybe<Scalars['String']['output']>;
  answerEs?: Maybe<Scalars['String']['output']>;
  answerFr?: Maybe<Scalars['String']['output']>;
  answerIt?: Maybe<Scalars['String']['output']>;
  answerPl?: Maybe<Scalars['String']['output']>;
  answerUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  question: Scalars['String']['output'];
  questionCa?: Maybe<Scalars['String']['output']>;
  questionDe?: Maybe<Scalars['String']['output']>;
  questionEn?: Maybe<Scalars['String']['output']>;
  questionEs?: Maybe<Scalars['String']['output']>;
  questionFr?: Maybe<Scalars['String']['output']>;
  questionIt?: Maybe<Scalars['String']['output']>;
  questionPl?: Maybe<Scalars['String']['output']>;
  questionUk?: Maybe<Scalars['String']['output']>;
};


export type FaqNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type FaqNodeConnection = {
  __typename?: 'FAQNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FaqNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FAQNode` and its cursor. */
export type FaqNodeEdge = {
  __typename?: 'FAQNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FaqNode>;
};

/** An enumeration. */
export enum FacialDefectsDefect {
  /** punctual */
  Punctual = 'PUNCTUAL',
  /** recurrent */
  Recurrent = 'RECURRENT'
}

export type FacialDefectsNode = Node & {
  __typename?: 'FacialDefectsNode';
  claim?: Maybe<GlobalDataNode>;
  defect?: Maybe<FacialDefectsDefect>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type FacialDefectsNodeConnection = {
  __typename?: 'FacialDefectsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FacialDefectsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FacialDefectsNode` and its cursor. */
export type FacialDefectsNodeEdge = {
  __typename?: 'FacialDefectsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FacialDefectsNode>;
};

export type FlameRetardancyTestNode = Node & {
  __typename?: 'FlameRetardancyTestNode';
  formattedName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  patternsPassingTest: PatternNodeConnection;
  region?: Maybe<FlameRetardancyTestRegion>;
};


export type FlameRetardancyTestNodePatternsPassingTestArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type FlameRetardancyTestNodeConnection = {
  __typename?: 'FlameRetardancyTestNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlameRetardancyTestNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `FlameRetardancyTestNode` and its cursor. */
export type FlameRetardancyTestNodeEdge = {
  __typename?: 'FlameRetardancyTestNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FlameRetardancyTestNode>;
};

/** An enumeration. */
export enum FlameRetardancyTestRegion {
  /** AT */
  At = 'AT',
  /** AU */
  Au = 'AU',
  /** CA */
  Ca = 'CA',
  /** DE */
  De = 'DE',
  /** EU */
  Eu = 'EU',
  /** EU/US */
  EuUs = 'EU_US',
  /** FR */
  Fr = 'FR',
  /** IT */
  It = 'IT',
  /** UK */
  Uk = 'UK',
  /** US */
  Us = 'US'
}

export type FlatpageNode = Node & {
  __typename?: 'FlatpageNode';
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleCa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titlePl?: Maybe<Scalars['String']['output']>;
  titleUk?: Maybe<Scalars['String']['output']>;
};


export type FlatpageNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type FlatpageNodeConnection = {
  __typename?: 'FlatpageNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FlatpageNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `FlatpageNode` and its cursor. */
export type FlatpageNodeEdge = {
  __typename?: 'FlatpageNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FlatpageNode>;
};

export type FlexResistanceIiTestNode = Node & {
  __typename?: 'FlexResistanceIITestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type FlexResistanceTestNode = Node & {
  __typename?: 'FlexResistanceTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type FlooringClassificationTestNode = Node & {
  __typename?: 'FlooringClassificationTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  classification: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  showLogo: Scalars['Boolean']['output'];
};

export type ForgotPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type ForgotPasswordPayload = {
  __typename?: 'ForgotPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  emailSent?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum FormFieldFieldType {
  /** Casilla de verificación */
  Checkbox = 'CHECKBOX',
  /** Fecha */
  Date = 'DATE',
  /** Fecha y hora */
  Datetime = 'DATETIME',
  /** Correo electrónico */
  Email = 'EMAIL',
  /** Archivo */
  File = 'FILE',
  /** Oculto */
  Hidden = 'HIDDEN',
  /** Número */
  Number = 'NUMBER',
  /** Contraseña */
  Password = 'PASSWORD',
  /** Opciones múltiples (radio) */
  Radio = 'RADIO',
  /** Deslizador */
  Range = 'RANGE',
  /** Desplegable */
  Select = 'SELECT',
  /** Desplegable de ciudades */
  SelectCity = 'SELECT_CITY',
  /** Desplegable de países */
  SelectCountry = 'SELECT_COUNTRY',
  /** Desplegable de estados/provincias */
  SelectState = 'SELECT_STATE',
  /** Teléfono */
  Tel = 'TEL',
  /** Texto corto */
  Text = 'TEXT',
  /** Texto largo */
  Textarea = 'TEXTAREA',
  /** Hora */
  Time = 'TIME',
  /** URL */
  Url = 'URL'
}

/** An enumeration. */
export enum FormFieldWidth {
  /** Ancho completo */
  Full = 'FULL',
  /** Ancho 50% */
  Half = 'HALF'
}

export type FormProposalNode = Node & {
  __typename?: 'FormProposalNode';
  company?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<CompanyTypeNode>;
  country?: Maybe<CountryNode>;
  countryCode?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  positionArea?: Maybe<Scalars['String']['output']>;
  sector?: Maybe<SectorNode>;
  surname?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type FormProposalNodeConnection = {
  __typename?: 'FormProposalNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FormProposalNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `FormProposalNode` and its cursor. */
export type FormProposalNodeEdge = {
  __typename?: 'FormProposalNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<FormProposalNode>;
};

/** An enumeration. */
export enum GeneralBackingComposition {
  /** N.A */
  NA = 'N_A'
}

/** An enumeration. */
export enum GeneralGaugeMethod {
  /** ASTM D751 */
  AstmD751 = 'ASTM_D751',
  /** ASTM D 1777 */
  AstmD_1777 = 'ASTM_D_1777',
  /** CFFA-700c */
  Cffa_700C = 'CFFA_700C',
  /** DIN 53353 */
  Din_53353 = 'DIN_53353',
  /** EN  428 */
  En_428 = 'EN_428',
  /** ISO 2286-3 */
  Iso_2286_3 = 'ISO_2286_3',
  /** NTC 3583 */
  Ntc_3583 = 'NTC_3583'
}

/** An enumeration. */
export enum GeneralGaugeUnit {
  /** Galga */
  Galga = 'GALGA',
  /** Micras */
  Micras = 'MICRAS',
  /** Mils */
  Mils = 'MILS',
  /** mm */
  Mm = 'MM'
}

export type GeneralNode = Node & {
  __typename?: 'GeneralNode';
  backingComposition?: Maybe<GeneralBackingComposition>;
  backingCompositionPercentage?: Maybe<Scalars['Float']['output']>;
  colorEvaluation?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<Scalars['String']['output']>;
  constructionType?: Maybe<Scalars['String']['output']>;
  embossing?: Maybe<Scalars['String']['output']>;
  embossingSelect?: Maybe<EmbossingType>;
  gauge?: Maybe<Scalars['String']['output']>;
  gaugeMethod?: Maybe<GeneralGaugeMethod>;
  /** The format must be: "x ± y" */
  gaugeResult?: Maybe<Scalars['String']['output']>;
  gaugeUnit?: Maybe<GeneralGaugeUnit>;
  gloss?: Maybe<Scalars['String']['output']>;
  glossEvaluation?: Maybe<Scalars['String']['output']>;
  hideTopcoatWebsite: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  minPieceNumber?: Maybe<Scalars['Int']['output']>;
  opennessFactor?: Maybe<GeneralOpennessFactor>;
  package?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  piecesNumber?: Maybe<Scalars['Int']['output']>;
  polymerCompositionPercentage?: Maybe<Scalars['Float']['output']>;
  price?: Maybe<Scalars['String']['output']>;
  printType?: Maybe<GeneralPrintType>;
  reversible?: Maybe<Scalars['Boolean']['output']>;
  rollLength?: Maybe<Scalars['String']['output']>;
  /** The format must be: "x ± y" */
  rollLengthResult?: Maybe<Scalars['String']['output']>;
  rollLengthUnit?: Maybe<Scalars['String']['output']>;
  storage?: Maybe<Scalars['String']['output']>;
  storageRollPosition?: Maybe<Scalars['String']['output']>;
  temperatureReductionTreatment?: Maybe<Scalars['String']['output']>;
  topcoat?: Maybe<Scalars['String']['output']>;
  topcoatData?: Maybe<Scalars['GenericScalar']['output']>;
  unitPrice?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['String']['output']>;
  weightMethod?: Maybe<GeneralWeightMethod>;
  weightResult?: Maybe<Scalars['String']['output']>;
  weightUnit?: Maybe<GeneralWeightUnit>;
  width?: Maybe<Scalars['String']['output']>;
  widthMethod?: Maybe<GeneralWidthMethod>;
  /** The format must be: "Min. x" */
  widthResult: Scalars['String']['output'];
  widthUnit: GeneralWidthUnit;
};

export type GeneralNodeConnection = {
  __typename?: 'GeneralNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GeneralNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GeneralNode` and its cursor. */
export type GeneralNodeEdge = {
  __typename?: 'GeneralNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GeneralNode>;
};

/** An enumeration. */
export enum GeneralOpennessFactor {
  /** 2.5% */
  A_2_5 = 'A_2_5_',
  /** 3.0% */
  A_3_0 = 'A_3_0_',
  /** NBN EN 410 */
  NbnEn_410 = 'NBN_EN_410'
}

/** An enumeration. */
export enum GeneralPrintType {
  /** Digital */
  Digital = 'DIGITAL',
  /** Not Apply */
  NotApply = 'NOT_APPLY',
  /** Roller */
  Roller = 'ROLLER'
}

/** An enumeration. */
export enum GeneralWeightMethod {
  /** ASTM D751 */
  AstmD751 = 'ASTM_D751',
  /** ASTM D 3776 */
  AstmD_3776 = 'ASTM_D_3776',
  /** BS 430 */
  Bs_430 = 'BS_430',
  /** CFFA-20 */
  Cffa_20 = 'CFFA_20',
  /** CFFA-700d */
  Cffa_700D = 'CFFA_700D',
  /** D45 1012 */
  D45_1012 = 'D45_1012',
  /** EN 430 */
  En_430 = 'EN_430',
  /** EN ISO 2286-2 */
  EnIso_2286_2 = 'EN_ISO_2286_2',
  /** EN ISO 40339 */
  EnIso_40339 = 'EN_ISO_40339',
  /** GMW3182 */
  Gmw3182 = 'GMW3182',
  /** ISO 2286-2 */
  Iso_2286_2 = 'ISO_2286_2',
  /** MES MN 405 */
  MesMn_405 = 'MES_MN_405',
  /** MS 321-08 (Type 8) - 4.1 */
  Ms_321_08Type_8_4_1 = 'MS_321_08_TYPE_8_4_1',
  /** NTC 3583 */
  Ntc_3583 = 'NTC_3583'
}

/** An enumeration. */
export enum GeneralWeightUnit {
  /** g/m² */
  GM2 = 'G_M2',
  /** OZ./ LIN. YD */
  OzLinYd = 'OZ_LIN_YD',
  /** OZ/YD² */
  OzYd2 = 'OZ_YD2',
  /** OZ/YD LIN. */
  OzYdLin = 'OZ_YD_LIN_'
}

/** An enumeration. */
export enum GeneralWidthMethod {
  /** ASTM D751 */
  AstmD751 = 'ASTM_D751',
  /** CFFA-700a */
  Cffa_700A = 'CFFA_700A',
  /** EN 426 */
  En_426 = 'EN_426',
  /** ISO 2286-1 */
  Iso_2286_1 = 'ISO_2286_1',
  /** ISO 2286-2 */
  Iso_2286_2 = 'ISO_2286_2',
  /** NTC 3583 */
  Ntc_3583 = 'NTC_3583'
}

/** An enumeration. */
export enum GeneralWidthUnit {
  /** inch */
  In = 'IN',
  /** m */
  M = 'M'
}

export type GenericIdFacetCountType = {
  __typename?: 'GenericIDFacetCountType';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type GlobalDataNode = Node & {
  __typename?: 'GlobalDataNode';
  batch: Scalars['String']['output'];
  /** Para mas informacion clic en el lapiz */
  claimReason: ClaimReasonNode;
  colordifference?: Maybe<ColorDifferenceNode>;
  colourfading?: Maybe<ColourFadingNode>;
  companyName?: Maybe<Scalars['String']['output']>;
  /** Para mas informacion clic en el lapiz */
  currentCondition?: Maybe<CurrentConditionNode>;
  customerNumber?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  differencesinhand?: Maybe<DifferencesInHandNode>;
  differencesinmaterialdimensions?: Maybe<DifferencesInMaterialDimensionsNode>;
  email?: Maybe<Scalars['String']['output']>;
  facialdefects?: Maybe<FacialDefectsNode>;
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  materialresistance?: Maybe<MaterialResistanceNode>;
  otherColor?: Maybe<Scalars['String']['output']>;
  otherProduct?: Maybe<Scalars['String']['output']>;
  pleats?: Maybe<PleatsNode>;
  product?: Maybe<ProductNode>;
  productText?: Maybe<Scalars['String']['output']>;
  quantity?: Maybe<Scalars['String']['output']>;
  staining?: Maybe<StainingNode>;
  status?: Maybe<ClaimStatus>;
  surfacedeterioration?: Maybe<SurfaceDeteriorationNode>;
  ticket: Scalars['String']['output'];
  uploadedZip?: Maybe<Scalars['String']['output']>;
  visualdefects?: Maybe<VisualDefectsNode>;
};

export type GlobalDataNodeConnection = {
  __typename?: 'GlobalDataNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GlobalDataNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `GlobalDataNode` and its cursor. */
export type GlobalDataNodeEdge = {
  __typename?: 'GlobalDataNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GlobalDataNode>;
};

export type GlossaryTypeNode = Node & {
  __typename?: 'GlossaryTypeNode';
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  glossarywordSet: GlossaryWordNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type GlossaryTypeNodeGlossarywordSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ID']['input']>;
};

export type GlossaryTypeNodeConnection = {
  __typename?: 'GlossaryTypeNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GlossaryTypeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `GlossaryTypeNode` and its cursor. */
export type GlossaryTypeNodeEdge = {
  __typename?: 'GlossaryTypeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GlossaryTypeNode>;
};

export type GlossaryWordNode = Node & {
  __typename?: 'GlossaryWordNode';
  createdAt: Scalars['DateTime']['output'];
  definition?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: GlossaryTypeNode;
  updatedAt: Scalars['DateTime']['output'];
};

export type GlossaryWordNodeConnection = {
  __typename?: 'GlossaryWordNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<GlossaryWordNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `GlossaryWordNode` and its cursor. */
export type GlossaryWordNodeEdge = {
  __typename?: 'GlossaryWordNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<GlossaryWordNode>;
};

export type GroupNode = Node & {
  __typename?: 'GroupNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  userSet: UserNodeConnection;
};


export type GroupNodeUserSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasCreateProjectAccess?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type HardnessTestNode = Node & {
  __typename?: 'HardnessTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type HomeSliderNode = Node & {
  __typename?: 'HomeSliderNode';
  buttonText: Scalars['String']['output'];
  buttonTextCa?: Maybe<Scalars['String']['output']>;
  buttonTextDe?: Maybe<Scalars['String']['output']>;
  buttonTextEn?: Maybe<Scalars['String']['output']>;
  buttonTextEs?: Maybe<Scalars['String']['output']>;
  buttonTextFr?: Maybe<Scalars['String']['output']>;
  buttonTextIt?: Maybe<Scalars['String']['output']>;
  buttonTextPl?: Maybe<Scalars['String']['output']>;
  buttonTextUk?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imagePhone?: Maybe<Scalars['String']['output']>;
  imagePhoneThumb?: Maybe<Scalars['String']['output']>;
  imageThumb?: Maybe<Scalars['String']['output']>;
  instances: InstanceNodeConnection;
  link?: Maybe<Scalars['String']['output']>;
  linkCa?: Maybe<Scalars['String']['output']>;
  linkDe?: Maybe<Scalars['String']['output']>;
  linkEn?: Maybe<Scalars['String']['output']>;
  linkEs?: Maybe<Scalars['String']['output']>;
  linkFr?: Maybe<Scalars['String']['output']>;
  linkIt?: Maybe<Scalars['String']['output']>;
  linkMobile?: Maybe<Scalars['String']['output']>;
  linkMobileCa?: Maybe<Scalars['String']['output']>;
  linkMobileDe?: Maybe<Scalars['String']['output']>;
  linkMobileEn?: Maybe<Scalars['String']['output']>;
  linkMobileEs?: Maybe<Scalars['String']['output']>;
  linkMobileFr?: Maybe<Scalars['String']['output']>;
  linkMobileIt?: Maybe<Scalars['String']['output']>;
  linkMobilePl?: Maybe<Scalars['String']['output']>;
  linkMobileUk?: Maybe<Scalars['String']['output']>;
  linkPl?: Maybe<Scalars['String']['output']>;
  linkTarget: Scalars['String']['output'];
  linkUk?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  tag: Scalars['String']['output'];
  title: Scalars['String']['output'];
  titleCa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titlePl?: Maybe<Scalars['String']['output']>;
  titleUk?: Maybe<Scalars['String']['output']>;
};


export type HomeSliderNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type HomeSliderNodeConnection = {
  __typename?: 'HomeSliderNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<HomeSliderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `HomeSliderNode` and its cursor. */
export type HomeSliderNodeEdge = {
  __typename?: 'HomeSliderNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<HomeSliderNode>;
};

export type ImageOnProjectNode = Node & {
  __typename?: 'ImageOnProjectNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** size 1280px X 800px, please upload the image in format PNG */
  image: Scalars['String']['output'];
  project: PromotedProjectNode;
};

export type ImageOnProjectNodeConnection = {
  __typename?: 'ImageOnProjectNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ImageOnProjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ImageOnProjectNode` and its cursor. */
export type ImageOnProjectNodeEdge = {
  __typename?: 'ImageOnProjectNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ImageOnProjectNode>;
};

export type IndoorUpholsteryNode = Node & {
  __typename?: 'IndoorUpholsteryNode';
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projectsUpholstery: PromotedProjectNodeConnection;
  updated: Scalars['DateTime']['output'];
};


export type IndoorUpholsteryNodeProjectsUpholsteryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type IndoorUpholsteryNodeConnection = {
  __typename?: 'IndoorUpholsteryNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<IndoorUpholsteryNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `IndoorUpholsteryNode` and its cursor. */
export type IndoorUpholsteryNodeEdge = {
  __typename?: 'IndoorUpholsteryNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<IndoorUpholsteryNode>;
};

export type InspirationNode = Node & {
  __typename?: 'InspirationNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  img: Scalars['String']['output'];
  pattern?: Maybe<PatternNode>;
  text: Scalars['String']['output'];
  textCa?: Maybe<Scalars['String']['output']>;
  textDe?: Maybe<Scalars['String']['output']>;
  textEn?: Maybe<Scalars['String']['output']>;
  textEs?: Maybe<Scalars['String']['output']>;
  textFr?: Maybe<Scalars['String']['output']>;
  textIt?: Maybe<Scalars['String']['output']>;
  textPl?: Maybe<Scalars['String']['output']>;
  textUk?: Maybe<Scalars['String']['output']>;
};

export type InspirationNodeConnection = {
  __typename?: 'InspirationNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InspirationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `InspirationNode` and its cursor. */
export type InspirationNodeEdge = {
  __typename?: 'InspirationNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InspirationNode>;
};

export type InstanceNode = Node & {
  __typename?: 'InstanceNode';
  brands: BrandNodeConnection;
  cartSet: CartNodeConnection;
  cartitemSet: ItemNodeConnection;
  claimSet: GlobalDataNodeConnection;
  code?: Maybe<Scalars['String']['output']>;
  companytypes: CompanyTypeNodeConnection;
  contacts: ContactNodeConnection;
  documents: DocumentNodeConnection;
  downloadlogSet: DownloadLogNodeConnection;
  emailsubscriberSet: Array<EmailSubscriberType>;
  facebookUrl: Scalars['String']['output'];
  faqs: FaqNodeConnection;
  flatpageSet: FlatpageNodeConnection;
  homesliderSet: HomeSliderNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instagramUrl: Scalars['String']['output'];
  instance: ServiceContactNodeConnection;
  jobApplications: JobApplicationNodeConnection;
  linkedinUrl: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  markets: MarketNodeConnection;
  name: Scalars['String']['output'];
  orderitemSet: OrderItemNodeConnection;
  orders: OrderNodeConnection;
  posts: PostNodeConnection;
  products: ProductNodeConnection;
  projects: ProjectNodeConnection;
  projectsInstance: PromotedProjectNodeConnection;
  /** Please insert the emails separated for commas used in samples request in form No! shopping cart */
  sampleEmails?: Maybe<Scalars['String']['output']>;
  samplescontact: SampleContactNodeConnection;
  services: ServiceNodeConnection;
  stores: StoreNodeConnection;
  storesInstance: OfficeNodeConnection;
  twitterUrl: Scalars['String']['output'];
  userProfiles: ProfileNodeConnection;
  users: UserNodeConnection;
  vacancies: VacantNodeConnection;
};


export type InstanceNodeBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeCartSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  created_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeCartitemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  cart?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeClaimSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  claimReason?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeCompanytypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  newCategory?: InputMaybe<Scalars['String']['input']>;
  newCategory_Icontains?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeDownloadlogSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  downloader?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeFaqsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeFlatpageSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeHomesliderSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeInstanceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeJobApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  vacant?: InputMaybe<Scalars['ID']['input']>;
};


export type InstanceNodeMarketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeOrderitemSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodePostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_Icontains?: InputMaybe<Scalars['String']['input']>;
  color_Istartswith?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isDiscontinued?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  predominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['ID']['input']>;
  sector_Market_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type InstanceNodeProjectsInstanceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeSamplescontactArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeServicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeStoresArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  patterns?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeStoresInstanceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  business_Icontains?: InputMaybe<Scalars['String']['input']>;
  business_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type InstanceNodeUserProfilesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasCreateProjectAccess?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type InstanceNodeVacanciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type InstanceNodeConnection = {
  __typename?: 'InstanceNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InstanceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `InstanceNode` and its cursor. */
export type InstanceNodeEdge = {
  __typename?: 'InstanceNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<InstanceNode>;
};

export type ItemNode = Node & {
  __typename?: 'ItemNode';
  cart: CartNode;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  objectId: Scalars['Int']['output'];
  pattern?: Maybe<PatternNode>;
  product?: Maybe<ProductNode>;
  quantity: Scalars['Int']['output'];
  unitPrice: Scalars['Float']['output'];
};

export type ItemNodeConnection = {
  __typename?: 'ItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ItemNode` and its cursor. */
export type ItemNodeEdge = {
  __typename?: 'ItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ItemNode>;
};

export type JobApplicationNode = Node & {
  __typename?: 'JobApplicationNode';
  city?: Maybe<CityNode>;
  /** This file must be a PDF */
  cv: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  linkedin: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  vacant?: Maybe<VacantNode>;
};

export type JobApplicationNodeConnection = {
  __typename?: 'JobApplicationNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobApplicationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `JobApplicationNode` and its cursor. */
export type JobApplicationNodeEdge = {
  __typename?: 'JobApplicationNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobApplicationNode>;
};

export type JobCompanyNode = Node & {
  __typename?: 'JobCompanyNode';
  carouselSet: CarouselNodeConnection;
  certificateSet: CertificateNodeConnection;
  cleanedName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  /** Separate emails with commas */
  emails?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** Tamaño ideal: 600px x 400px */
  image?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  jobcompanywebsiteSet: JobCompanyWebsiteNodeConnection;
  jobpositionSet: JobPositionNodeConnection;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  vacancyDescription?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionCa?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionDe?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionEn?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionEs?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionFr?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionIt?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionPl?: Maybe<Scalars['String']['output']>;
  vacancyDescriptionUk?: Maybe<Scalars['String']['output']>;
};


export type JobCompanyNodeCarouselSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type JobCompanyNodeCertificateSetArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type JobCompanyNodeJobcompanywebsiteSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type JobCompanyNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobCompanyNodeConnection = {
  __typename?: 'JobCompanyNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobCompanyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobCompanyNode` and its cursor. */
export type JobCompanyNodeEdge = {
  __typename?: 'JobCompanyNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobCompanyNode>;
};

/** An enumeration. */
export enum JobCompanyWebsiteLanguage {
  /** Spanish Spain */
  Ca = 'CA',
  /** German */
  De = 'DE',
  /** English */
  En = 'EN',
  /** Spanish */
  Es = 'ES',
  /** French */
  Fr = 'FR',
  /** Italian */
  It = 'IT',
  /** Polish */
  Pl = 'PL',
  /** European English */
  Uk = 'UK'
}

export type JobCompanyWebsiteNode = Node & {
  __typename?: 'JobCompanyWebsiteNode';
  bannerItems: BannerItemNodeConnection;
  benefits?: Maybe<Array<Maybe<JobWebsiteBenefitsNode>>>;
  benefitsPdf?: Maybe<Scalars['String']['output']>;
  benefitsPdfUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  datablocks?: Maybe<Array<Maybe<JobWebsiteDataBlocksNode>>>;
  firstContent?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobCompany?: Maybe<JobCompanyNode>;
  jobwebsitebenefitsSet: JobWebsiteBenefitsNodeConnection;
  jobwebsitedatablocksSet: JobWebsiteDataBlocksNodeConnection;
  jobwebsitepeoplecommentsSet: JobWebsitePeopleCommentsNodeConnection;
  language: JobCompanyWebsiteLanguage;
  notFoundVacancy?: Maybe<Scalars['String']['output']>;
  ourPeople?: Maybe<Scalars['String']['output']>;
  peopleComments?: Maybe<Array<Maybe<JobWebsitePeopleCommentsNode>>>;
  secondSectionContent?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type JobCompanyWebsiteNodeBannerItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type JobCompanyWebsiteNodeJobwebsitebenefitsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type JobCompanyWebsiteNodeJobwebsitedatablocksSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type JobCompanyWebsiteNodeJobwebsitepeoplecommentsSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type JobCompanyWebsiteNodeConnection = {
  __typename?: 'JobCompanyWebsiteNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobCompanyWebsiteNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobCompanyWebsiteNode` and its cursor. */
export type JobCompanyWebsiteNodeEdge = {
  __typename?: 'JobCompanyWebsiteNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobCompanyWebsiteNode>;
};

export type JobDepartmentNode = Node & {
  __typename?: 'JobDepartmentNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobpositionSet: JobPositionNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type JobDepartmentNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobDepartmentNodeConnection = {
  __typename?: 'JobDepartmentNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobDepartmentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobDepartmentNode` and its cursor. */
export type JobDepartmentNodeEdge = {
  __typename?: 'JobDepartmentNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobDepartmentNode>;
};

export type JobHoursNode = Node & {
  __typename?: 'JobHoursNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobpositionSet: JobPositionNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type JobHoursNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobHoursNodeConnection = {
  __typename?: 'JobHoursNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobHoursNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobHoursNode` and its cursor. */
export type JobHoursNodeEdge = {
  __typename?: 'JobHoursNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobHoursNode>;
};

export type JobLevelNode = Node & {
  __typename?: 'JobLevelNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  jobpositionSet: JobPositionNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type JobLevelNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};

export type JobLevelNodeConnection = {
  __typename?: 'JobLevelNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobLevelNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobLevelNode` and its cursor. */
export type JobLevelNodeEdge = {
  __typename?: 'JobLevelNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobLevelNode>;
};

export type JobPositionNode = Node & {
  __typename?: 'JobPositionNode';
  active: Scalars['Boolean']['output'];
  city?: Maybe<CityNode>;
  company?: Maybe<JobCompanyNode>;
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  department?: Maybe<JobDepartmentNode>;
  description?: Maybe<Scalars['String']['output']>;
  endDate: Scalars['Date']['output'];
  hours?: Maybe<JobHoursNode>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  isDeleted: Scalars['Boolean']['output'];
  level?: Maybe<JobLevelNode>;
  markets?: Maybe<Scalars['GenericScalar']['output']>;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['Date']['output'];
  updatedAt: Scalars['DateTime']['output'];
  urgentlyHiring: Scalars['Boolean']['output'];
  user?: Maybe<UserNode>;
};

export type JobPositionNodeConnection = {
  __typename?: 'JobPositionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobPositionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobPositionNode` and its cursor. */
export type JobPositionNodeEdge = {
  __typename?: 'JobPositionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobPositionNode>;
};

export type JobWebsiteBenefitsNode = Node & {
  __typename?: 'JobWebsiteBenefitsNode';
  content: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  site: JobCompanyWebsiteNode;
  title: Scalars['String']['output'];
};

export type JobWebsiteBenefitsNodeConnection = {
  __typename?: 'JobWebsiteBenefitsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobWebsiteBenefitsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobWebsiteBenefitsNode` and its cursor. */
export type JobWebsiteBenefitsNodeEdge = {
  __typename?: 'JobWebsiteBenefitsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobWebsiteBenefitsNode>;
};

export type JobWebsiteDataBlocksNode = Node & {
  __typename?: 'JobWebsiteDataBlocksNode';
  icon: Scalars['String']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  site: JobCompanyWebsiteNode;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type JobWebsiteDataBlocksNodeConnection = {
  __typename?: 'JobWebsiteDataBlocksNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobWebsiteDataBlocksNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobWebsiteDataBlocksNode` and its cursor. */
export type JobWebsiteDataBlocksNodeEdge = {
  __typename?: 'JobWebsiteDataBlocksNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobWebsiteDataBlocksNode>;
};

export type JobWebsitePeopleCommentsNode = Node & {
  __typename?: 'JobWebsitePeopleCommentsNode';
  altText?: Maybe<Scalars['String']['output']>;
  content: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  site: JobCompanyWebsiteNode;
};

export type JobWebsitePeopleCommentsNodeConnection = {
  __typename?: 'JobWebsitePeopleCommentsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<JobWebsitePeopleCommentsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `JobWebsitePeopleCommentsNode` and its cursor. */
export type JobWebsitePeopleCommentsNodeEdge = {
  __typename?: 'JobWebsitePeopleCommentsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<JobWebsitePeopleCommentsNode>;
};

export type LeadNode = Node & {
  __typename?: 'LeadNode';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  comments?: Maybe<Scalars['String']['output']>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyType?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  date?: Maybe<Scalars['Date']['output']>;
  email: Scalars['String']['output'];
  firstName?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  request?: Maybe<Scalars['String']['output']>;
  source: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type LossOnHeatingTestNode = Node & {
  __typename?: 'LossOnHeatingTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type ManufacturingCertificationsNode = {
  __typename?: 'ManufacturingCertificationsNode';
  id: Scalars['ID']['output'];
  isSustainable: Scalars['Boolean']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  manufacturingCertifications: PatternNodeConnection;
  name: Scalars['String']['output'];
};


export type ManufacturingCertificationsNodeManufacturingCertificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type MarketNode = Node & {
  __typename?: 'MarketNode';
  description: Scalars['String']['output'];
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageAlt: Scalars['String']['output'];
  imageAltCa?: Maybe<Scalars['String']['output']>;
  imageAltDe?: Maybe<Scalars['String']['output']>;
  imageAltEn?: Maybe<Scalars['String']['output']>;
  imageAltEs?: Maybe<Scalars['String']['output']>;
  imageAltFr?: Maybe<Scalars['String']['output']>;
  imageAltIt?: Maybe<Scalars['String']['output']>;
  imageAltPl?: Maybe<Scalars['String']['output']>;
  imageAltUk?: Maybe<Scalars['String']['output']>;
  imageCa?: Maybe<Scalars['String']['output']>;
  imageDe?: Maybe<Scalars['String']['output']>;
  imageEn?: Maybe<Scalars['String']['output']>;
  imageEs?: Maybe<Scalars['String']['output']>;
  imageFr?: Maybe<Scalars['String']['output']>;
  imageIt?: Maybe<Scalars['String']['output']>;
  imagePl?: Maybe<Scalars['String']['output']>;
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  imageUk?: Maybe<Scalars['String']['output']>;
  instances: InstanceNodeConnection;
  metaDescriptions?: Maybe<Scalars['String']['output']>;
  metaDescriptionsCa?: Maybe<Scalars['String']['output']>;
  metaDescriptionsDe?: Maybe<Scalars['String']['output']>;
  metaDescriptionsEn?: Maybe<Scalars['String']['output']>;
  metaDescriptionsEs?: Maybe<Scalars['String']['output']>;
  metaDescriptionsFr?: Maybe<Scalars['String']['output']>;
  metaDescriptionsIt?: Maybe<Scalars['String']['output']>;
  metaDescriptionsPl?: Maybe<Scalars['String']['output']>;
  metaDescriptionsUk?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  pageTitle?: Maybe<Scalars['String']['output']>;
  pageTitleCa?: Maybe<Scalars['String']['output']>;
  pageTitleDe?: Maybe<Scalars['String']['output']>;
  pageTitleEn?: Maybe<Scalars['String']['output']>;
  pageTitleEs?: Maybe<Scalars['String']['output']>;
  pageTitleFr?: Maybe<Scalars['String']['output']>;
  pageTitleIt?: Maybe<Scalars['String']['output']>;
  pageTitlePl?: Maybe<Scalars['String']['output']>;
  pageTitleUk?: Maybe<Scalars['String']['output']>;
  projectsMarket: PromotedProjectNodeConnection;
  sectors: SectorNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type MarketNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type MarketNodeProjectsMarketArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type MarketNodeSectorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  market?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type MarketNodeConnection = {
  __typename?: 'MarketNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MarketNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MarketNode` and its cursor. */
export type MarketNodeEdge = {
  __typename?: 'MarketNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MarketNode>;
};

/** An enumeration. */
export enum MaterialResistanceAdequateProductResistance {
  /** abrasion resistance */
  AbrasionResistance = 'ABRASION_RESISTANCE',
  /** adhesion */
  Adhesion = 'ADHESION',
  /** cold crack */
  ColdCrack = 'COLD_CRACK',
  /** crocking */
  Crocking = 'CROCKING',
  /** elongation */
  Elongation = 'ELONGATION',
  /** flame retardancy */
  FlameRetardancy = 'FLAME_RETARDANCY',
  /** other */
  Other = 'OTHER',
  /** shrinkage */
  Shrinkage = 'SHRINKAGE',
  /** stitching strength */
  StitchingStrength = 'STITCHING_STRENGTH',
  /** tearing strength */
  TearingStrength = 'TEARING_STRENGTH',
  /** uv resistance */
  UvResistance = 'UV_RESISTANCE'
}

export type MaterialResistanceNode = Node & {
  __typename?: 'MaterialResistanceNode';
  adequateProductResistance?: Maybe<MaterialResistanceAdequateProductResistance>;
  claim?: Maybe<GlobalDataNode>;
  howDetectedNonConformity?: Maybe<Scalars['String']['output']>;
  howItTransforms?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  ifOtherDescription?: Maybe<Scalars['String']['output']>;
  knowTheRecomendations: Scalars['Boolean']['output'];
};

export type MaterialResistanceNodeConnection = {
  __typename?: 'MaterialResistanceNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MaterialResistanceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MaterialResistanceNode` and its cursor. */
export type MaterialResistanceNodeEdge = {
  __typename?: 'MaterialResistanceNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MaterialResistanceNode>;
};

export type MedicalFilmSolutionNode = Node & {
  __typename?: 'MedicalFilmSolutionNode';
  acceptedTerms: Scalars['Boolean']['output'];
  city?: Maybe<CityNode>;
  company?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MedicalFilmSolutionNodeConnection = {
  __typename?: 'MedicalFilmSolutionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MedicalFilmSolutionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MedicalFilmSolutionNode` and its cursor. */
export type MedicalFilmSolutionNodeEdge = {
  __typename?: 'MedicalFilmSolutionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MedicalFilmSolutionNode>;
};

export type MemoNode = Node & {
  __typename?: 'MemoNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  size: Scalars['String']['output'];
};

export type MemoNodeConnection = {
  __typename?: 'MemoNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<MemoNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `MemoNode` and its cursor. */
export type MemoNodeEdge = {
  __typename?: 'MemoNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<MemoNode>;
};

export type Mutation = {
  __typename?: 'Mutation';
  AddSectorsToPattern?: Maybe<AddSectorsToPattern>;
  CertificateMutation?: Maybe<CertificateMutation>;
  ControlabApproveTests?: Maybe<ControlabApproveTestsPayload>;
  DisapproveOracleData?: Maybe<DisapproveOracleDataPayload>;
  OracleApproveFlameRetardancyTests?: Maybe<OracleApproveFlameRetardancyTestsPayload>;
  OracleApproveMultipleFields?: Maybe<OracleApproveMultipleFieldsPayload>;
  OracleApproveWarranty?: Maybe<OracleApproveWarrantyPayload>;
  OracleSetWarranty?: Maybe<OracleSetWarrantyPayload>;
  SetVisibleAtLibrary?: Maybe<SetVisibleAtLibraryPayload>;
  addToCart?: Maybe<AddToCartPayload>;
  applyCvToJob?: Maybe<ApplyCvToJobPayload>;
  approveProject?: Maybe<ApproveProject>;
  carouselMutation?: Maybe<CarouselMutation>;
  checkOutCart?: Maybe<CheckOutCartPayload>;
  createCatalogue?: Maybe<CreateCataloguePayload>;
  createClaim?: Maybe<CreateClaimPayload>;
  createCommentForProject?: Maybe<CreateCommentForProject>;
  createContactHubspot?: Maybe<CreateContactHubSpotPayload>;
  createDownloadLog?: Maybe<CreateDownloadLogPayload>;
  createEmailSubscriber?: Maybe<CreateEmailSubscriber>;
  createFormProposal?: Maybe<CreateFormProposalPayload>;
  createJobApplication?: Maybe<CreateJobApplication>;
  createPdfHtml?: Maybe<CreatePdfHtmlPayload>;
  createProfile?: Maybe<CreateProfilePayload>;
  createProvider?: Maybe<CreateProviderMutation>;
  createQuotation?: Maybe<CreateQuotationPayload>;
  createSample?: Maybe<CreateSamplePayload>;
  createSampleContact?: Maybe<CreateSampleContactPayload>;
  createServiceContact?: Maybe<CreateServiceContactPayload>;
  createShippingAddress?: Maybe<CreateShippingAddress>;
  createUser?: Maybe<CreateUserPayload>;
  createUserAddress?: Maybe<CreateUserAddressPayload>;
  createUserForNewWeb?: Maybe<CreateUserForNewWeb>;
  createWishlist?: Maybe<CreateWishlist>;
  deleteProjectComment?: Maybe<DeleteProjectComment>;
  deleteShippingAddress?: Maybe<DeleteShippingAddress>;
  deleteWishlist?: Maybe<DeleteWishlist>;
  deleteWishlistItem?: Maybe<DeleteWishlistItem>;
  domainlMutation?: Maybe<DomainMutation>;
  forgotPassword?: Maybe<ForgotPasswordPayload>;
  projectBasicData?: Maybe<ProjectBasicData>;
  refreshToken?: Maybe<RefreshPayload>;
  registerSpecSheetDownload?: Maybe<RegisterSpecSheetDownloadPayload>;
  removeFromCart?: Maybe<RemoveFromCartPayload>;
  resetPassword?: Maybe<ResetPasswordPayload>;
  sendDataSheetByEmail?: Maybe<SendDataSheetByEmailPayload>;
  storeAnonimalOrder?: Maybe<StoreAnonimalOrderPayload>;
  storeLead?: Maybe<StoreLeadPayload>;
  storeMedicalFilmSolution?: Maybe<StoreMedicalFilmSolutionPayload>;
  tokenAuth?: Maybe<TokenAuthPayload>;
  tokenAuthForLibrary?: Maybe<TokenAuthForLibraryPayload>;
  tokenAuthV2?: Maybe<TokenAuthV2>;
  updateItemQuantity?: Maybe<UpdateItemQuantityPayload>;
  updateOrder?: Maybe<UpdateOrder>;
  updateProfile?: Maybe<UpdateUserProfilePayload>;
  updateProjectData?: Maybe<UpdateProjectData>;
  updatePublicProfile?: Maybe<UpdatePublicProfilePayload>;
  updateShippingAddress?: Maybe<UpdateShippingAddress>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateWishlist?: Maybe<UpdateWishList>;
  uploadCvToS3?: Maybe<UploadCvToS3>;
  uploadFile?: Maybe<UploadMutation>;
  uploadImageProject?: Maybe<UploadImageProject>;
  uploadPermissionFileProjects?: Maybe<UploadPermissionFileProjects>;
  verifyEmail?: Maybe<VerifyEmail>;
  verifyToken?: Maybe<VerifyPayload>;
};


export type MutationAddSectorsToPatternArgs = {
  requestId: Scalars['ID']['input'];
  sectors: Array<InputMaybe<Scalars['String']['input']>>;
};


export type MutationCertificateMutationArgs = {
  name: Scalars['String']['input'];
};


export type MutationControlabApproveTestsArgs = {
  input: ControlabApproveTestsInput;
};


export type MutationDisapproveOracleDataArgs = {
  input: DisapproveOracleDataInput;
};


export type MutationOracleApproveFlameRetardancyTestsArgs = {
  input: OracleApproveFlameRetardancyTestsInput;
};


export type MutationOracleApproveMultipleFieldsArgs = {
  input: OracleApproveMultipleFieldsInput;
};


export type MutationOracleApproveWarrantyArgs = {
  input: OracleApproveWarrantyInput;
};


export type MutationOracleSetWarrantyArgs = {
  input: OracleSetWarrantyInput;
};


export type MutationSetVisibleAtLibraryArgs = {
  input: SetVisibleAtLibraryInput;
};


export type MutationAddToCartArgs = {
  input: AddToCartInput;
};


export type MutationApplyCvToJobArgs = {
  input: ApplyCvToJobInput;
};


export type MutationApproveProjectArgs = {
  approvalType: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type MutationCarouselMutationArgs = {
  name: Scalars['String']['input'];
};


export type MutationCheckOutCartArgs = {
  input: CheckOutCartInput;
};


export type MutationCreateCatalogueArgs = {
  input: CreateCatalogueInput;
};


export type MutationCreateClaimArgs = {
  input: CreateClaimInput;
};


export type MutationCreateCommentForProjectArgs = {
  comment: Scalars['String']['input'];
  projectId: Scalars['ID']['input'];
};


export type MutationCreateContactHubspotArgs = {
  input: CreateContactHubSpotInput;
};


export type MutationCreateDownloadLogArgs = {
  input: CreateDownloadLogInput;
};


export type MutationCreateEmailSubscriberArgs = {
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateFormProposalArgs = {
  input: CreateFormProposalInput;
};


export type MutationCreateJobApplicationArgs = {
  cityId?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  fullName?: InputMaybe<Scalars['String']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
  linkedIn: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  vacantId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreatePdfHtmlArgs = {
  input: CreatePdfHtmlInput;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
};


export type MutationCreateProviderArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateQuotationArgs = {
  input: CreateQuotationInput;
};


export type MutationCreateSampleArgs = {
  input: CreateSampleInput;
};


export type MutationCreateSampleContactArgs = {
  input: CreateSampleContactInput;
};


export type MutationCreateServiceContactArgs = {
  input: CreateServiceContactInput;
};


export type MutationCreateShippingAddressArgs = {
  address: Scalars['String']['input'];
  cityId?: InputMaybe<Scalars['ID']['input']>;
  cityName?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  mainAddress?: InputMaybe<Scalars['Boolean']['input']>;
  orderId: Scalars['ID']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCreateUserAddressArgs = {
  input: CreateUserAddressInput;
};


export type MutationCreateUserForNewWebArgs = {
  acceptTerms: Scalars['Boolean']['input'];
  business?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['ID']['input']>;
  company: Scalars['String']['input'];
  companyTypeId?: InputMaybe<Scalars['ID']['input']>;
  delegation?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  lastName: Scalars['String']['input'];
  market?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  position: Scalars['String']['input'];
  positionArea?: InputMaybe<Scalars['String']['input']>;
  receiveNews?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateWishlistArgs = {
  title: Scalars['String']['input'];
};


export type MutationDeleteProjectCommentArgs = {
  commentId: Scalars['ID']['input'];
};


export type MutationDeleteShippingAddressArgs = {
  shippingAddressId: Scalars['ID']['input'];
};


export type MutationDeleteWishlistArgs = {
  wishlistId: Scalars['String']['input'];
};


export type MutationDeleteWishlistItemArgs = {
  itemIds: Array<InputMaybe<Scalars['ID']['input']>>;
  wishlistId: Scalars['String']['input'];
};


export type MutationDomainlMutationArgs = {
  name: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationProjectBasicDataArgs = {
  applicationByUser?: InputMaybe<Scalars['String']['input']>;
  applicationEn?: InputMaybe<Scalars['String']['input']>;
  applicationEs?: InputMaybe<Scalars['String']['input']>;
  cityId: Scalars['ID']['input'];
  countryId: Scalars['ID']['input'];
  instances: Array<InputMaybe<Scalars['ID']['input']>>;
  marketId?: InputMaybe<Scalars['ID']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationRefreshTokenArgs = {
  input: RefreshInput;
};


export type MutationRegisterSpecSheetDownloadArgs = {
  input: RegisterSpecSheetDownloadInput;
};


export type MutationRemoveFromCartArgs = {
  input: RemoveFromCartInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSendDataSheetByEmailArgs = {
  input: SendDataSheetByEmailInput;
};


export type MutationStoreAnonimalOrderArgs = {
  input: StoreAnonimalOrderInput;
};


export type MutationStoreLeadArgs = {
  input: StoreLeadInput;
};


export type MutationStoreMedicalFilmSolutionArgs = {
  input: StoreMedicalFilmSolutionInput;
};


export type MutationTokenAuthArgs = {
  input: TokenAuthInput;
};


export type MutationTokenAuthForLibraryArgs = {
  input: TokenAuthForLibraryInput;
};


export type MutationTokenAuthV2Args = {
  email: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateItemQuantityArgs = {
  input: UpdateItemQuantityInput;
};


export type MutationUpdateOrderArgs = {
  altName?: InputMaybe<Scalars['String']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateUserProfileInput;
};


export type MutationUpdateProjectDataArgs = {
  applicationByUser?: InputMaybe<Scalars['String']['input']>;
  applicationEn?: InputMaybe<Scalars['String']['input']>;
  applicationEs?: InputMaybe<Scalars['String']['input']>;
  authorization?: InputMaybe<Scalars['String']['input']>;
  authorizationByClient?: InputMaybe<Scalars['String']['input']>;
  authorizationFile?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['ID']['input']>;
  countryId?: InputMaybe<Scalars['ID']['input']>;
  createComment?: InputMaybe<Scalars['Boolean']['input']>;
  creditsForImages?: InputMaybe<Scalars['String']['input']>;
  declarationOfUse?: InputMaybe<Scalars['Boolean']['input']>;
  finalClient?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  imagePaths?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  invoicedTo?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  mainImagePath?: InputMaybe<Scalars['String']['input']>;
  manufacturer?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  marketId?: InputMaybe<Scalars['ID']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  projectId: Scalars['ID']['input'];
  salesMember?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  segmentId?: InputMaybe<Scalars['ID']['input']>;
  selledMts?: InputMaybe<Scalars['Int']['input']>;
  specifiedBy?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  statement?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  unitOfMeasure?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdatePublicProfileArgs = {
  input: UpdatePublicProfileInput;
};


export type MutationUpdateShippingAddressArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['ID']['input']>;
  cityName?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  shippingAddressId: Scalars['ID']['input'];
  source?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationUpdateWishlistArgs = {
  patternsId?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  wishlistId: Scalars['String']['input'];
};


export type MutationUploadCvToS3Args = {
  file: Scalars['Upload']['input'];
};


export type MutationUploadFileArgs = {
  file?: InputMaybe<Scalars['Upload']['input']>;
};


export type MutationUploadImageProjectArgs = {
  image: Scalars['Upload']['input'];
};


export type MutationUploadPermissionFileProjectsArgs = {
  file: Scalars['Upload']['input'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type MutationVerifyTokenArgs = {
  input: VerifyInput;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object. */
  id: Scalars['ID']['output'];
};

export type OdourTestNode = Node & {
  __typename?: 'OdourTestNode';
  additionalTest: AdditionalTestsNode;
  dry?: Maybe<CrockingResistanceITestDry>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<CrockingResistanceITestRange>;
  wet?: Maybe<CrockingResistanceITestWet>;
};

export type OfficeNode = Node & {
  __typename?: 'OfficeNode';
  address: Scalars['String']['output'];
  /** List of all emails (primary and secondary). */
  allEmails?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  business?: Maybe<Scalars['String']['output']>;
  city: CityNode;
  email: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type OfficeNodeConnection = {
  __typename?: 'OfficeNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OfficeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OfficeNode` and its cursor. */
export type OfficeNodeEdge = {
  __typename?: 'OfficeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OfficeNode>;
};

export type OracleApproveFlameRetardancyTestsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  flameRetardancyTestsIds: Array<InputMaybe<Scalars['Int']['input']>>;
  requestId: Scalars['ID']['input'];
};

export type OracleApproveFlameRetardancyTestsPayload = {
  __typename?: 'OracleApproveFlameRetardancyTestsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type OracleApproveMultipleFieldsInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  fields: Array<InputMaybe<Scalars['String']['input']>>;
  requestId: Scalars['ID']['input'];
};

export type OracleApproveMultipleFieldsPayload = {
  __typename?: 'OracleApproveMultipleFieldsPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
};

export type OracleApproveWarrantyInput = {
  approves: Scalars['Boolean']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
};

export type OracleApproveWarrantyPayload = {
  __typename?: 'OracleApproveWarrantyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

/** An enumeration. */
export enum OracleRequestCodeType {
  /** ED Code */
  EdPatternClass = 'ED_PATTERN_CLASS',
  /** SKU Code */
  SkuPatternClass = 'SKU_PATTERN_CLASS'
}

/** An enumeration. */
export enum OracleRequestCountry {
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR'
}

export type OracleRequestNode = Node & {
  __typename?: 'OracleRequestNode';
  code: Scalars['String']['output'];
  codeType: OracleRequestCodeType;
  completeSendEmail: Scalars['Boolean']['output'];
  controlabData?: Maybe<Scalars['JSONString']['output']>;
  country: OracleRequestCountry;
  createdAt: Scalars['DateTime']['output'];
  creationEmail: Scalars['Boolean']['output'];
  /** When 2 days have passed after the record was created */
  firstEmail: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  reference?: Maybe<PatternNode>;
  runToday: Scalars['Boolean']['output'];
  /** When 4 days have passed after the record was created */
  secondEmail: Scalars['Boolean']['output'];
  status: OracleRequestStatus;
  /** When 5 days have passed after the record was created */
  thirdEmail: Scalars['Boolean']['output'];
};

export type OracleRequestNodeConnection = {
  __typename?: 'OracleRequestNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OracleRequestNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `OracleRequestNode` and its cursor. */
export type OracleRequestNodeEdge = {
  __typename?: 'OracleRequestNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OracleRequestNode>;
};

/** An enumeration. */
export enum OracleRequestStatus {
  /** Cancelled */
  Cancelada = 'CANCELADA',
  /** In progress */
  Enproceso = 'ENPROCESO',
  /** Finished */
  Terminada = 'TERMINADA'
}

export type OracleSetWarrantyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
  warranty: Scalars['String']['input'];
};

export type OracleSetWarrantyPayload = {
  __typename?: 'OracleSetWarrantyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type OrderItemNode = Node & {
  __typename?: 'OrderItemNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  objectId: Scalars['Int']['output'];
  order: OrderNode;
  pattern?: Maybe<ProductNode>;
  product?: Maybe<ProductNode>;
  quantity: Scalars['Int']['output'];
  reference?: Maybe<PatternNode>;
  unitPrice: Scalars['Float']['output'];
};

export type OrderItemNodeConnection = {
  __typename?: 'OrderItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OrderItemNode` and its cursor. */
export type OrderItemNodeEdge = {
  __typename?: 'OrderItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OrderItemNode>;
};

export type OrderNode = Node & {
  __typename?: 'OrderNode';
  altName?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  items?: Maybe<OrderItemNodeConnection>;
  /** Notes about your order, e.g. special notes for delivery */
  notes: Scalars['String']['output'];
  shippingAddress?: Maybe<ShippingAddressNode>;
  status: OrderStatus;
  updated: Scalars['DateTime']['output'];
  user: UserNode;
};


export type OrderNodeItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type OrderNodeConnection = {
  __typename?: 'OrderNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `OrderNode` and its cursor. */
export type OrderNodeEdge = {
  __typename?: 'OrderNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<OrderNode>;
};

/** An enumeration. */
export enum OrderStatus {
  /** New */
  A_1 = 'A_1',
  /** Processing */
  A_2 = 'A_2',
  /** Delivered */
  A_3 = 'A_3'
}

/** An enumeration. */
export enum OtherAttributesColorAppearance {
  /** BICOLOR */
  Bicolor = 'BICOLOR',
  /** DIGITAL */
  Digital = 'DIGITAL',
  /** METALIZED */
  Metalized = 'METALIZED',
  /** MULTICOLOR */
  Multicolor = 'MULTICOLOR',
  /** UNICOLOR */
  Unicolor = 'UNICOLOR'
}

/** An enumeration. */
export enum OtherAttributesColourFastness {
  /** Pending */
  Pending = 'PENDING',
  /** UNE-EN ISO 105-E02:1996 */
  UneEnIso_105E02_1996 = 'UNE_EN_ISO_105_E02_1996',
  /** UNE-EN ISO 105-E03:2010 */
  UneEnIso_105E03_2010 = 'UNE_EN_ISO_105_E03_2010'
}

/** An enumeration. */
export enum OtherAttributesDenimStainResistance {
  /** CFFA 70 */
  Cffa_70 = 'CFFA_70',
  /** GMW 15377 */
  Gmw_15377 = 'GMW_15377',
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesFluorineFreeMethod {
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesGeneratingMachine {
  /** DOES NOT APPLY */
  DoesNotApply = 'DOES_NOT_APPLY',
  /** CALANDER */
  GeneratorCalander = 'GENERATOR_CALANDER',
  /** COATING */
  GeneratorCoating = 'GENERATOR_COATING',
  /** GENERATOR MACHINE SUPPORT */
  GeneratorMachineSupport = 'GENERATOR_MACHINE_SUPPORT'
}

/** An enumeration. */
export enum OtherAttributesGreenguard {
  /** ANSI/BIFMA M7.1 2011 */
  AnsiBifmaM7_1_2011 = 'ANSI_BIFMA_M7_1_2011',
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesMigrationOrReleaseOfHeavyMetals {
  /** EN 12149 */
  En_12149 = 'EN_12149',
  /** Pending */
  Pending = 'PENDING'
}

export type OtherAttributesNode = Node & {
  __typename?: 'OtherAttributesNode';
  acceleratedExposureToDisinfectant?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  acceleratedExposureToDisinfectantCertificateFile: Scalars['String']['output'];
  acceleratedExposureToDisinfectantCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  acceleratedExposureToDisinfectantNotExpires: Scalars['Boolean']['output'];
  accousticalAttenuation?: Maybe<Scalars['String']['output']>;
  accousticalAttenuationMethod?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  accousticalAttenuationMethodCertificateFile: Scalars['String']['output'];
  accousticalAttenuationMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  accousticalAttenuationNotExpires: Scalars['Boolean']['output'];
  antiBacterial?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  antiBacterialCertificateFile: Scalars['String']['output'];
  antiBacterialCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  antiBacterialNotExpires: Scalars['Boolean']['output'];
  antiStatic?: Maybe<Scalars['String']['output']>;
  antiStaticCertificate?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  antiStaticCertificateFile: Scalars['String']['output'];
  antiStaticCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  antiStaticConductive?: Maybe<Scalars['String']['output']>;
  antiStaticConductiveCertificate?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  antiStaticConductiveCertificateFile: Scalars['String']['output'];
  antiStaticConductiveCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  antiStaticConductiveNotExpires: Scalars['Boolean']['output'];
  antiStaticNotExpires: Scalars['Boolean']['output'];
  antifungal?: Maybe<Scalars['String']['output']>;
  bacterialResistance?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  bacterialResistanceCertificateFile: Scalars['String']['output'];
  bacterialResistanceCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  bacterialResistanceNotExpires: Scalars['Boolean']['output'];
  bleachCleanable: Scalars['Boolean']['output'];
  certificateDomain?: Maybe<Scalars['String']['output']>;
  cleanability?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  cleanabilityCertificateFile: Scalars['String']['output'];
  cleanabilityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  cleanabilityNotExpires: Scalars['Boolean']['output'];
  cleanibilityMethod?: Maybe<Scalars['String']['output']>;
  colorAppearance?: Maybe<OtherAttributesColorAppearance>;
  colourFastness?: Maybe<OtherAttributesColourFastness>;
  /** This file must be a PDF */
  colourFastnessCertificateFile: Scalars['String']['output'];
  colourFastnessCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  colourFastnessNotExpires: Scalars['Boolean']['output'];
  compassHb?: Maybe<Scalars['String']['output']>;
  cytotoxicity?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  cytotoxicityCertificateFile: Scalars['String']['output'];
  cytotoxicityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  cytotoxicityNotExpires: Scalars['Boolean']['output'];
  denimDyeResistant: Scalars['Boolean']['output'];
  denimStainResistance?: Maybe<OtherAttributesDenimStainResistance>;
  /** This file must be a PDF */
  denimStainResistanceCertificateFile: Scalars['String']['output'];
  denimStainResistanceCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  denimStainResistanceNotExpires: Scalars['Boolean']['output'];
  ecosense?: Maybe<Scalars['String']['output']>;
  electricSealable?: Maybe<Scalars['String']['output']>;
  fluorineFree?: Maybe<Scalars['String']['output']>;
  fluorineFreeMethod?: Maybe<OtherAttributesFluorineFreeMethod>;
  /** This file must be a PDF */
  fluorineFreeMethodCertificateFile: Scalars['String']['output'];
  fluorineFreeMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  fluorineFreeNotExpires: Scalars['Boolean']['output'];
  foamLamination?: Maybe<Scalars['String']['output']>;
  formaldehydeFree?: Maybe<Scalars['String']['output']>;
  generatingMachine?: Maybe<OtherAttributesGeneratingMachine>;
  greenguard?: Maybe<OtherAttributesGreenguard>;
  /** This file must be a PDF */
  greenguardCertificateFile: Scalars['String']['output'];
  greenguardCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  greenguardNotExpires: Scalars['Boolean']['output'];
  hasNotHeavyMetals: Scalars['Boolean']['output'];
  healthcare: Scalars['Boolean']['output'];
  heatBuildup?: Maybe<Scalars['String']['output']>;
  heatBuildupMethod?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  heatBuildupMethodCertificateFile: Scalars['String']['output'];
  heatBuildupMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  heatBuildupNotExpires: Scalars['Boolean']['output'];
  heatSealable?: Maybe<Scalars['String']['output']>;
  heavyMetals?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  heavyMetalsCertificateFile: Scalars['String']['output'];
  heavyMetalsCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  heavyMetalsNotExpires: Scalars['Boolean']['output'];
  hydrocarbonResistance?: Maybe<Scalars['String']['output']>;
  hydrocarbonResistanceMethod?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  hydrocarbonResistanceMethodCertificateFile: Scalars['String']['output'];
  hydrocarbonResistanceMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  hydrocarbonResistanceNotExpires: Scalars['Boolean']['output'];
  hydrolisis?: Maybe<Scalars['String']['output']>;
  hydrolisisMethod?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  hydrolisisMethodCertificateFile: Scalars['String']['output'];
  hydrolisisMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  hydrolisisNotExpires: Scalars['Boolean']['output'];
  hydrolysis: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  impermeable?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  impermeableCertificateFile: Scalars['String']['output'];
  impermeableCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  impermeableNotExpires: Scalars['Boolean']['output'];
  intagliodesigns?: Maybe<Scalars['String']['output']>;
  ipaCleanable: Scalars['Boolean']['output'];
  irritationAndSkinSensitization?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  irritationAndSkinSensitizationCertificateFile: Scalars['String']['output'];
  irritationAndSkinSensitizationCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  irritationAndSkinSensitizationNotExpires: Scalars['Boolean']['output'];
  isAntibacterial: Scalars['Boolean']['output'];
  isAntistatic: Scalars['Boolean']['output'];
  medLogo?: Maybe<Scalars['String']['output']>;
  migrationOrReleaseOfHeavyMetals?: Maybe<OtherAttributesMigrationOrReleaseOfHeavyMetals>;
  /** This file must be a PDF */
  migrationOrReleaseOfHeavyMetalsCertificateFile: Scalars['String']['output'];
  migrationOrReleaseOfHeavyMetalsCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  migrationOrReleaseOfHeavyMetalsNotExpires: Scalars['Boolean']['output'];
  mildewResistance?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  mildewResistanceCertificateFile: Scalars['String']['output'];
  mildewResistanceCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  mildewResistanceMethod?: Maybe<Scalars['String']['output']>;
  mildewResistanceNotExpires: Scalars['Boolean']['output'];
  mildewResistant: Scalars['Boolean']['output'];
  noBiocides?: Maybe<Scalars['String']['output']>;
  noFlameRetardants?: Maybe<Scalars['String']['output']>;
  oilResistance?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  permeability?: Maybe<OtherAttributesPermeability>;
  /** This file must be a PDF */
  permeabilityCertificateFile: Scalars['String']['output'];
  permeabilityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  permeabilityNotExpires: Scalars['Boolean']['output'];
  petFriendly: Scalars['Boolean']['output'];
  pfasFree?: Maybe<Scalars['String']['output']>;
  pfasFreeMethod?: Maybe<OtherAttributesPfasFreeMethod>;
  /** This file must be a PDF */
  pfasFreeMethodCertificateFile: Scalars['String']['output'];
  pfasFreeMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  pfasFreeNotExpires: Scalars['Boolean']['output'];
  phthalateFreeProduct?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  phthalateFreeProductCertificateFile: Scalars['String']['output'];
  phthalateFreeProductCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  phthalateFreeProductNotExpires: Scalars['Boolean']['output'];
  pinkStainResistance?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  pinkStainResistanceCertificateFile: Scalars['String']['output'];
  pinkStainResistanceCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  pinkStainResistanceNotExpires: Scalars['Boolean']['output'];
  polycarbonateResinSystem?: Maybe<Scalars['String']['output']>;
  prop65Compliant?: Maybe<Scalars['String']['output']>;
  prostock?: Maybe<Scalars['String']['output']>;
  ruleMed: Scalars['Boolean']['output'];
  ruleUkca: Scalars['Boolean']['output'];
  slingProperties?: Maybe<Scalars['String']['output']>;
  softside?: Maybe<Scalars['String']['output']>;
  softsideNew?: Maybe<Scalars['String']['output']>;
  solventResistance?: Maybe<Scalars['String']['output']>;
  solventResistanceMethod?: Maybe<OtherAttributesSolventResistanceMethod>;
  /** This file must be a PDF */
  solventResistanceMethodCertificateFile: Scalars['String']['output'];
  solventResistanceMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  solventResistanceNotExpires: Scalars['Boolean']['output'];
  soundAbsorption?: Maybe<Scalars['String']['output']>;
  soundAbsorptionMethod?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  soundAbsorptionMethodCertificateFile: Scalars['String']['output'];
  soundAbsorptionMethodCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  soundAbsorptionNotExpires: Scalars['Boolean']['output'];
  stainResistanceInHealthcareEnvironment?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  stainResistanceInHealthcareEnvironmentCertificateFile: Scalars['String']['output'];
  stainResistanceInHealthcareEnvironmentCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  stainResistanceInHealthcareEnvironmentNotExpires: Scalars['Boolean']['output'];
  sulfideStainResistant: Scalars['Boolean']['output'];
  sulfideStaining?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  sulfideStainingCertificateFile: Scalars['String']['output'];
  sulfideStainingCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  sulfideStainingNotExpires: Scalars['Boolean']['output'];
  support?: Maybe<OtherAttributesSupport>;
  temperatureReductionTreatment?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  temperatureReductionTreatmentCertificateFile: Scalars['String']['output'];
  temperatureReductionTreatmentCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  temperatureReductionTreatmentNotExpires: Scalars['Boolean']['output'];
  thermoformed?: Maybe<Scalars['String']['output']>;
  toxicGasGeneration?: Maybe<OtherAttributesToxicGasGeneration>;
  /** This file must be a PDF */
  toxicGasGenerationCertificateFile: Scalars['String']['output'];
  toxicGasGenerationCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  toxicGasGenerationNotExpires: Scalars['Boolean']['output'];
  transformationProcess?: Maybe<OtherAttributesTransformationProcess>;
  ukcaLogo?: Maybe<Scalars['String']['output']>;
  volatileOrganicCompoundEmission?: Maybe<OtherAttributesVolatileOrganicCompoundEmission>;
  /** This file must be a PDF */
  volatileOrganicCompoundEmissionCertificateFile: Scalars['String']['output'];
  volatileOrganicCompoundEmissionCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  volatileOrganicCompoundEmissionNotExpires: Scalars['Boolean']['output'];
  washabilityAndScrubability?: Maybe<OtherAttributesWashabilityAndScrubability>;
  /** This file must be a PDF */
  washabilityAndScrubabilityCertificateFile: Scalars['String']['output'];
  washabilityAndScrubabilityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  washabilityAndScrubabilityNotExpires: Scalars['Boolean']['output'];
};

/** An enumeration. */
export enum OtherAttributesPermeability {
  /** ASTM E-93 Procedure B */
  AstmE_93ProcedureB = 'ASTM_E_93_PROCEDURE_B',
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesPfasFreeMethod {
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesSolventResistanceMethod {
  /** ASTM D543 */
  AstmD543 = 'ASTM_D543',
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesSupport {
  /** DOES NOT APPLY */
  DoesNotApply = 'DOES_NOT_APPLY',
  /** NO BACKING */
  NoBacking = 'NO_BACKING',
  /** PAPER */
  Paper = 'PAPER',
  /** PENDING SUPPORT */
  PendingSupport = 'PENDING_SUPPORT',
  /** TEXTILE */
  Textile = 'TEXTILE'
}

/** An enumeration. */
export enum OtherAttributesToxicGasGeneration {
  /** Pending */
  Pending = 'PENDING',
  /** SMP 800-C */
  Smp_800C = 'SMP_800_C'
}

/** An enumeration. */
export enum OtherAttributesTransformationProcess {
  /** CUT AND SEW */
  CutAndSew = 'CUT_AND_SEW',
  /** CUT ON TABLE */
  CutOnTable = 'CUT_ON_TABLE',
  /** DIE CUT */
  DieCut = 'DIE_CUT',
  /** DOES NOT APPLY */
  DoesNotApply = 'DOES_NOT_APPLY',
  /** HF SEALING */
  HfSealing = 'HF_SEALING',
  /** LAMINATION */
  Lamination = 'LAMINATION',
  /** LAMINATION + HF_SEALING */
  LaminationHfSealing = 'LAMINATION_HF_SEALING',
  /** LAMINATION + PERFORATION */
  LaminationPerforation = 'LAMINATION_PERFORATION',
  /** LAMINATION + QUILTING */
  LaminationQuilting = 'LAMINATION_QUILTING',
  /** PANELS */
  Panels = 'PANELS',
  /** PENDING */
  Pending = 'PENDING',
  /** PERFORATION */
  Perforation = 'PERFORATION',
  /** QUILTING */
  Quilting = 'QUILTING',
  /** STAMPING */
  Stamping = 'STAMPING',
  /** STAMPING + CUT */
  StampingCut = 'STAMPING_CUT',
  /** TEFLON COATING */
  TeflonCoating = 'TEFLON_COATING',
  /** WELT */
  Welt = 'WELT'
}

/** An enumeration. */
export enum OtherAttributesVolatileOrganicCompoundEmission {
  /** Californian Specification Section 01350 */
  CalifornianSpecificationSection_01350 = 'CALIFORNIAN_SPECIFICATION_SECTION_01350',
  /** Pending */
  Pending = 'PENDING'
}

/** An enumeration. */
export enum OtherAttributesWashabilityAndScrubability {
  /** ASTM F793 */
  AstmF793 = 'ASTM_F793',
  /** Pending */
  Pending = 'PENDING'
}

export type PageCursor = {
  __typename?: 'PageCursor';
  cursor?: Maybe<Scalars['String']['output']>;
  isCurrent?: Maybe<Scalars['Boolean']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
};

export type PageCursors = {
  __typename?: 'PageCursors';
  around?: Maybe<Array<Maybe<PageCursor>>>;
  first?: Maybe<PageCursor>;
  last?: Maybe<PageCursor>;
  next?: Maybe<PageCursor>;
  previous?: Maybe<PageCursor>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type PaginatedOrderType = {
  __typename?: 'PaginatedOrderType';
  results?: Maybe<Array<Maybe<OrderNode>>>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type PatentNode = Node & {
  __typename?: 'PatentNode';
  code?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pattern: PatternNode;
};

export type PatentNodeConnection = {
  __typename?: 'PatentNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PatentNode` and its cursor. */
export type PatentNodeEdge = {
  __typename?: 'PatentNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PatentNode>;
};

/** An enumeration. */
export enum PatternBusiness {
  /** N/A */
  A = 'A_',
  /** CADENA */
  Cadena = 'CADENA',
  /** COLOMBIA */
  Colombia = 'COLOMBIA',
  /** EUROPE */
  Europe = 'EUROPE',
  /** LATAM */
  Latam = 'LATAM',
  /** MEXICO */
  Mexico = 'MEXICO',
  /** USA */
  Usa = 'USA'
}

export type PatternFacetCountsType = {
  __typename?: 'PatternFacetCountsType';
  backing?: Maybe<Array<Maybe<GenericIdFacetCountType>>>;
  compositions?: Maybe<Array<Maybe<ChoiceFacetCountType>>>;
  embossings?: Maybe<Array<Maybe<GenericIdFacetCountType>>>;
  flameRetardancyTests?: Maybe<Array<Maybe<GenericIdFacetCountType>>>;
  gaugeMaxValue?: Maybe<Scalars['Float']['output']>;
  gaugeMinValue?: Maybe<Scalars['Float']['output']>;
  isNew: Scalars['Int']['output'];
  isVisibleLibrary: Scalars['Int']['output'];
  marketSegments?: Maybe<Array<Maybe<ChoiceFacetCountType>>>;
  outdoorFalse: Scalars['Int']['output'];
  outdoorTrue: Scalars['Int']['output'];
  patternClasses?: Maybe<Array<Maybe<ChoiceFacetCountType>>>;
  polymer?: Maybe<Array<Maybe<ChoiceFacetCountType>>>;
  saleable: Scalars['Int']['output'];
  sectors?: Maybe<Array<Maybe<SectorFacetCountType>>>;
  sustainabilityAPlusEmissions: Scalars['Int']['output'];
  sustainabilityAntimicrobial: Scalars['Int']['output'];
  sustainabilityBackingProfile: Scalars['Int']['output'];
  sustainabilityBiobasedPvcBioAttributed: Scalars['Int']['output'];
  sustainabilityCytotoxicity: Scalars['Int']['output'];
  sustainabilityEpd: Scalars['Int']['output'];
  sustainabilityFrFree: Scalars['Int']['output'];
  sustainabilityGlobalRecycledStandard: Scalars['Int']['output'];
  sustainabilityGreenguard: Scalars['Int']['output'];
  sustainabilityIndoorAirQuality: Scalars['Int']['output'];
  sustainabilityLeed: Scalars['Int']['output'];
  sustainabilityMpFree: Scalars['Int']['output'];
  sustainabilityPhthalateFreeProduct: Scalars['Int']['output'];
  sustainabilityProp65: Scalars['Int']['output'];
  sustainabilityReach: Scalars['Int']['output'];
  sustainabilityRohs: Scalars['Int']['output'];
  sustainabilitySkinSafeIrritation: Scalars['Int']['output'];
  sustainabilitySkinSafeSensitization: Scalars['Int']['output'];
  sustainabilityWell: Scalars['Int']['output'];
  textures?: Maybe<Array<Maybe<ChoiceFacetCountType>>>;
  topcoat?: Maybe<Array<Maybe<GenericIdFacetCountType>>>;
  total: Scalars['Int']['output'];
  weightMaxValue?: Maybe<Scalars['Float']['output']>;
  weightMinValue?: Maybe<Scalars['Float']['output']>;
  widthMaxValue?: Maybe<Scalars['Float']['output']>;
  widthMinValue?: Maybe<Scalars['Float']['output']>;
};

export type PatternNode = Node & {
  __typename?: 'PatternNode';
  /** Used to identify if has all required data to generate product overview */
  activeForProductOverview: Scalars['Boolean']['output'];
  additionalTests?: Maybe<Scalars['GenericScalar']['output']>;
  additionaltests?: Maybe<AdditionalTestsNode>;
  altName: Scalars['String']['output'];
  approvedCleanersPdfUrl?: Maybe<Scalars['String']['output']>;
  backing?: Maybe<BackingNode>;
  brands: BrandNodeConnection;
  business: PatternBusiness;
  cardOfColor?: Maybe<CardOfColorsNode>;
  catalogStockNumber?: Maybe<Scalars['String']['output']>;
  catalogues: CatalogueNodeConnection;
  /** Used to identify if Spradling is currently making catalogues of this Pattern */
  cataloguesAvailable: Scalars['Boolean']['output'];
  code: Scalars['String']['output'];
  contacts: ContactNodeConnection;
  created: Scalars['DateTime']['output'];
  date?: Maybe<Scalars['Date']['output']>;
  downloadLogs: DownloadLogNodeConnection;
  enNotes?: Maybe<Scalars['String']['output']>;
  epds: EpdNodeConnection;
  esNotes?: Maybe<Scalars['String']['output']>;
  general?: Maybe<GeneralNode>;
  /** Used to identify if there are available catalogues of this Pattern */
  hasStock: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  imageThumbSmall?: Maybe<Scalars['String']['output']>;
  inspiration?: Maybe<InspirationNode>;
  isEpd?: Maybe<Scalars['Boolean']['output']>;
  /** Used to identify if this pattern is new */
  isNew: Scalars['Boolean']['output'];
  isVisibleLibrary?: Maybe<Scalars['Boolean']['output']>;
  maintenanceGuide?: Maybe<Scalars['String']['output']>;
  manufacturingCertifications?: Maybe<Array<Maybe<ManufacturingCertificationsNode>>>;
  memo?: Maybe<MemoNode>;
  modified: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  nameWithSuperscriptR?: Maybe<Scalars['String']['output']>;
  observation?: Maybe<Scalars['String']['output']>;
  oraclerequestSet: OracleRequestNodeConnection;
  otherattributes?: Maybe<OtherAttributesNode>;
  /** Used to identify if this pattern is out of stock in Europe instance */
  outOfStockEurope: Scalars['Boolean']['output'];
  packagingFsc?: Maybe<Scalars['Boolean']['output']>;
  patents: PatentNodeConnection;
  pattern: ServiceContactNodeConnection;
  patternClass?: Maybe<Scalars['String']['output']>;
  patterns: PromotedProjectNodeConnection;
  pdfUrl?: Maybe<Scalars['String']['output']>;
  productcategorization?: Maybe<ProductCategorizationNode>;
  products?: Maybe<ProductNodeConnection>;
  projects: ProjectNodeConnection;
  promotedProjects?: Maybe<Array<Maybe<PromotedProjectNode>>>;
  quotations: QuotationNodeConnection;
  relatedPatterns?: Maybe<PatternNodeConnection>;
  rev?: Maybe<Scalars['Int']['output']>;
  saleable?: Maybe<Scalars['Boolean']['output']>;
  samplescontact: SampleContactNodeConnection;
  sectors: SectorNodeConnection;
  sliders?: Maybe<Scalars['GenericScalar']['output']>;
  slug: Scalars['String']['output'];
  specsSheetData?: Maybe<Scalars['GenericScalar']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  stores: StoreNodeConnection;
  successFlameRetardancyTests?: Maybe<Scalars['GenericScalar']['output']>;
  successPdfFlameRetardancyTests?: Maybe<Scalars['GenericScalar']['output']>;
  sustainability?: Maybe<SustainabilityNode>;
  transformationGuide?: Maybe<Scalars['String']['output']>;
  trend?: Maybe<TrendNode>;
  wishlistItems: WishlistItemNodeConnection;
  zippedImagesUrl?: Maybe<Scalars['String']['output']>;
};


export type PatternNodeApprovedCleanersPdfUrlArgs = {
  fullVersion?: InputMaybe<Scalars['Boolean']['input']>;
  unitSystem?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeCataloguesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeDownloadLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  downloader?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeEpdsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeOraclerequestSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodePatentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodePatternArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodePatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodePdfUrlArgs = {
  fullVersion?: InputMaybe<Scalars['Boolean']['input']>;
  unitSystem?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_Icontains?: InputMaybe<Scalars['String']['input']>;
  color_Istartswith?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isDiscontinued?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  predominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['ID']['input']>;
  sector_Market_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type PatternNodeQuotationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type PatternNodeRelatedPatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeSamplescontactArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeSectorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  market?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeSpecsSheetDataArgs = {
  fullVersion?: InputMaybe<Scalars['Boolean']['input']>;
  limitAdditionalTests?: InputMaybe<Scalars['Boolean']['input']>;
  unitSystem?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeStoresArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  patterns?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type PatternNodeWishlistItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PatternNodeZippedImagesUrlArgs = {
  hasInstance?: InputMaybe<Scalars['Boolean']['input']>;
  instanceId?: InputMaybe<Scalars['ID']['input']>;
};

export type PatternNodeConnection = {
  __typename?: 'PatternNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatternNodeEdge>>;
  pageCursors?: Maybe<PageCursors>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `PatternNode` and its cursor. */
export type PatternNodeEdge = {
  __typename?: 'PatternNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PatternNode>;
};

export type PlaceDetails = {
  __typename?: 'PlaceDetails';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  fullAddress?: Maybe<Scalars['String']['output']>;
  postalCode?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
};

export type PlaceSuggestion = {
  __typename?: 'PlaceSuggestion';
  description?: Maybe<Scalars['String']['output']>;
  placeId?: Maybe<Scalars['String']['output']>;
};

export type PleatsNode = Node & {
  __typename?: 'PleatsNode';
  claim?: Maybe<GlobalDataNode>;
  describeWhereMarksAre?: Maybe<Scalars['String']['output']>;
  foldsInMaterial?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  marksOnDelivery?: Maybe<Scalars['Boolean']['output']>;
  materialIsCoated?: Maybe<Scalars['Boolean']['output']>;
  materialIsMarked?: Maybe<Scalars['Boolean']['output']>;
  whereMarksAre?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type PleatsNodeConnection = {
  __typename?: 'PleatsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PleatsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PleatsNode` and its cursor. */
export type PleatsNodeEdge = {
  __typename?: 'PleatsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PleatsNode>;
};

export type PostNode = Node & {
  __typename?: 'PostNode';
  altText?: Maybe<Scalars['String']['output']>;
  altTextCa?: Maybe<Scalars['String']['output']>;
  altTextDe?: Maybe<Scalars['String']['output']>;
  altTextEn?: Maybe<Scalars['String']['output']>;
  altTextEs?: Maybe<Scalars['String']['output']>;
  altTextFr?: Maybe<Scalars['String']['output']>;
  altTextIt?: Maybe<Scalars['String']['output']>;
  altTextPl?: Maybe<Scalars['String']['output']>;
  altTextUk?: Maybe<Scalars['String']['output']>;
  categories: BlogCategoryNodeConnection;
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  created: Scalars['DateTime']['output'];
  draft: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  listingImage?: Maybe<Scalars['String']['output']>;
  listingImageThumbSmall?: Maybe<Scalars['String']['output']>;
  metaKeywords?: Maybe<Scalars['String']['output']>;
  metaKeywordsCa?: Maybe<Scalars['String']['output']>;
  metaKeywordsDe?: Maybe<Scalars['String']['output']>;
  metaKeywordsEn?: Maybe<Scalars['String']['output']>;
  metaKeywordsEs?: Maybe<Scalars['String']['output']>;
  metaKeywordsFr?: Maybe<Scalars['String']['output']>;
  metaKeywordsIt?: Maybe<Scalars['String']['output']>;
  metaKeywordsPl?: Maybe<Scalars['String']['output']>;
  metaKeywordsUk?: Maybe<Scalars['String']['output']>;
  publicationDatetime: Scalars['DateTime']['output'];
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
  summary: Scalars['String']['output'];
  summaryCa?: Maybe<Scalars['String']['output']>;
  summaryDe?: Maybe<Scalars['String']['output']>;
  summaryEn?: Maybe<Scalars['String']['output']>;
  summaryEs?: Maybe<Scalars['String']['output']>;
  summaryFr?: Maybe<Scalars['String']['output']>;
  summaryIt?: Maybe<Scalars['String']['output']>;
  summaryPl?: Maybe<Scalars['String']['output']>;
  summaryUk?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
  titleCa?: Maybe<Scalars['String']['output']>;
  titleDe?: Maybe<Scalars['String']['output']>;
  titleEn?: Maybe<Scalars['String']['output']>;
  titleEs?: Maybe<Scalars['String']['output']>;
  titleFr?: Maybe<Scalars['String']['output']>;
  titleIt?: Maybe<Scalars['String']['output']>;
  titlePl?: Maybe<Scalars['String']['output']>;
  titleUk?: Maybe<Scalars['String']['output']>;
};


export type PostNodeCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type PostNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type PostNodeConnection = {
  __typename?: 'PostNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PostNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `PostNode` and its cursor. */
export type PostNodeEdge = {
  __typename?: 'PostNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PostNode>;
};

export type PrivacyPolicyNode = Node & {
  __typename?: 'PrivacyPolicyNode';
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  createdBy: UserNode;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  version: Scalars['Int']['output'];
};

export type PrivacyPolicyNodeConnection = {
  __typename?: 'PrivacyPolicyNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PrivacyPolicyNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PrivacyPolicyNode` and its cursor. */
export type PrivacyPolicyNodeEdge = {
  __typename?: 'PrivacyPolicyNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PrivacyPolicyNode>;
};

/** An enumeration. */
export enum ProductCategorizationCorporateOrigin {
  /** Administration */
  Administration = 'ADMINISTRATION',
  /** Manufactured */
  Manufactured = 'MANUFACTURED',
  /** Non-manufactured */
  NonManufactured = 'NON_MANUFACTURED',
  /** Pending corporate origin */
  PendingCorporateOrigin = 'PENDING_CORPORATE_ORIGIN',
  /** Services */
  Services = 'SERVICES'
}

/** An enumeration. */
export enum ProductCategorizationGamma {
  /** DIAMOND */
  Diamond = 'DIAMOND',
  /** GOLD */
  Gold = 'GOLD',
  /** SILVER */
  Silver = 'SILVER'
}

export type ProductCategorizationNode = Node & {
  __typename?: 'ProductCategorizationNode';
  appearance?: Maybe<Scalars['String']['output']>;
  application?: Maybe<Scalars['String']['output']>;
  business?: Maybe<Scalars['String']['output']>;
  corporateOrigin?: Maybe<ProductCategorizationCorporateOrigin>;
  definition?: Maybe<Scalars['String']['output']>;
  design?: Maybe<Scalars['GenericScalar']['output']>;
  exclusive: Scalars['Boolean']['output'];
  gamma?: Maybe<ProductCategorizationGamma>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  marketSegment?: Maybe<Scalars['String']['output']>;
  newApplication?: Maybe<Scalars['String']['output']>;
  newMarketSegment?: Maybe<Scalars['String']['output']>;
  newNiche?: Maybe<Scalars['String']['output']>;
  niche?: Maybe<Scalars['String']['output']>;
  origin?: Maybe<ProductCategorizationOrigin>;
  outdoor?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  polymer?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  technicalName: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
  warranty?: Maybe<Scalars['String']['output']>;
};

/** An enumeration. */
export enum ProductCategorizationOrigin {
  /** Administration */
  Administration = 'ADMINISTRATION',
  /** Manufactured */
  Manufactured = 'MANUFACTURED',
  /** Manufactured transformed */
  ManufacturedTransformed = 'MANUFACTURED_TRANSFORMED',
  /** Non manufactured */
  NonManufactured = 'NON_MANUFACTURED',
  /** Non manufactured imported special */
  NonManufacturedImportedSpecial = 'NON_MANUFACTURED_IMPORTED_SPECIAL',
  /** Non manufactured national special */
  NonManufacturedNationalSpecial = 'NON_MANUFACTURED_NATIONAL_SPECIAL',
  /** Non manufactured transformed */
  NonManufacturedTransformed = 'NON_MANUFACTURED_TRANSFORMED',
  /** Pending origin */
  PendingOrigin = 'PENDING_ORIGIN',
  /** Projects */
  Projects = 'PROJECTS',
  /** Services */
  Services = 'SERVICES'
}

export type ProductConnection = {
  __typename?: 'ProductConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `Product` and its cursor. */
export type ProductEdge = {
  __typename?: 'ProductEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
};

export type ProductInTheWorldNode = Node & {
  __typename?: 'ProductInTheWorldNode';
  client: Scalars['String']['output'];
  color?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  countryCa?: Maybe<Scalars['String']['output']>;
  countryDe?: Maybe<Scalars['String']['output']>;
  countryEn?: Maybe<Scalars['String']['output']>;
  countryEs?: Maybe<Scalars['String']['output']>;
  countryFr?: Maybe<Scalars['String']['output']>;
  countryIt?: Maybe<Scalars['String']['output']>;
  countryPl?: Maybe<Scalars['String']['output']>;
  countryUk?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imageMobile?: Maybe<Scalars['String']['output']>;
  imageMobileUrl?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  products?: Maybe<Scalars['String']['output']>;
  sector: SectorNode;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductInTheWorldNodeConnection = {
  __typename?: 'ProductInTheWorldNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductInTheWorldNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ProductInTheWorldNode` and its cursor. */
export type ProductInTheWorldNodeEdge = {
  __typename?: 'ProductInTheWorldNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductInTheWorldNode>;
};

export type ProductNode = Node & {
  __typename?: 'ProductNode';
  claimSet: GlobalDataNodeConnection;
  code: Scalars['String']['output'];
  color: Scalars['String']['output'];
  /** Set as default product for its pattern (will be, for example, the default image appearing in listings) */
  default: Scalars['Boolean']['output'];
  /** Used to identify if there are available samples of this product */
  hasStock: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** size 1280px X 800px, please upload the image in format PNG */
  image?: Maybe<Scalars['String']['output']>;
  imageForProduction?: Maybe<Scalars['String']['output']>;
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  imageThumbSmall?: Maybe<Scalars['String']['output']>;
  instances: InstanceNodeConnection;
  /** Used to identify if this product is discontinued */
  isDiscontinued: Scalars['Boolean']['output'];
  /** Used to identify if this product is new */
  isNew: Scalars['Boolean']['output'];
  pantone?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  patternClass?: Maybe<ProductPatternClass>;
  predominantColors: Array<Scalars['String']['output']>;
  productonquickshipSet: ProductOnQuickshipNodeConnection;
  samples: SampleNodeConnection;
  /** Used to identify if Spradling is currently making samples of this product */
  samplesAvailable: Scalars['Boolean']['output'];
  stock: Scalars['String']['output'];
};


export type ProductNodeClaimSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  claimReason?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type ProductNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProductNodeProductonquickshipSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  quickshipCollection?: InputMaybe<Scalars['ID']['input']>;
};


export type ProductNodeSamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductNodeConnection = {
  __typename?: 'ProductNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ProductNode` and its cursor. */
export type ProductNodeEdge = {
  __typename?: 'ProductNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductNode>;
};

export type ProductOnQuickshipNode = Node & {
  __typename?: 'ProductOnQuickshipNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  product: ProductNode;
  quickshipCollection: QuickshipCollectionNode;
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductOnQuickshipNodeConnection = {
  __typename?: 'ProductOnQuickshipNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProductOnQuickshipNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProductOnQuickshipNode` and its cursor. */
export type ProductOnQuickshipNodeEdge = {
  __typename?: 'ProductOnQuickshipNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProductOnQuickshipNode>;
};

/** An enumeration. */
export enum ProductPatternClass {
  /** CP: Custom */
  Cp = 'CP',
  /** DS: Descontinue */
  Ds = 'DS',
  /** EX: Exclusive */
  Ex = 'EX',
  /** PL: Open Line */
  Pl = 'PL'
}

/** An enumeration. */
export enum ProfileBusiness {
  /** N/A */
  A = 'A_',
  /** CADENA */
  Cadena = 'CADENA',
  /** COLOMBIA */
  Colombia = 'COLOMBIA',
  /** EUROPE */
  Europe = 'EUROPE',
  /** LATAM */
  Latam = 'LATAM',
  /** MEXICO */
  Mexico = 'MEXICO',
  /** USA */
  Usa = 'USA'
}

export type ProfileNode = Node & {
  __typename?: 'ProfileNode';
  address: Scalars['String']['output'];
  business?: Maybe<ProfileBusiness>;
  city?: Maybe<CityNode>;
  company: Scalars['String']['output'];
  companyType?: Maybe<CompanyTypeNode>;
  countryId?: Maybe<Scalars['String']['output']>;
  delegation?: Maybe<Scalars['String']['output']>;
  geographicInstance: InstanceNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  market?: Maybe<Scalars['String']['output']>;
  phone: Scalars['String']['output'];
  position: Scalars['String']['output'];
  positionArea?: Maybe<Scalars['String']['output']>;
  receiveNews?: Maybe<Scalars['Boolean']['output']>;
  regionId?: Maybe<Scalars['String']['output']>;
  user: UserNode;
  zipCode?: Maybe<Scalars['String']['output']>;
};


export type ProfileNodeGeographicInstanceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type ProfileNodeConnection = {
  __typename?: 'ProfileNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProfileNode` and its cursor. */
export type ProfileNodeEdge = {
  __typename?: 'ProfileNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProfileNode>;
};

export type ProjectBasicData = {
  __typename?: 'ProjectBasicData';
  createdBy?: Maybe<Scalars['String']['output']>;
  project?: Maybe<PromotedProjectNode>;
};

export type ProjectCommentNode = Node & {
  __typename?: 'ProjectCommentNode';
  comment: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deleted: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  project: PromotedProjectNode;
  sendEmail: Scalars['Boolean']['output'];
  sentBy?: Maybe<UserNode>;
  status: Scalars['Boolean']['output'];
};

export type ProjectCommentNodeConnection = {
  __typename?: 'ProjectCommentNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectCommentNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProjectCommentNode` and its cursor. */
export type ProjectCommentNodeEdge = {
  __typename?: 'ProjectCommentNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProjectCommentNode>;
};

export type ProjectNode = Node & {
  __typename?: 'ProjectNode';
  client: Scalars['String']['output'];
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  country?: Maybe<CountryNode>;
  description: Scalars['String']['output'];
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  heroImage: Scalars['String']['output'];
  heroImageThumbLarge?: Maybe<Scalars['String']['output']>;
  heroImageThumbMedium?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instances: InstanceNodeConnection;
  listingImage: Scalars['String']['output'];
  listingImageThumbSmall?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  patterns: PatternNodeConnection;
  sector: SectorNode;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type ProjectNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProjectNodePatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type ProjectNodeConnection = {
  __typename?: 'ProjectNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ProjectNode` and its cursor. */
export type ProjectNodeEdge = {
  __typename?: 'ProjectNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProjectNode>;
};

/** An enumeration. */
export enum PromotedProjectAppearance {
  /** DOES NOT APPLY */
  DoesNotApply = 'DOES_NOT_APPLY',
  /** GEOMETRIC TYPE */
  Geometric = 'GEOMETRIC',
  /** LEATHER */
  Leather = 'LEATHER',
  /** PENDING TEXTURE */
  PendingTexture = 'PENDING_TEXTURE',
  /** PLAIN */
  Plain = 'PLAIN',
  /** SATIN */
  Satin = 'SATIN',
  /** SUEDE TYPE */
  SuedeType = 'SUEDE_TYPE',
  /** TEXTILE */
  Textile = 'TEXTILE',
  /** WOOD TYPE */
  WoodType = 'WOOD_TYPE'
}

export type PromotedProjectApproverNode = Node & {
  __typename?: 'PromotedProjectApproverNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  project: PromotedProjectNode;
  updatedAt: Scalars['DateTime']['output'];
};

export type PromotedProjectApproverNodeConnection = {
  __typename?: 'PromotedProjectApproverNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PromotedProjectApproverNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `PromotedProjectApproverNode` and its cursor. */
export type PromotedProjectApproverNodeEdge = {
  __typename?: 'PromotedProjectApproverNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PromotedProjectApproverNode>;
};

/** An enumeration. */
export enum PromotedProjectMarketSegment {
  /** Administration */
  Administration = 'ADMINISTRATION',
  /** Communication */
  Communication = 'COMMUNICATION',
  /** Construction and agriculture */
  ConstructionAndAgriculture = 'CONSTRUCTION_AND_AGRICULTURE',
  /** Contract and residential */
  ContractAndResidential = 'CONTRACT_AND_RESIDENTIAL',
  /** Footware and leather goods */
  FootwearAndLeatherGoods = 'FOOTWEAR_AND_LEATHER_GOODS',
  /** Marine */
  Marine = 'MARINE',
  /** Protection and apparel */
  ProtectionAndApparel = 'PROTECTION_AND_APPAREL',
  /** Transport */
  Transport = 'TRANSPORT',
  /** Wrapping and packaging */
  WrappingAndPackaging = 'WRAPPING_AND_PACKAGING'
}

/** An enumeration. */
export enum PromotedProjectNiche {
  /** ADVERTISING */
  Advertising = 'ADVERTISING',
  /** AERONAUTIC */
  Aeronautic = 'AERONAUTIC',
  /** AGRICULTURE */
  Agriculture = 'AGRICULTURE',
  /** ALL TERRAIN VEHICLES (ATV) */
  AllTerrainVehiclesAtv = 'ALL_TERRAIN_VEHICLES_ATV_',
  /** APPAREL */
  Apparel = 'APPAREL',
  /** BOATS */
  Boats = 'BOATS',
  /** BUSES */
  Buses = 'BUSES',
  /** CONSTRUCTION & ENGINEERING */
  ConstructionEngineering = 'CONSTRUCTION_ENGINEERING',
  /** CONTRACT */
  Contract = 'CONTRACT',
  /** CORPORATION USE */
  CorporationUse = 'CORPORATION_USE',
  /** FOOTWARE */
  Footware = 'FOOTWARE',
  /** HARDWARE */
  Hardware = 'HARDWARE',
  /** Institutional */
  Institucional = 'INSTITUCIONAL',
  /** LEATHER GOODS */
  LeatherGoods = 'LEATHER_GOODS',
  /** MOTORCYCLES */
  Motorcycles = 'MOTORCYCLES',
  /** PRINTPRESS */
  Printpress = 'PRINTPRESS',
  /** REC VEHICLES (RV) */
  RecVehiclesRv = 'REC_VEHICLES_RV_',
  /** RESIDENTIAL */
  Residential = 'RESIDENTIAL',
  /** REVESTIMIENTO */
  Revestimiento = 'REVESTIMIENTO',
  /** SPORT ACCESORIES */
  SportAccesories = 'SPORT_ACCESORIES',
  /** TECH PROTECTION */
  TechProtection = 'TECH_PROTECTION',
  /** TRAINS */
  Trains = 'TRAINS',
  /** TRUCKS */
  Trucks = 'TRUCKS',
  /** VEHICLES */
  Vehicles = 'VEHICLES',
  /** Wrapping and packaging */
  WrappingAndPackaging = 'WRAPPING_AND_PACKAGING'
}

export type PromotedProjectNode = Node & {
  __typename?: 'PromotedProjectNode';
  /** If it is active it will be shown in the API */
  active: Scalars['Boolean']['output'];
  appearance?: Maybe<PromotedProjectAppearance>;
  applicationByUser?: Maybe<Scalars['String']['output']>;
  applicationEn?: Maybe<Scalars['String']['output']>;
  applicationEs?: Maybe<Scalars['String']['output']>;
  authorization?: Maybe<Scalars['String']['output']>;
  authorizationByClient: Scalars['Boolean']['output'];
  authorizationDataForUse: Scalars['Boolean']['output'];
  authorizationFile?: Maybe<Scalars['String']['output']>;
  billingData: Scalars['Boolean']['output'];
  caption?: Maybe<Scalars['String']['output']>;
  city?: Maybe<CityNode>;
  comments: ProjectCommentNodeConnection;
  country?: Maybe<CountryNode>;
  createdBy?: Maybe<UserNode>;
  creditsForImages?: Maybe<Scalars['String']['output']>;
  declarationOfUse: Scalars['Boolean']['output'];
  finalClient?: Maybe<Array<Maybe<ProviderNode>>>;
  firstNotificationSent: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  /** size 1280px X 800px, please upload the image in format PNG */
  image?: Maybe<Scalars['String']['output']>;
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  imagesOnProject: ImageOnProjectNodeConnection;
  instances: InstanceNodeConnection;
  invoicedTo?: Maybe<Array<Maybe<ProviderNode>>>;
  isCompleteProject: Scalars['Boolean']['output'];
  link?: Maybe<Scalars['String']['output']>;
  manufacturer?: Maybe<Array<Maybe<ProviderNode>>>;
  marketSegment?: Maybe<PromotedProjectMarketSegment>;
  marketSegmentV2?: Maybe<MarketNode>;
  niche?: Maybe<PromotedProjectNiche>;
  notifiedPartialApproval: Scalars['Boolean']['output'];
  notifiedPublication: Scalars['Boolean']['output'];
  products: PatternNodeConnection;
  projectData: Scalars['Boolean']['output'];
  projectPhotos: Scalars['Boolean']['output'];
  promotedProjectApprovers?: Maybe<PromotedProjectApproverNode>;
  relatedProjects?: Maybe<PromotedProjectNodeConnection>;
  salesMember?: Maybe<Array<Maybe<ProviderNode>>>;
  sector?: Maybe<SectorNode>;
  segment?: Maybe<Scalars['String']['output']>;
  selledMts?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  specifiedBy?: Maybe<Array<Maybe<ProviderNode>>>;
  status: Scalars['Boolean']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  texture?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  unitOfMeasure?: Maybe<PromotedProjectUnitOfMeasure>;
  upholstery: IndoorUpholsteryNodeConnection;
  year?: Maybe<Scalars['Int']['output']>;
  zippedImages?: Maybe<Scalars['String']['output']>;
  zippedImagesMd5?: Maybe<Scalars['String']['output']>;
};


export type PromotedProjectNodeCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  project_Id?: InputMaybe<Scalars['ID']['input']>;
  sentBy_Id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PromotedProjectNodeImagesOnProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotedProjectNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type PromotedProjectNodeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type PromotedProjectNodeRelatedProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type PromotedProjectNodeUpholsteryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type PromotedProjectNodeConnection = {
  __typename?: 'PromotedProjectNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PromotedProjectNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `PromotedProjectNode` and its cursor. */
export type PromotedProjectNodeEdge = {
  __typename?: 'PromotedProjectNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<PromotedProjectNode>;
};

/** An enumeration. */
export enum PromotedProjectUnitOfMeasure {
  /** METERS */
  Mts = 'MTS',
  /** YARDS */
  Yards = 'YARDS'
}

export type ProviderNode = Node & {
  __typename?: 'ProviderNode';
  created: Scalars['DateTime']['output'];
  finalClient: PromotedProjectNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  invoicedTo: PromotedProjectNodeConnection;
  isCommercial: Scalars['Boolean']['output'];
  manufacturer: PromotedProjectNodeConnection;
  name: Scalars['String']['output'];
  salesMember: PromotedProjectNodeConnection;
  specifiedBy: PromotedProjectNodeConnection;
  updated: Scalars['DateTime']['output'];
};


export type ProviderNodeFinalClientArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProviderNodeInvoicedToArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProviderNodeManufacturerArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProviderNodeSalesMemberArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ProviderNodeSpecifiedByArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type ProviderNodeConnection = {
  __typename?: 'ProviderNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProviderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ProviderNode` and its cursor. */
export type ProviderNodeEdge = {
  __typename?: 'ProviderNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ProviderNode>;
};

export type Query = {
  __typename?: 'Query';
  /** The ID of the object */
  additionalTest?: Maybe<AdditionalTestsNode>;
  additionalTests?: Maybe<AdditionalTestsNodeConnection>;
  addressSuggestions?: Maybe<Array<Maybe<PlaceSuggestion>>>;
  bannerItem?: Maybe<BannerItemNode>;
  bannerItems?: Maybe<BannerItemNodeConnection>;
  blogCategories?: Maybe<BlogCategoryNodeConnection>;
  brand?: Maybe<BrandNode>;
  brands?: Maybe<BrandNodeConnection>;
  businessUnitAvailableForProjectSearch?: Maybe<Array<Maybe<InstanceNode>>>;
  /** The ID of the object */
  cardOfColor?: Maybe<CardOfColorsNode>;
  cardOfColors?: Maybe<CardOfColorsNodeConnection>;
  carousels?: Maybe<CarouselNodeConnection>;
  cart?: Maybe<CartNode>;
  carts?: Maybe<CartNodeConnection>;
  /** The ID of the object */
  catalogue?: Maybe<CatalogueNode>;
  catalogues?: Maybe<CatalogueNodeConnection>;
  certificates?: Maybe<CertificateNodeConnection>;
  cities?: Maybe<CityNodeConnection>;
  citiesAvailableForProjectSearch?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** The ID of the object */
  city?: Maybe<CityNode>;
  claimsReason?: Maybe<ClaimReasonNode>;
  claimsReasons?: Maybe<ClaimReasonNodeConnection>;
  colourFading?: Maybe<ColourFadingNode>;
  coloursFading?: Maybe<ColourFadingNodeConnection>;
  companyTypes?: Maybe<CompanyTypeNodeConnection>;
  comparisons?: Maybe<Scalars['JSONString']['output']>;
  /** The ID of the object */
  contactForm?: Maybe<ContactFormNode>;
  contactForms?: Maybe<ContactFormNodeConnection>;
  countries?: Maybe<CountryNodeConnection>;
  /** The ID of the object */
  country?: Maybe<CountryNode>;
  countryAvailableForProjectSearch?: Maybe<Array<Maybe<CountryNode>>>;
  currentCondition?: Maybe<CurrentConditionNode>;
  currentConditions?: Maybe<CurrentConditionNodeConnection>;
  differencesInHand?: Maybe<DifferencesInHandNode>;
  differencesInHands?: Maybe<DifferencesInHandNodeConnection>;
  differencesInMaterialDimension?: Maybe<DifferencesInMaterialDimensionsNode>;
  differencesInMaterialDimensions?: Maybe<DifferencesInMaterialDimensionsNodeConnection>;
  /** The ID of the object */
  document?: Maybe<DocumentNode>;
  documentCategories?: Maybe<DocumentCategoryNodeConnection>;
  documentCategory?: Maybe<DocumentCategoryNode>;
  documents?: Maybe<DocumentNodeConnection>;
  domains?: Maybe<DomainNodesConnection>;
  downloadFormats?: Maybe<DownloadResult>;
  /** The ID of the object */
  downloadLog?: Maybe<DownloadLogNode>;
  downloadLogs?: Maybe<DownloadLogNodeConnection>;
  /** The ID of the object */
  ecoSection?: Maybe<EcoSectionNode>;
  ecoSections?: Maybe<EcoSectionNodeConnection>;
  embossingNameSelect?: Maybe<EmbossingType>;
  embossingSelect?: Maybe<EmbossingType>;
  facialDefect?: Maybe<FacialDefectsNode>;
  facialDefects?: Maybe<FacialDefectsNodeConnection>;
  /** The ID of the object */
  faq?: Maybe<FaqNode>;
  faqs?: Maybe<FaqNodeConnection>;
  filtersByCollection?: Maybe<Scalars['GenericScalar']['output']>;
  filtersByInstance?: Maybe<Scalars['GenericScalar']['output']>;
  flameRetardancyTests?: Maybe<FlameRetardancyTestNodeConnection>;
  flatpage?: Maybe<FlatpageNode>;
  flatpages?: Maybe<FlatpageNodeConnection>;
  gaugeRangeLimits?: Maybe<Scalars['GenericScalar']['output']>;
  generalWeightLimits?: Maybe<Scalars['GenericScalar']['output']>;
  generalWidthLimits?: Maybe<Scalars['GenericScalar']['output']>;
  getPlaceDetails?: Maybe<PlaceDetails>;
  globalData?: Maybe<GlobalDataNode>;
  globalDatas?: Maybe<GlobalDataNodeConnection>;
  glossarySearch?: Maybe<GlossaryWordNodeConnection>;
  glossaryTypes?: Maybe<GlossaryTypeNodeConnection>;
  /** The ID of the object */
  homeSlider?: Maybe<HomeSliderNode>;
  homeSliders?: Maybe<HomeSliderNodeConnection>;
  /** The ID of the object */
  indoorUpholsteries?: Maybe<IndoorUpholsteryNode>;
  indoorUpholstery?: Maybe<IndoorUpholsteryNodeConnection>;
  inspiration?: Maybe<InspirationNodeConnection>;
  /** The ID of the object */
  inspirations?: Maybe<InspirationNode>;
  /** The ID of the object */
  instance?: Maybe<InstanceNode>;
  instances?: Maybe<InstanceNodeConnection>;
  isEmailAvailable?: Maybe<EmailAvailabilityType>;
  jobCompanies?: Maybe<JobCompanyNodeConnection>;
  jobCompanyWebsite?: Maybe<JobCompanyWebsiteNode>;
  jobDepartments?: Maybe<JobDepartmentNodeConnection>;
  jobHours?: Maybe<JobHoursNodeConnection>;
  jobLevels?: Maybe<JobLevelNodeConnection>;
  jobPosition?: Maybe<JobPositionNode>;
  jobPositions?: Maybe<JobPositionNodeConnection>;
  jobsCities?: Maybe<CityNodeConnection>;
  jobsCountries?: Maybe<CountryNodeConnection>;
  jobsGallery?: Maybe<ProductInTheWorldNodeConnection>;
  latestPrivacyPolicy?: Maybe<PrivacyPolicyNode>;
  listEmbossingsSelect?: Maybe<Array<Maybe<EmbossingType>>>;
  lookupWords?: Maybe<GlossaryWordNodeConnection>;
  market?: Maybe<MarketNode>;
  markets?: Maybe<MarketNodeConnection>;
  materialResistance?: Maybe<MaterialResistanceNode>;
  materialResistances?: Maybe<MaterialResistanceNodeConnection>;
  me?: Maybe<UserNode>;
  member?: Maybe<CommercialMemberNode>;
  members?: Maybe<CommercialMemberNodeConnection>;
  /** The ID of the object */
  memo?: Maybe<MemoNode>;
  memos?: Maybe<MemoNodeConnection>;
  mockData?: Maybe<Scalars['String']['output']>;
  myProjectComments?: Maybe<Array<Maybe<ProjectCommentNode>>>;
  myPromotedProjects?: Maybe<PromotedProjectNodeConnection>;
  /** The ID of the object */
  office?: Maybe<OfficeNode>;
  offices?: Maybe<OfficeNodeConnection>;
  /** The ID of the object */
  oracleRequest?: Maybe<OracleRequestNode>;
  oracleRequests?: Maybe<OracleRequestNodeConnection>;
  order?: Maybe<OrderNode>;
  orderStatuses?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  orders?: Maybe<PaginatedOrderType>;
  paginatedPatterns?: Maybe<_PaginatedField>;
  pattern?: Maybe<PatternNode>;
  patternBySlug?: Maybe<PatternNode>;
  patternFacetCounts?: Maybe<PatternFacetCountsType>;
  patterns?: Maybe<PatternNodeConnection>;
  pleat?: Maybe<PleatsNode>;
  pleats?: Maybe<PleatsNodeConnection>;
  post?: Maybe<PostNode>;
  posts?: Maybe<PostNodeConnection>;
  /** The ID of the object */
  product?: Maybe<ProductNode>;
  products?: Maybe<ProductConnection>;
  project?: Maybe<ProjectNode>;
  /** The ID of the object */
  projectComment?: Maybe<ProjectCommentNode>;
  projectComments?: Maybe<ProjectCommentNodeConnection>;
  projectSegments?: Maybe<Array<Maybe<SimpleTitleValue>>>;
  projectTextures?: Maybe<Array<Maybe<SimpleTitleValue>>>;
  projects?: Maybe<ProjectNodeConnection>;
  promotedProject?: Maybe<PromotedProjectNode>;
  /** The ID of the object */
  promotedProjectApprover?: Maybe<PromotedProjectApproverNode>;
  promotedProjectApprovers?: Maybe<PromotedProjectApproverNodeConnection>;
  promotedProjects?: Maybe<PromotedProjectNodeConnection>;
  /** The ID of the object */
  provider?: Maybe<ProviderNode>;
  providers?: Maybe<ProviderNodeConnection>;
  quickshipCollection?: Maybe<QuickshipCollectionNode>;
  quickshipCollections?: Maybe<QuickshipCollectionNodeConnection>;
  quickshipProducts?: Maybe<ProductOnQuickshipNodeConnection>;
  /** The ID of the object */
  quotation?: Maybe<QuotationNode>;
  quotations?: Maybe<QuotationNodeConnection>;
  referencesAvailableForProjectSearch?: Maybe<Array<Maybe<PatternNode>>>;
  /** The ID of the object */
  region?: Maybe<RegionNode>;
  regions?: Maybe<RegionNodeConnection>;
  relatedPatterns?: Maybe<Array<Maybe<PatternNode>>>;
  /** The ID of the object */
  sample?: Maybe<SampleNode>;
  samples?: Maybe<SampleNodeConnection>;
  search?: Maybe<Scalars['GenericScalar']['output']>;
  /** The ID of the object */
  sector?: Maybe<SectorNode>;
  sectors?: Maybe<SectorNodeConnection>;
  service?: Maybe<ServiceNode>;
  services?: Maybe<ServiceNodeConnection>;
  staining?: Maybe<StainingNode>;
  stains?: Maybe<StainingNodeConnection>;
  /** The ID of the object */
  store?: Maybe<StoreNode>;
  stores?: Maybe<StoreNodeConnection>;
  surfaceDeterioration?: Maybe<SurfaceDeteriorationNode>;
  surfacesDeterioration?: Maybe<SurfaceDeteriorationNodeConnection>;
  sustainabilityReports?: Maybe<SustainabilityReportsNodeConnection>;
  team?: Maybe<CommercialTeamNode>;
  teams?: Maybe<CommercialTeamNodeConnection>;
  trend?: Maybe<TrendNode>;
  trends?: Maybe<TrendNodeConnection>;
  uidAndTokenCheck?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<UserNode>;
  userAddresses?: Maybe<Array<Maybe<UserAddressNode>>>;
  users?: Maybe<UserNodeConnection>;
  vacancies?: Maybe<VacantNodeConnection>;
  vacant?: Maybe<VacantNode>;
  visualDefect?: Maybe<VisualDefectsNode>;
  visualDefects?: Maybe<VisualDefectsNodeConnection>;
  /** The ID of the object */
  websiteHome?: Maybe<WebsiteHomeNode>;
  websiteHomes?: Maybe<WebsiteHomeNodeConnection>;
  wishlist?: Maybe<WishlistNode>;
  wishlists?: Maybe<WishlistNodeConnection>;
};


export type QueryAdditionalTestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAdditionalTestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAddressSuggestionsArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['ID']['input'];
  postalCode?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBannerItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug: Scalars['String']['input'];
};


export type QueryBannerItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBlogCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBrandArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryBrandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCardOfColorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardOfColorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCarouselsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domain: Scalars['String']['input'];
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCartArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  instanceId: Scalars['ID']['input'];
};


export type QueryCartsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  created_Gte?: InputMaybe<Scalars['DateTime']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCatalogueArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCataloguesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCertificatesArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  domainsUrl: Scalars['String']['input'];
  domains_Url?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasVacancies?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCityArgs = {
  id: Scalars['ID']['input'];
};


export type QueryClaimsReasonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClaimsReasonsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  reasons?: InputMaybe<Scalars['String']['input']>;
};


export type QueryColourFadingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryColoursFadingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryComparisonsArgs = {
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryContactFormArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContactFormsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alternateNames?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Icontains?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Istartswith?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fullnameIcontains?: InputMaybe<Scalars['String']['input']>;
  hasOffices?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryCountryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCurrentConditionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrentConditionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  conditions?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  installedIn?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDifferencesInHandArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDifferencesInHandsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDifferencesInMaterialDimensionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDifferencesInMaterialDimensionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDocumentCategoriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  newCategory?: InputMaybe<Scalars['String']['input']>;
  newCategory_Icontains?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryDomainsArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDownloadLogArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDownloadLogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  downloader?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEcoSectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEcoSectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEmbossingNameSelectArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEmbossingSelectArgs = {
  id?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFacialDefectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFacialDefectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFaqArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFaqsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFiltersByCollectionArgs = {
  language: Scalars['String']['input'];
  quickshipCollection: Scalars['ID']['input'];
};


export type QueryFiltersByInstanceArgs = {
  instanceId: Scalars['ID']['input'];
  lang: Scalars['String']['input'];
};


export type QueryFlameRetardancyTestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFlatpageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryFlatpagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPlaceDetailsArgs = {
  instanceId: Scalars['ID']['input'];
  placeId: Scalars['String']['input'];
};


export type QueryGlobalDataArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGlobalDatasArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  claimReason?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGlossarySearchArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGlossaryTypesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHomeSliderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryHomeSlidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  tag?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIndoorUpholsteriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryIndoorUpholsteryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryInspirationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryInspirationsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInstanceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIsEmailAvailableArgs = {
  email: Scalars['String']['input'];
  instanceId: Scalars['ID']['input'];
};


export type QueryJobCompaniesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobCompanyWebsiteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  lang: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};


export type QueryJobDepartmentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobHoursArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobLevelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobPositionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryJobsCitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  countryId: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  hasVacancies?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryJobsCountriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alternateNames?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Icontains?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Istartswith?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  continent?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  fullnameIcontains?: InputMaybe<Scalars['String']['input']>;
  hasOffices?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryJobsGalleryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLookupWordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  text: Scalars['String']['input'];
  type?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMarketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMarketsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMaterialResistanceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMaterialResistancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMembersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_Icontains?: InputMaybe<Scalars['String']['input']>;
  whatsapp?: InputMaybe<Scalars['String']['input']>;
  whatsapp_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemoArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMemosArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['String']['input']>;
  size_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMyPromotedProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOfficeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOfficesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  business?: InputMaybe<Scalars['String']['input']>;
  business_Icontains?: InputMaybe<Scalars['String']['input']>;
  business_Istartswith?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryOracleRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOracleRequestsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryOrderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryOrdersArgs = {
  createdAfter?: InputMaybe<Scalars['String']['input']>;
  idIcontains?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaginatedPatternsArgs = {
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['Float']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['Float']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['Float']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['Float']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatternArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPatternBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryPatternFacetCountsArgs = {
  filters?: InputMaybe<Scalars['GenericScalar']['input']>;
  lang: Scalars['String']['input'];
};


export type QueryPatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPleatArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPleatsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPostsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProductArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectCommentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  project_Id?: InputMaybe<Scalars['ID']['input']>;
  sentBy_Id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryProjectSegmentsArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectTexturesArgs = {
  lang?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['ID']['input']>;
  sector_Market_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type QueryPromotedProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPromotedProjectApproverArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPromotedProjectApproversArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  project_Title?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPromotedProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  authorizations?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  countries?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  lang?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  marketSegments?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProviderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProvidersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isCommercial?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuickshipCollectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuickshipCollectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuickshipProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  antibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  antistatic?: InputMaybe<Scalars['Boolean']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  bleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  cleanable?: InputMaybe<Scalars['Boolean']['input']>;
  denimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  designIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  formaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  frFree?: InputMaybe<Scalars['Boolean']['input']>;
  freeOfAntimicrobial?: InputMaybe<Scalars['Boolean']['input']>;
  heatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  ipaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  mildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  mpFree?: InputMaybe<Scalars['Boolean']['input']>;
  neo?: InputMaybe<Scalars['Boolean']['input']>;
  polycarbonateResin?: InputMaybe<Scalars['Boolean']['input']>;
  prop65?: InputMaybe<Scalars['Boolean']['input']>;
  quickshipCollection?: InputMaybe<Scalars['ID']['input']>;
  scratchResistant?: InputMaybe<Scalars['Boolean']['input']>;
  sectorIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  waterResistance?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryQuotationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryQuotationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  alternateNames?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Icontains?: InputMaybe<Scalars['String']['input']>;
  alternateNames_Istartswith?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  getByNameOrAltNames?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryRelatedPatternsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  patternId: Scalars['ID']['input'];
};


export type QuerySampleArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySearchArgs = {
  instance: Scalars['String']['input'];
  language: Scalars['String']['input'];
  text: Scalars['String']['input'];
};


export type QuerySectorArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySectorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  market?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServicesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryStainingArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryStainsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryStoreArgs = {
  id: Scalars['ID']['input'];
};


export type QueryStoresArgs = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  patterns?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySurfaceDeteriorationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySurfacesDeteriorationArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySustainabilityReportsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTeamArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTeamsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  description_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  members_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
  title_Istartswith?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrendArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTrendsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUidAndTokenCheckArgs = {
  token: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUserAddressesArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasCreateProjectAccess?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryVacanciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVacantArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryVisualDefectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryVisualDefectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWebsiteHomeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryWebsiteHomesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryWishlistArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryWishlistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type QuickshipCollectionNode = Node & {
  __typename?: 'QuickshipCollectionNode';
  /** If it is active it will be shown in the api */
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  imageThumb?: Maybe<Scalars['String']['output']>;
  isDeleted: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  /** The order of the collection. */
  order: Scalars['Int']['output'];
  productonquickshipSet: ProductOnQuickshipNodeConnection;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type QuickshipCollectionNodeProductonquickshipSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  quickshipCollection?: InputMaybe<Scalars['ID']['input']>;
};

export type QuickshipCollectionNodeConnection = {
  __typename?: 'QuickshipCollectionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuickshipCollectionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuickshipCollectionNode` and its cursor. */
export type QuickshipCollectionNodeEdge = {
  __typename?: 'QuickshipCollectionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<QuickshipCollectionNode>;
};

export type QuotationNode = Node & {
  __typename?: 'QuotationNode';
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  pattern: PatternNode;
  user: UserNode;
};

export type QuotationNodeConnection = {
  __typename?: 'QuotationNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<QuotationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `QuotationNode` and its cursor. */
export type QuotationNodeEdge = {
  __typename?: 'QuotationNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<QuotationNode>;
};

export type RefreshInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type RefreshPayload = {
  __typename?: 'RefreshPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type RegionNode = Node & {
  __typename?: 'RegionNode';
  alternateNames?: Maybe<Scalars['String']['output']>;
  citySet: CityNodeConnection;
  country: CountryNode;
  displayName: Scalars['String']['output'];
  geonameCode?: Maybe<Scalars['String']['output']>;
  geonameId?: Maybe<Scalars['Int']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameAscii: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};


export type RegionNodeCitySetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasVacancies?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  region?: InputMaybe<Scalars['ID']['input']>;
};

export type RegionNodeConnection = {
  __typename?: 'RegionNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<RegionNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `RegionNode` and its cursor. */
export type RegionNodeEdge = {
  __typename?: 'RegionNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<RegionNode>;
};

export type RegisterSpecSheetDownloadInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patternId: Scalars['ID']['input'];
};

export type RegisterSpecSheetDownloadPayload = {
  __typename?: 'RegisterSpecSheetDownloadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  registered?: Maybe<Scalars['Boolean']['output']>;
};

export type RemoveFromCartInput = {
  cartId: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  instanceId: Scalars['String']['input'];
  itemId: Scalars['String']['input'];
};

export type RemoveFromCartPayload = {
  __typename?: 'RemoveFromCartPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type ResetPasswordInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
  uid: Scalars['String']['input'];
};

export type ResetPasswordPayload = {
  __typename?: 'ResetPasswordPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  passwordChanged?: Maybe<Scalars['Boolean']['output']>;
  validationErrors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type ResidualIndentationTestNode = Node & {
  __typename?: 'ResidualIndentationTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type ResistanceToChemicalsTestNode = Node & {
  __typename?: 'ResistanceToChemicalsTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['String']['output']>;
  substance: Scalars['String']['output'];
};

export type SampleContactNode = Node & {
  __typename?: 'SampleContactNode';
  address: Scalars['String']['output'];
  city?: Maybe<CityNode>;
  companyName: Scalars['String']['output'];
  companyTypeInstance?: Maybe<CompanyTypeNode>;
  created: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  lastName: Scalars['String']['output'];
  marketWebUsa?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  phone: Scalars['String']['output'];
  position: Scalars['String']['output'];
  source?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type SampleContactNodeConnection = {
  __typename?: 'SampleContactNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SampleContactNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SampleContactNode` and its cursor. */
export type SampleContactNodeEdge = {
  __typename?: 'SampleContactNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SampleContactNode>;
};

export type SampleNode = Node & {
  __typename?: 'SampleNode';
  created: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  products: ProductNodeConnection;
  user: UserNode;
};


export type SampleNodeProductsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  color_Icontains?: InputMaybe<Scalars['String']['input']>;
  color_Istartswith?: InputMaybe<Scalars['String']['input']>;
  default?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isDiscontinued?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  predominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
};

export type SampleNodeConnection = {
  __typename?: 'SampleNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SampleNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SampleNode` and its cursor. */
export type SampleNodeEdge = {
  __typename?: 'SampleNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SampleNode>;
};

export type SeamFatigueTestNode = Node & {
  __typename?: 'SeamFatigueTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type SeamStrengthTestNode = Node & {
  __typename?: 'SeamStrengthTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type SectorFacetCountType = {
  __typename?: 'SectorFacetCountType';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type SectorNode = Node & {
  __typename?: 'SectorNode';
  contacts: ContactNodeConnection;
  description: Scalars['String']['output'];
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  formProposals: FormProposalNodeConnection;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageAlt: Scalars['String']['output'];
  imageAltCa?: Maybe<Scalars['String']['output']>;
  imageAltDe?: Maybe<Scalars['String']['output']>;
  imageAltEn?: Maybe<Scalars['String']['output']>;
  imageAltEs?: Maybe<Scalars['String']['output']>;
  imageAltFr?: Maybe<Scalars['String']['output']>;
  imageAltIt?: Maybe<Scalars['String']['output']>;
  imageAltPl?: Maybe<Scalars['String']['output']>;
  imageAltUk?: Maybe<Scalars['String']['output']>;
  imageCa?: Maybe<Scalars['String']['output']>;
  imageDe?: Maybe<Scalars['String']['output']>;
  imageEn?: Maybe<Scalars['String']['output']>;
  imageEs?: Maybe<Scalars['String']['output']>;
  imageFr?: Maybe<Scalars['String']['output']>;
  imageIt?: Maybe<Scalars['String']['output']>;
  imagePl?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  imageUk?: Maybe<Scalars['String']['output']>;
  market: MarketNode;
  metaDescriptions?: Maybe<Scalars['String']['output']>;
  metaDescriptionsCa?: Maybe<Scalars['String']['output']>;
  metaDescriptionsDe?: Maybe<Scalars['String']['output']>;
  metaDescriptionsEn?: Maybe<Scalars['String']['output']>;
  metaDescriptionsEs?: Maybe<Scalars['String']['output']>;
  metaDescriptionsFr?: Maybe<Scalars['String']['output']>;
  metaDescriptionsIt?: Maybe<Scalars['String']['output']>;
  metaDescriptionsPl?: Maybe<Scalars['String']['output']>;
  metaDescriptionsUk?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  pageTitleCa?: Maybe<Scalars['String']['output']>;
  pageTitleDe?: Maybe<Scalars['String']['output']>;
  pageTitleEn?: Maybe<Scalars['String']['output']>;
  pageTitleEs?: Maybe<Scalars['String']['output']>;
  pageTitleFr?: Maybe<Scalars['String']['output']>;
  pageTitleIt?: Maybe<Scalars['String']['output']>;
  pageTitlePl?: Maybe<Scalars['String']['output']>;
  pageTitleUk?: Maybe<Scalars['String']['output']>;
  patternSet?: Maybe<PatternNodeConnection>;
  productintheworldSet: ProductInTheWorldNodeConnection;
  projects: ProjectNodeConnection;
  projectsSector: PromotedProjectNodeConnection;
  sector: ServiceContactNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type SectorNodeContactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type SectorNodeFormProposalsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SectorNodePatternSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type SectorNodeProductintheworldSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type SectorNodeProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  relatedWith?: InputMaybe<Scalars['String']['input']>;
  sector?: InputMaybe<Scalars['ID']['input']>;
  sector_Market_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type SectorNodeProjectsSectorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type SectorNodeSectorArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type SectorNodeConnection = {
  __typename?: 'SectorNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SectorNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SectorNode` and its cursor. */
export type SectorNodeEdge = {
  __typename?: 'SectorNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SectorNode>;
};

export type SendDataSheetByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  patternId: Scalars['ID']['input'];
};

export type SendDataSheetByEmailPayload = {
  __typename?: 'SendDataSheetByEmailPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  emailSent?: Maybe<Scalars['Boolean']['output']>;
};

export type ServiceContactNode = Node & {
  __typename?: 'ServiceContactNode';
  city?: Maybe<CityNode>;
  companyName?: Maybe<Scalars['String']['output']>;
  companyTypeInstance?: Maybe<CompanyTypeNode>;
  created: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  lastName?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  pattern?: Maybe<PatternNode>;
  phone: Scalars['String']['output'];
  sector?: Maybe<SectorNode>;
  service?: Maybe<ServiceNode>;
  source?: Maybe<Scalars['String']['output']>;
  zipCode?: Maybe<Scalars['String']['output']>;
};

export type ServiceContactNodeConnection = {
  __typename?: 'ServiceContactNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceContactNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ServiceContactNode` and its cursor. */
export type ServiceContactNodeEdge = {
  __typename?: 'ServiceContactNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ServiceContactNode>;
};

export type ServiceNode = Node & {
  __typename?: 'ServiceNode';
  content: Scalars['String']['output'];
  contentCa?: Maybe<Scalars['String']['output']>;
  contentDe?: Maybe<Scalars['String']['output']>;
  contentEn?: Maybe<Scalars['String']['output']>;
  contentEs?: Maybe<Scalars['String']['output']>;
  contentFr?: Maybe<Scalars['String']['output']>;
  contentIt?: Maybe<Scalars['String']['output']>;
  contentPl?: Maybe<Scalars['String']['output']>;
  contentUk?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  imageAlt?: Maybe<Scalars['String']['output']>;
  imageAltCa?: Maybe<Scalars['String']['output']>;
  imageAltDe?: Maybe<Scalars['String']['output']>;
  imageAltEn?: Maybe<Scalars['String']['output']>;
  imageAltEs?: Maybe<Scalars['String']['output']>;
  imageAltFr?: Maybe<Scalars['String']['output']>;
  imageAltIt?: Maybe<Scalars['String']['output']>;
  imageAltPl?: Maybe<Scalars['String']['output']>;
  imageAltUk?: Maybe<Scalars['String']['output']>;
  imageThumbLarge?: Maybe<Scalars['String']['output']>;
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  instances: InstanceNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  order: Scalars['Int']['output'];
  service: ServiceContactNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type ServiceNodeInstancesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type ServiceNodeServiceArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_Icontains?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  firstName_Icontains?: InputMaybe<Scalars['String']['input']>;
  instance?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  lastName_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type ServiceNodeConnection = {
  __typename?: 'ServiceNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `ServiceNode` and its cursor. */
export type ServiceNodeEdge = {
  __typename?: 'ServiceNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<ServiceNode>;
};

export type SetTestNode = Node & {
  __typename?: 'SetTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type SetVisibleAtLibraryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  requestId: Scalars['ID']['input'];
};

export type SetVisibleAtLibraryPayload = {
  __typename?: 'SetVisibleAtLibraryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  result?: Maybe<Scalars['Boolean']['output']>;
};

export type ShippingAddressNode = {
  __typename?: 'ShippingAddressNode';
  address: Scalars['String']['output'];
  city?: Maybe<CityNode>;
  cityName?: Maybe<Scalars['String']['output']>;
  company: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  /** Indicates whether this is the main/default shipping address. */
  mainAddress: Scalars['Boolean']['output'];
  order: OrderNode;
  source: Scalars['String']['output'];
  zipCode?: Maybe<Scalars['Int']['output']>;
};

export type SimpleTitleValue = {
  __typename?: 'SimpleTitleValue';
  title?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type SlipResistanceOfFlooringTestNode = Node & {
  __typename?: 'SlipResistanceOfFlooringTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  dry: Scalars['String']['output'];
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  showLogo: Scalars['Boolean']['output'];
  wet: Scalars['String']['output'];
};

export type StainingNode = Node & {
  __typename?: 'StainingNode';
  claim?: Maybe<GlobalDataNode>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  knowTheInstructions: Scalars['Boolean']['output'];
  protectTheProduct?: Maybe<StainingProtectTheProduct>;
  typeOfStain?: Maybe<Scalars['String']['output']>;
  whichProductUse?: Maybe<Scalars['String']['output']>;
};

export type StainingNodeConnection = {
  __typename?: 'StainingNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StainingNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `StainingNode` and its cursor. */
export type StainingNodeEdge = {
  __typename?: 'StainingNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StainingNode>;
};

/** An enumeration. */
export enum StainingProtectTheProduct {
  /** cover */
  Cover = 'COVER',
  /** other */
  Other = 'OTHER',
  /** outside not protection */
  OutsideNotProtection = 'OUTSIDE_NOT_PROTECTION',
  /** stored inside */
  StoredInside = 'STORED_INSIDE'
}

export type StitchingStrengthTestNode = Node & {
  __typename?: 'StitchingStrengthTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type StoreAnonimalOrderInput = {
  acceptTerms: Scalars['Boolean']['input'];
  address: Scalars['String']['input'];
  anonimalSamples?: InputMaybe<Array<InputMaybe<AnonimalSampleObjectType>>>;
  city: Scalars['String']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyType: Scalars['ID']['input'];
  country: Scalars['ID']['input'];
  email: Scalars['String']['input'];
  instance: Scalars['ID']['input'];
  lang?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  postalCode: Scalars['String']['input'];
  region: Scalars['ID']['input'];
  source: Scalars['String']['input'];
  surname: Scalars['String']['input'];
};

export type StoreAnonimalOrderPayload = {
  __typename?: 'StoreAnonimalOrderPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type StoreLeadInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  colors?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  comments?: InputMaybe<Scalars['String']['input']>;
  companyName?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
  email: Scalars['String']['input'];
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mailchimpList?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  request?: InputMaybe<Scalars['String']['input']>;
  source: Scalars['String']['input'];
  type?: InputMaybe<Scalars['String']['input']>;
};

export type StoreLeadPayload = {
  __typename?: 'StoreLeadPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  lead?: Maybe<LeadNode>;
};

export type StoreMedicalFilmSolutionInput = {
  acceptedTerms: Scalars['Boolean']['input'];
  city?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type StoreMedicalFilmSolutionPayload = {
  __typename?: 'StoreMedicalFilmSolutionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  medicalFilmSolution?: Maybe<MedicalFilmSolutionNode>;
};

export type StoreNode = Node & {
  __typename?: 'StoreNode';
  active: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  businessHours: BusinessHourNodeConnection;
  city: CityNode;
  email?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  patterns: PatternNodeConnection;
  phoneNumbers?: Maybe<Scalars['String']['output']>;
  sectors?: Maybe<SectorNodeConnection>;
  warehouse?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};


export type StoreNodeBusinessHoursArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  store?: InputMaybe<Scalars['ID']['input']>;
};


export type StoreNodePatternsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};


export type StoreNodeSectorsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  market?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type StoreNodeConnection = {
  __typename?: 'StoreNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<StoreNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `StoreNode` and its cursor. */
export type StoreNodeEdge = {
  __typename?: 'StoreNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<StoreNode>;
};

export type StretchTestNode = Node & {
  __typename?: 'StretchTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type SurfaceDeteriorationNode = Node & {
  __typename?: 'SurfaceDeteriorationNode';
  claim?: Maybe<GlobalDataNode>;
  describeProcessUsed?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  suggestedInstructions?: Maybe<Scalars['Boolean']['output']>;
  theMaterialContaminated?: Maybe<Scalars['String']['output']>;
};

export type SurfaceDeteriorationNodeConnection = {
  __typename?: 'SurfaceDeteriorationNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SurfaceDeteriorationNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `SurfaceDeteriorationNode` and its cursor. */
export type SurfaceDeteriorationNodeEdge = {
  __typename?: 'SurfaceDeteriorationNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SurfaceDeteriorationNode>;
};

export type SustainabilityNode = Node & {
  __typename?: 'SustainabilityNode';
  aPlusEmissions: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  aPlusEmissionsCertificateFile: Scalars['String']['output'];
  aPlusEmissionsCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  aPlusEmissionsLogo?: Maybe<Scalars['String']['output']>;
  aPlusEmissionsNotExpires: Scalars['Boolean']['output'];
  antimicrobial?: Maybe<Scalars['String']['output']>;
  backingProfile: Scalars['Boolean']['output'];
  backingProfileLogo?: Maybe<Scalars['String']['output']>;
  biobasedBioplasticizer: Scalars['Boolean']['output'];
  biobasedPvcBioAttributed: Scalars['Boolean']['output'];
  biobasedPvcBioAttributedLogo?: Maybe<Scalars['String']['output']>;
  biobasedSubstrateNext: Scalars['Boolean']['output'];
  carbonFootprintMax?: Maybe<Scalars['Int']['output']>;
  carbonFootprintMin?: Maybe<Scalars['Int']['output']>;
  carbonFootprintRange?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  carbonFootprintRangeCertificateFile: Scalars['String']['output'];
  carbonFootprintRangeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  carbonFootprintRangeNotExpires: Scalars['Boolean']['output'];
  chlorineAndHalogenFree: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  chlorineAndHalogenFreeCertificateFile: Scalars['String']['output'];
  chlorineAndHalogenFreeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  chlorineAndHalogenFreeNotExpires: Scalars['Boolean']['output'];
  cytotoxicity?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  cytotoxicityCertificateFile: Scalars['String']['output'];
  cytotoxicityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  cytotoxicityNotExpires: Scalars['Boolean']['output'];
  /** EPD */
  epd: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  epdCertificateFile: Scalars['String']['output'];
  epdCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  epdNotExpires: Scalars['Boolean']['output'];
  frFree?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  frFreeCertificateFile: Scalars['String']['output'];
  frFreeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  frFreeNotExpires: Scalars['Boolean']['output'];
  globalRecycledStandard: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  globalRecycledStandardCertificateFile: Scalars['String']['output'];
  globalRecycledStandardCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  globalRecycledStandardLogo?: Maybe<Scalars['String']['output']>;
  globalRecycledStandardNotExpires: Scalars['Boolean']['output'];
  greenguard: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  greenguardCertificateFile: Scalars['String']['output'];
  greenguardCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  greenguardLogo?: Maybe<Scalars['String']['output']>;
  greenguardNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  indoorAirQuality: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  indoorAirQualityCertificateFile: Scalars['String']['output'];
  indoorAirQualityCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  indoorAirQualityLogo?: Maybe<Scalars['String']['output']>;
  indoorAirQualityNotExpires: Scalars['Boolean']['output'];
  /** Leed */
  leed: Scalars['Boolean']['output'];
  leedLogo?: Maybe<Scalars['String']['output']>;
  mpFree?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  mpFreeCertificateFile: Scalars['String']['output'];
  mpFreeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  mpFreeNotExpires: Scalars['Boolean']['output'];
  oekoTex: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  oekoTexCertificateFile: Scalars['String']['output'];
  oekoTexCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  oekoTexNotExpires: Scalars['Boolean']['output'];
  packagingFscLogo?: Maybe<Scalars['String']['output']>;
  pattern: PatternNode;
  phthalateFreeProduct?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  phthalateFreeProductCertificateFile: Scalars['String']['output'];
  phthalateFreeProductCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  phthalateFreeProductNotExpires: Scalars['Boolean']['output'];
  plasticizerFree: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  plasticizerFreeCertificateFile: Scalars['String']['output'];
  plasticizerFreeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  plasticizerFreeNotExpires: Scalars['Boolean']['output'];
  /** Prop 65 compliant */
  prop65: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  prop65CertificateFile: Scalars['String']['output'];
  prop65CertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  prop65Logo?: Maybe<Scalars['String']['output']>;
  prop65NotExpires: Scalars['Boolean']['output'];
  reach: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  reachCertificateFile: Scalars['String']['output'];
  reachCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  reachLogo?: Maybe<Scalars['String']['output']>;
  reachNotExpires: Scalars['Boolean']['output'];
  rohs: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  rohsCertificateFile: Scalars['String']['output'];
  rohsCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  rohsLogo?: Maybe<Scalars['String']['output']>;
  rohsNotExpires: Scalars['Boolean']['output'];
  skinSafeIrritation?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  skinSafeIrritationCertificateFile: Scalars['String']['output'];
  skinSafeIrritationCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  skinSafeIrritationNotExpires: Scalars['Boolean']['output'];
  skinSafeSensitization?: Maybe<Scalars['String']['output']>;
  /** This file must be a PDF */
  skinSafeSensitizationCertificateFile: Scalars['String']['output'];
  skinSafeSensitizationCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  skinSafeSensitizationNotExpires: Scalars['Boolean']['output'];
  solventFree: Scalars['Boolean']['output'];
  /** This file must be a PDF */
  solventFreeCertificateFile: Scalars['String']['output'];
  solventFreeCertificateFileExpires?: Maybe<Scalars['Date']['output']>;
  solventFreeNotExpires: Scalars['Boolean']['output'];
  /** Well */
  well: Scalars['Boolean']['output'];
  wellLogo?: Maybe<Scalars['String']['output']>;
};

export type SustainabilityReportsNode = Node & {
  __typename?: 'SustainabilityReportsNode';
  date?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  imageThumbMedium?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Scalars['String']['output']>;
  pdfMobile?: Maybe<Scalars['String']['output']>;
};

export type SustainabilityReportsNodeConnection = {
  __typename?: 'SustainabilityReportsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SustainabilityReportsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `SustainabilityReportsNode` and its cursor. */
export type SustainabilityReportsNodeEdge = {
  __typename?: 'SustainabilityReportsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<SustainabilityReportsNode>;
};

export type TearStrengthTestNode = Node & {
  __typename?: 'TearStrengthTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type TearStrengthTongueMethodTestNode = Node & {
  __typename?: 'TearStrengthTongueMethodTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type TearStrengthTrapezoidMethodTestNode = Node & {
  __typename?: 'TearStrengthTrapezoidMethodTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type TensileStrengthTestNode = Node & {
  __typename?: 'TensileStrengthTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  fill: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method: Scalars['String']['output'];
  range?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  warp: Scalars['String']['output'];
};

export type ThermalConductivityTestNode = Node & {
  __typename?: 'ThermalConductivityTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  showLogo: Scalars['Boolean']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type ThicknessOfWearLayerTestNode = Node & {
  __typename?: 'ThicknessOfWearLayerTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  showLogo: Scalars['Boolean']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type TokenAuthForLibraryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type TokenAuthForLibraryPayload = {
  __typename?: 'TokenAuthForLibraryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TokenAuthInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type TokenAuthPayload = {
  __typename?: 'TokenAuthPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TokenAuthV2 = {
  __typename?: 'TokenAuthV2';
  fullName?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TrendNode = Node & {
  __typename?: 'TrendNode';
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  patternSet: PatternNodeConnection;
  slug: Scalars['String']['output'];
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  textCa?: Maybe<Scalars['String']['output']>;
  textDe?: Maybe<Scalars['String']['output']>;
  textEn?: Maybe<Scalars['String']['output']>;
  textEs?: Maybe<Scalars['String']['output']>;
  textFr?: Maybe<Scalars['String']['output']>;
  textIt?: Maybe<Scalars['String']['output']>;
  textPl?: Maybe<Scalars['String']['output']>;
  textUk?: Maybe<Scalars['String']['output']>;
};


export type TrendNodePatternSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  altName?: InputMaybe<Scalars['String']['input']>;
  altName_Icontains?: InputMaybe<Scalars['String']['input']>;
  altName_Istartswith?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Id?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Id_In?: InputMaybe<Scalars['ID']['input']>;
  backing_Description_Title?: InputMaybe<Scalars['String']['input']>;
  backing_Description_Title_In?: InputMaybe<Scalars['String']['input']>;
  backing_Type?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  brands_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  gauge_Between?: InputMaybe<Scalars['String']['input']>;
  general_Composition?: InputMaybe<Scalars['String']['input']>;
  general_Composition_In?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_Icontains?: InputMaybe<Scalars['String']['input']>;
  general_EmbossingSelect_Name_In?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Id?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Id_In?: InputMaybe<Scalars['ID']['input']>;
  general_Topcoat_Title?: InputMaybe<Scalars['String']['input']>;
  general_Topcoat_Title_In?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isEpd?: InputMaybe<Scalars['Boolean']['input']>;
  isNew?: InputMaybe<Scalars['Boolean']['input']>;
  isVisibleLibrary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  memo?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  name_Istartswith?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  otherattributes_Antifungal?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_BleachCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_CompassHb?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_DenimDyeResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Ecosense?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_FormaldehydeFree?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HasNotHeavyMetals?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_HeatSealable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Hydrolysis?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Intagliodesigns?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IpaCleanable?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntibacterial?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_IsAntistatic?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_MildewResistant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoBiocides?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_NoFlameRetardants?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PetFriendly?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_PolycarbonateResinSystem?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prop65Compliant?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Prostock?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_Softside?: InputMaybe<Scalars['Boolean']['input']>;
  otherattributes_SulfideStainResistant?: InputMaybe<Scalars['Boolean']['input']>;
  passedFlameTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  patternClass?: InputMaybe<Scalars['String']['input']>;
  patternClass_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Appearance_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Application_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Business?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Design_Contains?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment?: InputMaybe<Scalars['String']['input']>;
  productcategorization_MarketSegment_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Niche?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Outdoor?: InputMaybe<Scalars['Boolean']['input']>;
  productcategorization_Polymer?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Polymer_In?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Status?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Type?: InputMaybe<Scalars['String']['input']>;
  productcategorization_Warranty?: InputMaybe<Scalars['String']['input']>;
  products_Instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  products_PredominantColors_Contains?: InputMaybe<Scalars['String']['input']>;
  saleable?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sectors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_In?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sectors_Slug?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug_In?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  successFlameRetardancyTests?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sustainability_APlusEmissions?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Antimicrobial_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_BackingProfile?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_BiobasedPvcBioAttributed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Cytotoxicity_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Epd?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_FrFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_GlobalRecycledStandard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Greenguard?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_IndoorAirQuality?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Leed?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_MpFree_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_PhthalateFreeProduct_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Prop65?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Reach?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_Rohs?: InputMaybe<Scalars['Boolean']['input']>;
  sustainability_SkinSafeIrritation_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_SkinSafeSensitization_In?: InputMaybe<Scalars['String']['input']>;
  sustainability_Well?: InputMaybe<Scalars['Boolean']['input']>;
  weight_Between?: InputMaybe<Scalars['String']['input']>;
  width_Between?: InputMaybe<Scalars['String']['input']>;
};

export type TrendNodeConnection = {
  __typename?: 'TrendNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TrendNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `TrendNode` and its cursor. */
export type TrendNodeEdge = {
  __typename?: 'TrendNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<TrendNode>;
};

export type UpdateItemQuantityInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  itemId: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
};

export type UpdateItemQuantityPayload = {
  __typename?: 'UpdateItemQuantityPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  item?: Maybe<ItemNode>;
};

export type UpdateOrder = {
  __typename?: 'UpdateOrder';
  order?: Maybe<OrderNode>;
};

export type UpdateProjectData = {
  __typename?: 'UpdateProjectData';
  created?: Maybe<Scalars['Int']['output']>;
  images?: Maybe<Array<Maybe<ImageOnProjectNode>>>;
  ok?: Maybe<Scalars['Boolean']['output']>;
  project?: Maybe<PromotedProjectNode>;
  updatedBy?: Maybe<Scalars['String']['output']>;
};

export type UpdatePublicProfileInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  cityId?: InputMaybe<Scalars['ID']['input']>;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  companyType?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  position?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ID']['input'];
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePublicProfilePayload = {
  __typename?: 'UpdatePublicProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userProfile?: Maybe<ProfileNode>;
};

export type UpdateShippingAddress = {
  __typename?: 'UpdateShippingAddress';
  shippingAddress?: Maybe<ShippingAddressNode>;
};

export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  unitSystem?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['ID']['input'];
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserNode>;
};

export type UpdateUserProfileInput = {
  address: Scalars['String']['input'];
  cityId: Scalars['ID']['input'];
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  company: Scalars['String']['input'];
  companyType: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
  position: Scalars['String']['input'];
  userId: Scalars['ID']['input'];
  zipCode: Scalars['String']['input'];
};

export type UpdateUserProfilePayload = {
  __typename?: 'UpdateUserProfilePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  userProfile?: Maybe<ProfileNode>;
};

export type UpdateWishList = {
  __typename?: 'UpdateWishList';
  status?: Maybe<Scalars['Boolean']['output']>;
};

export type UploadCvToS3 = {
  __typename?: 'UploadCVToS3';
  url?: Maybe<Scalars['String']['output']>;
};

export type UploadImageProject = {
  __typename?: 'UploadImageProject';
  path?: Maybe<Scalars['String']['output']>;
};

export type UploadMutation = {
  __typename?: 'UploadMutation';
  url?: Maybe<Scalars['String']['output']>;
};

export type UploadPermissionFileProjects = {
  __typename?: 'UploadPermissionFileProjects';
  path?: Maybe<Scalars['String']['output']>;
};

export type UserAddressNode = Node & {
  __typename?: 'UserAddressNode';
  /** Apartment, suite, floor, etc. */
  addressInfo: Scalars['String']['output'];
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  fullAddress: Scalars['String']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  isPrimary: Scalars['Boolean']['output'];
  placeId?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  user: UserNode;
};

export type UserAddressNodeConnection = {
  __typename?: 'UserAddressNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserAddressNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserAddressNode` and its cursor. */
export type UserAddressNodeEdge = {
  __typename?: 'UserAddressNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserAddressNode>;
};

export type UserNode = Node & {
  __typename?: 'UserNode';
  addresses: UserAddressNodeConnection;
  catalogues: CatalogueNodeConnection;
  createdPrivacyPolicies: PrivacyPolicyNodeConnection;
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  fullName?: Maybe<Scalars['String']['output']>;
  groups?: Maybe<Array<Maybe<GroupNode>>>;
  /** Indica si el usuario tiene acceso a el boton de crear proyectos en library.spradling.group. */
  hasCreateProjectAccess: Scalars['Boolean']['output'];
  /** Indica si el usuario tiene acceso a library.spradling.group. */
  hasLibraryAccess: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance?: Maybe<InstanceNode>;
  /** Designates whether this user should be treated as active. Unselect this instead of deleting accounts. */
  isActive: Scalars['Boolean']['output'];
  /** Designates whether the user can log into this admin site. */
  isStaff: Scalars['Boolean']['output'];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars['Boolean']['output'];
  jobpositionSet: JobPositionNodeConnection;
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  orders: OrderNodeConnection;
  password: Scalars['String']['output'];
  profile?: Maybe<ProfileNode>;
  projectcommentSet: ProjectCommentNodeConnection;
  promotedProjectApprovers: PromotedProjectNodeConnection;
  quotations: QuotationNodeConnection;
  samples: SampleNodeConnection;
  unitSystem?: Maybe<Scalars['Int']['output']>;
  wishlists: WishlistNodeConnection;
};


export type UserNodeAddressesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  isPrimary?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeCataloguesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeCreatedPrivacyPoliciesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeJobpositionSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city_Country?: InputMaybe<Scalars['ID']['input']>;
  city_Region?: InputMaybe<Scalars['ID']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  department?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hours?: InputMaybe<Scalars['ID']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_Icontains?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  urgentlyHiring?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserNodeOrdersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeProjectcommentSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  project_Id?: InputMaybe<Scalars['ID']['input']>;
  sentBy_Id?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserNodePromotedProjectApproversArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  instances?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  keyword?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};


export type UserNodeQuotationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
};


export type UserNodeSamplesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserNodeWishlistsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_Icontains?: InputMaybe<Scalars['String']['input']>;
};

export type UserNodeConnection = {
  __typename?: 'UserNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserNode` and its cursor. */
export type UserNodeEdge = {
  __typename?: 'UserNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<UserNode>;
};

export type VacantNode = Node & {
  __typename?: 'VacantNode';
  city: CityNode;
  closed: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  descriptionCa?: Maybe<Scalars['String']['output']>;
  descriptionDe?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  descriptionEs?: Maybe<Scalars['String']['output']>;
  descriptionFr?: Maybe<Scalars['String']['output']>;
  descriptionIt?: Maybe<Scalars['String']['output']>;
  descriptionPl?: Maybe<Scalars['String']['output']>;
  descriptionUk?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  instance: InstanceNode;
  jobApplications: JobApplicationNodeConnection;
  name: Scalars['String']['output'];
  nameCa?: Maybe<Scalars['String']['output']>;
  nameDe?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
  nameEs?: Maybe<Scalars['String']['output']>;
  nameFr?: Maybe<Scalars['String']['output']>;
  nameIt?: Maybe<Scalars['String']['output']>;
  namePl?: Maybe<Scalars['String']['output']>;
  nameUk?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  slugCa?: Maybe<Scalars['String']['output']>;
  slugDe?: Maybe<Scalars['String']['output']>;
  slugEn?: Maybe<Scalars['String']['output']>;
  slugEs?: Maybe<Scalars['String']['output']>;
  slugFr?: Maybe<Scalars['String']['output']>;
  slugIt?: Maybe<Scalars['String']['output']>;
  slugPl?: Maybe<Scalars['String']['output']>;
  slugUk?: Maybe<Scalars['String']['output']>;
};


export type VacantNodeJobApplicationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  vacant?: InputMaybe<Scalars['ID']['input']>;
};

export type VacantNodeConnection = {
  __typename?: 'VacantNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VacantNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VacantNode` and its cursor. */
export type VacantNodeEdge = {
  __typename?: 'VacantNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VacantNode>;
};

export type VerifyEmail = {
  __typename?: 'VerifyEmail';
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerifyInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyPayload = {
  __typename?: 'VerifyPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['GenericScalar']['output']>;
};

export type VisualDefectsNode = Node & {
  __typename?: 'VisualDefectsNode';
  claim?: Maybe<GlobalDataNode>;
  howCompareMaterial?: Maybe<Scalars['String']['output']>;
  howDetectDifference?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  typeVisualDifference?: Maybe<VisualDefectsTypeVisualDifference>;
};

export type VisualDefectsNodeConnection = {
  __typename?: 'VisualDefectsNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<VisualDefectsNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `VisualDefectsNode` and its cursor. */
export type VisualDefectsNodeEdge = {
  __typename?: 'VisualDefectsNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<VisualDefectsNode>;
};

/** An enumeration. */
export enum VisualDefectsTypeVisualDifference {
  /** embossing */
  Embossing = 'EMBOSSING',
  /** gloss */
  Gloss = 'GLOSS',
  /** print */
  Print = 'PRINT'
}

export type VolatilityTestNode = Node & {
  __typename?: 'VolatilityTestNode';
  additionalTest: AdditionalTestsNode;
  /** This file must be a PDF */
  certificate?: Maybe<Scalars['String']['output']>;
  fileExpires?: Maybe<Scalars['Date']['output']>;
  fileNotExpires: Scalars['Boolean']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  range?: Maybe<Scalars['String']['output']>;
  result: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
};

export type WebsiteHomeDataBlocksNode = Node & {
  __typename?: 'WebsiteHomeDataBlocksNode';
  home: WebsiteHomeNode;
  icon: Scalars['String']['output'];
  iconUrl?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type WebsiteHomeDataBlocksNodeConnection = {
  __typename?: 'WebsiteHomeDataBlocksNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WebsiteHomeDataBlocksNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `WebsiteHomeDataBlocksNode` and its cursor. */
export type WebsiteHomeDataBlocksNodeEdge = {
  __typename?: 'WebsiteHomeDataBlocksNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WebsiteHomeDataBlocksNode>;
};

/** An enumeration. */
export enum WebsiteHomeLanguage {
  /** Spanish Spain */
  Ca = 'CA',
  /** German */
  De = 'DE',
  /** English */
  En = 'EN',
  /** Spanish */
  Es = 'ES',
  /** French */
  Fr = 'FR',
  /** Italian */
  It = 'IT',
  /** Polish */
  Pl = 'PL',
  /** European English */
  Uk = 'UK'
}

export type WebsiteHomeNode = Node & {
  __typename?: 'WebsiteHomeNode';
  bannerItems: BannerItemNodeConnection;
  datablocks?: Maybe<Array<Maybe<WebsiteHomeDataBlocksNode>>>;
  /** Spradling products section in the world, includes title and content */
  fifthSectionContent?: Maybe<Scalars['String']['output']>;
  /** Who we are section, includes title and content */
  firstSectionContent: Scalars['String']['output'];
  /** Our essence is excellence section, includes title and content */
  fourthSectionContent?: Maybe<Scalars['String']['output']>;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  language: WebsiteHomeLanguage;
  scrolledVideos?: Maybe<Array<Maybe<WebsiteHomeThirdSectionSliderNode>>>;
  /** Title and subtitle of the Spradling in the world section */
  secondBlockTitle: Scalars['String']['output'];
  /** Section of our people, our power, includes title and content */
  seventhSectionContent?: Maybe<Scalars['String']['output']>;
  /** Section of our certifications, includes title and content */
  sixthSectionContent?: Maybe<Scalars['String']['output']>;
  /** Talking numbers section, includes title and content */
  thirdSectionContent?: Maybe<Scalars['String']['output']>;
  websitehomedatablocksSet: WebsiteHomeDataBlocksNodeConnection;
  websitehomethirdsectionsliderSet: WebsiteHomeThirdSectionSliderNodeConnection;
};


export type WebsiteHomeNodeBannerItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type WebsiteHomeNodeWebsitehomedatablocksSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type WebsiteHomeNodeWebsitehomethirdsectionsliderSetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type WebsiteHomeNodeConnection = {
  __typename?: 'WebsiteHomeNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WebsiteHomeNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `WebsiteHomeNode` and its cursor. */
export type WebsiteHomeNodeEdge = {
  __typename?: 'WebsiteHomeNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WebsiteHomeNode>;
};

export type WebsiteHomeThirdSectionSliderNode = Node & {
  __typename?: 'WebsiteHomeThirdSectionSliderNode';
  content: Scalars['String']['output'];
  home: WebsiteHomeNode;
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  videoVimeo?: Maybe<Scalars['String']['output']>;
};

export type WebsiteHomeThirdSectionSliderNodeConnection = {
  __typename?: 'WebsiteHomeThirdSectionSliderNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WebsiteHomeThirdSectionSliderNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `WebsiteHomeThirdSectionSliderNode` and its cursor. */
export type WebsiteHomeThirdSectionSliderNodeEdge = {
  __typename?: 'WebsiteHomeThirdSectionSliderNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WebsiteHomeThirdSectionSliderNode>;
};

export type WishlistItemNode = Node & {
  __typename?: 'WishlistItemNode';
  addedAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  products?: Maybe<PatternNode>;
  wishlist: WishlistNode;
};

export type WishlistItemNodeConnection = {
  __typename?: 'WishlistItemNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WishlistItemNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `WishlistItemNode` and its cursor. */
export type WishlistItemNodeEdge = {
  __typename?: 'WishlistItemNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WishlistItemNode>;
};

export type WishlistNode = Node & {
  __typename?: 'WishlistNode';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object. */
  id: Scalars['ID']['output'];
  items: WishlistItemNodeConnection;
  title: Scalars['String']['output'];
  user: UserNode;
};


export type WishlistNodeItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type WishlistNodeConnection = {
  __typename?: 'WishlistNodeConnection';
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<WishlistNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

/** A Relay edge containing a `WishlistNode` and its cursor. */
export type WishlistNodeEdge = {
  __typename?: 'WishlistNodeEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge */
  node?: Maybe<WishlistNode>;
};

export type _PaginatedField = {
  __typename?: '_PaginatedField';
  pageTotal?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<PatternNode>>>;
  totalResults?: Maybe<Scalars['Int']['output']>;
};

export type GetAddressSuggestionsQueryVariables = Types.Exact<{
  instanceId: Types.Scalars['ID']['input'];
  address?: Types.InputMaybe<Types.Scalars['String']['input']>;
  postalCode?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type GetAddressSuggestionsQuery = { __typename?: 'Query', addressSuggestions?: Array<{ __typename?: 'PlaceSuggestion', description?: string | null, placeId?: string | null } | null> | null };


export const GetAddressSuggestionsDocument = gql`
    query getAddressSuggestions($instanceId: ID!, $address: String, $postalCode: String) {
  addressSuggestions(
    address: $address
    instanceId: $instanceId
    postalCode: $postalCode
  ) {
    description
    placeId
  }
}
    `;

/**
 * __useGetAddressSuggestionsQuery__
 *
 * To run a query within a React component, call `useGetAddressSuggestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAddressSuggestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAddressSuggestionsQuery({
 *   variables: {
 *      instanceId: // value for 'instanceId'
 *      address: // value for 'address'
 *      postalCode: // value for 'postalCode'
 *   },
 * });
 */
export function useGetAddressSuggestionsQuery(baseOptions: Apollo.QueryHookOptions<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables> & ({ variables: GetAddressSuggestionsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>(GetAddressSuggestionsDocument, options);
      }
export function useGetAddressSuggestionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>(GetAddressSuggestionsDocument, options);
        }
export function useGetAddressSuggestionsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>(GetAddressSuggestionsDocument, options);
        }
export type GetAddressSuggestionsQueryHookResult = ReturnType<typeof useGetAddressSuggestionsQuery>;
export type GetAddressSuggestionsLazyQueryHookResult = ReturnType<typeof useGetAddressSuggestionsLazyQuery>;
export type GetAddressSuggestionsSuspenseQueryHookResult = ReturnType<typeof useGetAddressSuggestionsSuspenseQuery>;
export type GetAddressSuggestionsQueryResult = Apollo.QueryResult<GetAddressSuggestionsQuery, GetAddressSuggestionsQueryVariables>;