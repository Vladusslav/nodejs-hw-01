import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const getContactsData = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    getContactsData.pop();
    await fs.writeFile(PATH_DB, JSON.stringify(getContactsData, null, 2));

    console.log(`Last contact successfully removed`);
    console.log(`New contacts count: ${getContactsData.length}`);
  } catch (error) {
    console.log(error, 'Failed to generate file');
  }
};

await removeLastContact();
