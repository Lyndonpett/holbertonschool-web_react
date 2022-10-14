/// <reference path="crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

const row: RowElement = { firstName: 'Gillaume', lastName: 'Salva' };

const newRowID: RowID = CRUD.insertRow(row);

const updateRow: RowElement = { age: 23, ...row };

CRUD.updateRow(newRowID, updateRow);
CRUD.deleteRow(newRowID);

const obj = { firstName: 'Guillaume', lastName: 'Salva' };
console.log(CRUD.insertRow(obj));

const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23
};
console.log(CRUD.updateRow(newRowID, updatedRow));

console.log(CRUD.deleteRow(125));
