import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import fs from 'node:fs/promises';

export const generateContacts = async (number) => {
  try {
    const getContactsData = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));
    const newContactsData = [];
    for (let i = 0; i < number; i += 1) {
      newContactsData.push(createFakeContact());
    }

    const allContactsData = getContactsData.concat(newContactsData);
    await fs.writeFile(PATH_DB, JSON.stringify(allContactsData, null, 2));

    console.log(`Successfully generated and added ${number} contacts`);
    console.log(`Count contacts to db: ${allContactsData.length}`);
  } catch (error) {
    console.log(error, 'Failed to generate file');
  }
};

await generateContacts(10);
