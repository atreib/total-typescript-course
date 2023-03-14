type Route = `/${string}`;

export const goToRoute = (route: Route) => {};

goToRoute("/users");
goToRoute("/");
goToRoute("/admin/users");
// goToRoute("users/1"); // is invalid
// goToRoute("http://facebook.com"); // is invalid as well

// We can also mix the template literal with other types
type Routes = "/users" | "/users/:id" | "/posts" | "/posts/:id";
type DynamicRoutes = Extract<Routes, `${string}:${string}`>;
// DynamicRoutes = "/users/:id" | "/posts/:id"
type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;
type ObjectOfKeys = Record<TemplateLiteralKey, string>;

// And it gets even better using Unions
type BreadType = "rye" | "brown" | "white";
type Filling = "cheese" | "ham" | "salami";
type Sandwich = `${BreadType} sandwich with ${Filling}`;
/**
 * Sandwich =
      | "rye sandwich with cheese"
      | "rye sandwich with ham"
      | "rye sandwich with salami"
      | "brown sandwich with cheese"
      | "brown sandwich with ham"
      | "brown sandwich with salami"
      | "white sandwich with cheese"
      | "white sandwich with ham"
      | "white sandwich with salami"
 */

// That can be very useful with some string utility types
type Event = `log_in` | "log_out" | "sign_up";
type ObjectOfUppercaseKeys = Record<Uppercase<Event>, string>;

// There is also some amazing libs that we can use
import { S, L } from "ts-toolbelt";
type Path = "Users/John/Documents/notes.txt";
type SplitPath = S.Split<Path, "/">;
// SplitPath = ["Users", "John", "Documents", "notes.txt"]
