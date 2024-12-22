'use server'
import React from "react";

export const WordBubbleDelete = async ({word, id, onDelete}:{id: number, word:string, onDelete: string | ((formData: FormData) => (void | Promise<void>)) | undefined}) => {

    return (
        <form action={onDelete} >
            <input
                id="idInput"
                name="idInput"
                type="number"
                defaultValue={id}
                className="hidden"
                aria-hidden="true"
            />
            <button type={"submit"}
                    className="flex-shrink-0 text-2xl bg-red-200 rounded-full px-6 py-3 hover:bg-gray-300 focus:outline-none">
                {word}
            </button>
        </form>
    )
}