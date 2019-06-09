export{}
const { pool }= require('../db')

interface technology {
    id: number,
    query: string,
    table_name: string
}

exports.getTechnologies = async function () {
    const query: string = `SELECT * FROM technology`

    try {
      const { rows } = await pool.query(query);
      return rows
    } catch (e) {
      return e;
    }
};