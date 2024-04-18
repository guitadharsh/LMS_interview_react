export interface CourseRegister {
    title: string;
    description: string;
    price: string;
    duration: string;
    videoLink: string;
    thumbnail: File | null | string;
}