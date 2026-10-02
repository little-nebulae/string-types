import type { Tagged } from "type-fest";
import type { tags } from "typia";

export type UrlStringTagName = "UrlString";
export type UrlString = Tagged<string & tags.Format<"url">, UrlStringTagName>;
