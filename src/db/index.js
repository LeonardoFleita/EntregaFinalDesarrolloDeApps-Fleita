import * as SQLite from "expo-sqlite/legacy";

const db = SQLite.openDatabase("smartly.db");

export const createSessionsTable = () => {
  const promise = new Promise((resolve, reject) => {
    const query =
      "CREATE TABLE IF NOT EXISTS session (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)";
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const insertSession = ({ email, localId, token }) => {
  const promise = new Promise((resolve, reject) => {
    const query = "INSERT INTO session (email, localId, token) VALUES (?,?,?)";
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [email, localId, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const fetchSession = () => {
  const promise = new Promise((resolve, reject) => {
    const query = "SELECT * FROM session ";
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result.rows._array),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};

export const clearSession = () => {
  const promise = new Promise((resolve, reject) => {
    const query = "DELETE FROM session";
    db.transaction((tx) => {
      tx.executeSql(
        query,
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
  return promise;
};
