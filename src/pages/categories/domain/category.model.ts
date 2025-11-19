export interface Category {
    key: string | null;
    name: string;
    description: string
}

export function createEmptyCategory(): Category {
    return {
        key: null,
        name: '',
        description: ''
    }
}