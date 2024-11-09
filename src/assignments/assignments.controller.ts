import { Controller, Get, Param } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {

isPrime(number: number): boolean {
    if (number <= 1) return false;
        for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
            return false;
    }

        }
    return true;
}


@Get('prime/:number')
checkPrime(@Param('number') number: string): { isPrime: boolean } {
    const num = parseInt(number, 10);
    const result = this.isPrime(num);
    return { isPrime: result };
}
}
