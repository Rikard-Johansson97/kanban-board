export interface Ticket {
  id: string;
  title: string;
  description: string;
  tasks: string[];
}

export interface BoardType {
  stage1: {
    name: string;
    items: Array<{
      title: string;
      id: string;
      description: string;
      tasks: Array<string>;
    }>;
  };
  stage2: {
    name: string;
    items: Array<{
      title: string;
      id: string;
      description: string;
      tasks: Array<string>;
    }>;
  };
  stage3: {
    name: string;
    items: Array<{
      title: string;
      id: string;
      description: string;
      tasks: Array<string>;
    }>;
  };
}

export interface Project {
  title: string;
  id: number;
  board: BoardType;
}

export interface Projects {
  projects: Project[];
}

export interface ProjectContextValue {
  changeBoard: (index: number) => void;
  currentProject: any;
  changeCurrentBoard: (newData: Projects) => void;
  projects: Project[];
  addTicket: (ticket: Ticket) => void;
  addNewProject: (title: string) => void;
}

export interface Context {
  key: any;
  ref: any;
  props: {};
  _owner: any;
  _store: {};
}

export interface  CurrentProjectType {
    name: string
    items: Array<{
      id: string
      title: string
      description: string
      tasks: Array<string>
    }>
  }
  

export interface Task {
  id: string;
  title: string;
  description: string;
  tasks: Array<string>;
}

export interface Snapshot {
  isDragging: boolean;
  isDropAnimating: boolean;
  isClone: boolean;
  dropAnimation: any;
  mode: any;
  draggingOver: any;
  combineTargetFor: any;
  combineWith: any;
}

export interface ProvidedObject {
  innerRef: any;
  active: any;
  draggableProps: {
    "data-rfd-draggable-context-id": string;
    "data-rfd-draggable-id": string;
    style: Record<string, unknown>; // The actual type may depend on the style object
  };
  dragHandleProps: {
    tabIndex: number;
    role: string;
    "aria-describedby": string;
    "data-rfd-drag-handle-draggable-id": string;
    "data-rfd-drag-handle-context-id": string;
    draggable: boolean;
  };
}
