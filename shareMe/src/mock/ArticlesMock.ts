import { IArticle } from "../interfaces/_index";

const articles: IArticle[] = [
    {
        id: 1,
        title: 'Michael Jackson - Earth Song (Official Video)',
        description: 'The short film to Michael Jackson’s “Earth Song,” his best-selling single in the United Kingdom, earned Michael the Doris Day Music Award from the Humane Society’s Genesis Awards.  The urgent need to address the issues facing the planet and all that inhabit it were on the forefront of Michael’s mind when he created this song and short film; issues that are even more urgent today.',
        url: 'https://www.youtube.com/watch?v=XAi3VTSdTxU',
        category: {
            id: 1,
            name: 'music'
        },
        isDeleted: false
    },
    {
        id: 2,
        title: 'React Select',
        description: 'A flexible and beautiful Select Input control for ReactJS with multiselect, autocomplete, async and creatable support.',
        url: 'https://react-select.com/home#creatable',
        category: {
            id: 1,
            name: 'programming'
        },
        isDeleted: true
    }
]

export default articles;