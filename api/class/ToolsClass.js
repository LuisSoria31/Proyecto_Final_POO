// Calcular los numeros de la tarjeta
// Calculas los numeros de CVV
// Calcular la fechas de experiacion de la tarjeta
 
class calculatorNumber{
    constructor(
        cardID,
        CVV,
        expirationYear,
    ){
        this.cardID = cardID;
        this.CVV = CVV;
        this.expirationYear = expirationYear;
    }

    async getNumberAccount(){
        try {
            const generateRandomNumbers = () => {
                let randomNumbers = '';
                for (let i = 0; i < 20; i++) {
                    randomNumbers += Math.floor(Math.random() * 10);
                }
                return randomNumbers;
            };
            
            const randomNumbers = generateRandomNumbers();
            console.log(randomNumbers);
    
        } catch (error) {
            throw new Error(`Error al crear el numero de cuenta: ${error}`);
        }
    }

async getNumberCard(){
    try {
        const generateRandomNumbers = () => {
            let randomNumbers = '';
            for (let i = 0; i < 16; i++) {
                randomNumbers += Math.floor(Math.random() * 10);
            }
            return randomNumbers;
        };
        
        const randomNumbers = generateRandomNumbers();
        console.log(randomNumbers);

    } catch (error) {
        throw new Error(`Error al crear el numero de tarjeta: ${error}`);
    }
}

async getCVV(){
    try {
        const generateCVV = () => {
            let randomNumbers = '';
            for (let i = 0; i < 3; i++) {
                randomNumbers += Math.floor(Math.random() * 10);
            }
            return randomNumbers;
        };
        
        const CVV = this.generateCVV();
        console.log(CVV);
    } catch (error) {
        throw new Error(`Error al crear el CVV: ${error}`);
    }
}

async getExpirationYear(){
    try {
        const currentYear = new Date().getFullYear();
        const expirationYear = currentYear + 3;
        
        console.log(expirationYear);
        } catch (error) {
            throw new Error(`Error al crear el año de vencimiento: ${error}`);
        }
}

}