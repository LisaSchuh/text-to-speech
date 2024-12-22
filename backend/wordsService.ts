'use server'
import db from "./repository"
import {revalidatePath} from "next/cache";
import {id} from "postcss-selector-parser";

async function addWord(word: string) {
    await db
        .insertInto("words")
        .values({
            text_value: word,
            created: new Date(),
            deleted: false
        })
        .execute();
}

export async function saveText(formData: FormData) {
    const text = formData.get("textInput") as string;
    if (!text) throw new Error("No text provided");

    await addWord(text);

    // Optionally revalidate a path if needed
    revalidatePath("/71ba490c-3c9e-47fd-8a76-f8ba893d38f7");
}

export async function removeWord(formData: FormData) {
    console.log("delete called")
    const id = formData.get("idInput") as number;
    if (!id) throw new Error("No id provided");

    console.log("remove id" + id);
    await removeWordDB(id);

    // Optionally revalidate a path if needed
    revalidatePath("/71ba490c-3c9e-47fd-8a76-f8ba893d38f7");
    revalidatePath("/71ba490c-3c9e-47fd-8a76-f8ba893d38f7/delete");
}

export const getWords = async () => {
    const words = await db
        .selectFrom("words")
        //.where("deleted", "=", false)
        .selectAll()
        .orderBy("created", "desc")
        .execute();

    return words;
}

export const removeWordDB = async(id: number) => {
    await db
        .deleteFrom("words")
        .where("id", "=", id)
        .execute();
}