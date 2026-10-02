import type { Tagged } from "type-fest";
import type { tags } from "typia";

export type UuidVersion = "1" | "3" | "4" | "5" | "6" | "7";
export type UuidVersionTagKind = "uuidVersion";
export type UuidVersionTag<V extends UuidVersion> = tags.TagBase<{
  kind: UuidVersionTagKind;
  target: "string";
  value: V;
  validate: `parseInt($input.slice(14, 15), 16) === ${V}`;
  exclusive: true;
}>;

export type UuidTagName = "Uuid";
export type Uuid<V extends UuidVersion> = Tagged<
  string & tags.Format<"uuid"> & UuidVersionTag<V>,
  UuidTagName,
  { version: V }
>;
