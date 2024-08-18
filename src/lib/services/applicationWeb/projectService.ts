import { db } from "$lib/firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import type { Project } from "$lib/models/applicationWeb";

const projectsCollection = collection(db, 'projects');

export const addProject = async (project: Omit<Project, 'id'>) => {
    await addDoc(projectsCollection, project);
};

export const getProjects = async () => {
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    return projectsList;
};

export const updateProject = async (id: string, updatedProject: Omit<Project, 'id'>) => {
    const projectDoc = doc(db, 'projects', id);
    await updateDoc(projectDoc, updatedProject);
};

export const deleteProject = async (id: string) => {
    const projectDoc = doc(db, 'projects', id);
    await deleteDoc(projectDoc)
};

