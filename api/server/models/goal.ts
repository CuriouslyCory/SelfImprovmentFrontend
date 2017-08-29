export interface Goal {
    _id?: string;
    userId?: string;
    recurrence?: string;
    title?: string;
    notes?: string;
    target?: number;
    active?: boolean;
    direction?: string;
    progress: number;
}
