import type { Tagged } from "type-fest";
import type { tags } from "typia";

export type EmailTagName = "Email";
export type Email = Tagged<string & tags.Format<"email">, EmailTagName>;

export type IdnEmailTagName = "IdnEmail";
export type IdnEmail = Tagged<
  string & tags.Format<"idn-email">,
  IdnEmailTagName
>;
