import * as puppeteer from 'puppeteer';
const { pool }= require('../db');
const vacancy = require('../models/vacancy')
const technology = require('../models/technology')
const createUrl = require('../helpers/url')
const createNumber = require('../helpers/number')

interface technology {
    id: number,
    query: string,
    table_name: string
}

async function collectData() {
    console.log('collect Data')
    try {
        const technologies: technology[] = await technology.getTechnologies()
        const queries: string[] = technologies.map(item => item.query)
        const tableNames: string[] = technologies.map(item => item.table_name)

        queries.forEach(async (query, idx) => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            const url:string = createUrl(query);
            await page.goto(url);
            const header:string = await page.$eval('.header', (e:any):string => e.innerText);
            const numberOfVacancies:number = createNumber(header);

            if (numberOfVacancies) {
                vacancy.addNumberOfVacancies(tableNames[idx], numberOfVacancies)
            }

            await browser.close();
        })
    
    } catch(e) {
        console.log('error = ', e)
    }
}

module.exports = collectData