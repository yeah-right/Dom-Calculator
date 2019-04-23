function main() {
    // let start = document.getElementById('screen').innerHTML = "0";
    document.getElementById('buttons-container').addEventListener("click", function() {
        console.log('button pressed');
        console.log(event.target.id);
        if(event.target.id.length > 1) {
            switch (event.target.id) {
                case 'clear':
                document.getElementById('screen').textContent = "0";
                    break;
            
                default:
                    break;
            }
            console.log(event.target.id);  
        } else {
            let start = document.getElementById('screen').textContent += event.target.id;
        }
        
    });
};


main();