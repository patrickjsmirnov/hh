function createUrl(technologyQuery: string):string {
    return `https://spb.hh.ru/search/vacancy?text=${technologyQuery}&only_with_salary=false&clusters=true&area=2&enable_snippets=true&salary=&from=suggest_post`;
}

module.exports = createUrl