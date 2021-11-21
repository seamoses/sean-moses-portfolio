// To parse this data:
//
//   import { Convert, ITodoModel } from "./file";
//
//   const iTodoModel = Convert.toITodoModel(json);

export interface ITodoModel {
  id: number;
  text: string;
  done: boolean;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toITodoModel(json: string): ITodoModel {
    return JSON.parse(json);
  }

  public static iTodoModelToJson(value: ITodoModel): string {
    return JSON.stringify(value);
  }
}
