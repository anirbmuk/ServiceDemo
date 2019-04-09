export class LocalService {

    private variable = 'Old Local Value';

    public setVariable(variable: string): void {
        this.variable = variable;
    }

    public getVariable(): string {
        return this.variable;
    }

}
