module.exports = {
    async checkNull(values){
        for (var prop in values) {
            if(values[prop] === '' || values[prop] == null || typeof values[prop] == undefined){
                alert('Preencha todos os campos')
                break
            }   
        }
    }
}