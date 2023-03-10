export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

type ClickEvent = Extract<Event, { type: "click" }>;
type FocusOrKeydownEvent = Exclude<Event, { type: "click" }>;
type EventTypes = Event["type"];

export const programModeEnumMap = {
  GROUP: "group",
  ANNOUNCEMENT: "announcement",
  ONE_ON_ONE: "1on1",
  SELF_DIRECTED: "selfDirected",
  PLANNED_ONE_ON_ONE: "planned1on1",
  PLANNED_SELF_DIRECTED: "plannedSelfDirected",
} as const;

export type GroupProgram = typeof programModeEnumMap["GROUP"]; // "group" and not string

type ProgramModeEnumType = typeof programModeEnumMap;

// Get union from values of an object
type ProgramModeValuesUnion = ProgramModeEnumType[keyof ProgramModeEnumType];
type ProgramModeValuesUnion2 = ProgramModeEnumType["ANNOUNCEMENT" | "GROUP"];

export type IndividualProgram = Exclude<
  ProgramModeValuesUnion,
  "group" | "announcement"
>;

const fruits = ["apple", "banana", "orange"] as const;

type AppleOrBanana = typeof fruits[0 | 1];
type Fruit = typeof fruits[number];
