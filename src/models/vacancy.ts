const { pool }= require('../db')

exports.addNumberOfVacancies = async function (tableName: string, numberOfVacancies:number) {
    const query: string = `INSERT INTO ${tableName}(number_vac) VALUES($1) RETURNING *`
    const values = [numberOfVacancies]


    try {
      const { rows } = await pool.query(query, values);
      return rows
    } catch (e) {
      return e;
    }
};