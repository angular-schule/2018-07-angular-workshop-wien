export class Customer {
    constructor(private id: number) {}

    fooBar() {
        var self = this;
        function callback() {
            return self.id * 10;
        }
        console.log(callback());
        
    
        const callback2 = () => this.id * 10;
        console.log(callback2());

        const city = '"Vienna"';
        const text = 'Hello\n' + city + '\n!';
        debugger;
        console.log(text);
        
        const text2 = `Hello ${city}
we are doing Angular!`;
        console.log(text2);
    }
}