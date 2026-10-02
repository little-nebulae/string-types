import type { Tagged } from "type-fest";
import type { tags } from "typia";

export type UuidTagName = "Uuid";
export type Uuid = Tagged<string & tags.Format<"uuid">, UuidTagName>;
