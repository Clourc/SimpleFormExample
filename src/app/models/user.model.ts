export class User {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public age: number = 0,
        public dateOfBirth: Date = new Date()
    ){}
}