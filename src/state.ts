export enum FoundryStatus {
    Unknown,
    Errored,
    Stopping,
    Stopped,
    Starting,
    Running,
}

export class State {
    public foundryStatus: FoundryStatus = FoundryStatus.Unknown;
    
}
