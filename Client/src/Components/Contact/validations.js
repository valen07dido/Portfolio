const validations=({name,email,affair,message})=>{
const errors={}

if(/^\s+$/.test(name)){
    errors.e1="El nombre debe contener solo letras."
}
if(!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email)){
    errors.e2="El email debe ser valido."
}
if(affair.length>15){
    errors.e3="Por favor, escriba un asunto mas corto."
}
if(message.length<10){
    errors.e4="El mensaje debe ser mas largo."
}
return errors
}

export default(validations)