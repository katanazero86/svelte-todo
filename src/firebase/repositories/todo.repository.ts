import {firestore} from '../firebase';
import {collection, getDocs, addDoc} from 'firebase/firestore';
import type {TodoInterface} from "../types/todo.types";

const COLLECTION_NAME: string = 'todos';

export const findTodoCollection = async () => {
    const todosCol = collection(firestore, COLLECTION_NAME);
    const todoSnapshot = await getDocs(todosCol);
    const todoList: TodoInterface[] = todoSnapshot.docs.map(doc => doc.data() as TodoInterface);
    return todoList
}

export const createTodoCollection = async (targetPayload: TodoInterface): Promise<string> => {
    const targetDocRef = await addDoc(collection(firestore, COLLECTION_NAME), {
        ...targetPayload
    });

    return targetDocRef.id;
}