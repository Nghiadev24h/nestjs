import {
    IsInt
} from 'class-validator';

export class CreateCourseDto {
    @IsInt()
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly url: string;
}

// export interface ICreateCouseData {
//     readonly id: number;
//     readonly title: string;
//     readonly description: string;
//     readonly author: string;
//     readonly url: string; 
// }