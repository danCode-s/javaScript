        displayCalculation();
        let calculation = localStorage.getItem('calc') || '';


        function updateCalculation(input_1) {
            calculation += input_1;
            saveCalculation();
            displayCalculation();
            
        }
        
        function saveCalculation() {
            localStorage.setItem('calc', calculation);
            displayCalculation();
        }

        function displayCalculation(){
            document.querySelector('.js-toCalculate')
            .innerHTML = `${localStorage.getItem('calc')}`;
        }