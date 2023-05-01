import { createAction } from "@reduxjs/toolkit";

export const add = createAction('phonebook/add')
export const remove = createAction('phonebook/remove')
export const filterContacts = createAction('phonebook/filterContacts')