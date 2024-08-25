import { db } from "$lib/firebaseConfig";
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import type { Project } from "$lib/models/applicationWeb";
import { DatabaseLogger } from "$lib/logs/Logger";

const projectsCollection = collection(db, 'projects');

export const addProject = async (project: Omit<Project, 'id'>) => {
    await addDoc(projectsCollection, project);
    DatabaseLogger.INFO(`Ajout du projet ${project.title} dans la collection "projects"`, project)
};

export const getProjects = async () => {
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    DatabaseLogger.INFO(`Actualisation de la collection "projects"`, projectsList)
    return projectsList;
};

export const updateProject = async (id: string, updatedProject: Omit<Project, 'id'>) => {
    const projectDoc = doc(db, 'projects', id);
    await updateDoc(projectDoc, updatedProject);
    DatabaseLogger.INFO(`Mise à jour du projet ${id}`, updatedProject)
};

export const deleteProject = async (id: string) => {
    const projectDoc = doc(db, 'projects', id);
    await deleteDoc(projectDoc)
    const projectsSnapshot = await getDocs(projectsCollection);
    const projectsList = projectsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    DatabaseLogger.INFO(`Suppression du projet ${id}`, projectsList)
};

