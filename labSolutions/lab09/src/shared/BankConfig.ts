export interface BankConfig {
    bic: string;
    language: 'nl' | 'fr' | 'en';
    name: string;
    port: number;
}
