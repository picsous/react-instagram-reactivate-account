import en from './en.json';
import es from './es.json';
import fr from './fr.json';

export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if(language === 'EN') {
        langData = en;
    }else if(language === 'ES') {
        langData = es;
    }else if(language === 'FR') {
        langData = fr;
    }

    return langData[key];
}