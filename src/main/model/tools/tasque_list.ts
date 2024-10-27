export class TasqueListData {
  private tasks: Array<TasqueListData_Task> = [];
}

class TasqueListData_Task {
  private title: string = '';
}

export enum TaskListData_Task_CompletionStatus {
  COMPLETED = 'COMPLETED',
  IN_PROGRESS = 'IN_PROGRESS',
  // NOT_STARTED = 'NOT_STARTED',
  // BLOCKED = 'BLOCKED',
}
