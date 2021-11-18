export class EmailTemplate {
    variables: { [name: string]: string };
	variablesLocale?: VariablesLocale[];
    templates: { [templateId: string]: Array<TemplateVersion> };
    localizations?: string[]
}

interface TemplateVersion {
    fileName: string;
    variables: { [name: string]: string };
    variablesLocale?: VariablesLocale[];
}

export interface VariablesLocale {
    locale: string;
    variables: { [name: string]: string };
}
