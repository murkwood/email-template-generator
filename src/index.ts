import fs from 'fs';

import {  domain, brand, localizations, footerText, logo, emailTemplate } from './brands/example_brand';

// Create HTML directory
const outputDir = 'html';
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// Store brand info in email-template object
emailTemplate.localizations = localizations;
emailTemplate.variables.logo = logo;
emailTemplate.variables.footer_text = footerText[Object.keys(footerText)[0]];

const replaceFooterText = (locale :string) => {
    if (footerText?.[locale]) {
        if (locale === 'EN') {
            emailTemplate.variables.footer_text = footerText?.[locale];
        } else {
            let localeVars = emailTemplate?.variablesLocale?.find(
                (vl) => vl.locale === locale,
            );
            if (localeVars) {
                localeVars.variables.footer_text = footerText?.[locale];
            } else {
                emailTemplate.variablesLocale?.push({
                    locale: locale,
                    variables: {
                        footer_text: footerText?.[locale],
                    },
                });
            }
        }
    }
}

const replaceGlobalDomainAndBrand = (text: string): string => {
    let tempText = text?.replace(/{domain}/g, domain);
    tempText = tempText?.replace(/{brand}/g, brand);
    return tempText;
}

const getTemplateFile = (templateId: string) => {
    const data = fs.readFileSync(`./src/template-prototypes/${templateId}.html`, 'utf8');
    return data;
};

const getGlobalVariable = (key: string, lang: string) => {
    const globalVariableLocale = emailTemplate.variablesLocale?.find((vl) =>  {
        if(vl.locale === lang) {
            return vl.variables;
        }
    });

    if(globalVariableLocale?.variables?.[key] || globalVariableLocale?.variables?.[key] === '') {
        return globalVariableLocale?.variables?.[key];
    }
    
    return emailTemplate.variables?.[key];
}

const generateEmailTemplates = (locale: string) => {

    // Loop through all template files
    for (const templateId in emailTemplate.templates) {

        const htmlTemplate = getTemplateFile(templateId);
        const customVars = htmlTemplate.match(/@{(.*?)}/g);
        
        // Loop through all template's versions
        emailTemplate.templates[templateId].forEach( version => {
            let tempHtmlTemplate = htmlTemplate;

            // Return current localization variables
            const localeVars = version.variablesLocale?.find( vl =>  {
                if(vl.locale === locale) {
                    return vl.variables;
                }
            });

            // Search & replace placeholders with correct localizaton variables
            const searchReplace = customVars?.map( v => {
                const keyName = v.replace(/[@{}]/g, '');
                let replaceWith;
                if(locale === 'EN') {
                    replaceWith =
                        version.variables?.[keyName] ??
                        emailTemplate.variables?.[keyName];
                } else {
                    replaceWith =
                        localeVars?.variables?.[keyName] ??
                        getGlobalVariable(keyName, locale);
                }
    
                if (replaceWith !== undefined || replaceWith !== null) {
                    const regex = new RegExp(v, 'g');
                    tempHtmlTemplate = tempHtmlTemplate.replace(regex, replaceGlobalDomainAndBrand(replaceWith)); 
                }
            });
            
            // Create localization directory
            if (!fs.existsSync(`${outputDir}/${locale}`)){
                fs.mkdirSync(`${outputDir}/${locale}`);
            }
            fs.writeFile(`${outputDir}/${locale}/${version.fileName}_${locale}.html`, tempHtmlTemplate, (err) => {
                if (err) throw err;
                console.log('The file has been saved.');
            });
        });
    }
}

// Generate template set per each localization
localizations.forEach( locale => {
    replaceFooterText(locale);
    generateEmailTemplates(locale);
});