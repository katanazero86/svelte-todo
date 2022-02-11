import {firestore} from '../firebase';
import {collection, getDocs, addDoc, query, orderBy, setDoc, doc, deleteDoc, where} from 'firebase/firestore';
import type {TodoInterface} from "../types/todo.types";

const COLLECTION_NAME: string = 'todos';

export const findTodoCollection = async () => {
    const todosCol = collection(firestore, COLLECTION_NAME);
    const targetQuery = query(todosCol, orderBy('createdAt', 'desc'));
    const todoSnapshot = await getDocs(targetQuery);
    const todoList: TodoInterface[] = todoSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
        } as TodoInterface
    });
    return todoList
};

export const findTodoCollectionByDone = async () => {
    const todosCol = collection(firestore, COLLECTION_NAME);
    const targetQuery = query(todosCol, where('isDone', '==', true));
    const todoSnapshot = await getDocs(targetQuery);
    const todoList: TodoInterface[] = todoSnapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id,
            createdAt: doc.data().createdAt.toDate(),
        } as TodoInterface
    });
    return todoList
};

export const createTodoCollection = async (targetPayload: TodoInterface): Promise<string> => {
    const targetDocRef = await addDoc(collection(firestore, COLLECTION_NAME), {
        ...targetPayload
    });
    return targetDocRef.id;
};

export const updateTodoIsDone = async (targetPayload: TodoInterface) => {
    return await setDoc(doc(firestore, COLLECTION_NAME, targetPayload.id), {
        isDone: targetPayload.isDone
    }, {merge: true})
};

export const deleteTodoByDocId = async (targetDocId) => {
    return await deleteDoc(doc(firestore, COLLECTION_NAME, targetDocId));
};

export const updateTodoTodo = async (targetPayload: TodoInterface) => {
    return await setDoc(doc(firestore, COLLECTION_NAME, targetPayload.id), {
        todo: targetPayload.todo,
    }, {merge: true})
};