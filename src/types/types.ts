export interface Ticket {
    id: string;
    title: string;
    description: string;
    tasks: string[];
}

export interface Board {
    name: string;
    tickets: Ticket[];
}

export interface Project {
    title: string;
    id: number;
    board: Board[] | {
        stage1: Board,
        stage2: Board,
        stage3: Board
    }
}
