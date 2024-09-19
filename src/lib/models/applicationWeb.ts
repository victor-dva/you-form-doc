import type { RequirementType } from "$lib/enums/RequirementType";

export interface Project {
    id?: number;
    title: string;
    isFinished: boolean;
}

export interface RequirementGroup {
    id:             string;
    type:           RequirementType;
    title:          string;
    requirements:   Requirement[]
}

export interface Requirement {
    id?:            string;
    groupId:        string;
    title:          string;
    isFulfilled:    boolean;
    group:          RequirementGroup; 
}