export class GlobalService {

    private variable = 'Old Global Value';

    public setVariable(variable: string): void {
        this.variable = variable;
    }

    public getVariable(): string {
        return this.variable;
    }

}
