import type { Tagged } from "type-fest";
import type { tags } from "typia";

export type NonEmptyStringTagName = "NonEmptyString";

export type NonEmptyString = Tagged<
  string & tags.MinLength<1>,
  NonEmptyStringTagName
>;
