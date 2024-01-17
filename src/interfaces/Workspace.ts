import { User } from ".";

interface Workspace {
  logo?: string;
  name?: string;
  users?: User[]
}

export type { Workspace }